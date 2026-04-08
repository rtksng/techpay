import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

export function mountTechPayScene({
  canvasEl,
  laptopShadowEl,
  monitorBackdropEl,
  headphonesBackdropEl,
  heroMotionBackground,
  navbarEl,
  trackAnimation,
  matchMediaInstances,
  enableScrollExperience = true,
  animateHeroContent = true,
}) {
  RectAreaLightUniformsLib.init();

  let scene;
  let camera;
  let renderer;
  let darkPlasticMaterial;
  let cameraMaterial;
  let baseMetalMaterial;
  let logoMaterial;
  let screenMaterial;
  let keyboardMaterial;
  let macGroup;
  let lidGroup;
  let bottomGroup;
  let screenMesh;
  let screenLight;
  let screenImageTexture;
  let laptopMetrics;
  let resizeRefreshFrame = 0;
  let hasInitializedSceneSize = false;
  let screenTexturePan = { startY: 0, endY: 0 };
  let destroyed = false;

  const screenSize = [29.4, 20];
  const screenTextureOverscan = 0.92;
  const screenTextureTopTrim = 0.04;
  const introLaptopScale = 0.78;
  const heroLaptopScale = 1.1;
  const sectionLaptopY = -6;
  const sectionLaptopScale = 0.84;
  const featuresLaptopScale = 0.76;
  const heroLaptopXOffsetPx = 0;
  const sectionLaptopXOffsetPx = 28;
  const heroShadowOpacity = 0.34;
  const featuresShadowOpacity = 0.46;
  const laptopSectionStates = [];
  let featuresScrollState;
  const laptopSections = [
    { trigger: "#qr-section", rotation: -0.12 * Math.PI },
    { trigger: "#how-it-works", rotation: 0.12 * Math.PI },
    { trigger: "#recommendation", rotation: -0.12 * Math.PI },
  ];
  const backdropEls = [monitorBackdropEl, headphonesBackdropEl].filter((el) => el instanceof HTMLElement);
  const animatedBackdropEls = enableScrollExperience ? backdropEls : [];

  initScene();
  createMaterials();

  const modelLoader = new GLTFLoader();
  modelLoader.load(
    "/models/mac-noUv.glb",
    (glb) => {
      if (destroyed) {
        disposeImportedScene(glb.scene);
        return;
      }

      parseModel(glb);
      addScreen();
      addKeyboard();
      measureLaptopMetrics();

      lidGroup.rotation.x = 0.5 * Math.PI;
      macGroup.position.set(0, -50, -10);
      macGroup.rotation.set(0.5 * Math.PI, 0.2 * Math.PI, 0);
      macGroup.scale.setScalar(introLaptopScale);

      playIntro();
      if (enableScrollExperience) {
        setupProblemsScroll();
        setupScrollAnimations();
        setupContentAnimations();
      }
      startFloating();

      renderer.setAnimationLoop(render);
      updateSceneSize();
      window.addEventListener("resize", updateSceneSize);
    },
    undefined,
    () => {},
  );

  return () => {
    destroyed = true;

    if (resizeRefreshFrame) {
      cancelAnimationFrame(resizeRefreshFrame);
    }

    window.removeEventListener("resize", updateSceneSize);

    backdropEls.forEach((backdropEl) => {
      backdropEl.style.opacity = "0";
      backdropEl.style.transform = "translate3d(-9999px, -9999px, 0)";
      backdropEl.style.removeProperty("visibility");
    });

    if (renderer) {
      renderer.setAnimationLoop(null);
      renderer.dispose();
      renderer.forceContextLoss();
    }

    if (screenImageTexture) {
      screenImageTexture.dispose();
    }

    if (keyboardMaterial?.alphaMap) {
      keyboardMaterial.alphaMap.dispose();
    }

    disposeMaterial(screenMaterial);
    disposeMaterial(keyboardMaterial);
    disposeMaterial(darkPlasticMaterial);
    disposeMaterial(cameraMaterial);
    disposeMaterial(baseMetalMaterial);
    disposeMaterial(logoMaterial);
    disposeImportedScene(scene);
  };

  function initScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 10, 1000);
    camera.position.z = 75;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: canvasEl });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));

    const lightHolder = new THREE.Group();
    scene.add(lightHolder);
    const topLight = new THREE.PointLight(0xffffff, 1.4);
    topLight.position.set(0, 18, 56);
    lightHolder.add(topLight);

    const fillLight = new THREE.DirectionalLight(0xf8fbff, 1.05);
    fillLight.position.set(-18, 10, 42);
    lightHolder.add(fillLight);

    const rimLight = new THREE.PointLight(0xdbeafe, 0.55);
    rimLight.position.set(24, 8, 26);
    lightHolder.add(rimLight);

    macGroup = new THREE.Group();
    macGroup.position.z = -10;
    scene.add(macGroup);
    lidGroup = new THREE.Group();
    macGroup.add(lidGroup);
    bottomGroup = new THREE.Group();
    macGroup.add(bottomGroup);
  }

  function createMaterials() {
    const textureLoader = new THREE.TextureLoader();

    screenImageTexture = textureLoader.load("/assets/inner-image-laptop.jpg", (texture) => {
      texture.flipY = false;
      texture.colorSpace = THREE.SRGBColorSpace;
      fitScreenTextureCover(texture);
    });

    screenMaterial = new THREE.MeshBasicMaterial({
      map: screenImageTexture,
      transparent: true,
      opacity: 0,
      side: THREE.BackSide,
    });

    const keyboardTexture = textureLoader.load("/assets/keyboard-overlay.png");
    keyboardMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      alphaMap: keyboardTexture,
      transparent: true,
    });

    darkPlasticMaterial = new THREE.MeshStandardMaterial({ color: 0x05070c, roughness: 0.72, metalness: 0.45 });
    cameraMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
    baseMetalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      emissive: 0xf5f7ff,
      emissiveIntensity: 0.12,
      roughness: 0.2,
      metalness: 0.36,
      clearcoat: 0.8,
      clearcoatRoughness: 0.16,
    });
    logoMaterial = new THREE.MeshStandardMaterial({ color: 0x95a0af, roughness: 0.55, metalness: 0.3 });
  }

  function fitScreenTextureCover(texture) {
    const imageAspectRatio = texture.image.width / texture.image.height;
    const screenAspectRatio = screenSize[0] / screenSize[1];
    let repeatX = 1;
    let repeatY = 1;

    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set(1, 1);
    texture.offset.set(0, 0);

    if (imageAspectRatio > screenAspectRatio) {
      repeatX = screenAspectRatio / imageAspectRatio;
    } else {
      repeatY = imageAspectRatio / screenAspectRatio;
    }

    repeatX *= screenTextureOverscan;
    repeatY *= screenTextureOverscan;
    texture.repeat.set(repeatX, repeatY);
    texture.offset.x = (1 - repeatX) / 2;
    texture.offset.y = Math.min(1 - repeatY, screenTextureTopTrim);
    screenTexturePan = { startY: texture.offset.y, endY: 1 - repeatY };
    texture.needsUpdate = true;
  }

  function parseModel(glb) {
    [...glb.scene.children].forEach((child) => {
      if (child.name === "_top") {
        lidGroup.add(child);
        [...child.children].forEach((mesh) => {
          if (mesh.name === "lid") mesh.material = baseMetalMaterial;
          else if (mesh.name === "logo") mesh.material = logoMaterial;
          else if (mesh.name === "screen-frame") mesh.material = darkPlasticMaterial;
          else if (mesh.name === "camera") mesh.material = cameraMaterial;
        });
      } else if (child.name === "_bottom") {
        bottomGroup.add(child);
        [...child.children].forEach((mesh) => {
          if (mesh.name === "base") mesh.material = baseMetalMaterial;
          else if (["legs", "keyboard", "inner"].includes(mesh.name)) mesh.material = darkPlasticMaterial;
        });
      }
    });
  }

  function addScreen() {
    screenMesh = new THREE.Mesh(new THREE.PlaneGeometry(screenSize[0], screenSize[1]), screenMaterial);
    screenMesh.position.set(0, 10.5, -0.11);
    screenMesh.rotation.set(Math.PI, 0, 0);
    lidGroup.add(screenMesh);

    screenLight = new THREE.RectAreaLight(0xffffff, 0, screenSize[0], screenSize[1]);
    screenLight.position.set(0, 10.5, 0);
    screenLight.rotation.set(Math.PI, 0, 0);
    lidGroup.add(screenLight);

    const darkScreen = screenMesh.clone();
    darkScreen.position.set(0, 10.5, -0.111);
    darkScreen.rotation.set(Math.PI, Math.PI, 0);
    darkScreen.material = darkPlasticMaterial;
    lidGroup.add(darkScreen);
  }

  function addKeyboard() {
    const keyboardKeys = new THREE.Mesh(new THREE.PlaneGeometry(27.7, 11.6), keyboardMaterial);
    keyboardKeys.rotation.set(-0.5 * Math.PI, 0, 0);
    keyboardKeys.position.set(0, 0.045, 7.21);
    bottomGroup.add(keyboardKeys);
  }

  function measureLaptopMetrics() {
    const previousPosition = macGroup.position.clone();
    const previousRotation = macGroup.rotation.clone();
    const previousScale = macGroup.scale.clone();
    const previousLidRotationX = lidGroup.rotation.x;

    macGroup.position.set(0, 0, -10);
    macGroup.rotation.set(0.05 * Math.PI, 0, 0);
    macGroup.scale.setScalar(1);
    lidGroup.rotation.x = -0.2 * Math.PI;
    macGroup.updateMatrixWorld(true);

    const bounds = new THREE.Box3().setFromObject(macGroup);
    const bottomBounds = new THREE.Box3().setFromObject(bottomGroup);
    const bottomSize = new THREE.Vector3();
    const bottomCenter = new THREE.Vector3();
    bottomBounds.getSize(bottomSize);
    bottomBounds.getCenter(bottomCenter);
    laptopMetrics = {
      top: bounds.max.y - macGroup.position.y,
      baseFloorY: bottomBounds.min.y - macGroup.position.y,
      baseCenterZ: bottomCenter.z - macGroup.position.z,
      baseWidth: bottomSize.x,
      baseDepth: bottomSize.z,
    };

    macGroup.position.copy(previousPosition);
    macGroup.rotation.copy(previousRotation);
    macGroup.scale.copy(previousScale);
    lidGroup.rotation.x = previousLidRotationX;
    macGroup.updateMatrixWorld(true);
  }

  function updateSceneSize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const shouldSyncHeroPose = hasInitializedSceneSize;

    if (resizeRefreshFrame) {
      cancelAnimationFrame(resizeRefreshFrame);
    }

    resizeRefreshFrame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      if (shouldSyncHeroPose && window.scrollY < window.innerHeight * 0.35 && laptopMetrics) {
        applyLaptopPose(getHeroLaptopPose());
      }
    });

    hasInitializedSceneSize = true;
  }

  function render() {
    syncLaptopShadow();
    renderer.render(scene, camera);
  }

  function projectWorldPointToScreen(worldPoint) {
    const projected = worldPoint.clone().project(camera);
    return {
      x: (projected.x * 0.5 + 0.5) * window.innerWidth,
      y: (-projected.y * 0.5 + 0.5) * window.innerHeight,
    };
  }

  function syncLaptopShadow() {
    if (!laptopMetrics) {
      return;
    }

    const currentScale = macGroup.scale.x;
    const clampedScale = gsap.utils.clamp(featuresLaptopScale, heroLaptopScale, currentScale);
    const shadowProgress = THREE.MathUtils.clamp(
      (heroLaptopScale - clampedScale) / (heroLaptopScale - featuresLaptopScale),
      0,
      1,
    );
    const shadowOpacity = THREE.MathUtils.lerp(heroShadowOpacity, featuresShadowOpacity, shadowProgress);
    const leftPoint = macGroup.localToWorld(new THREE.Vector3(-laptopMetrics.baseWidth * 0.58, laptopMetrics.baseFloorY - 0.28, laptopMetrics.baseCenterZ));
    const rightPoint = macGroup.localToWorld(new THREE.Vector3(laptopMetrics.baseWidth * 0.58, laptopMetrics.baseFloorY - 0.28, laptopMetrics.baseCenterZ));
    const centerPoint = macGroup.localToWorld(new THREE.Vector3(0, laptopMetrics.baseFloorY - 0.28, laptopMetrics.baseCenterZ + laptopMetrics.baseDepth * 0.06));
    const leftScreen = projectWorldPointToScreen(leftPoint);
    const rightScreen = projectWorldPointToScreen(rightPoint);
    const centerScreen = projectWorldPointToScreen(centerPoint);
    const shadowWidth = Math.abs(rightScreen.x - leftScreen.x) * THREE.MathUtils.lerp(1.08, 1.18, shadowProgress);
    const shadowHeight = shadowWidth * THREE.MathUtils.lerp(0.18, 0.24, shadowProgress);
    const shadowBlur = THREE.MathUtils.lerp(18, 24, shadowProgress);
    const shadowLift = THREE.MathUtils.lerp(8, 14, shadowProgress);

    laptopShadowEl.style.width = `${shadowWidth.toFixed(1)}px`;
    laptopShadowEl.style.height = `${shadowHeight.toFixed(1)}px`;
    laptopShadowEl.style.opacity = shadowOpacity.toFixed(3);
    laptopShadowEl.style.filter = `blur(${shadowBlur.toFixed(1)}px)`;
    laptopShadowEl.style.transform = `translate3d(${centerScreen.x.toFixed(1)}px, ${(centerScreen.y + shadowLift).toFixed(1)}px, 0) translate(-50%, -50%)`;
  }

  function getViewportHeightInWorld() {
    const cameraDistance = Math.abs(camera.position.z - macGroup.position.z);
    const verticalFov = THREE.MathUtils.degToRad(camera.fov);
    return 2 * Math.tan(verticalFov / 2) * cameraDistance;
  }

  function getWorldXForScreenX(screenX) {
    const viewportHeightInWorld = getViewportHeightInWorld();
    const viewportWidthInWorld = viewportHeightInWorld * camera.aspect;
    return (screenX - window.innerWidth / 2) * (viewportWidthInWorld / window.innerWidth);
  }

  function getWorldYForScreenY(screenY) {
    const viewportHeightInWorld = getViewportHeightInWorld();
    return (window.innerHeight / 2 - screenY) * (viewportHeightInWorld / window.innerHeight);
  }

  function getHeroLaptopPose() {
    const heroContent = document.querySelector(".hero-content");
    const heroBounds = heroContent?.getBoundingClientRect();
    const isMobileViewport = window.innerWidth <= 768;
    const viewportWidth = gsap.utils.clamp(isMobileViewport ? 320 : 390, isMobileViewport ? 768 : 1600, window.innerWidth);
    const viewportHeight = gsap.utils.clamp(680, 1080, window.innerHeight);
    const heroScale = isMobileViewport
      ? gsap.utils.mapRange(320, 768, 0.76, 0.88, viewportWidth)
      : gsap.utils.mapRange(390, 1600, 1.04, heroLaptopScale, viewportWidth);
    const pixelPerWorldUnit = window.innerHeight / getViewportHeightInWorld();
    const laptopTopOffset = (laptopMetrics?.top ?? 11.5) * heroScale * pixelPerWorldUnit;
    const heroGap = gsap.utils.mapRange(680, 1080, 52, 28, viewportHeight) + gsap.utils.mapRange(390, 1600, 18, 0, viewportWidth);
    const preferredCenterY = window.innerHeight * 0.68;
    const minimumCenterY = heroBounds ? heroBounds.bottom + heroGap + laptopTopOffset : preferredCenterY;
    const screenCenterY = gsap.utils.clamp(window.innerHeight * 0.58, window.innerHeight * 0.82, Math.max(preferredCenterY, minimumCenterY));

    return {
      x: getWorldXForScreenX(window.innerWidth * 0.5 + heroLaptopXOffsetPx),
      y: getWorldYForScreenY(screenCenterY),
      rotY: 0,
      scale: heroScale,
    };
  }

  function getSectionLaptopPose(sectionConfig) {
    const anchor = document.querySelector(`${sectionConfig.trigger} .laptop-anchor`);
    const block = document.querySelector(`${sectionConfig.trigger} .content-block`);
    const target = anchor || block;

    if (!target || window.innerWidth <= 768) {
      return getHeroLaptopPose();
    }

    const rect = target.getBoundingClientRect();
    const targetCenterX = rect.left + rect.width / 2;
    const screenTargetX = anchor ? targetCenterX : window.innerWidth - targetCenterX;
    return {
      x: getWorldXForScreenX(screenTargetX + sectionLaptopXOffsetPx),
      y: sectionLaptopY,
      rotY: sectionConfig.rotation,
      scale: sectionLaptopScale,
    };
  }

  function interpolatePose(startPose, endPose, progress) {
    return {
      x: gsap.utils.interpolate(startPose.x, endPose.x, progress),
      y: gsap.utils.interpolate(startPose.y, endPose.y, progress),
      rotY: gsap.utils.interpolate(startPose.rotY, endPose.rotY, progress),
      scale: gsap.utils.interpolate(startPose.scale, endPose.scale, progress),
    };
  }

  function applyLaptopPose(pose) {
    macGroup.position.x = pose.x;
    macGroup.position.y = pose.y;
    macGroup.rotation.y = pose.rotY;
    macGroup.scale.setScalar(pose.scale);
  }

  function playIntro() {
    const heroPose = getHeroLaptopPose();
    const heroContent = document.querySelector(".hero-content");
    const timeline = trackAnimation(gsap.timeline());

    if (heroContent && animateHeroContent) {
      gsap.set(heroContent, { autoAlpha: 0, y: 32 });
    } else if (heroContent) {
      gsap.set(heroContent, {
        autoAlpha: 1,
        y: 0,
        clearProps: "visibility,opacity,transform",
      });
    }

    animatedBackdropEls.forEach((backdropEl) => {
      gsap.set(backdropEl, {
        autoAlpha: 0,
        xPercent: 0,
        yPercent: -50,
        x: 0,
        y: 24,
        scale: 0.9,
      });
    });

    timeline
      .to(macGroup.position, { duration: 2.2, x: 0, y: heroPose.y, ease: "power3.out" }, 0)
      .to(macGroup.rotation, { duration: 2.2, x: 0.05 * Math.PI, y: 0, ease: "power3.out" }, 0)
      .to(macGroup.scale, { duration: 2.2, x: heroPose.scale, y: heroPose.scale, z: heroPose.scale, ease: "power3.out" }, 0)
      .fromTo(lidGroup.rotation, { x: 0.5 * Math.PI }, { duration: 1.8, x: -0.2 * Math.PI, ease: "power2.inOut" }, 0.4)
      .to(screenMaterial, { duration: 0.15, opacity: 0.96 }, 1.3)
      .to(screenLight, { duration: 0.15, intensity: 1.5 }, 1.3);

    animatedBackdropEls.forEach((backdropEl) => {
      timeline.to(
        backdropEl,
        {
          duration: 1.8,
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
        },
        0.7,
      );
    });

    if (heroContent && animateHeroContent) {
      timeline.to(heroContent, { duration: 0.95, autoAlpha: 1, y: 0, ease: "power2.out" }, 1.75);
    }
  }

  function primeProblemLineDraw(paths) {
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.dataset.drawLength = String(length);
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = `${length}`;
    });
  }

  function setupProblemsScroll() {
    const section = document.querySelector(".section-problems");
    const stage = section?.querySelector(".problems-stage");
    const track = section?.querySelector(".problems-track");
    const cards = gsap.utils.toArray(".problem-card", section);
    const linesLayer = section?.querySelector(".problems-lines");
    const solidLines = gsap.utils.toArray(".problems-line", section);
    const traceLines = gsap.utils.toArray(".problems-line-trace", section);

    if (!section || !stage || !track || !cards.length) {
      return;
    }

    ScrollTrigger.saveStyles([track, linesLayer, ...cards, ...solidLines, ...traceLines].filter(Boolean));
    const mm = gsap.matchMedia();
    matchMediaInstances.push(mm);

    mm.add("(min-width: 769px)", () => {
      primeProblemLineDraw([...solidLines, ...traceLines]);

      const getDeckMetrics = () => {
        const stageWidth = stage.clientWidth || stage.getBoundingClientRect().width || 1200;
        const stageHeight = stage.clientHeight || stage.getBoundingClientRect().height || 560;
        const cardWidth = cards[0].offsetWidth || 340;
        const edgeGap = Math.max((stageWidth - cardWidth * 3) / 4, 12);
        const maxSpread = Math.max(stageWidth / 2 - cardWidth / 2 - 8, 180);
        const finalSpread = Math.min(cardWidth + edgeGap, maxSpread);
        return {
          stageHeight,
          openingSpread: Math.max(finalSpread * 0.24, 54),
          finalSpread,
          openDrop: stageHeight * 0.045,
          centerNudge: stageHeight * 0.012,
          openLift: stageHeight * 0.03,
          finalRowY: 0,
        };
      };

      gsap.set(track, { clearProps: "display,gap,padding,width" });
      gsap.set(cards, { xPercent: -50, yPercent: -50, transformOrigin: "50% 50%", force3D: true });
      gsap.set(cards[0], { x: -18, y: 18, rotation: -6, scale: 0.96 });
      gsap.set(cards[1], { x: 0, y: 8, rotation: -1.5, scale: 0.985 });
      gsap.set(cards[2], { x: 14, y: -6, rotation: 4.5, scale: 1.01 });
      gsap.set(solidLines, { opacity: 0.14, strokeDashoffset: (_, target) => Number(target.dataset.drawLength || target.getTotalLength()) });
      gsap.set(traceLines, { opacity: 0, strokeDashoffset: (_, target) => Number(target.dataset.drawLength || target.getTotalLength()) });
      if (linesLayer) {
        gsap.set(linesLayer, { xPercent: 0, yPercent: 1.2, scale: 1, opacity: 0.42, force3D: true });
      }

      trackAnimation(
        gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: stage,
            start: "center center",
            pin: stage,
            end: () => "+=" + Math.max(window.innerHeight * 0.95, 720),
            scrub: 0.55,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
          .to(cards[0], { x: () => -getDeckMetrics().openingSpread, y: () => getDeckMetrics().openDrop, rotation: -8, scale: 0.97, duration: 0.18 }, 0)
          .to(cards[1], { y: () => getDeckMetrics().centerNudge, rotation: -0.8, duration: 0.18 }, 0)
          .to(cards[2], { x: () => getDeckMetrics().openingSpread, y: () => -getDeckMetrics().openLift, rotation: 7, scale: 1.02, duration: 0.18 }, 0)
          .to(cards[0], { x: () => -getDeckMetrics().finalSpread, y: () => getDeckMetrics().finalRowY, rotation: 0, scale: 1, duration: 0.46 }, 0.18)
          .to(cards[1], { x: 0, y: () => getDeckMetrics().finalRowY, rotation: 0, scale: 1, duration: 0.46 }, 0.18)
          .to(cards[2], { x: () => getDeckMetrics().finalSpread, y: () => getDeckMetrics().finalRowY, rotation: 0, scale: 1, duration: 0.46 }, 0.18)
          .to(solidLines, { opacity: 0.2, strokeDashoffset: 0, duration: 0.62, stagger: 0.04 }, 0)
          .to(traceLines, { opacity: 1, strokeDashoffset: 0, duration: 0.72, stagger: 0.03 }, 0.12)
          .to(linesLayer, { xPercent: 0, yPercent: -1.2, scale: 1, opacity: 0.96, duration: 0.9 }, 0),
      );
    });
  }

  function setupScrollAnimations() {
    if (navbarEl && window.innerWidth > 768) {
      trackAnimation(
        gsap.fromTo(navbarEl, { "--navbar-max-width": "1220px" }, {
          "--navbar-max-width": "1440px",
          ease: "none",
          scrollTrigger: { trigger: "#hero", start: "top top", end: "65% top", scrub: true },
        }),
      );
    }

    if (heroMotionBackground) {
      trackAnimation(
        gsap.to(heroMotionBackground, {
          opacity: 0,
          yPercent: -8,
          scrollTrigger: { trigger: "#hero", start: "18% top", end: "72% top", scrub: true },
        }),
      );
    }

    animatedBackdropEls.forEach((backdropEl) => {
      trackAnimation(
        gsap.fromTo(
          backdropEl,
          { autoAlpha: 1, yPercent: -50, scale: 1 },
          {
            autoAlpha: 0,
            yPercent: -62,
            scale: 0.96,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: "#hero",
              start: "18% top",
              end: "72% top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        ),
      );
    });

    trackAnimation(
      gsap.fromTo(".hero-content", { autoAlpha: 1, y: 0 }, {
        autoAlpha: 0,
        y: -50,
        immediateRender: false,
        scrollTrigger: { trigger: "#hero", start: "15% top", end: "55% top", scrub: true },
      }),
    );

    laptopSections.forEach((sectionConfig, index) => {
      const previousSection = laptopSections[index - 1];
      const syncLaptopToSection = (progress) => {
        const startPose = previousSection ? getSectionLaptopPose(previousSection) : getHeroLaptopPose();
        const endPose = getSectionLaptopPose(sectionConfig);
        applyLaptopPose(interpolatePose(startPose, endPose, progress));
      };

      trackAnimation(
        ScrollTrigger.create({
          trigger: sectionConfig.trigger,
          start: "top bottom",
          end: "top 55%",
          invalidateOnRefresh: true,
          onUpdate: (self) => syncLaptopToSection(self.progress),
          onEnter: (self) => syncLaptopToSection(self.progress),
          onEnterBack: (self) => syncLaptopToSection(self.progress),
          onLeave: () => applyLaptopPose(getSectionLaptopPose(sectionConfig)),
          onLeaveBack: () => applyLaptopPose(previousSection ? getSectionLaptopPose(previousSection) : getHeroLaptopPose()),
        }),
      );
    });

    trackAnimation(
      ScrollTrigger.create({
        trigger: "#features",
        start: "top 60%",
        end: "top 20%",
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const lastSectionPose = getSectionLaptopPose(laptopSections[laptopSections.length - 1]);
          applyLaptopPose({
            ...lastSectionPose,
            y: gsap.utils.interpolate(lastSectionPose.y, -30, self.progress),
            scale: gsap.utils.interpolate(lastSectionPose.scale, featuresLaptopScale, self.progress),
          });
        },
        onEnter: (self) => {
          const lastSectionPose = getSectionLaptopPose(laptopSections[laptopSections.length - 1]);
          applyLaptopPose({
            ...lastSectionPose,
            y: gsap.utils.interpolate(lastSectionPose.y, -30, self.progress),
            scale: gsap.utils.interpolate(lastSectionPose.scale, featuresLaptopScale, self.progress),
          });
        },
        onEnterBack: (self) => {
          const lastSectionPose = getSectionLaptopPose(laptopSections[laptopSections.length - 1]);
          applyLaptopPose({
            ...lastSectionPose,
            y: gsap.utils.interpolate(lastSectionPose.y, -30, self.progress),
            scale: gsap.utils.interpolate(lastSectionPose.scale, featuresLaptopScale, self.progress),
          });
        },
        onLeave: () => {
          const lastSectionPose = getSectionLaptopPose(laptopSections[laptopSections.length - 1]);
          applyLaptopPose({ ...lastSectionPose, y: -30, scale: featuresLaptopScale });
        },
        onLeaveBack: () => {
          applyLaptopPose(getSectionLaptopPose(laptopSections[laptopSections.length - 1]));
        },
      }),
    );

    if (screenImageTexture) {
      trackAnimation(
        gsap.to(screenImageTexture.offset, {
          y: () => screenTexturePan.endY,
          ease: "none",
          scrollTrigger: {
            trigger: "#how-it-works",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
            invalidateOnRefresh: true,
            immediateRender: false,
          },
        }),
      );
    }
  }

  function setupContentAnimations() {
    const contentPanels = Array.from(document.querySelectorAll(".section:not(.section-hero) .scales-frame, .section:not(.section-hero) .content-block")).filter(
      (panel) => !panel.classList.contains("content-block") || !panel.closest(".scales-frame"),
    );

    contentPanels.forEach((panel) => {
      const fromRight = panel.closest(".laptop-left");
      trackAnimation(
        gsap.from(panel, {
          x: fromRight ? 60 : -60,
          opacity: 0,
          scrollTrigger: { trigger: panel, start: "top 85%", end: "top 55%", scrub: true },
        }),
      );
    });

    document.querySelectorAll(".feature-card").forEach((card, index) => {
      trackAnimation(
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: { trigger: card, start: "top 92%", toggleActions: "play none none reverse" },
        }),
      );
    });
  }

  function startFloating() {
    trackAnimation(
      gsap.to([lidGroup.position, bottomGroup.position], {
        y: "+=1",
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      }),
    );

    animatedBackdropEls.forEach((backdropEl) => {
      trackAnimation(
        gsap.to(backdropEl, {
          y: "+=10",
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        }),
      );
    });
  }
}

function disposeImportedScene(root) {
  if (!(root instanceof THREE.Object3D)) {
    return;
  }

  root.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) {
      return;
    }

    child.geometry?.dispose?.();
    if (Array.isArray(child.material)) {
      child.material.forEach(disposeMaterial);
      return;
    }
    disposeMaterial(child.material);
  });
}

function disposeMaterial(material) {
  if (!material) {
    return;
  }

  material.map?.dispose?.();
  material.alphaMap?.dispose?.();
  material.dispose?.();
}
