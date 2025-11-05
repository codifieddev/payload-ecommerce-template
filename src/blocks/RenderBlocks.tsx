import { ArchiveBlock } from "@/blocks/ArchiveBlock/Component";
import { CallToActionBlock } from "@/blocks/CallToAction/Component";
import { ContentBlock } from "@/blocks/Content/Component";
import { FormBlock } from "@/blocks/Form/Component";
import { MediaBlock } from "@/blocks/MediaBlock/Component";

import { HotspotBlock } from "./(ecommerce)/Hotspot/Component";
import { AccordionBlock } from "./Accordion/Component";
import { CarouselBlock } from "./Carousel/Component";

import type { Page } from "@/payload-types";
import LayoutBlockRenderer from "./Container/component";

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  // code: CodeBlock,
  carousel: CarouselBlock,
  mediaBlock: MediaBlock,
  accordion: AccordionBlock,
  hotspotZone: HotspotBlock,
  layoutBlock: LayoutBlockRenderer,
};

export const RenderBlocks = ({ blocks }: { blocks: Page["layout"][0][] }) => {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;
  console.log(blocks);

  if (hasBlocks) {
    return (
      <>
        {blocks.map((block, index) => {
          const { blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              // LayoutBlockRenderer expects a 'block' prop, others expect spread props
              if (blockType === "layoutBlock") {
                return (
                  <div key={index}>
                    <Block block={block} />
                  </div>
                );
              }
              return (
                <div key={index}>
                  <Block {...block} disableInnerContainer />
                </div>
              );
            }
          }
          return null;
        })}
      </>
    );
  }

  return null;
};
