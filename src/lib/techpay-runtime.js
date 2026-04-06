import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { setupFeatureCardBackgrounds } from "./techpay-feature-dots";
import { mountTechPayScene } from "./techpay-scene";

gsap.registerPlugin(ScrollTrigger);

export function mountTechPayExperience() {
  const canvasEl = document.querySelector("#laptop");
  const laptopShadowEl = document.querySelector(".laptop-shadow");
  const monitorBackdropEl = document.querySelector(".monitor-backdrop");
  const headphonesBackdropEl = document.querySelector(".headphones-backdrop");
  const heroMotionBackground = document.querySelector(".hero-motion-bg");
  const heroContent = document.querySelector(".hero-content");
  const navbarEl = document.querySelector(".navbar");

  const animations = [];
  const matchMediaInstances = [];
  const cleanups = [];

  const trackAnimation = (animation) => {
    animations.push(animation);
    return animation;
  };

  let lenis;
  let lenisTick;
  let resizeObserver;
  let refreshFrame = 0;
  const canMountDesktopScene = typeof window !== "undefined" && window.innerWidth >= 1280;

  const scheduleScrollRefresh = () => {
    if (!lenis) {
      return;
    }

    if (refreshFrame) {
      cancelAnimationFrame(refreshFrame);
    }

    refreshFrame = requestAnimationFrame(() => {
      refreshFrame = 0;
      lenis.resize?.();
      ScrollTrigger.refresh();
    });
  };

  if (
    canvasEl instanceof HTMLCanvasElement &&
    laptopShadowEl instanceof HTMLElement &&
    canMountDesktopScene
  ) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    lenisTick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(lenisTick);
    gsap.ticker.lagSmoothing(0);
    window.addEventListener("resize", scheduleScrollRefresh);

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        scheduleScrollRefresh();
      });

      if (document.body) {
        resizeObserver.observe(document.body);
      }

      if (document.documentElement) {
        resizeObserver.observe(document.documentElement);
      }
    }

    cleanups.push(setupFeatureCardBackgrounds());
    cleanups.push(
      mountTechPayScene({
        canvasEl,
        laptopShadowEl,
        monitorBackdropEl,
        headphonesBackdropEl,
        heroMotionBackground,
        navbarEl,
        trackAnimation,
        matchMediaInstances,
      }),
    );
  } else if (canvasEl instanceof HTMLCanvasElement) {
    cleanups.push(setupFeatureCardBackgrounds());

    if (heroContent instanceof HTMLElement) {
      gsap.set(heroContent, {
        autoAlpha: 1,
        y: 0,
        clearProps: "visibility,opacity,transform",
      });
    }
  }

  return () => {
    document.body.classList.remove("menu-open");
    cleanups.slice().reverse().forEach((cleanup) => cleanup?.());
    matchMediaInstances.forEach((mm) => mm.revert());
    animations.forEach((animation) => animation.kill?.());
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    if (lenisTick) {
      gsap.ticker.remove(lenisTick);
    }
    if (refreshFrame) {
      cancelAnimationFrame(refreshFrame);
    }
    window.removeEventListener("resize", scheduleScrollRefresh);
    resizeObserver?.disconnect();
    lenis?.destroy();
  };
}
