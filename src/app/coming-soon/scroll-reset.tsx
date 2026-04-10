"use client";

import { useLayoutEffect } from "react";

export default function ScrollReset() {
  useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();
    const frame = requestAnimationFrame(resetScroll);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
