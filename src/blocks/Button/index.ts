import { Block } from "payload";

export const ButtonBlock: Block = {
  slug: "buttonBlock",
  labels: {
    singular: "Button Block",
    plural: "Button Blocks",
  },
  fields: [
    {
      name: "label",
      type: "text",
      label: "Button Label",
      required: true,
    },
    {
      name: "link",
      type: "group",
      label: "Link Settings",
      fields: [
        {
          name: "type",
          type: "select",
          label: "Link Type",
          required: true,
          defaultValue: "external",
          options: [
            { label: "External URL", value: "external" },
            { label: "Internal Page", value: "internal" },
            { label: "Email", value: "email" },
            { label: "Phone", value: "phone" },
            { label: "Anchor/Section", value: "anchor" },
          ],
        },
        {
          name: "url",
          type: "text",
          label: "URL",
          required: true,
          admin: {
            condition: (data, siblingData) => siblingData?.type === "external",
            placeholder: "https://example.com",
          },
        },
        {
          name: "page",
          type: "relationship",
          label: "Internal Page",
          relationTo: "pages", // Adjust to your pages collection slug
          admin: {
            condition: (data, siblingData) => siblingData?.type === "internal",
          },
        },
        {
          name: "email",
          type: "text",
          label: "Email Address",
          admin: {
            condition: (data, siblingData) => siblingData?.type === "email",
            placeholder: "contact@example.com",
          },
        },
        {
          name: "phone",
          type: "text",
          label: "Phone Number",
          admin: {
            condition: (data, siblingData) => siblingData?.type === "phone",
            placeholder: "+1234567890",
          },
        },
        {
          name: "anchor",
          type: "text",
          label: "Anchor/Section ID",
          admin: {
            condition: (data, siblingData) => siblingData?.type === "anchor",
            placeholder: "#section-id",
          },
        },
        {
          name: "newTab",
          type: "checkbox",
          label: "Open in New Tab",
          defaultValue: false,
          admin: {
            condition: (data, siblingData) =>
              siblingData?.type === "external" || siblingData?.type === "internal",
          },
        },
        {
          name: "rel",
          type: "select",
          label: "Link Relationship",
          defaultValue: "none",
          options: [
            { label: "None", value: "none" },
            { label: "No Follow", value: "nofollow" },
            { label: "No Opener", value: "noopener" },
            { label: "No Referrer", value: "noreferrer" },
            { label: "No Opener No Referrer", value: "noopener noreferrer" },
            { label: "Sponsored", value: "sponsored" },
          ],
          admin: {
            condition: (data, siblingData) =>
              siblingData?.type === "external" || siblingData?.type === "internal",
          },
        },
      ],
    },
    {
      name: "icon",
      type: "group",
      label: "Icon Settings",
      fields: [
        {
          name: "enable",
          type: "checkbox",
          label: "Add Icon",
          defaultValue: false,
        },
        {
          name: "iconName",
          type: "text",
          label: "Icon Name/Class",
          admin: {
            condition: (data, siblingData) => siblingData?.enable === true,
            description: 'e.g., "arrow-right" or icon class from your icon library',
          },
        },
        {
          name: "position",
          type: "select",
          label: "Icon Position",
          defaultValue: "right",
          options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
          admin: {
            condition: (data, siblingData) => siblingData?.enable === true,
          },
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
          ],
          admin: {
            condition: (data, siblingData) => siblingData?.enable === true,
          },
        },
      ],
    },
    {
      name: "variant",
      type: "select",
      label: "Button Variant",
      required: true,
      defaultValue: "primary",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
        { label: "Outline", value: "outline" },
        { label: "Ghost", value: "ghost" },
        { label: "Link Style", value: "link" },
        { label: "Destructive", value: "destructive" },
        { label: "Success", value: "success" },
        { label: "Custom", value: "custom" },
      ],
    },
    {
      name: "customColors",
      type: "group",
      label: "Custom Colors",
      admin: {
        condition: (data, siblingData) => siblingData?.variant === "custom",
      },
      fields: [
        {
          name: "backgroundColor",
          type: "text",
          label: "Background Color (Hex)",
          admin: {
            placeholder: "#0066cc",
          },
        },
        {
          name: "textColor",
          type: "text",
          label: "Text Color (Hex)",
          admin: {
            placeholder: "#ffffff",
          },
        },
        {
          name: "hoverBackgroundColor",
          type: "text",
          label: "Hover Background Color (Hex)",
          admin: {
            placeholder: "#0052a3",
          },
        },
        {
          name: "hoverTextColor",
          type: "text",
          label: "Hover Text Color (Hex)",
          admin: {
            placeholder: "#ffffff",
          },
        },
        {
          name: "borderColor",
          type: "text",
          label: "Border Color (Hex)",
          admin: {
            placeholder: "#0066cc",
          },
        },
      ],
    },
    {
      name: "size",
      type: "select",
      label: "Button Size",
      defaultValue: "md",
      options: [
        { label: "Extra Small", value: "xs" },
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "Extra Large", value: "xl" },
      ],
    },
    {
      name: "fullWidth",
      type: "checkbox",
      label: "Full Width Button",
      defaultValue: false,
    },
    {
      name: "alignment",
      type: "select",
      label: "Button Alignment",
      defaultValue: "left",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
      admin: {
        condition: (data, siblingData) => !siblingData?.fullWidth,
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
        { label: "Extra Large", value: "xl" },
        { label: "Full (Pill)", value: "full" },
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
      name: "fontWeight",
      type: "select",
      label: "Font Weight",
      defaultValue: "medium",
      options: [
        { label: "Normal (400)", value: "normal" },
        { label: "Medium (500)", value: "medium" },
        { label: "Semi Bold (600)", value: "semibold" },
        { label: "Bold (700)", value: "bold" },
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
      name: "animation",
      type: "select",
      label: "Hover Animation",
      defaultValue: "none",
      options: [
        { label: "None", value: "none" },
        { label: "Scale Up", value: "scale-up" },
        { label: "Scale Down", value: "scale-down" },
        { label: "Lift", value: "lift" },
        { label: "Slide Right", value: "slide-right" },
        { label: "Pulse", value: "pulse" },
        { label: "Bounce", value: "bounce" },
      ],
    },
    {
      name: "disabled",
      type: "checkbox",
      label: "Disabled State",
      defaultValue: false,
    },
    {
      name: "ariaLabel",
      type: "text",
      label: "ARIA Label",
      admin: {
        description: "Accessibility label for screen readers (optional)",
        placeholder: "Descriptive button action",
      },
    },
    {
      name: "padding",
      type: "group",
      label: "Custom Padding",
      fields: [
        {
          name: "horizontal",
          type: "select",
          label: "Horizontal Padding",
          defaultValue: "default",
          options: [
            { label: "Default", value: "default" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
            { label: "Extra Large", value: "xl" },
          ],
        },
        {
          name: "vertical",
          type: "select",
          label: "Vertical Padding",
          defaultValue: "default",
          options: [
            { label: "Default", value: "default" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
            { label: "Extra Large", value: "xl" },
          ],
        },
      ],
    },
    {
      name: "margin",
      type: "group",
      label: "Margin",
      fields: [
        {
          name: "top",
          type: "select",
          label: "Top",
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
          name: "bottom",
          type: "select",
          label: "Bottom",
          defaultValue: "none",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
            { label: "Extra Large", value: "xl" },
          ],
        },
      ],
    },
    {
      name: "className",
      type: "text",
      label: "Custom CSS Class",
      admin: {
        description: "Add custom CSS classes for additional styling",
      },
    },
  ],
};
