import { draftMode, headers } from "next/headers";
import { setRequestLocale } from "next-intl/server";
import { getPayload } from "payload";
import React, { cache } from "react";

import { RenderBlocks } from "@/blocks/RenderBlocks";
import { PayloadRedirects } from "@/components/PayloadRedirects";
import { RenderHero } from "@/components/heros/RenderHero";
import { type Locale } from "@/i18n/config";
import { routing } from "@/i18n/routing";
import { generateMeta } from "@/utilities/generateMeta";
import config from "@payload-config";

import PageClient from "./page.client";

import type { Metadata } from "next";
import { getTenantByDomain } from "@/lib/getPage";
import Hero from "../../../../../frontendComponents/Hero";
import AboutKarloBan from "@/frontendComponents/sections/AboutKarloBan";
import AboutStrip from "@/frontendComponents/sections/AboutStrip";
import Testimonials from "@/frontendComponents/sections/Testimonials";
import ProductTabsGrid from "@/frontendComponents/sections/ProductTabsGrid";

const pettyProducts: any = [
  { id: "p1", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p2", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p3", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p4", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p5", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p6", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p7", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p8", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
];

const categories = [
  { id: "petty", label: "Petty", products: pettyProducts },
  { id: "gyuto", label: "Gyuto", products: pettyProducts.slice(0, 6) },
  { id: "santoku", label: "Santoku", products: pettyProducts.slice(0, 6) },
  { id: "nakiri", label: "Nakiri", products: pettyProducts.slice(0, 6) },
];

// export async function generateStaticParams() {
//   const payload = await getPayload({ config });
//   const pages = await payload.find({
//     collection: "pages",
//     draft: false,
//     limit: 1000,
//     overrideAccess: true,
//     pagination: false,
//     select: {
//       slug: true,
//     },
//   });

//   const params = routing.locales.flatMap((locale) => {
//     return pages.docs
//       ?.filter((doc) => doc.slug !== "home")
//       .map(({ slug }) => {
//         return { locale, slug };
//       });
//   });

//   return params;
// }

export async function generateStaticParams() {
  const payload = await getPayload({ config });
  const pages = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000,
    overrideAccess: true,
    pagination: false,
    select: {
      slug: true,
    },
  });

  // ✅ Ensure only valid slugs are included
  const params = routing.locales.flatMap((locale) => {
    return pages.docs
      ?.filter((doc) => typeof doc.slug === "string" && doc.slug.length > 0 && doc.slug !== "home")
      .map(({ slug }) => ({
        locale,
        slug,
      }));
  });

  console.log("Generated static params:", params); // optional debug

  return params;
}

type Args = {
  params: Promise<{
    locale: Locale;
    slug?: string;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  // const { isEnabled: draft } = await draftMode();
  const header = await headers();
  const domain = header.get("x-tenant-domain") || header.get("host") || "";

  const { slug = "home", locale } = await paramsPromise;

  let page: any = null;

  // if(!process.env.NEXT_PUBLIC_SERVER_URL.includes(domain)){
  page = await getTenantByDomain(domain, slug);
  if (!page) return <div>Page not found</div>;
  // }

  const url = `/${locale}/${slug}`;

  // page = await queryPageBySlug({
  //   slug,
  //   locale,
  // });

  // if (!page) {
  //   return <PayloadRedirects url={url} locale={locale} />;
  // }

  setRequestLocale(locale);

  const { hero, layout, Code } = page;
  console.log(page);

  return (
    <article className="pt-16 pb-24">
      {/* <PageClient /> */}
      {/* Allows redirects for valid pages too */}
      {!page && slug !== "home" && <PayloadRedirects locale={locale} url={url} />}

      {/* {draft && <LivePreviewListener />} */}

      <RenderHero {...hero} />
      {/* <Hero
        title="Izuzetna oštrina nadomak ruke"
        subtitle="Autentični, 100% ručno kovani noževi. Izrađeni da nadžive generacije."
        cta={{ label: "Kupi nož" }}
        // bgImage="/assets/hero/hero-knife.jpg"
      /> */}

      {/* <div dangerouslySetInnerHTML={{ __html: Code }} /> */}

      <AboutKarloBan />
      <AboutStrip />
      <section className="container mx-auto px-4 py-10">
        {/* Section Title */}
        <h3 className="mb-1 inline-block w-full border-b border-gray-200 pb-2 text-[16px] font-medium text-[#FF7020]">
          Naši kuharski noževi
        </h3>

        {/* Section Description */}
        <p className="max-w-4xl text-[28px] leading-[160%] font-medium text-[#4F4640]">
          Otkrijte kolekciju ručno kovanih noževa stvorenih za kuhare koji traže više od alata. Svaki model
          spaja preciznost, dugotrajnost i ljepotu rada iz majstorskih ruku.
        </p>
      </section>

      <ProductTabsGrid categories={categories} />

      <Testimonials />
      <RenderBlocks blocks={layout} />
    </article>
  );
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = "home", locale } = await paramsPromise;
  const page = await queryPageBySlug({
    slug,
    locale,
  });

  return generateMeta({ doc: page! });
}

const queryPageBySlug = cache(async ({ slug, locale }: { slug: string; locale: Locale }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config });

  try {
    const result = await payload.find({
      collection: "pages",
      draft,
      limit: 1,
      locale,
      pagination: false,
      overrideAccess: draft,
      where: {
        slug: {
          equals: slug,
        },
      },
    });
    return result.docs?.[0] || null;
  } catch (error) {
    // Now instead of global error we will know at least where the error is
    console.log("Main page error: ", error);
    return null;
  }
});
