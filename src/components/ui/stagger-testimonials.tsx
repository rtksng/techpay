"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

export type StaggerTestimonialItem = {
  id: string;
  testimonial: string;
  by: string;
  imgSrc: string;
};

type StaggerTestimonialsProps = {
  items: StaggerTestimonialItem[];
  className?: string;
};

type TestimonialCardProps = {
  position: number;
  testimonial: StaggerTestimonialItem;
  cardWidth: number;
  cardHeight: number;
  onSelect: () => void;
};

function getRelativePosition(
  index: number,
  activeIndex: number,
  total: number
) {
  let offset = index - activeIndex;
  const half = Math.floor(total / 2);

  if (offset > half) {
    offset -= total;
  }

  if (offset < -half) {
    offset += total;
  }

  return offset;
}

function TestimonialCard({
  position,
  testimonial,
  cardWidth,
  cardHeight,
  onSelect,
}: TestimonialCardProps) {
  const isCenter = position === 0;
  const absPosition = Math.abs(position);
  const spread = cardWidth / 1.45;
  const direction = position === 0 ? 0 : position > 0 ? 1 : -1;
  const scale = isCenter ? 1 : Math.max(0.86, 0.96 - absPosition * 0.04);
  const yOffset = isCenter ? -20 : absPosition % 2 === 0 ? -10 : 14;
  const rotation = isCenter ? 0 : direction * (absPosition === 1 ? 2.8 : 1.8);
  const zIndex = 20 - absPosition;

  return (
    <article
      aria-current={isCenter}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer overflow-hidden border p-6 text-left transition-[transform,box-shadow,opacity,border-color,background-color,color] duration-500 ease-in-out md:p-8",
        isCenter
          ? "border-white bg-white text-[#111111]"
          : "border-slate-200 bg-[#eceff3] text-slate-900 hover:border-slate-300"
      )}
      onClick={onSelect}
      style={{
        width: cardWidth,
        height: cardHeight,
        zIndex,
        opacity: 1,
        clipPath:
          "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)",
        transform: `translate(-50%, -50%) translateX(${spread * position}px) translateY(${yOffset}px) rotate(${rotation}deg) scale(${scale})`,
        boxShadow: isCenter
          ? "0px 16px 60px rgba(15, 23, 42, 0.16)"
          : "0px 0px 0px 1px rgba(15, 23, 42, 0.08)",
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-slate-200" : "bg-slate-300"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />

      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(",")[0]}
        loading="lazy"
        className={cn(
          "mb-5 h-14 w-14 object-cover object-top",
          isCenter ? "bg-slate-100" : "bg-white"
        )}
        style={{
          boxShadow: isCenter
            ? "3px 3px 0px rgba(17,17,17,0.08)"
            : "3px 3px 0px rgba(15,23,42,0.08)",
        }}
      />

      <h3
        className={cn(
          "pr-2 text-[1rem] font-medium leading-[1.45] md:text-[1.15rem]",
          isCenter ? "text-[#111111]" : "text-slate-900"
        )}
      >
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>

      <p
        className={cn(
          "absolute bottom-6 left-6 right-6 mt-2 text-[0.78rem] italic md:bottom-8 md:left-8 md:right-8 md:text-sm",
          isCenter ? "text-[#4b4b4b]" : "text-slate-500"
        )}
      >
        - {testimonial.by}
      </p>
    </article>
  );
}

export function StaggerTestimonials({
  items,
  className,
}: StaggerTestimonialsProps) {
  const [cardWidth, setCardWidth] = useState(365);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1280) {
        setCardWidth(365);
        return;
      }

      if (window.innerWidth >= 768) {
        setCardWidth(320);
        return;
      }

      setCardWidth(270);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleMove = (steps: number) => {
    if (!items.length) {
      return;
    }

    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex + steps;
      return ((nextIndex % items.length) + items.length) % items.length;
    });
  };

  const cardHeight = Math.round(cardWidth * 1.24);

  useEffect(() => {
    if (!items.length || isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      handleMove(1);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [items.length, isPaused]);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[#f7f7fb] pb-20 pt-6",
        className
      )}
      style={{ height: cardHeight + 170 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {items.map((testimonial, index) => {
        const position = getRelativePosition(index, activeIndex, items.length);

        return (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            position={position}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            onSelect={() => setActiveIndex(index)}
          />
        );
      })}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 md:bottom-6">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition-colors hover:border-slate-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 md:h-11 md:w-11"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition-colors hover:border-slate-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 md:h-11 md:w-11"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
