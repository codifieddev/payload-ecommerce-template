import type { Block } from "payload";

export const Text: Block = {
  slug: "text",
  interfaceName: "TextBlock",
  labels: {
    singular: "📝 Text",
    plural: "📝 Text Blocks",
  },
  imageURL:
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b7688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10,9 9,9 8,9"/>
    </svg>
  `),
  imageAltText: "Text Block - Simple text content",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "text",
              type: "textarea",
              label: "Text Content",
              required: true,
              admin: {
                rows: 5,
              },
            },
          ],
        },
        {
          label: "Styling",
          fields: [
            {
              name: "fontSize",
              type: "select",
              label: "Font Size",
              defaultValue: "base",
              options: [
                { label: "Extra Small", value: "xs" },
                { label: "Small", value: "sm" },
                { label: "Base", value: "base" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
                { label: "2XL", value: "2xl" },
                { label: "3XL", value: "3xl" },
              ],
            },
            {
              name: "fontWeight",
              type: "select",
              label: "Font Weight",
              defaultValue: "normal",
              options: [
                { label: "Light", value: "light" },
                { label: "Normal", value: "normal" },
                { label: "Medium", value: "medium" },
                { label: "Semibold", value: "semibold" },
                { label: "Bold", value: "bold" },
              ],
            },
            {
              name: "textAlign",
              type: "select",
              label: "Text Alignment",
              defaultValue: "left",
              options: [
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
                { label: "Justify", value: "justify" },
              ],
            },
            {
              name: "textColor",
              type: "text",
              label: "Text Color",
              admin: {
                description: "Hex color code (e.g., #000000)",
              },
            },
            {
              name: "backgroundColor",
              type: "text",
              label: "Background Color",
              admin: {
                description: "Hex color code",
              },
            },
            {
              name: "lineHeight",
              type: "select",
              label: "Line Height",
              defaultValue: "normal",
              options: [
                { label: "Tight", value: "tight" },
                { label: "Normal", value: "normal" },
                { label: "Relaxed", value: "relaxed" },
                { label: "Loose", value: "loose" },
              ],
            },
            {
              name: "letterSpacing",
              type: "select",
              label: "Letter Spacing",
              defaultValue: "normal",
              options: [
                { label: "Tighter", value: "tighter" },
                { label: "Tight", value: "tight" },
                { label: "Normal", value: "normal" },
                { label: "Wide", value: "wide" },
                { label: "Wider", value: "wider" },
              ],
            },
            {
              name: "padding",
              type: "select",
              label: "Padding",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "margin",
              type: "select",
              label: "Margin",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "textTransform",
              type: "select",
              label: "Text Transform",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Uppercase", value: "uppercase" },
                { label: "Lowercase", value: "lowercase" },
                { label: "Capitalize", value: "capitalize" },
              ],
            },
            {
              name: "textDecoration",
              type: "select",
              label: "Text Decoration",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Underline", value: "underline" },
                { label: "Line Through", value: "line-through" },
              ],
            },
            {
              name: "fontStyle",
              type: "select",
              label: "Font Style",
              defaultValue: "normal",
              options: [
                { label: "Normal", value: "normal" },
                { label: "Italic", value: "italic" },
              ],
            },
            {
              name: "maxWidth",
              type: "select",
              label: "Max Width",
              defaultValue: "full",
              options: [
                { label: "Full", value: "full" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "animation",
              type: "select",
              label: "Entry Animation",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Fade In", value: "fadeIn" },
                { label: "Slide Up", value: "slideUp" },
                { label: "Slide Left", value: "slideLeft" },
                { label: "Slide Right", value: "slideRight" },
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
