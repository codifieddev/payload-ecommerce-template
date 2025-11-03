

import { AlignmentField } from "@/fields/alignmentField";
import { backgroundPicker } from "@/fields/backgroundPicker";
import { radiusFields } from "@/fields/radiusFields";
import { marginFields, paddingFields } from "@/fields/spacingFields";

import type { Block, Field } from "payload";

// Story/Introduction Block
export const StoryBlock: Block = {
  slug: "story",
  interfaceName: "StoryBlock",
  labels: {
    singular: "Story Section",
    plural: "Story Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading",
      defaultValue: "Our Story",
    },
    {
      name: "subheading",
      type: "text",
      label: "Subheading",
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Story Content",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Featured Image",
    },
    {
      name: "imagePosition",
      type: "select",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
      ],
      defaultValue: "right",
      label: "Image Position",
    },
    AlignmentField,
    backgroundPicker,
    paddingFields,
    marginFields,
    ...radiusFields,
  ],
};

// Mission & Vision Block
export const MissionVisionBlock: Block = {
  slug: "missionVision",
  interfaceName: "MissionVisionBlock",
  labels: {
    singular: "Mission & Vision",
    plural: "Mission & Vision Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Section Heading",
      defaultValue: "Mission & Vision",
    },
    {
      name: "mission",
      type: "group",
      label: "Mission",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          defaultValue: "Our Mission",
        },
        {
          name: "content",
          type: "richText",
          required: true,
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Icon/Image",
        },
      ],
    },
    {
      name: "vision",
      type: "group",
      label: "Vision",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          defaultValue: "Our Vision",
        },
        {
          name: "content",
          type: "richText",
          required: true,
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Icon/Image",
        },
      ],
    },
    AlignmentField,
    backgroundPicker,
    paddingFields,
    marginFields,
    ...radiusFields,
  ],
};

// Values Block
export const ValuesBlock: Block = {
  slug: "values",
  interfaceName: "ValuesBlock",
  labels: {
    singular: "Values Section",
    plural: "Values Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading",
      defaultValue: "Our Values",
    },
    {
      name: "subheading",
      type: "text",
      label: "Subheading",
    },
    {
      name: "values",
      type: "array",
      label: "Values",
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Value Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Description",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Icon",
        },
      ],
    },
    {
      name: "layout",
      type: "select",
      options: [
        { label: "Grid (2 columns)", value: "grid-2" },
        { label: "Grid (3 columns)", value: "grid-3" },
        { label: "Grid (4 columns)", value: "grid-4" },
        { label: "List", value: "list" },
      ],
      defaultValue: "grid-3",
      label: "Layout Style",
    },
    AlignmentField,
    backgroundPicker,
    paddingFields,
    marginFields,
    ...radiusFields,
  ],
};

// Team Block
export const TeamBlock: Block = {
  slug: "team",
  interfaceName: "TeamBlock",
  labels: {
    singular: "Team Section",
    plural: "Team Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading",
      defaultValue: "Meet Our Team",
    },
    {
      name: "subheading",
      type: "text",
      label: "Subheading",
    },
    {
      name: "teamMembers",
      type: "array",
      label: "Team Members",
      minRows: 1,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Name",
        },
        {
          name: "position",
          type: "text",
          required: true,
          label: "Position/Title",
        },
        {
          name: "bio",
          type: "textarea",
          label: "Short Bio",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "Photo",
        },
        {
          name: "socials",
          type: "group",
          label: "Social Links",
          fields: [
            {
              name: "linkedin",
              type: "text",
              label: "LinkedIn URL",
            },
            {
              name: "twitter",
              type: "text",
              label: "Twitter/X URL",
            },
            {
              name: "email",
              type: "email",
              label: "Email",
            },
          ],
        },
      ],
    },
    {
      name: "layout",
      type: "select",
      options: [
        { label: "Grid (2 columns)", value: "grid-2" },
        { label: "Grid (3 columns)", value: "grid-3" },
        { label: "Grid (4 columns)", value: "grid-4" },
      ],
      defaultValue: "grid-3",
      label: "Layout Style",
    },
    AlignmentField,
    backgroundPicker,
    paddingFields,
    marginFields,
    ...radiusFields,
  ],
};

