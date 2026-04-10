"use client";

import { useEffect } from "react";

export default function LenisProvider() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let destroyLenis: (() => void) | undefined;
    let isDisposed = false;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncLenis = async () => {
      destroyLenis?.();
      destroyLenis = undefined;

      if (mediaQuery.matches) {
        return;
      }

      const { default: Lenis } = await import("lenis");

      if (isDisposed || mediaQuery.matches) {
        return;
      }

      const lenis = new Lenis({
        autoRaf: true,
        anchors: true,
        lerp: 0.08,
        smoothWheel: true,
        stopInertiaOnNavigate: true,
      });

      destroyLenis = () => {
        lenis.destroy();
      };
    };

    void syncLenis();

    const handleChange = () => {
      void syncLenis();
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      isDisposed = true;

      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }

      destroyLenis?.();
    };
  }, []);

  return null;
}
