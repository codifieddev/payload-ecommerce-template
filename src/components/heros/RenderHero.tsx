import { HighImpactHero } from "@/components/heros/HighImpact";
import { LowImpactHero } from "@/components/heros/LowImpact";
import { MediumImpactHero } from "@/components/heros/MediumImpact";

import type { Page } from "@/payload-types";
import { VideoModalHero } from "./VideoModal";

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
  videoModal: VideoModalHero
};

export const RenderHero = (props: Page["hero"]) => {
  const { type } = props || {};
  console.log(type)

  if (!type || type === "none") return null;

  const HeroToRender = heroes[type];

  if (!HeroToRender) return null;

  return <HeroToRender {...props} />;
};
