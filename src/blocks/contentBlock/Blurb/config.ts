import type { Block } from "payload";

export const Blurb: Block = {
  slug: "blurb",
  interfaceName: "BlurbBlock",
  labels: {
    singular: "💬 Blurb",
    plural: "💬 Blurbs",
  },
  imageURL:
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#4b7688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v6m0 6v6"/>
      <path d="m21 12-6-3-6 3-6-3"/>
    </svg>
  `),
  imageAltText: "Blurb Block - Icon with title and description",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "icon",
              type: "select",
              label: "Icon",
              options: [
                { label: "None", value: "none" },
                { label: "Check", value: "check" },
                { label: "Star", value: "star" },
                { label: "Heart", value: "heart" },
                { label: "Lightning", value: "lightning" },
                { label: "Shield", value: "shield" },
                { label: "Rocket", value: "rocket" },
                { label: "Globe", value: "globe" },
                { label: "Users", value: "users" },
                { label: "Chart", value: "chart" },
                { label: "Settings", value: "settings" },
                { label: "Lock", value: "lock" },
                { label: "Unlock", value: "unlock" },
              ],
              defaultValue: "check",
            },
            {
              name: "customIcon",
              type: "upload",
              label: "Custom Icon (Optional)",
              relationTo: "media",
              admin: {
                description: "Upload a custom icon to override the selected icon",
              },
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
              required: true,
            },
            {
              name: "url",
              type: "text",
              label: "Link URL (Optional)",
              admin: {
                description: "Make the entire blurb clickable",
              },
            },
            {
              name: "urlNewTab",
              type: "checkbox",
              label: "Open in New Tab",
              defaultValue: false,
              admin: {
                condition: (data) => Boolean(data.url),
              },
            },
          ],
        },
        {
          label: "Styling",
          fields: [
            {
              name: "iconPosition",
              type: "select",
              label: "Icon Position",
              defaultValue: "top",
              options: [
                { label: "Top", value: "top" },
                { label: "Left", value: "left" },
                { label: "Right", value: "right" },
              ],
            },
            {
              name: "iconSize",
              type: "select",
              label: "Icon Size",
              defaultValue: "md",
              options: [
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "iconColor",
              type: "text",
              label: "Icon Color",
              admin: {
                description: "Hex color code (e.g., #3B82F6)",
              },
            },
            {
              name: "iconBackgroundColor",
              type: "text",
              label: "Icon Background Color",
              admin: {
                description: "Hex color code for icon background circle/square",
              },
            },
            {
              name: "iconShape",
              type: "select",
              label: "Icon Background Shape",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Circle", value: "circle" },
                { label: "Square", value: "square" },
                { label: "Rounded Square", value: "rounded" },
              ],
            },
            {
              name: "textAlign",
              type: "select",
              label: "Text Alignment",
              defaultValue: "center",
              options: [
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
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
              name: "titleSize",
              type: "select",
              label: "Title Size",
              defaultValue: "h3",
              options: [
                { label: "H1", value: "h1" },
                { label: "H2", value: "h2" },
                { label: "H3", value: "h3" },
                { label: "H4", value: "h4" },
                { label: "H5", value: "h5" },
                { label: "H6", value: "h6" },
              ],
            },
            {
              name: "descriptionColor",
              type: "text",
              label: "Description Color",
              admin: {
                description: "Hex color code",
              },
            },
            {
              name: "backgroundColor",
              type: "text",
              label: "Background Color",
              admin: {
                description: "Hex color code for blurb background",
              },
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
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "borderRadius",
              type: "select",
              label: "Border Radius",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Full", value: "full" },
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
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "border",
              type: "checkbox",
              label: "Show Border",
              defaultValue: false,
            },
            {
              name: "borderColor",
              type: "text",
              label: "Border Color",
              admin: {
                condition: (data) => Boolean(data.border),
                description: "Hex color code",
              },
            },
            {
              name: "borderWidth",
              type: "select",
              label: "Border Width",
              defaultValue: "1",
              options: [
                { label: "1px", value: "1" },
                { label: "2px", value: "2" },
                { label: "3px", value: "3" },
                { label: "4px", value: "4" },
              ],
              admin: {
                condition: (data) => Boolean(data.border),
              },
            },
            {
              name: "hoverEffect",
              type: "select",
              label: "Hover Effect",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Lift", value: "lift" },
                { label: "Scale", value: "scale" },
                { label: "Glow", value: "glow" },
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
                { label: "Zoom In", value: "zoomIn" },
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
