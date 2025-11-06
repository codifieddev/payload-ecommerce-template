import type { Block } from "payload";

export const Counter: Block = {
  slug: "counter",
  interfaceName: "CounterBlock",
  labels: {
    singular: "🔢 Counter",
    plural: "🔢 Counters",
  },
  imageURL:
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b7688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <path d="M10 8l2 2 4-4"/>
    </svg>
  `),
  imageAltText: "Counter Block - Animated number counters",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "number",
              type: "number",
              label: "Target Number",
              required: true,
            },
            {
              name: "prefix",
              type: "text",
              label: "Prefix (e.g., $, +)",
            },
            {
              name: "suffix",
              type: "text",
              label: "Suffix (e.g., %, K, M)",
            },
            {
              name: "title",
              type: "text",
              label: "Title",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              label: "Description",
            },
            {
              name: "icon",
              type: "select",
              label: "Icon (Optional)",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Users", value: "users" },
                { label: "Star", value: "star" },
                { label: "Trophy", value: "trophy" },
                { label: "Chart", value: "chart" },
                { label: "Globe", value: "globe" },
              ],
            },
            {
              name: "animationDuration",
              type: "number",
              label: "Animation Duration (seconds)",
              defaultValue: 2,
              min: 0.5,
              max: 10,
            },
          ],
        },
        {
          label: "Styling",
          fields: [
            {
              name: "numberSize",
              type: "select",
              label: "Number Size",
              defaultValue: "4xl",
              options: [
                { label: "2XL", value: "2xl" },
                { label: "3XL", value: "3xl" },
                { label: "4XL", value: "4xl" },
                { label: "5XL", value: "5xl" },
                { label: "6XL", value: "6xl" },
              ],
            },
            {
              name: "numberColor",
              type: "text",
              label: "Number Color",
            },
            {
              name: "titleColor",
              type: "text",
              label: "Title Color",
            },
            {
              name: "descriptionColor",
              type: "text",
              label: "Description Color",
            },
            {
              name: "iconColor",
              type: "text",
              label: "Icon Color",
            },
            {
              name: "backgroundColor",
              type: "text",
              label: "Background Color",
            },
            {
              name: "textAlign",
              type: "select",
              label: "Text Alignment",
              defaultValue: "center",
              options: [
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
              ],
            },
            {
              name: "borderRadius",
              type: "select",
              label: "Border Radius",
              defaultValue: "lg",
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
              defaultValue: "lg",
              options: [
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "shadow",
              type: "select",
              label: "Shadow",
              defaultValue: "md",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
              ],
            },
            {
              name: "animation",
              type: "select",
              label: "Entry Animation",
              defaultValue: "fadeIn",
              options: [
                { label: "None", value: "none" },
                { label: "Fade In", value: "fadeIn" },
                { label: "Scale", value: "scale" },
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
