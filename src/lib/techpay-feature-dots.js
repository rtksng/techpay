export function setupFeatureCardBackgrounds() {
  const cards = Array.from(document.querySelectorAll(".feature-card"));

  if (!cards.length) {
    return () => {};
  }

  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let animationFrame = 0;
  let lastPaintTime = 0;
  const targetFrameMs = 1000 / 28;

  const createSprite = (size, drawFn) => {
    const sprite = document.createElement("canvas");
    sprite.width = size;
    sprite.height = size;
    const spriteContext = sprite.getContext("2d");

    if (!spriteContext) {
      return null;
    }

    drawFn(spriteContext, size);
    return sprite;
  };

  const createDotSprites = (dotColor, glowColor) => ({
    base: createSprite(24, (spriteContext, size) => {
      spriteContext.fillStyle = dotColor;
      spriteContext.beginPath();
      spriteContext.arc(size / 2, size / 2, 5.5, 0, Math.PI * 2);
      spriteContext.fill();
    }),
    glow: createSprite(72, (spriteContext, size) => {
      const gradient = spriteContext.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2,
      );
      gradient.addColorStop(0, glowColor);
      gradient.addColorStop(0.35, glowColor);
      gradient.addColorStop(1, "transparent");
      spriteContext.fillStyle = gradient;
      spriteContext.fillRect(0, 0, size, size);
    }),
  });

  const instances = cards
    .map((card) => {
      const canvas = card.querySelector(".feature-card-dots");

      if (!(canvas instanceof HTMLCanvasElement)) {
        return null;
      }

      const context = canvas.getContext("2d", { alpha: true, desynchronized: true });
      if (!context) {
        return null;
      }

      const instance = {
        card,
        canvas,
        context,
        width: 0,
        height: 0,
        dotColor: "rgba(226, 232, 240, 0.2)",
        glowColor: "rgba(237, 29, 95, 0.62)",
        dots: [],
        visible: true,
        sprites: null,
      };

      const syncColors = () => {
        const styles = getComputedStyle(card);
        instance.dotColor = styles.getPropertyValue("--feature-dot-color").trim() || instance.dotColor;
        instance.glowColor = styles.getPropertyValue("--feature-dot-glow").trim() || instance.glowColor;
        instance.sprites = createDotSprites(instance.dotColor, instance.glowColor);
      };

      const regenerateDots = () => {
        instance.dots = [];
        const gap = instance.width > 320 ? 18 : 16;
        const cols = Math.ceil(instance.width / gap) + 3;
        const rows = Math.ceil(instance.height / gap) + 3;

        for (let row = -1; row < rows; row += 1) {
          for (let col = -1; col < cols; col += 1) {
            const x = col * gap + (row % 2 === 0 ? 0 : gap * 0.5);
            const y = row * gap;
            instance.dots.push({
              x,
              y,
              radius: 1 + Math.random() * 0.35,
              phase: Math.random() * Math.PI * 2,
              speed: 0.4 + Math.random() * 1.1,
            });
          }
        }
      };

      const resize = () => {
        const rect = card.getBoundingClientRect();
        const width = Math.max(1, Math.floor(rect.width));
        const height = Math.max(1, Math.floor(rect.height));
        const dpr = Math.min(window.devicePixelRatio || 1, 1.35);

        instance.width = width;
        instance.height = height;
        canvas.width = Math.max(1, Math.floor(width * dpr));
        canvas.height = Math.max(1, Math.floor(height * dpr));
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        context.setTransform(dpr, 0, 0, dpr, 0, 0);

        syncColors();
        regenerateDots();
      };

      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(card);

      const visibilityObserver = new IntersectionObserver(
        (entries) => {
          instance.visible = entries[0]?.isIntersecting ?? true;
        },
        { threshold: 0.1 },
      );
      visibilityObserver.observe(card);

      resize();

      instance.cleanup = () => {
        resizeObserver.disconnect();
        visibilityObserver.disconnect();
      };

      return instance;
    })
    .filter(Boolean);

  if (!instances.length) {
    return () => {};
  }

  const drawDots = (instance, now, animated) => {
    const { context, width, height, dots, sprites } = instance;

    if (!sprites?.base || !sprites?.glow) {
      return;
    }

    context.clearRect(0, 0, width, height);

    for (let i = 0; i < dots.length; i += 1) {
      const dot = dots[i];
      const pulse = animated
        ? 0.22 + 0.6 * ((Math.sin(now * 0.0012 * dot.speed + dot.phase) + 1) * 0.5)
        : 0.46;

      const baseSize = dot.radius * 4.1;
      context.globalAlpha = pulse * 0.88;
      context.drawImage(
        sprites.base,
        dot.x - baseSize / 2,
        dot.y - baseSize / 2,
        baseSize,
        baseSize,
      );

      if (animated && pulse > 0.7) {
        const glowStrength = (pulse - 0.7) / 0.12;
        const glowSize = dot.radius * 8;
        context.globalAlpha = Math.min(glowStrength * 0.16, 0.09);
        context.drawImage(
          sprites.glow,
          dot.x - glowSize / 2,
          dot.y - glowSize / 2,
          glowSize,
          glowSize,
        );
      }
    }

    context.globalAlpha = 1;
  };

  const drawStatic = () => {
    instances.forEach((instance) => drawDots(instance, performance.now(), false));
  };

  const animate = (now) => {
    if (now - lastPaintTime < targetFrameMs) {
      animationFrame = requestAnimationFrame(animate);
      return;
    }

    lastPaintTime = now;
    instances.forEach((instance) => {
      if (instance.visible) {
        drawDots(instance, now, true);
      }
    });
    animationFrame = requestAnimationFrame(animate);
  };

  const syncAnimationMode = () => {
    if (reducedMotionQuery.matches) {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
      drawStatic();
      return;
    }

    if (!animationFrame) {
      lastPaintTime = 0;
      animationFrame = requestAnimationFrame(animate);
    }
  };

  syncAnimationMode();
  reducedMotionQuery.addEventListener("change", syncAnimationMode);

  return () => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
    reducedMotionQuery.removeEventListener("change", syncAnimationMode);
    instances.forEach((instance) => instance.cleanup?.());
  };
}