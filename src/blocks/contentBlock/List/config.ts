import type { Block } from "payload";

export const List: Block = {
  slug: "list",
  interfaceName: "ListBlock",
  labels: {
    singular: "📝 List",
    plural: "📝 Lists",
  },
  imageURL:
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b7688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"/>
      <line x1="8" y1="12" x2="21" y2="12"/>
      <line x1="8" y1="18" x2="21" y2="18"/>
      <line x1="3" y1="6" x2="3.01" y2="6"/>
      <line x1="3" y1="12" x2="3.01" y2="12"/>
      <line x1="3" y1="18" x2="3.01" y2="18"/>
    </svg>
  `),
  imageAltText: "List Block - Styled lists with bullets or numbers",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "listType",
              type: "select",
              label: "List Type",
              defaultValue: "unordered",
              options: [
                { label: "Unordered (Bullets)", value: "unordered" },
                { label: "Ordered (Numbers)", value: "ordered" },
                { label: "Icon List", value: "icon" },
              ],
            },
            {
              name: "items",
              type: "array",
              label: "List Items",
              required: true,
              minRows: 1,
              fields: [
                {
                  name: "text",
                  type: "text",
                  label: "Text",
                  required: true,
                },
                {
                  name: "icon",
                  type: "select",
                  label: "Icon",
                  defaultValue: "check",
                  options: [
                    { label: "Check", value: "check" },
                    { label: "Star", value: "star" },
                    { label: "Arrow", value: "arrow" },
                    { label: "Plus", value: "plus" },
                    { label: "Heart", value: "heart" },
                  ],
                  admin: {
                    condition: (data, siblingData, { user }) => {
                      // Access parent data through the full data object
                      return data.listType === "icon";
                    },
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
              name: "bulletStyle",
              type: "select",
              label: "Bullet Style",
              defaultValue: "disc",
              options: [
                { label: "Disc", value: "disc" },
                { label: "Circle", value: "circle" },
                { label: "Square", value: "square" },
              ],
              admin: {
                condition: (data) => data.listType === "unordered",
              },
            },
            {
              name: "numberStyle",
              type: "select",
              label: "Number Style",
              defaultValue: "decimal",
              options: [
                { label: "Decimal (1, 2, 3)", value: "decimal" },
                { label: "Roman (I, II, III)", value: "upper-roman" },
                { label: "Alpha (A, B, C)", value: "upper-alpha" },
                { label: "Lower Alpha (a, b, c)", value: "lower-alpha" },
              ],
              admin: {
                condition: (data) => data.listType === "ordered",
              },
            },
            {
              name: "iconColor",
              type: "text",
              label: "Icon/Bullet Color",
            },
            {
              name: "textColor",
              type: "text",
              label: "Text Color",
            },
            {
              name: "fontSize",
              type: "select",
              label: "Font Size",
              defaultValue: "base",
              options: [
                { label: "Small", value: "sm" },
                { label: "Base", value: "base" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "spacing",
              type: "select",
              label: "Item Spacing",
              defaultValue: "md",
              options: [
                { label: "Tight", value: "sm" },
                { label: "Normal", value: "md" },
                { label: "Relaxed", value: "lg" },
              ],
            },
            {
              name: "indentation",
              type: "select",
              label: "Indentation",
              defaultValue: "md",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
              ],
            },
            {
              name: "backgroundColor",
              type: "text",
              label: "Background Color",
            },
            {
              name: "borderColor",
              type: "text",
              label: "Border Color",
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
              name: "animation",
              type: "select",
              label: "Entry Animation",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "Fade In", value: "fadeIn" },
                { label: "Slide Left", value: "slideLeft" },
                { label: "Stagger", value: "stagger" },
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
