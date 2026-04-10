import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const VIEWBOX_WIDTH = 1440;
const VIEWBOX_HEIGHT = 360;
const ICON_OFFSET_Y = 72;
const ICON_BOX_SIZE = 56;
const ICON_GLOW_RADIUS = 34;

export type AudienceHeroStep = {
  title: string;
  Icon: LucideIcon;
  accent: string;
  x: number;
  y: number;
};

type AudienceHeroWaveSegment = {
  accent: string;
  duration: string;
  delay: string;
  dash: string;
};

export default function AudienceHeroStepOverlay({
  steps,
  path,
  topClassName = "top-[56%]",
  waveSegments = [
    { accent: "#ed1d5f", duration: "7.2s", delay: "0s", dash: "0.16 0.84" },
    { accent: "#f26422", duration: "7.2s", delay: "2.5s", dash: "0.12 0.88" },
  ],
}: {
  steps: AudienceHeroStep[];
  path: string;
  topClassName?: string;
  waveSegments?: AudienceHeroWaveSegment[];
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 hidden lg:block",
        topClassName
      )}
    >
      <svg
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <filter id="hero-wave-blur" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="hero-icon-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        <path
          d={path}
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 14"
        />

        {waveSegments.map((segment) => (
          <g key={`${segment.accent}-${segment.delay}`} className="motion-reduce:hidden">
            <path
              d={path}
              pathLength={1}
              fill="none"
              stroke={segment.accent}
              strokeWidth="9"
              strokeLinecap="round"
              filter="url(#hero-wave-blur)"
              opacity="0.16"
              strokeDasharray={segment.dash}
            >
              <animate
                attributeName="stroke-dashoffset"
                values="1;0"
                dur={segment.duration}
                begin={segment.delay}
                repeatCount="indefinite"
              />
            </path>
            <path
              d={path}
              pathLength={1}
              fill="none"
              stroke={segment.accent}
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.92"
              strokeDasharray={segment.dash}
            >
              <animate
                attributeName="stroke-dashoffset"
                values="1;0"
                dur={segment.duration}
                begin={segment.delay}
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}

        {steps.map((step, index) => {
          const iconCenterY = step.y - ICON_OFFSET_Y;
          const iconBottomY = iconCenterY + ICON_BOX_SIZE / 2;

          return (
            <g key={step.title}>
              <circle
                cx={step.x}
                cy={iconCenterY}
                r={ICON_GLOW_RADIUS}
                fill={step.accent}
                opacity="0.14"
                filter="url(#hero-icon-glow)"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.22;0.1"
                  dur={`${6.4 + index * 0.35}s`}
                  begin={`${index * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <line
                x1={step.x}
                y1={iconBottomY}
                x2={step.x}
                y2={step.y - 10}
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx={step.x}
                cy={step.y}
                r="5.5"
                fill="#050505"
                stroke={step.accent}
                strokeWidth="2"
              />
              <foreignObject
                x={step.x - ICON_BOX_SIZE / 2}
                y={iconCenterY - ICON_BOX_SIZE / 2}
                width={ICON_BOX_SIZE}
                height={ICON_BOX_SIZE}
              >
                <div
                  style={{
                    width: `${ICON_BOX_SIZE}px`,
                    height: `${ICON_BOX_SIZE}px`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(0,0,0,0.5)",
                    boxShadow:
                      "0 18px 44px rgba(0,0,0,0.32), inset 0 0 0 1px rgba(255,255,255,0.03)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                  }}
                  title={step.title}
                >
                  <step.Icon
                    style={{
                      width: "24px",
                      height: "24px",
                      color: step.accent,
                    }}
                  />
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
