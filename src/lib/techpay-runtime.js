import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { setupFeatureCardBackgrounds } from "./techpay-feature-dots";
import { setupMenuOverlay } from "./techpay-menu";
import { mountTechPayScene } from "./techpay-scene";

gsap.registerPlugin(ScrollTrigger);

export function mountTechPayExperience() {
  const canvasEl = document.querySelector("#laptop");
  const laptopShadowEl = document.querySelector(".laptop-shadow");
  const monitorBackdropEl = document.querySelector(".monitor-backdrop");
  const headphonesBackdropEl = document.querySelector(".headphones-backdrop");
  const heroMotionBackground = document.querySelector(".hero-motion-bg");
  const navbarEl = document.querySelector(".navbar");
  const menuToggleButton = document.querySelector(".menu-toggle");
  const menuCloseButton = document.querySelector(".menu-close");
  const menuOverlay = document.querySelector(".menu-overlay");
  const menuOverlayLinks = document.querySelectorAll(".menu-overlay a");

  const animations = [];
  const matchMediaInstances = [];
  const cleanups = [];

  const trackAnimation = (animation) => {
    animations.push(animation);
    return animation;
  };

  cleanups.push(
    setupMenuOverlay({
      menuToggleButton,
      menuCloseButton,
      menuOverlay,
      menuOverlayLinks,
      trackAnimation,
    }),
  );

  let lenis;
  let lenisTick;

  if (canvasEl instanceof HTMLCanvasElement && laptopShadowEl instanceof HTMLElement) {
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
    lenis?.destroy();
  };
}
