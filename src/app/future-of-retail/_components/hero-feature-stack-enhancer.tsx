"use client";

import { useEffect } from "react";

const CARD_SELECTOR = "[data-hero-feature-card]";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

function smoothstep(value: number) {
  return value * value * (3 - 2 * value);
}

function applyCardState(card: HTMLElement, progress: number) {
  const easedProgress = smoothstep(progress);

  card.style.setProperty("--feature-card-y", `${(-18 * easedProgress).toFixed(2)}px`);
  card.style.setProperty("--feature-card-scale", (1 - 0.055 * easedProgress).toFixed(4));
  card.style.setProperty("--feature-card-blur", `${(7 * easedProgress).toFixed(2)}px`);
  card.style.setProperty("--feature-card-opacity", (1 - 0.16 * easedProgress).toFixed(3));
}

function resetCardState(card: HTMLElement) {
  card.style.removeProperty("--feature-card-y");
  card.style.removeProperty("--feature-card-scale");
  card.style.removeProperty("--feature-card-blur");
  card.style.removeProperty("--feature-card-opacity");
}

export default function HeroFeatureStackEnhancer() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(CARD_SELECTOR));

    if (cards.length < 2) {
      return;
    }

    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let animationFrame = 0;

    const updateCards = () => {
      animationFrame = 0;

      if (reducedMotion.matches) {
        cards.forEach(resetCardState);
        return;
      }

      cards.forEach((card, index) => {
        const nextCard = cards[index + 1];

        if (!nextCard) {
          resetCardState(card);
          return;
        }

        const cardRect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();
        const overlap = cardRect.bottom - nextRect.top;
        const overlapRange = Math.max(
          180,
          Math.min(cardRect.height * 0.42, window.innerHeight * 0.36)
        );

        applyCardState(card, clamp(overlap / overlapRange));
      });
    };

    const scheduleUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateCards);
    };

    const resizeObserver = new ResizeObserver(scheduleUpdate);

    cards.forEach((card) => resizeObserver.observe(card));
    updateCards();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);
      cards.forEach(resetCardState);
    };
  }, []);

  return null;
}
