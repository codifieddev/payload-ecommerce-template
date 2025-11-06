import type { Block } from "payload";

export const PricingTable: Block = {
  slug: "pricingTable",
  interfaceName: "PricingTableBlock",
  labels: {
    singular: "💰 Pricing Table",
    plural: "💰 Pricing Tables",
  },
  imageURL:
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b7688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
      <path d="m9 16 2 2 4-4"/>
    </svg>
  `),
  imageAltText: "Pricing Table Block - Product pricing plans",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "planName",
              type: "text",
              label: "Plan Name",
              required: true,
            },
            {
              name: "price",
              type: "text",
              label: "Price",
              required: true,
            },
            {
              name: "currency",
              type: "text",
              label: "Currency Symbol",
              defaultValue: "$",
            },
            {
              name: "billingPeriod",
              type: "text",
              label: "Billing Period",
              defaultValue: "/month",
            },
            {
              name: "description",
              type: "textarea",
              label: "Description",
            },
            {
              name: "features",
              type: "array",
              label: "Features",
              fields: [
                {
                  name: "feature",
                  type: "text",
                  required: true,
                },
                {
                  name: "included",
                  type: "checkbox",
                  label: "Included",
                  defaultValue: true,
                },
              ],
            },
            {
              name: "buttonText",
              type: "text",
              label: "Button Text",
              defaultValue: "Get Started",
            },
            {
              name: "buttonLink",
              type: "text",
              label: "Button Link",
            },
            {
              name: "highlighted",
              type: "checkbox",
              label: "Highlight this Plan",
              defaultValue: false,
            },
            {
              name: "badge",
              type: "text",
              label: "Badge Text (e.g., 'Most Popular')",
            },
          ],
        },
        {
          label: "Styling",
          fields: [
            {
              name: "headerColor",
              type: "text",
              label: "Header Background Color",
            },
            {
              name: "priceColor",
              type: "text",
              label: "Price Color",
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
              name: "buttonColor",
              type: "text",
              label: "Button Background Color",
            },
            {
              name: "buttonTextColor",
              type: "text",
              label: "Button Text Color",
            },
            {
              name: "highlightColor",
              type: "text",
              label: "Highlight Border Color",
              admin: {
                condition: (data) => Boolean(data.highlighted),
              },
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
              name: "shadow",
              type: "select",
              label: "Shadow",
              defaultValue: "lg",
              options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "hoverEffect",
              type: "select",
              label: "Hover Effect",
              defaultValue: "lift",
              options: [
                { label: "None", value: "none" },
                { label: "Lift", value: "lift" },
                { label: "Scale", value: "scale" },
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
