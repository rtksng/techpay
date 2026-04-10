import {
  Globe,
  Scaling,
  TrendingUp,
  Zap,
} from "lucide-react";
import AudienceHeroStepOverlay, {
  type AudienceHeroStep,
} from "../../_components/audience-hero-step-overlay";

const distributorSteps: AudienceHeroStep[] = [
  {
    title: "Expanded Market Reach",
    Icon: Globe,
    accent: "#ed1d5f",
    x: 216,
    y: 228,
  },
  {
    title: "Higher Revenue",
    Icon: TrendingUp,
    accent: "#f26422",
    x: 528,
    y: 166,
  },
  {
    title: "Scalable Growth",
    Icon: Scaling,
    accent: "#ffffff",
    x: 878,
    y: 220,
  },
  {
    title: "Enhanced Efficiency",
    Icon: Zap,
    accent: "#f26422",
    x: 1218,
    y: 170,
  },
];

const distributorPath =
  "M216 228 C 320 228, 420 166, 528 166 S 760 220, 878 220 S 1102 170, 1218 170";

export default function DistributorsHeroOverlay() {
  return (
    <AudienceHeroStepOverlay
      steps={distributorSteps}
      path={distributorPath}
      waveSegments={[
        { accent: "#ed1d5f", duration: "7.1s", delay: "0s", dash: "0.16 0.84" },
        { accent: "#f26422", duration: "7.1s", delay: "2.2s", dash: "0.12 0.88" },
      ]}
    />
  );
}
