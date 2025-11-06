import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";

import { authenticated } from "@/access/authenticated";
import { authenticatedOrPublished } from "@/access/authenticatedOrPublished";
import { superAdminOnly, superAdminOnlyAdmin } from "@/access/roleBasedAccess";

// Import original blocks
import { Hotspot } from "@/blocks/(ecommerce)/Hotspot/config";
import { Accordion } from "@/blocks/Accordion/config";
import { Archive } from "@/blocks/ArchiveBlock/config";
import { CallToAction } from "@/blocks/CallToAction/config";
import { Carousel } from "@/blocks/Carousel/config";
import { Content } from "@/blocks/Content/config";
import { FormBlock } from "@/blocks/Form/config";
import { MediaBlock } from "@/blocks/MediaBlock/config";

// Import content blocks
import { Blurb } from "@/blocks/contentBlock/Blurb/config";
import { Text } from "@/blocks/contentBlock/Text/config";
import { Divider } from "@/blocks/contentBlock/Divider/config";
import { Toggle } from "@/blocks/contentBlock/Toggle/config";
import { Tabs } from "@/blocks/contentBlock/Tabs/config";
import { Testimonial } from "@/blocks/contentBlock/Testimonial/config";
import { TeamMember } from "@/blocks/contentBlock/TeamMember/config";
import { PricingTable } from "@/blocks/contentBlock/PricingTable/config";
import { Counter } from "@/blocks/contentBlock/Counter/config";
import { ProgressBar } from "@/blocks/contentBlock/ProgressBar/config";
import { Icon } from "@/blocks/contentBlock/Icon/config";
import { List } from "@/blocks/contentBlock/List/config";

// Import section blocks instead
import {
  TwoEqualColumnsSection,
  ThreeEqualColumnsSection,
  FourEqualColumnsSection,
  TwoThirdsOneThirdSection,
  OneThirdTwoThirdsSection,
  OneQuarterThreeQuartersSection,
  ThreeQuartersOneQuarterSection,
  TwoRowsTwoColumnsSection,
  TwoRowsThreeColumnsSection,
  ThreeRowsTwoColumnsSection,
  ThreeRowsThreeColumnsSection,
  SidebarMainLayoutSection,
  MainSidebarLayoutSection,
  HeaderTwoColumnsLayoutSection,
  HeaderThreeColumnsLayoutSection,
  MasonryLayoutSection,
} from "@/section/blocks";

import { hero } from "@/components/heros/config";
import { slugField } from "@/fields/slug";
import { populatePublishedAt } from "@/hooks/populatePublishedAt";
import { generatePreviewPath } from "@/utilities/generatePreviewPath";

import { revalidateDelete, revalidatePage } from "./hooks/revalidatePage";

import type { Access, CollectionConfig } from "payload";
import { AboutPage } from "@/blocks/About/config";
import { TextBlock } from "@/blocks/Heading";
import { LayoutBlock } from "@/blocks/Container";
import { ButtonBlock } from "@/blocks/Button";

const access: any = ({ req }) => {
  const user = req.user;
  const url = req?.url;
  if (url?.includes("/api")) {
    return true;
  }
  if (user?.collection == "administrators" && (url?.includes("/api") || user?.role === "superadmin")) {
    return true;
  } else if (user?.collection == "administrators" && user?.role == "admin") {
    return {
      createdBy: {
        equals: user.id,
      },
    };
  } else if (user?.collection == "administrators" && user.role == "tenants") {
    return {
      "tenant.tenantID": {
        equals: user.id,
      },
    };
  } else {
    return false;
  }
};

export const Pages: CollectionConfig<"pages"> = {
  slug: "pages",

  access: {
    admin: superAdminOnlyAdmin,
    create: superAdminOnly,
    delete: superAdminOnly,
    read: access,
    update: superAdminOnly,
  },
  labels: {
    singular: {
      en: "Page",
      pl: "Strona",
    },
    plural: {
      en: "Pages",
      pl: "Strony",
    },
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ["title", "slug", "updatedAt"],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          path: `/${typeof data?.slug === "string" ? data.slug : ""}`,
          locale: req.locale,
        });
        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        path: `/${typeof data?.slug === "string" ? data.slug : ""}`,
        locale: req.locale,
      }),
    useAsTitle: "title",
    group: {
      en: "Page Settings",
      pl: "Ustawienia strony",
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          fields: [hero],
          label: "Hero",
        },
        {
          fields: [
            {
              name: "section",
              type: "blocks",
              blocks: [
                // === EQUAL COLUMNS ===

                TwoEqualColumnsSection,
                ThreeEqualColumnsSection,
                FourEqualColumnsSection,

                // === OFFSET COLUMNS ===

                TwoThirdsOneThirdSection,
                OneThirdTwoThirdsSection,
                OneQuarterThreeQuartersSection,
                ThreeQuartersOneQuarterSection,

                // === MULTI ROW ===

                TwoRowsTwoColumnsSection,
                TwoRowsThreeColumnsSection,
                ThreeRowsTwoColumnsSection,
                ThreeRowsThreeColumnsSection,

                // === MULTI COLUMN ===

                SidebarMainLayoutSection,
                MainSidebarLayoutSection,
                HeaderTwoColumnsLayoutSection,
                HeaderThreeColumnsLayoutSection,
                MasonryLayoutSection,

                // === CONTENT BLOCKS ===

                // Original Blocks
                // CallToAction,
                // Content,
                // MediaBlock,
                // Archive,
                // FormBlock,
                // Carousel,
                // Accordion,
                // Hotspot,

                // Content Blocks (Divi-inspired)

                // Other Blocks
                // AboutPage,
                // TextBlock,
                // LayoutBlock,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
            {
              name: "Code",
              type: "code",
              admin: {
                language: "HTML",
              },
            },
          ],
          label: "Content",
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: "media",
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
          localized: true,
        },
      ],
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "website",
      type: "relationship",
      relationTo: "websites",
      required: true,
      admin: { position: "sidebar" },
      filterOptions: ({ user }) => {
        if (!user) return false;
        if (user.collection == "administrators" && user.role === "superadmin") return true;
        return {
          createdBy: { equals: user.id },
        };
      },
    },
    {
      name: "createdBy",
      type: "relationship",
      relationTo: "administrators",
      required: true,
      defaultValue: ({ req: { user } }) => user?.id,
      admin: {
        readOnly: true,
        position: "sidebar",
      },
    },

    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    beforeDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
};
