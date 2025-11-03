import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { getPayload } from "payload";

import { ProductDetails } from "@/globals/(ecommerce)/Layout/ProductDetails/Component";
import { type Locale } from "@/i18n/config";
import config from "@payload-config";
import ProductGallery from "@/frontendComponents/sections/ProductGallery";
import ProductHeader from "@/frontendComponents/sections/ProductHeader";
import ProductSpecs from "@/frontendComponents/sections/ProductSpecs";
import RecommendedList from "@/frontendComponents/sections/RecommendedList";
import SliderBrand from "@/frontendComponents/sections/SliderBrand";
import NewsletterSection from "@/frontendComponents/sections/NewsletterSection";

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) => {
  try {
    const payload = await getPayload({ config });
    const locale = (await getLocale()) as Locale;
    const { slug } = await params;
    const { docs } = await payload.find({
      collection: "products",
      depth: 2,
      locale,
      where: {
        slug: {
          equals: slug,
        },
      },
    });
    const { variant } = await searchParams;

    if (docs.length === 0) {
      notFound();
    }

    const images: string[] = [
      "/assets/Image/product-image (1).png",
      "/assets/Image/product-image (1).png",
      "/assets/Image/product-image (1).png",
      "/assets/Image/product-image (2).png",
      "/assets/Image/product-image (2).png",
      "/assets/Image/product-image (2).png",
      "/assets/Image/product-image (3).png",
      "/assets/Image/product-image (4).png",
    ];

    return (
      <>
        {/* <ProductDetails variant={variant} product={docs[0]} /> */}
        <></>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ProductGallery images={images} />

            <div className="space-y-6">
              <ProductHeader />

              <ProductSpecs
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                specs={[
                  { label: "Length", value: "170 mm" },
                  { label: "Height", value: "45 mm" },
                  { label: "Thickness", value: "3.1 mm" },
                  { label: "Grinding", value: "Double-sided, Ryo-ba" },
                  { label: "Blade shape", value: "Petty Domestikus Vulgaris" },
                  { label: "Gift type", value: "Kitchen Knife" },
                  { label: "Knife use", value: "All purposes – except bone cutting" },
                ]}
                shipping="Enjoy Free shipping on $100+ orders in the US. We ship from our NYC office within 1–2 business days or less, often the same day as your order. Select from USPS and UPS shipping options for US & International orders, with Express options available for fast delivery anywhere in the world. Special shipping requirements? Just let us know."
                returns="We want you to be happy with your tools. If you're not, for any reason, you're welcome to return them within 14 days of the original purchase date. Returned items must be in new, unused condition. Due to the nature of handmade & one-of-a-kind objects, we reserve the right to charge up to 15% in restocking fees. If you have any questions, contact us anytime."
              />

              <RecommendedList
                items={[
                  {
                    id: "r1",
                    name: "Wooden Box",
                    priceEUR: 45,
                    image: "/assets/Image/category-img-2.png",
                    blurb:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                  },
                  {
                    id: "r2",
                    name: "Hoodie",
                    priceEUR: 65,
                    image: "/assets/Image/category-img.png",
                    blurb:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <SliderBrand />
        <NewsletterSection />
      </>
    );
  } catch {
    notFound();
  }
};

export default ProductPage;
