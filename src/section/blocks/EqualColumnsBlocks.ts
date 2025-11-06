import type { Block } from "payload";
import { CallToAction } from "@/blocks/CallToAction/config";
import { Content } from "@/blocks/Content/config";
import { MediaBlock } from "@/blocks/MediaBlock/config";
import { Archive } from "@/blocks/ArchiveBlock/config";
import { FormBlock } from "@/blocks/Form/config";
import { Carousel } from "@/blocks/Carousel/config";
import { Accordion } from "@/blocks/Accordion/config";

export const TwoEqualColumnsSection: Block = {
  slug: "twoEqualColumns",
  labels: {
    singular: "Two Equal Columns",
    plural: "Two Equal Columns",
  },
  imageURL: `<svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="37" height="16" fill="#D2D7E4" class="et-vb-svg-nofill"></rect><rect x="47" y="6" width="37" height="16" fill="#D2D7E4" class="et-vb-svg-nofill"></rect></svg>`,
  imageAltText: "Two Equal Columns Layout",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Columns",
          fields: [
            {
              name: "leftColumn",
              type: "blocks",
              label: "Left Column Content",
              blocks: [CallToAction, Content, MediaBlock, Archive, FormBlock, Carousel, Accordion],
              required: true,
              minRows: 1,
              maxRows: 1,
              admin: {
                initCollapsed: false,
                description: "Add one block for the left column content",
              },
            },
            {
              name: "rightColumn",
              type: "blocks",
              label: "Right Column Content",
              blocks: [CallToAction, Content, MediaBlock, Archive, FormBlock, Carousel, Accordion],
              required: true,
              minRows: 1,
              maxRows: 1,
              admin: {
                initCollapsed: false,
                description: "Add one block for the right column content",
              },
            },
          ],
        },
        {
          label: "Styling",
          fields: [
            {
              name: "backgroundColor",
              type: "select",
              defaultValue: "white",
              options: [
                { label: "White", value: "white" },
                { label: "Gray", value: "gray" },
                { label: "Blue", value: "blue" },
                { label: "Transparent", value: "transparent" },
              ],
            },
            {
              name: "padding",
              type: "select",
              defaultValue: "md",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "gap",
              type: "select",
              defaultValue: "md",
              options: [
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
              ],
            },
            {
              name: "className",
              type: "text",
              label: "Custom CSS Classes",
            },
          ],
        },
      ],
    },
  ],
};

export const ThreeEqualColumnsSection: Block = {
  slug: "threeEqualColumns",
  labels: {
    singular: "Three Equal Columns",
    plural: "Three Equal Columns",
  },
  imageURL: `<svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="23.3333" height="16" fill="#D2D7E4" class="et-vb-svg-nofill"></rect><rect x="33.333" y="6" width="23.3333" height="16" fill="#D2D7E4" class="et-vb-svg-nofill"></rect><rect x="60.667" y="6" width="23.3333" height="16" fill="#D2D7E4" class="et-vb-svg-nofill"></rect></svg>`,
  imageAltText: "Three Equal Columns Layout",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Columns",
          fields: [
            {
              name: "leftColumn",
              type: "blocks",
              label: "Left Column Content",
              blocks: [CallToAction, Content, MediaBlock, Archive, FormBlock, Carousel, Accordion],
              required: true,
              minRows: 1,
              maxRows: 1,
              admin: {
                initCollapsed: false,
                description: "Add one block for the left column content",
              },
            },
            {
              name: "centerColumn",
              type: "blocks",
              label: "Center Column Content",
              blocks: [CallToAction, Content, MediaBlock, Archive, FormBlock, Carousel, Accordion],
              required: true,
              minRows: 1,
              maxRows: 1,
              admin: {
                initCollapsed: false,
                description: "Add one block for the center column content",
              },
            },
            {
              name: "rightColumn",
              type: "blocks",
              label: "Right Column Content",
              blocks: [CallToAction, Content, MediaBlock, Archive, FormBlock, Carousel, Accordion],
              required: true,
              minRows: 1,
              maxRows: 1,
              admin: {
                initCollapsed: false,
                description: "Add one block for the right column content",
              },
            },
          ],
        },
        {
          label: "Styling",
          fields: [
            {
              name: "backgroundColor",
              type: "select",
              defaultValue: "white",
              options: [
                { label: "White", value: "white" },
                { label: "Gray", value: "gray" },
                { label: "Blue", value: "blue" },
                { label: "Transparent", value: "transparent" },
              ],
            },
            {
              name: "padding",
              type: "select",
              defaultValue: "md",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "gap",
              type: "select",
              defaultValue: "md",
              options: [
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
              ],
            },
            {
              name: "className",
              type: "text",
              label: "Custom CSS Classes",
            },
          ],
        },
      ],
    },
  ],
};

export const FourEqualColumnsSection: Block = {
  slug: "fourEqualColumns",
  labels: {
    singular: "Four Equal Columns",
    plural: "Four Equal Columns",
  },
  imageURL: `<svg width="90" height="28" viewBox="0 0 90 28" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="16.5" height="16" fill="#D2D7E4" class="et-vb-svg-nofill"></rect><rect x="26.5" y="6" width="16.5" height="16" fill="#D2D7E4" class="et-vb-svg-nofill"></rect><rect x="47" y="6" width="16.5" height="16" fill="#D2D7E4" class="et-vb-svg-nofill"></rect><rect x="67.5" y="6" width="16.5" height="16" fill="#D2D7E4" class="et-vb-svg-nofill"></rect></svg>`,
  imageAltText: "Four Equal Columns Layout",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Columns",
          fields: [
            {
              name: "columns",
              type: "array",
              minRows: 4,
              maxRows: 4,
              fields: [
                {
                  name: "content",
                  type: "blocks",
                  label: "Column Content",
                  blocks: [CallToAction, Content, MediaBlock, Archive, FormBlock, Carousel, Accordion],
                  required: true,
                  minRows: 1,
                  maxRows: 2,
                  admin: {
                    initCollapsed: false,
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Styling",
          fields: [
            {
              name: "backgroundColor",
              type: "select",
              defaultValue: "white",
              options: [
                { label: "White", value: "white" },
                { label: "Gray", value: "gray" },
                { label: "Blue", value: "blue" },
                { label: "Transparent", value: "transparent" },
              ],
            },
            {
              name: "padding",
              type: "select",
              defaultValue: "md",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "gap",
              type: "select",
              defaultValue: "md",
              options: [
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
              ],
            },
            {
              name: "className",
              type: "text",
              label: "Custom CSS Classes",
            },
          ],
        },
      ],
    },
  ],
};
