import type { Block } from "payload";

export const Icon: Block = {
  slug: "icon",
  interfaceName: "IconBlock",
  labels: {
    singular: "🎯 Icon",
    plural: "🎯 Icons",
  },
  imageURL:
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b7688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9 17 14.74 18.18 21.02 12 17.77 5.82 21.02 7 14.74 2 9 8.91 8.26 12 2"/>
    </svg>
  `),
  imageAltText: "Icon Block - Display standalone icons",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "iconType",
              type: "select",
              label: "Icon Type",
              defaultValue: "preset",
              options: [
                { label: "Preset Icon", value: "preset" },
                { label: "Custom Upload", value: "custom" },
              ],
            },
            {
              name: "icon",
              type: "select",
              label: "Icon",
              defaultValue: "star",
              options: [
                { label: "Star", value: "star" },
                { label: "Heart", value: "heart" },
                { label: "Check", value: "check" },
                { label: "Lightning", value: "lightning" },
                { label: "Shield", value: "shield" },
                { label: "Rocket", value: "rocket" },
                { label: "Globe", value: "globe" },
                { label: "Users", value: "users" },
                { label: "Chart", value: "chart" },
                { label: "Settings", value: "settings" },
              ],
              admin: {
                condition: (data) => data.iconType === "preset",
              },
            },
            {
              name: "customIcon",
              type: "upload",
              label: "Custom Icon",
              relationTo: "media",
              admin: {
                condition: (data) => data.iconType === "custom",
              },
            },
            {
              name: "url",
              type: "text",
              label: "Link URL (Optional)",
            },
            {
              name: "urlNewTab",
              type: "checkbox",
              label: "Open in New Tab",
              defaultValue: false,
            },
          ],
        },
        {
          label: "Styling",
          fields: [
            {
              name: "size",
              type: "select",
              label: "Size",
              defaultValue: "lg",
              options: [
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
                { label: "2XL", value: "2xl" },
              ],
            },
            {
              name: "color",
              type: "text",
              label: "Icon Color",
            },
            {
              name: "backgroundColor",
              type: "text",
              label: "Background Color",
            },
            {
              name: "backgroundShape",
              type: "select",
              label: "Background Shape",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Circle", value: "circle" },
                { label: "Square", value: "square" },
                { label: "Rounded Square", value: "rounded" },
              ],
            },
            {
              name: "borderColor",
              type: "text",
              label: "Border Color",
            },
            {
              name: "borderWidth",
              type: "select",
              label: "Border Width",
              defaultValue: "0",
              options: [
                { label: "None", value: "0" },
                { label: "1px", value: "1" },
                { label: "2px", value: "2" },
                { label: "3px", value: "3" },
              ],
            },
            {
              name: "padding",
              type: "select",
              label: "Padding",
              defaultValue: "md",
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
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
              ],
            },
            {
              name: "hoverEffect",
              type: "select",
              label: "Hover Effect",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Scale", value: "scale" },
                { label: "Rotate", value: "rotate" },
                { label: "Bounce", value: "bounce" },
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
                { label: "Zoom In", value: "zoomIn" },
                { label: "Bounce", value: "bounce" },
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
