"use client";

import { useEffect } from "react";

export default function TechPayExperience() {
  useEffect(() => {
    let active = true;
    let cleanup: undefined | (() => void);

    import("@/lib/techpay-runtime").then(({ mountTechPayExperience }) => {
      if (!active) {
        return;
      }

      cleanup = mountTechPayExperience();
    });

    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return null;
}
