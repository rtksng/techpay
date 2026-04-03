"use client";

import { useEffect } from "react";

export default function MenuSetup() {
  useEffect(() => {
    let active = true;
    let cleanup: undefined | (() => void);

    import("@/lib/techpay-menu").then(({ setupMenuOverlay }) => {
      if (!active) return;

      const menuToggleButton = document.querySelector(".menu-toggle");
      const menuCloseButton = document.querySelector(".menu-close");
      const menuOverlay = document.querySelector(".menu-overlay");
      const menuOverlayLinks = document.querySelectorAll(".menu-overlay a");

      const animations: Array<{ kill?: () => void }> = [];
      const trackAnimation = <T,>(animation: T): T => {
        animations.push(animation as { kill?: () => void });
        return animation;
      };

      cleanup = setupMenuOverlay({
        menuToggleButton,
        menuCloseButton,
        menuOverlay,
        menuOverlayLinks,
        trackAnimation,
      });
    });

    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return null;
}
