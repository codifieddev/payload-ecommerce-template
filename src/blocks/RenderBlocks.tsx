import { ArchiveBlock } from "@/blocks/ArchiveBlock/Component";
import { CallToActionBlock } from "@/blocks/CallToAction/Component";
import { ContentBlock } from "@/blocks/Content/Component";
import { FormBlock } from "@/blocks/Form/Component";
import { MediaBlock } from "@/blocks/MediaBlock/Component";
import { VisualEditingWrapper } from "@/components/VisualEditingWrapper";

import { HotspotBlock } from "./(ecommerce)/Hotspot/Component";
import { AccordionBlock } from "./Accordion/Component";
import { CarouselBlock } from "./Carousel/Component";

import type { Page } from "@/payload-types";
import { AboutPage } from "./About/config";
import { AboutPageRenderer } from "./About/component";

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
  aboutPage: AboutPageRenderer,
};

export const RenderBlocks = ({ blocks, pageId }: { blocks: Page["layout"][0][]; pageId?: string }) => {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <>
        {blocks.map((block, index) => {
          const { blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                <VisualEditingWrapper
                  key={index}
                  blockType={blockType}
                  blockId={(block as any)?.id}
                  docId={pageId}
                  field={`layout.${index}`}
                  className="block-wrapper"
                >
                  {/* @ts-expect-error - There can type be error, payload team did it like that */}
                  <Block {...block} disableInnerContainer fieldPath={`layout.${index}`} />
                </VisualEditingWrapper>
              );
            }
          }
          return null;
        })}
      </>
    );
  }

  // Return placeholder when no blocks exist
  return (
    <div className="container py-16 text-center text-gray-500">
      <div className="mx-auto max-w-lg">
        <h3 className="mb-4 text-lg font-medium">No content blocks yet</h3>
        <p className="mb-6 text-sm">Add content blocks to this page from the admin panel.</p>
      </div>
    </div>
  );
};
