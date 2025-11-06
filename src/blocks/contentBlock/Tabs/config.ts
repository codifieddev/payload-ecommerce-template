import type { Block } from "payload";

export const Tabs: Block = {
  slug: "tabs",
  interfaceName: "TabsBlock",
  labels: {
    singular: "📑 Tabs",
    plural: "📑 Tabs",
  },
  imageURL:
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b7688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      <path d="M6 8h2"/>
      <path d="M6 12h2"/>
    </svg>
  `),
  imageAltText: "Tabs Block - Multi-tab interface",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "tabs",
              type: "array",
              label: "Tabs",
              minRows: 2,
              fields: [
                {
                  name: "label",
                  type: "text",
                  label: "Tab Label",
                  required: true,
                },
                {
                  name: "content",
                  type: "richText",
                  label: "Tab Content",
                  required: true,
                },
                {
                  name: "icon",
                  type: "select",
                  label: "Icon (Optional)",
                  options: [
                    { label: "None", value: "none" },
                    { label: "Home", value: "home" },
                    { label: "User", value: "user" },
                    { label: "Settings", value: "settings" },
                    { label: "Star", value: "star" },
                    { label: "Heart", value: "heart" },
                  ],
                  defaultValue: "none",
                },
              ],
            },
            {
              name: "defaultTab",
              type: "number",
              label: "Default Active Tab (0-based index)",
              defaultValue: 0,
              min: 0,
            },
          ],
        },
        {
          label: "Styling",
          fields: [
            {
              name: "tabsStyle",
              type: "select",
              label: "Tabs Style",
              defaultValue: "underline",
              options: [
                { label: "Underline", value: "underline" },
                { label: "Pills", value: "pills" },
                { label: "Boxed", value: "boxed" },
              ],
            },
            {
              name: "tabsPosition",
              type: "select",
              label: "Tabs Position",
              defaultValue: "top",
              options: [
                { label: "Top", value: "top" },
                { label: "Left", value: "left" },
                { label: "Right", value: "right" },
              ],
            },
            {
              name: "tabsAlignment",
              type: "select",
              label: "Tabs Alignment",
              defaultValue: "left",
              options: [
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ],
              admin: {
                condition: (data) => data.tabsPosition === "top",
              },
            },
            {
              name: "activeTabColor",
              type: "text",
              label: "Active Tab Color",
              admin: {
                description: "Hex color code",
              },
            },
            {
              name: "inactiveTabColor",
              type: "text",
              label: "Inactive Tab Color",
              admin: {
                description: "Hex color code",
              },
            },
            {
              name: "tabBackgroundColor",
              type: "text",
              label: "Tab Background Color",
              admin: {
                description: "Hex color code (for pills/boxed style)",
              },
            },
            {
              name: "contentBackgroundColor",
              type: "text",
              label: "Content Background Color",
              admin: {
                description: "Hex color code",
              },
            },
            {
              name: "contentBorderColor",
              type: "text",
              label: "Content Border Color",
              admin: {
                description: "Hex color code",
              },
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
              label: "Content Padding",
              defaultValue: "md",
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
              defaultValue: "sm",
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
              label: "Content Transition",
              defaultValue: "fade",
              options: [
                { label: "None", value: "none" },
                { label: "Fade", value: "fade" },
                { label: "Slide", value: "slide" },
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
