import type { Block } from "payload";

export const ProgressBar: Block = {
  slug: "progressBar",
  interfaceName: "ProgressBarBlock",
  labels: {
    singular: "📊 Progress Bar",
    plural: "📊 Progress Bars",
  },
  imageURL:
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b7688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="1" x2="12" y2="3"/>
      <path d="m12 8-4 4 4 4"/>
      <path d="M16 12H4"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
    </svg>
  `),
  imageAltText: "Progress Bar Block - Animated progress indicators",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "label",
              type: "text",
              label: "Label",
              required: true,
            },
            {
              name: "percentage",
              type: "number",
              label: "Percentage",
              required: true,
              min: 0,
              max: 100,
            },
            {
              name: "showPercentage",
              type: "checkbox",
              label: "Show Percentage",
              defaultValue: true,
            },
            {
              name: "animateOnScroll",
              type: "checkbox",
              label: "Animate When Scrolled Into View",
              defaultValue: true,
            },
          ],
        },
        {
          label: "Styling",
          fields: [
            {
              name: "barColor",
              type: "text",
              label: "Bar Color",
              defaultValue: "#3b82f6",
            },
            {
              name: "backgroundColor",
              type: "text",
              label: "Background Color",
              defaultValue: "#e5e7eb",
            },
            {
              name: "labelColor",
              type: "text",
              label: "Label Color",
            },
            {
              name: "percentageColor",
              type: "text",
              label: "Percentage Color",
            },
            {
              name: "height",
              type: "select",
              label: "Bar Height",
              defaultValue: "md",
              options: [
                { label: "Thin", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Thick", value: "lg" },
              ],
            },
            {
              name: "borderRadius",
              type: "select",
              label: "Border Radius",
              defaultValue: "full",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Full", value: "full" },
              ],
            },
            {
              name: "striped",
              type: "checkbox",
              label: "Striped Effect",
              defaultValue: false,
            },
            {
              name: "animated",
              type: "checkbox",
              label: "Animated Stripes",
              defaultValue: false,
              admin: {
                condition: (data) => Boolean(data.striped),
              },
            },
            {
              name: "showGlow",
              type: "checkbox",
              label: "Show Glow Effect",
              defaultValue: false,
            },
            {
              name: "margin",
              type: "select",
              label: "Margin",
              defaultValue: "md",
              options: [
                { label: "None", value: "none" },
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
