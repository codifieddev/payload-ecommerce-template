import type { Block } from "payload";

export const Divider: Block = {
  slug: "divider",
  interfaceName: "DividerBlock",
  labels: {
    singular: "➖ Divider",
    plural: "➖ Dividers",
  },
  imageURL:
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b7688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  `),
  imageAltText: "Divider Block - Horizontal separator lines",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "style",
              type: "select",
              label: "Divider Style",
              defaultValue: "solid",
              options: [
                { label: "Solid", value: "solid" },
                { label: "Dashed", value: "dashed" },
                { label: "Dotted", value: "dotted" },
                { label: "Double", value: "double" },
                { label: "Gradient", value: "gradient" },
              ],
            },
            {
              name: "showIcon",
              type: "checkbox",
              label: "Show Icon/Text in Center",
              defaultValue: false,
            },
            {
              name: "centerContent",
              type: "select",
              label: "Center Content Type",
              defaultValue: "icon",
              options: [
                { label: "Icon", value: "icon" },
                { label: "Text", value: "text" },
              ],
              admin: {
                condition: (data) => Boolean(data.showIcon),
              },
            },
            {
              name: "icon",
              type: "select",
              label: "Icon",
              defaultValue: "star",
              options: [
                { label: "Star", value: "star" },
                { label: "Heart", value: "heart" },
                { label: "Diamond", value: "diamond" },
                { label: "Circle", value: "circle" },
                { label: "Square", value: "square" },
              ],
              admin: {
                condition: (data) => data.showIcon && data.centerContent === "icon",
              },
            },
            {
              name: "text",
              type: "text",
              label: "Text",
              admin: {
                condition: (data) => data.showIcon && data.centerContent === "text",
              },
            },
          ],
        },
        {
          label: "Styling",
          fields: [
            {
              name: "width",
              type: "select",
              label: "Width",
              defaultValue: "full",
              options: [
                { label: "Full", value: "full" },
                { label: "75%", value: "3/4" },
                { label: "50%", value: "1/2" },
                { label: "25%", value: "1/4" },
              ],
            },
            {
              name: "alignment",
              type: "select",
              label: "Alignment",
              defaultValue: "center",
              options: [
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ],
            },
            {
              name: "color",
              type: "text",
              label: "Color",
              defaultValue: "#e5e7eb",
              admin: {
                description: "Hex color code",
              },
            },
            {
              name: "thickness",
              type: "select",
              label: "Thickness",
              defaultValue: "1",
              options: [
                { label: "1px", value: "1" },
                { label: "2px", value: "2" },
                { label: "3px", value: "3" },
                { label: "4px", value: "4" },
                { label: "5px", value: "5" },
              ],
            },
            {
              name: "marginTop",
              type: "select",
              label: "Margin Top",
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
              name: "marginBottom",
              type: "select",
              label: "Margin Bottom",
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
              name: "gradientStartColor",
              type: "text",
              label: "Gradient Start Color",
              admin: {
                condition: (data) => data.style === "gradient",
                description: "Hex color code",
              },
            },
            {
              name: "gradientEndColor",
              type: "text",
              label: "Gradient End Color",
              admin: {
                condition: (data) => data.style === "gradient",
                description: "Hex color code",
              },
            },
            {
              name: "animation",
              type: "select",
              label: "Entry Animation",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Fade In", value: "fadeIn" },
                { label: "Expand", value: "expand" },
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
