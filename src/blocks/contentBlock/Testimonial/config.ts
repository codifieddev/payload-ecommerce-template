import type { Block } from "payload";

export const Testimonial: Block = {
  slug: "testimonial",
  interfaceName: "TestimonialBlock",
  labels: {
    singular: "💬 Testimonial",
    plural: "💬 Testimonials",
  },
  imageURL:
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b7688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
    </svg>
  `),
  imageAltText: "Testimonial Block - Customer reviews and quotes",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "quote",
              type: "textarea",
              label: "Testimonial Quote",
              required: true,
              admin: {
                rows: 4,
              },
            },
            {
              name: "authorName",
              type: "text",
              label: "Author Name",
              required: true,
            },
            {
              name: "authorTitle",
              type: "text",
              label: "Author Title/Position",
            },
            {
              name: "authorCompany",
              type: "text",
              label: "Author Company",
            },
            {
              name: "authorImage",
              type: "upload",
              label: "Author Photo",
              relationTo: "media",
            },
            {
              name: "rating",
              type: "number",
              label: "Rating (1-5)",
              min: 1,
              max: 5,
              admin: {
                description: "Star rating out of 5",
              },
            },
            {
              name: "showQuoteIcon",
              type: "checkbox",
              label: "Show Quote Icon",
              defaultValue: true,
            },
          ],
        },
        {
          label: "Styling",
          fields: [
            {
              name: "layout",
              type: "select",
              label: "Layout",
              defaultValue: "card",
              options: [
                { label: "Card", value: "card" },
                { label: "Inline", value: "inline" },
                { label: "Centered", value: "centered" },
              ],
            },
            {
              name: "quoteSize",
              type: "select",
              label: "Quote Size",
              defaultValue: "lg",
              options: [
                { label: "Base", value: "base" },
                { label: "Large", value: "lg" },
                { label: "Extra Large", value: "xl" },
              ],
            },
            {
              name: "quoteColor",
              type: "text",
              label: "Quote Color",
              admin: {
                description: "Hex color code",
              },
            },
            {
              name: "authorNameColor",
              type: "text",
              label: "Author Name Color",
              admin: {
                description: "Hex color code",
              },
            },
            {
              name: "authorTitleColor",
              type: "text",
              label: "Author Title Color",
              admin: {
                description: "Hex color code",
              },
            },
            {
              name: "backgroundColor",
              type: "text",
              label: "Background Color",
              admin: {
                description: "Hex color code",
              },
            },
            {
              name: "borderColor",
              type: "text",
              label: "Border Color",
              admin: {
                description: "Hex color code",
              },
            },
            {
              name: "imageSize",
              type: "select",
              label: "Author Image Size",
              defaultValue: "md",
              options: [
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
              ],
            },
            {
              name: "imageShape",
              type: "select",
              label: "Image Shape",
              defaultValue: "circle",
              options: [
                { label: "Circle", value: "circle" },
                { label: "Square", value: "square" },
                { label: "Rounded Square", value: "rounded" },
              ],
            },
            {
              name: "textAlign",
              type: "select",
              label: "Text Alignment",
              defaultValue: "left",
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
              name: "quoteIconColor",
              type: "text",
              label: "Quote Icon Color",
              admin: {
                description: "Hex color code",
                condition: (data) => Boolean(data.showQuoteIcon),
              },
            },
            {
              name: "starColor",
              type: "text",
              label: "Star Rating Color",
              admin: {
                description: "Hex color code",
              },
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