// Timeline/History Block
export const TimelineBlock: Block = {
  slug: "timeline",
  interfaceName: "TimelineBlock",
  labels: {
    singular: "Timeline Section",
    plural: "Timeline Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading",
      defaultValue: "Our Journey",
    },
    {
      name: "subheading",
      type: "text",
      label: "Subheading",
    },
    {
      name: "milestones",
      type: "array",
      label: "Milestones",
      minRows: 1,
      fields: [
        {
          name: "year",
          type: "text",
          required: true,
          label: "Year/Date",
        },
        {
          name: "title",
          type: "text",
          required: true,
          label: "Milestone Title",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Description",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "Image (Optional)",
        },
      ],
    },
    {
      name: "style",
      type: "select",
      options: [
        { label: "Vertical Timeline", value: "vertical" },
        { label: "Horizontal Timeline", value: "horizontal" },
        { label: "Cards", value: "cards" },
      ],
      defaultValue: "vertical",
      label: "Timeline Style",
    },
    AlignmentField,
    backgroundPicker,
    paddingFields,
    marginFields,
    ...radiusFields,
  ],
};

// Stats/Numbers Block
export const StatsBlock: Block = {
  slug: "stats",
  interfaceName: "StatsBlock",
  labels: {
    singular: "Stats Section",
    plural: "Stats Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      defaultValue: "By The Numbers",
    },
    {
      name: "subheading",
      type: "text",
      label: "Subheading",
    },
    {
      name: "statistics",
      type: "array",
      label: "Statistics",
      minRows: 2,
      maxRows: 6,
      fields: [
        {
          name: "number",
          type: "text",
          required: true,
          label: "Number/Statistic",
          admin: {
            description: "e.g., 500+, 10M, 99%",
          },
        },
        {
          name: "label",
          type: "text",
          required: true,
          label: "Label",
          admin: {
            description: "e.g., Happy Clients, Products Sold",
          },
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Icon (Optional)",
        },
      ],
    },
    {
      name: "layout",
      type: "select",
      options: [
        { label: "Grid (2 columns)", value: "grid-2" },
        { label: "Grid (3 columns)", value: "grid-3" },
        { label: "Grid (4 columns)", value: "grid-4" },
        { label: "Inline", value: "inline" },
      ],
      defaultValue: "grid-4",
      label: "Layout Style",
    },
    AlignmentField,
    backgroundPicker,
    paddingFields,
    marginFields,
    ...radiusFields,
  ],
};

// Testimonials/Culture Block
export const CultureBlock: Block = {
  slug: "culture",
  interfaceName: "CultureBlock",
  labels: {
    singular: "Culture Section",
    plural: "Culture Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading",
      defaultValue: "Our Culture",
    },
    {
      name: "subheading",
      type: "text",
      label: "Subheading",
    },
    {
      name: "content",
      type: "richText",
      label: "Culture Description",
    },
    {
      name: "images",
      type: "array",
      label: "Culture Images",
      maxRows: 8,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "caption",
          type: "text",
          label: "Caption (Optional)",
        },
      ],
    },
    {
      name: "highlights",
      type: "array",
      label: "Culture Highlights",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
          label: "Icon",
        },
      ],
    },
    AlignmentField,
    backgroundPicker,
    paddingFields,
    marginFields,
    ...radiusFields,
  ],
};

// Call to Action Block
export const CTABlock: Block = {
  slug: "cta",
  interfaceName: "CTABlock",
  labels: {
    singular: "CTA Section",
    plural: "CTA Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
      label: "Heading",
    },
    {
      name: "subheading",
      type: "text",
      label: "Subheading",
    },
    {
      name: "content",
      type: "textarea",
      label: "Description",
    },
    {
      name: "buttons",
      type: "array",
      label: "Buttons",
      minRows: 1,
      maxRows: 2,
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
          label: "Button Text",
        },
        {
          name: "url",
          type: "text",
          required: true,
          label: "Button URL",
        },
        {
          name: "style",
          type: "select",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
            { label: "Outline", value: "outline" },
          ],
          defaultValue: "primary",
        },
        {
          name: "openInNewTab",
          type: "checkbox",
          label: "Open in New Tab",
          defaultValue: false,
        },
      ],
    },
    {
      name: "style",
      type: "select",
      options: [
        { label: "Centered", value: "centered" },
        { label: "Left Aligned", value: "left" },
        { label: "Split (Text + Image)", value: "split" },
      ],
      defaultValue: "centered",
      label: "CTA Style",
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
      label: "Background Image (Optional)",
    },
    AlignmentField,
    backgroundPicker,
    paddingFields,
    marginFields,
    ...radiusFields,
  ],
};

// Main About Page Block Configuration
export const AboutPage: Block = {
  slug: "aboutPage",
  interfaceName: "AboutPageBlock",
  labels: {
    singular: "About Page",
    plural: "About Pages",
  },
  fields: [
    {
      name: "blocks",
      type: "blocks",
      label: "Page Sections",
      blocks: [
        StoryBlock,
        MissionVisionBlock,
        ValuesBlock,
        TeamBlock,
        TimelineBlock,
        StatsBlock,
        CultureBlock,
        CTABlock,
      ],
    },
  ],
};
