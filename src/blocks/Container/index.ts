import { Block } from "payload";
import { TextBlock } from "../Heading";
import { ButtonBlock } from "../Button";

export const LayoutBlock: Block = {
  slug: "layoutBlock",
  labels: {
    singular: "Layout Block",
    plural: "Layout Blocks",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Settings",
          fields: [
            {
              name: "layoutType",
              type: "select",
              label: "Layout Type",
              required: true,
              defaultValue: "single-column",
              options: [
                { label: "Single Column", value: "single-column" },
                { label: "Two Columns", value: "two-columns" },
                { label: "Three Columns", value: "three-columns" },
                { label: "Four Columns", value: "four-columns" },
                { label: "Sidebar Left", value: "sidebar-left" },
                { label: "Sidebar Right", value: "sidebar-right" },
                { label: "Hero Section", value: "hero" },
                { label: "Split Screen", value: "split-screen" },
                { label: "Card Grid", value: "card-grid" },
                { label: "Masonry", value: "masonry" },
                { label: "Feature Sections", value: "feature-sections" },
                { label: "Custom Grid", value: "custom-grid" },
              ],
            },
            {
              name: "columnRatio",
              type: "select",
              label: "Column Ratio",
              defaultValue: "equal",
              options: [
                { label: "Equal Width", value: "equal" },
                { label: "1:2 (33%-66%)", value: "1-2" },
                { label: "2:1 (66%-33%)", value: "2-1" },
                { label: "1:3 (25%-75%)", value: "1-3" },
                { label: "3:1 (75%-25%)", value: "3-1" },
                { label: "1:2:1", value: "1-2-1" },
                { label: "Custom", value: "custom" },
              ],
              admin: {
                condition: (data, siblingData) =>
                  ["two-columns", "three-columns", "sidebar-left", "sidebar-right"].includes(
                    siblingData?.layoutType,
                  ),
              },
            },
            {
              name: "customColumnRatio",
              type: "text",
              label: "Custom Column Ratio",
              admin: {
                condition: (data, siblingData) => siblingData?.columnRatio === "custom",
                placeholder: "1fr 2fr 1fr",
                description: "Use CSS grid values (e.g., 1fr 2fr or 300px 1fr)",
              },
            },
            {
              name: "maxWidth",
              type: "select",
              label: "Max Width",
              defaultValue: "xl",
              options: [
                { label: "Extra Small (640px)", value: "xs" },
                { label: "Small (768px)", value: "sm" },
                { label: "Medium (1024px)", value: "md" },
                { label: "Large (1280px)", value: "lg" },
                { label: "Extra Large (1536px)", value: "xl" },
                { label: "2XL (1792px)", value: "2xl" },
                { label: "Full Width", value: "full" },
                { label: "Custom", value: "custom" },
              ],
            },
            {
              name: "customMaxWidth",
              type: "text",
              label: "Custom Max Width",
              admin: {
                condition: (data, siblingData) => siblingData?.maxWidth === "custom",
                placeholder: "1400px",
              },
            },
            {
              name: "alignment",
              type: "select",
              label: "Content Alignment",
              defaultValue: "center",
              options: [
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ],
            },
            {
              name: "verticalAlignment",
              type: "select",
              label: "Vertical Alignment",
              defaultValue: "top",
              options: [
                { label: "Top", value: "top" },
                { label: "Center", value: "center" },
                { label: "Bottom", value: "bottom" },
                { label: "Stretch", value: "stretch" },
              ],
            },
            {
              name: "gap",
              type: "select",
              label: "Gap Between Items",
              defaultValue: "md",
              options: [
                { label: "None", value: "none" },
                { label: "Extra Small", value: "xs" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
                { label: "2XL", value: "2xl" },
                { label: "3XL", value: "3xl" },
              ],
            },
            {
              name: "responsiveBehavior",
              type: "select",
              label: "Mobile Behavior",
              defaultValue: "stack",
              options: [
                { label: "Stack (Vertical)", value: "stack" },
                { label: "Keep Layout", value: "keep" },
                { label: "Reverse Order", value: "reverse" },
                { label: "Hide on Mobile", value: "hide-mobile" },
              ],
            },
            {
              name: "backgroundColor",
              type: "select",
              label: "Background Color",
              defaultValue: "transparent",
              options: [
                { label: "Transparent", value: "transparent" },
                { label: "White", value: "white" },
                { label: "Light Gray", value: "light-gray" },
                { label: "Gray", value: "gray" },
                { label: "Dark Gray", value: "dark-gray" },
                { label: "Black", value: "black" },
                { label: "Primary", value: "primary" },
                { label: "Secondary", value: "secondary" },
                { label: "Accent", value: "accent" },
                { label: "Custom", value: "custom" },
              ],
            },
            {
              name: "customBackgroundColor",
              type: "text",
              label: "Custom Background Color",
              admin: {
                condition: (data, siblingData) => siblingData?.backgroundColor === "custom",
                placeholder: "#f5f5f5",
              },
            },
            {
              name: "backgroundImage",
              type: "group",
              label: "Background Image",
              fields: [
                {
                  name: "enable",
                  type: "checkbox",
                  label: "Enable Background Image",
                  defaultValue: false,
                },
                {
                  name: "image",
                  type: "upload",
                  label: "Image",
                  relationTo: "media",
                  admin: {
                    condition: (data, siblingData) => siblingData?.enable === true,
                  },
                },
                {
                  name: "size",
                  type: "select",
                  label: "Background Size",
                  defaultValue: "cover",
                  options: [
                    { label: "Cover", value: "cover" },
                    { label: "Contain", value: "contain" },
                    { label: "Auto", value: "auto" },
                  ],
                  admin: {
                    condition: (data, siblingData) => siblingData?.enable === true,
                  },
                },
                {
                  name: "position",
                  type: "select",
                  label: "Background Position",
                  defaultValue: "center",
                  options: [
                    { label: "Center", value: "center" },
                    { label: "Top", value: "top" },
                    { label: "Bottom", value: "bottom" },
                    { label: "Left", value: "left" },
                    { label: "Right", value: "right" },
                  ],
                  admin: {
                    condition: (data, siblingData) => siblingData?.enable === true,
                  },
                },
                {
                  name: "attachment",
                  type: "select",
                  label: "Background Attachment",
                  defaultValue: "scroll",
                  options: [
                    { label: "Scroll", value: "scroll" },
                    { label: "Fixed (Parallax)", value: "fixed" },
                  ],
                  admin: {
                    condition: (data, siblingData) => siblingData?.enable === true,
                  },
                },
                {
                  name: "overlay",
                  type: "checkbox",
                  label: "Enable Overlay",
                  defaultValue: false,
                  admin: {
                    condition: (data, siblingData) => siblingData?.enable === true,
                  },
                },
                {
                  name: "overlayColor",
                  type: "text",
                  label: "Overlay Color",
                  admin: {
                    condition: (data, siblingData) =>
                      siblingData?.enable === true && siblingData?.overlay === true,
                    placeholder: "rgba(0,0,0,0.5)",
                  },
                },
              ],
            },
            {
              name: "gradient",
              type: "group",
              label: "Gradient Background",
              fields: [
                {
                  name: "enable",
                  type: "checkbox",
                  label: "Enable Gradient",
                  defaultValue: false,
                },
                {
                  name: "type",
                  type: "select",
                  label: "Gradient Type",
                  defaultValue: "linear",
                  options: [
                    { label: "Linear", value: "linear" },
                    { label: "Radial", value: "radial" },
                  ],
                  admin: {
                    condition: (data, siblingData) => siblingData?.enable === true,
                  },
                },
                {
                  name: "direction",
                  type: "select",
                  label: "Gradient Direction",
                  defaultValue: "to-right",
                  options: [
                    { label: "To Right", value: "to-right" },
                    { label: "To Left", value: "to-left" },
                    { label: "To Bottom", value: "to-bottom" },
                    { label: "To Top", value: "to-top" },
                    { label: "To Bottom Right", value: "to-bottom-right" },
                  ],
                  admin: {
                    condition: (data, siblingData) =>
                      siblingData?.enable === true && siblingData?.type === "linear",
                  },
                },
                {
                  name: "colorStops",
                  type: "textarea",
                  label: "Color Stops",
                  admin: {
                    condition: (data, siblingData) => siblingData?.enable === true,
                    placeholder: "#ff0000, #00ff00, #0000ff",
                  },
                },
              ],
            },
            {
              name: "padding",
              type: "group",
              label: "Padding",
              fields: [
                {
                  name: "top",
                  type: "select",
                  label: "Top",
                  defaultValue: "lg",
                  options: [
                    { label: "None", value: "none" },
                    { label: "Extra Small", value: "xs" },
                    { label: "Small", value: "sm" },
                    { label: "Medium", value: "md" },
                    { label: "Large", value: "lg" },
                    { label: "Extra Large", value: "xl" },
                    { label: "2XL", value: "2xl" },
                    { label: "3XL", value: "3xl" },
                  ],
                },
                {
                  name: "bottom",
                  type: "select",
                  label: "Bottom",
                  defaultValue: "lg",
                  options: [
                    { label: "None", value: "none" },
                    { label: "Extra Small", value: "xs" },
                    { label: "Small", value: "sm" },
                    { label: "Medium", value: "md" },
                    { label: "Large", value: "lg" },
                    { label: "Extra Large", value: "xl" },
                    { label: "2XL", value: "2xl" },
                    { label: "3XL", value: "3xl" },
                  ],
                },
                {
                  name: "left",
                  type: "select",
                  label: "Left",
                  defaultValue: "md",
                  options: [
                    { label: "None", value: "none" },
                    { label: "Extra Small", value: "xs" },
                    { label: "Small", value: "sm" },
                    { label: "Medium", value: "md" },
                    { label: "Large", value: "lg" },
                    { label: "Extra Large", value: "xl" },
                    { label: "2XL", value: "2xl" },
                    { label: "3XL", value: "3xl" },
                  ],
                },
                {
                  name: "right",
                  type: "select",
                  label: "Right",
                  defaultValue: "md",
                  options: [
                    { label: "None", value: "none" },
                    { label: "Extra Small", value: "xs" },
                    { label: "Small", value: "sm" },
                    { label: "Medium", value: "md" },
                    { label: "Large", value: "lg" },
                    { label: "Extra Large", value: "xl" },
                    { label: "2XL", value: "2xl" },
                    { label: "3XL", value: "3xl" },
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
                    { label: "Extra Small", value: "xs" },
                    { label: "Small", value: "sm" },
                    { label: "Medium", value: "md" },
                    { label: "Large", value: "lg" },
                    { label: "Extra Large", value: "xl" },
                    { label: "2XL", value: "2xl" },
                    { label: "3XL", value: "3xl" },
                  ],
                },
                {
                  name: "bottom",
                  type: "select",
                  label: "Bottom",
                  defaultValue: "none",
                  options: [
                    { label: "None", value: "none" },
                    { label: "Extra Small", value: "xs" },
                    { label: "Small", value: "sm" },
                    { label: "Medium", value: "md" },
                    { label: "Large", value: "lg" },
                    { label: "Extra Large", value: "xl" },
                    { label: "2XL", value: "2xl" },
                    { label: "3XL", value: "3xl" },
                  ],
                },
              ],
            },
            {
              name: "border",
              type: "group",
              label: "Border",
              fields: [
                {
                  name: "enable",
                  type: "checkbox",
                  label: "Enable Border",
                  defaultValue: false,
                },
                {
                  name: "width",
                  type: "select",
                  label: "Border Width",
                  defaultValue: "1",
                  options: [
                    { label: "1px", value: "1" },
                    { label: "2px", value: "2" },
                    { label: "4px", value: "4" },
                    { label: "8px", value: "8" },
                  ],
                  admin: {
                    condition: (data, siblingData) => siblingData?.enable === true,
                  },
                },
                {
                  name: "style",
                  type: "select",
                  label: "Border Style",
                  defaultValue: "solid",
                  options: [
                    { label: "Solid", value: "solid" },
                    { label: "Dashed", value: "dashed" },
                    { label: "Dotted", value: "dotted" },
                  ],
                  admin: {
                    condition: (data, siblingData) => siblingData?.enable === true,
                  },
                },
                {
                  name: "color",
                  type: "text",
                  label: "Border Color",
                  admin: {
                    condition: (data, siblingData) => siblingData?.enable === true,
                    placeholder: "#e5e5e5",
                  },
                },
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
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "shadow",
              type: "select",
              label: "Box Shadow",
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
              name: "minHeight",
              type: "select",
              label: "Minimum Height",
              defaultValue: "none",
              options: [
                { label: "None", value: "none" },
                { label: "300px", value: "300" },
                { label: "400px", value: "400" },
                { label: "500px", value: "500" },
                { label: "50vh", value: "50vh" },
                { label: "75vh", value: "75vh" },
                { label: "100vh", value: "100vh" },
                { label: "Custom", value: "custom" },
              ],
              admin: {
                condition: (data, siblingData) => siblingData?.layoutType === "hero",
              },
            },
            {
              name: "customMinHeight",
              type: "text",
              label: "Custom Min Height",
              admin: {
                condition: (data, siblingData) => siblingData?.minHeight === "custom",
                placeholder: "600px",
              },
            },
            {
              name: "animation",
              type: "group",
              label: "Animation",
              fields: [
                {
                  name: "enable",
                  type: "checkbox",
                  label: "Enable Animation",
                  defaultValue: false,
                },
                {
                  name: "type",
                  type: "select",
                  label: "Animation Type",
                  defaultValue: "fade-in",
                  options: [
                    { label: "Fade In", value: "fade-in" },
                    { label: "Fade In Up", value: "fade-in-up" },
                    { label: "Slide Up", value: "slide-up" },
                    { label: "Zoom In", value: "zoom-in" },
                  ],
                  admin: {
                    condition: (data, siblingData) => siblingData?.enable === true,
                  },
                },
                {
                  name: "duration",
                  type: "select",
                  label: "Duration",
                  defaultValue: "normal",
                  options: [
                    { label: "Fast (300ms)", value: "fast" },
                    { label: "Normal (500ms)", value: "normal" },
                    { label: "Slow (700ms)", value: "slow" },
                  ],
                  admin: {
                    condition: (data, siblingData) => siblingData?.enable === true,
                  },
                },
              ],
            },
            {
              name: "customId",
              type: "text",
              label: "Custom ID",
              admin: {
                description: "For anchor links",
                placeholder: "section-id",
              },
            },
            {
              name: "className",
              type: "text",
              label: "Custom CSS Class",
            },
          ],
        },
        {
          label: "Details",
          fields: [
            {
              name: "columns",
              type: "array",
              label: "Layout Columns",
              fields: [
                {
                  name: "columnName",
                  type: "text",
                  label: "Column Name",
                  admin: {
                    description: "Optional label for this column",
                  },
                },
                {
                  name: "content",
                  type: "blocks",
                  label: "Column Content",
                  blocks: [TextBlock, ButtonBlock],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
