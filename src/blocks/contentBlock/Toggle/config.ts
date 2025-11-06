import type { Block } from "payload";

export const Toggle: Block = {
  slug: "toggle",
  interfaceName: "ToggleBlock",
  labels: {
    singular: "🔽 Toggle",
    plural: "🔽 Toggles",
  },
  imageURL:
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b7688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="1" y="3" width="15" height="13"/>
      <path d="m16 8 4 4-4 4"/>
      <path d="M4 7h8"/>
      <path d="M4 10h6"/>
      <path d="M4 13h4"/>
    </svg>
  `),
  imageAltText: "Toggle Block - Expandable/collapsible content",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "title",
              type: "text",
              label: "Title",
              required: true,
            },
            {
              name: "content",
              type: "richText",
              label: "Content",
              required: true,
            },
            {
              name: "defaultOpen",
              type: "checkbox",
              label: "Open by Default",
              defaultValue: false,
            },
          ],
        },
        {
          label: "Styling",
          fields: [
            {
              name: "titleSize",
              type: "select",
              label: "Title Size",
              defaultValue: "lg",
              options: [
                { label: "Small", value: "sm" },
                { label: "Base", value: "base" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "titleColor",
              type: "text",
              label: "Title Color",
              admin: {
                description: "Hex color code",
              },
            },
            {
              name: "contentColor",
              type: "text",
              label: "Content Color",
              admin: {
                description: "Hex color code",
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
              name: "borderColor",
              type: "text",
              label: "Border Color",
              admin: {
                description: "Hex color code",
              },
            },
            {
              name: "iconStyle",
              type: "select",
              label: "Icon Style",
              defaultValue: "plus",
              options: [
                { label: "Plus/Minus", value: "plus" },
                { label: "Chevron", value: "chevron" },
                { label: "Arrow", value: "arrow" },
              ],
            },
            {
              name: "iconPosition",
              type: "select",
              label: "Icon Position",
              defaultValue: "right",
              options: [
                { label: "Left", value: "left" },
                { label: "Right", value: "right" },
              ],
            },
            {
              name: "borderRadius",
              type: "select",
              label: "Border Radius",
              defaultValue: "md",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
              ],
            },
            {
              name: "padding",
              type: "select",
              label: "Padding",
              defaultValue: "md",
              options: [
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
              defaultValue: "sm",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
              ],
            },
            {
              name: "shadow",
              type: "select",
              label: "Shadow",
              defaultValue: "sm",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
              ],
            },
            {
              name: "hoverEffect",
              type: "checkbox",
              label: "Highlight on Hover",
              defaultValue: true,
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
