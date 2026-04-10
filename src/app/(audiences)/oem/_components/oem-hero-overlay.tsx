import {
  BarChart3,
  Globe,
  ShieldCheck,
  Store,
  TrendingUp,
} from "lucide-react";
import AudienceHeroStepOverlay, {
  type AudienceHeroStep,
} from "../../_components/audience-hero-step-overlay";

const oemSteps: AudienceHeroStep[] = [
  {
    title: "Expanded Market Reach",
    Icon: Globe,
    accent: "#ed1d5f",
    x: 168,
    y: 244,
  },
  {
    title: "Higher ASP",
    Icon: TrendingUp,
    accent: "#f26422",
    x: 430,
    y: 176,
  },
  {
    title: "Market Intelligence",
    Icon: BarChart3,
    accent: "#ffffff",
    x: 720,
    y: 228,
  },
  {
    title: "Lower Returns",
    Icon: ShieldCheck,
    accent: "#ed1d5f",
    x: 1010,
    y: 160,
  },
  {
    title: "Brand Consistency",
    Icon: Store,
    accent: "#f26422",
    x: 1272,
    y: 224,
  },
];

const oemPath =
  "M168 244 C 248 244, 328 176, 430 176 S 624 228, 720 228 S 914 160, 1010 160 S 1186 224, 1272 224";

export default function OemHeroOverlay() {
  return <AudienceHeroStepOverlay steps={oemSteps} path={oemPath} />;
}
