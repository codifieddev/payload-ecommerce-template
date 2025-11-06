import type { Block } from "payload";

export const TeamMember: Block = {
  slug: "teamMember",
  interfaceName: "TeamMemberBlock",
  labels: {
    singular: "👤 Team Member",
    plural: "👤 Team Members",
  },
  imageURL:
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b7688" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  `),
  imageAltText: "Team Member Block - Staff profiles and bios",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "photo",
              type: "upload",
              label: "Photo",
              relationTo: "media",
              required: true,
            },
            {
              name: "name",
              type: "text",
              label: "Name",
              required: true,
            },
            {
              name: "position",
              type: "text",
              label: "Position/Title",
              required: true,
            },
            {
              name: "bio",
              type: "textarea",
              label: "Bio",
              admin: {
                rows: 3,
              },
            },
            {
              name: "email",
              type: "email",
              label: "Email",
            },
            {
              name: "phone",
              type: "text",
              label: "Phone",
            },
            {
              name: "socialLinks",
              type: "array",
              label: "Social Links",
              fields: [
                {
                  name: "platform",
                  type: "select",
                  label: "Platform",
                  options: [
                    { label: "LinkedIn", value: "linkedin" },
                    { label: "Twitter", value: "twitter" },
                    { label: "Facebook", value: "facebook" },
                    { label: "Instagram", value: "instagram" },
                    { label: "GitHub", value: "github" },
                  ],
                },
                {
                  name: "url",
                  type: "text",
                  label: "URL",
                  required: true,
                },
              ],
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
                { label: "Horizontal", value: "horizontal" },
                { label: "Overlay", value: "overlay" },
              ],
            },
            {
              name: "imageShape",
              type: "select",
              label: "Image Shape",
              defaultValue: "square",
              options: [
                { label: "Square", value: "square" },
                { label: "Circle", value: "circle" },
                { label: "Rounded", value: "rounded" },
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
              ],
            },
            {
              name: "nameColor",
              type: "text",
              label: "Name Color",
            },
            {
              name: "positionColor",
              type: "text",
              label: "Position Color",
            },
            {
              name: "bioColor",
              type: "text",
              label: "Bio Color",
            },
            {
              name: "backgroundColor",
              type: "text",
              label: "Background Color",
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
              defaultValue: "md",
              options: [
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
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
