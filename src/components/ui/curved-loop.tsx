"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { cn } from "@/lib/utils";

type CurvedLoopProps = {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
};

export default function CurvedLoop({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 400,
  direction = "left",
  interactive = true,
}: CurvedLoopProps) {
  const text = useMemo(() => {
    const trimmed = marqueeText.replace(/\s+$/, "");
    return `${trimmed}\u00A0`;
  }, [marqueeText]);

  const measureRef = useRef<SVGTextElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);
  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef<"left" | "right">(direction);
  const velRef = useRef(0);
  const offsetRef = useRef(0);

  const [spacing, setSpacing] = useState(0);

  const uid = useId();
  const pathId = useMemo(() => `curve-${uid.replace(/:/g, "")}`, [uid]);
  const pathD = useMemo(
    () => `M-100,40 Q500,${40 + curveAmount} 1540,40`,
    [curveAmount]
  );

  const totalText = useMemo(() => {
    if (!spacing) {
      return text;
    }

    return Array(Math.ceil(1800 / spacing) + 2)
      .fill(text)
      .join("");
  }, [spacing, text]);

  const ready = spacing > 0;

  useEffect(() => {
    dirRef.current = direction;
  }, [direction]);

  useEffect(() => {
    const measure = () => {
      const nextSpacing = measureRef.current?.getComputedTextLength() ?? 0;

      if (nextSpacing <= 0) {
        return;
      }

      setSpacing((currentSpacing) =>
        Math.abs(currentSpacing - nextSpacing) < 0.5
          ? currentSpacing
          : nextSpacing
      );
    };

    measure();

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text, className, curveAmount]);

  useEffect(() => {
    if (!spacing || !textPathRef.current) {
      return;
    }

    const initialOffset = -spacing;
    offsetRef.current = initialOffset;
    textPathRef.current.setAttribute("startOffset", `${initialOffset}px`);
  }, [spacing, totalText]);

  useEffect(() => {
    if (!spacing || !ready) {
      return;
    }

    let frame = 0;

    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;
        let nextOffset = offsetRef.current + delta;

        if (nextOffset <= -spacing) {
          nextOffset += spacing;
        }

        if (nextOffset > 0) {
          nextOffset -= spacing;
        }

        offsetRef.current = nextOffset;
        textPathRef.current.setAttribute("startOffset", `${nextOffset}px`);
      }

      frame = window.requestAnimationFrame(step);
    };

    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [ready, spacing, speed]);

  const updateOffset = (nextOffset: number) => {
    if (!spacing || !textPathRef.current) {
      return;
    }

    let wrappedOffset = nextOffset;

    if (wrappedOffset <= -spacing) {
      wrappedOffset += spacing;
    }

    if (wrappedOffset > 0) {
      wrappedOffset -= spacing;
    }

    offsetRef.current = wrappedOffset;
    textPathRef.current.setAttribute("startOffset", `${wrappedOffset}px`);
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!interactive || !ready) {
      return;
    }

    dragRef.current = true;
    lastXRef.current = event.clientX;
    velRef.current = 0;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!interactive || !dragRef.current) {
      return;
    }

    const deltaX = event.clientX - lastXRef.current;
    lastXRef.current = event.clientX;
    velRef.current = deltaX;
    updateOffset(offsetRef.current + deltaX);
  };

  const endDrag = (event?: ReactPointerEvent<HTMLDivElement>) => {
    if (!interactive || !dragRef.current) {
      return;
    }

    dragRef.current = false;

    if (
      event &&
      event.currentTarget.hasPointerCapture?.(event.pointerId)
    ) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (velRef.current !== 0) {
      dirRef.current = velRef.current > 0 ? "right" : "left";
    }
  };

  const cursorStyle = interactive
    ? dragRef.current
      ? "grabbing"
      : "grab"
    : "auto";

  return (
    <div
      className="flex w-full items-center justify-center"
      style={{
        visibility: ready ? "visible" : "hidden",
        cursor: cursorStyle,
        touchAction: interactive ? "none" : "auto",
      }}
      onPointerCancel={endDrag}
      onPointerDown={onPointerDown}
      onPointerLeave={endDrag}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
    >
      <svg
        className="block aspect-[100/12] w-full select-none overflow-visible text-[6rem] font-bold uppercase leading-none"
        viewBox="0 0 1440 120"
      >
        <text
          ref={measureRef}
          xmlSpace="preserve"
          className={cn(className)}
          style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
        >
          {text}
        </text>

        <defs>
          <path id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>

        {ready && (
          <text xmlSpace="preserve" className={cn(className)}>
            <textPath
              ref={textPathRef}
              href={`#${pathId}`}
              startOffset={`${offsetRef.current}px`}
              xmlSpace="preserve"
            >
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
}
