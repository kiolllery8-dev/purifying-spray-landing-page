import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const URL = "https://auslife.store/";
const TITLE = "仙佛護持・避邪淨化隨身噴霧｜七大神聖植物精油能量防護";
const DESCRIPTION =
  "融合秘魯聖木、杜松、岩蘭草、白鼠尾草、大西洋雪松、乳香、沒藥七大神聖植物精油，經儀式加持的隨身淨化噴霧。為辦公、醫療、公共空間建立能量防護，啟動你的第一道結界。";
const PUBLISHED_AT = "2026-04-01T00:00:00+08:00";
const MODIFIED_AT = "2026-04-24T00:00:00+08:00";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: { "zh-TW": URL, "x-default": URL },
  },
  openGraph: {
    type: "website",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "AUS LIFE",
    locale: "zh_TW",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "仙佛護持・避邪淨化隨身噴霧 - AUS LIFE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  other: {
    "article:published_time": PUBLISHED_AT,
    "article:modified_time": MODIFIED_AT,
    "og:price:amount": "290",
    "og:price:currency": "TWD",
    "product:price:amount": "290",
    "product:price:currency": "TWD",
    "product:availability": "instock",
    "product:brand": "AUS LIFE",
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${URL}#product`,
  name: "仙佛護持・避邪淨化隨身噴霧",
  alternateName: "Sacred Protection Spray",
  image: [
    `${URL}og-image.png`,
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/product_8565c208.png",
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/product_original_ac29e218.png",
  ],
  description: DESCRIPTION,
  brand: { "@type": "Brand", name: "AUS LIFE" },
  manufacturer: { "@type": "Organization", name: "AUS LIFE" },
  category: "天然香氛 / 能量保養 / 避邪淨化噴霧",
  audience: { "@type": "PeopleAudience", geographicArea: { "@type": "Country", name: "Taiwan" } },
  material: "秘魯聖木、杜松、岩蘭草、白鼠尾草、大西洋雪松、乳香、沒藥精油",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "TWD",
    lowPrice: "290",
    highPrice: "1200",
    offerCount: "4",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "AUS LIFE" },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "327",
    reviewCount: "327",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: URL },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main>
        <HomeClient />
      </main>
    </>
  );
}
