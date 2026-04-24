import type { Metadata } from "next";
import MoneyMagnetClient from "./MoneyMagnetClient";

const URL = "https://auslife.store/2/";
const TITLE = "發財噴霧 Money Magnet Mist｜植物能量・財運磁場隨身香氛";
const DESCRIPTION =
  "岩蘭草、甜橙、甜羅勒、廣藿香四款植物能量調香，依五行土生金原理設計。命理塔羅老師推薦，為皮夾、名片、衣物注入財運磁場的隨身香氛儀式。";
const PUBLISHED_AT = "2026-03-15T00:00:00+08:00";
const MODIFIED_AT = "2026-04-24T00:00:00+08:00";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "發財噴霧",
    "Money Magnet Mist",
    "財運香氛",
    "財運磁場",
    "植物能量",
    "岩蘭草",
    "甜橙精油",
    "甜羅勒",
    "廣藿香",
    "五行土生金",
    "命理推薦香氛",
    "塔羅",
    "招財噴霧",
    "AUS LIFE",
  ],
  alternates: {
    canonical: URL,
    languages: { "zh-TW": URL, "x-default": URL },
  },
  openGraph: {
    type: "article",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "AUS LIFE",
    locale: "zh_TW",
    publishedTime: PUBLISHED_AT,
    modifiedTime: MODIFIED_AT,
    authors: ["AUS LIFE"],
    section: "天然香氛",
    tags: ["發財噴霧", "財運香氛", "植物能量", "五行調香"],
    images: [
      {
        url: "/og-image-2.png",
        width: 1200,
        height: 630,
        alt: "發財噴霧 Money Magnet Mist - AUS LIFE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image-2.png"],
  },
  other: {
    "article:published_time": PUBLISHED_AT,
    "article:modified_time": MODIFIED_AT,
    "article:section": "天然香氛",
    "article:tag": "發財噴霧,財運香氛,植物能量,五行調香",
    "og:price:amount": "1280",
    "og:price:currency": "TWD",
    "product:price:amount": "1280",
    "product:price:currency": "TWD",
    "product:availability": "instock",
    "product:brand": "AUS LIFE",
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${URL}#product`,
  name: "發財噴霧 Money Magnet Mist",
  alternateName: "Money Magnet Mist 植物能量調香",
  image: [`${URL.replace(/2\/$/, "")}og-image-2.png`],
  description: DESCRIPTION,
  brand: { "@type": "Brand", name: "AUS LIFE" },
  manufacturer: { "@type": "Organization", name: "AUS LIFE" },
  category: "天然香氛 / 植物能量 / 財運香氛",
  material: "岩蘭草、甜橙、甜羅勒、廣藿香精油",
  offers: {
    "@type": "Offer",
    url: URL,
    priceCurrency: "TWD",
    price: "1280",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@type": "Organization", name: "AUS LIFE" },
    priceValidUntil: "2027-12-31",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://auslife.store/" },
    { "@type": "ListItem", position: 2, name: "發財噴霧 Money Magnet Mist", item: URL },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: [`https://auslife.store/og-image-2.png`],
  datePublished: PUBLISHED_AT,
  dateModified: MODIFIED_AT,
  author: { "@type": "Organization", name: "AUS LIFE", url: "https://auslife.store/" },
  publisher: {
    "@type": "Organization",
    name: "AUS LIFE",
    logo: { "@type": "ImageObject", url: "https://auslife.store/og-image.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  inLanguage: "zh-TW",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main>
        <MoneyMagnetClient />
      </main>
    </>
  );
}
