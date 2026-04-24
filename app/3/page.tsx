import type { Metadata } from "next";
import TestimonialClient from "./TestimonialClient";

const URL = "https://auslife.store/3/";
const TITLE = "避邪淨化噴霧真人實測｜超過 3,000 人見證・327 則真實評價";
const DESCRIPTION =
  "護理師、房仲、長輩真實回饋：告別式、醫院、空屋探訪後的淨化儀式。七大神聖植物精油隨身噴霧，細緻水霧無痕跡、天然植物香氣，4.9/5 星真實評價。";
const PUBLISHED_AT = "2026-03-20T00:00:00+08:00";
const MODIFIED_AT = "2026-04-24T00:00:00+08:00";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "避邪淨化噴霧",
    "真人實測",
    "淨化噴霧評價",
    "避邪噴霧推薦",
    "告別式淨化",
    "醫院淨化",
    "空屋淨化",
    "神聖植物精油",
    "護理師推薦",
    "房仲使用",
    "七大神聖植物",
    "隨身噴霧",
    "能量防護",
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
    section: "使用者見證",
    tags: ["避邪淨化噴霧", "真人實測", "使用者評價", "4.9 星評價"],
    images: [
      {
        url: "/og-image-3.png",
        width: 1200,
        height: 630,
        alt: "避邪淨化噴霧真人實測・3000+ 人見證 - AUS LIFE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image-3.png"],
  },
  other: {
    "article:published_time": PUBLISHED_AT,
    "article:modified_time": MODIFIED_AT,
    "article:section": "使用者見證",
    "article:tag": "避邪淨化噴霧,真人實測,使用者評價",
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
  "@id": "https://auslife.store/#product",
  name: "仙佛護持・避邪淨化隨身噴霧",
  alternateName: "Sacred Protection Spray",
  image: [
    "https://auslife.store/og-image-3.png",
    "https://auslife.store/og-image.png",
  ],
  description:
    "七大神聖植物精油隨身噴霧，護理師、房仲、長輩真實使用心得，超過 3,000 人見證。細緻水霧無痕跡，天然植物香氣清雅。",
  brand: { "@type": "Brand", name: "AUS LIFE" },
  manufacturer: { "@type": "Organization", name: "AUS LIFE" },
  category: "天然香氛 / 能量保養 / 避邪淨化噴霧",
  material: "秘魯聖木、杜松、岩蘭草、白鼠尾草、大西洋雪松、乳香、沒藥精油",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "TWD",
    lowPrice: "290",
    highPrice: "1200",
    offerCount: "4",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "AUS LIFE" },
    offers: [
      {
        "@type": "Offer",
        name: "1 入組（含運費）",
        url: "https://www.auslife.com.tw/products/f11e2fa5-1e20-42cf-8e0c-3aa8d4f0e07d",
        priceCurrency: "TWD",
        price: "290",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        priceValidUntil: "2027-12-31",
        eligibleQuantity: { "@type": "QuantitativeValue", value: 1 },
      },
      {
        "@type": "Offer",
        name: "2 入組（免運）",
        url: "https://www.auslife.com.tw/products/f11e2fa5-1e20-42cf-8e0c-3aa8d4f0e07d",
        priceCurrency: "TWD",
        price: "580",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        priceValidUntil: "2027-12-31",
        eligibleQuantity: { "@type": "QuantitativeValue", value: 2 },
      },
      {
        "@type": "Offer",
        name: "3 入組（免運）",
        url: "https://www.auslife.com.tw/products/f11e2fa5-1e20-42cf-8e0c-3aa8d4f0e07d",
        priceCurrency: "TWD",
        price: "699",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        priceValidUntil: "2027-12-31",
        eligibleQuantity: { "@type": "QuantitativeValue", value: 3 },
      },
      {
        "@type": "Offer",
        name: "6 入組（免運・最超值）",
        url: "https://www.auslife.com.tw/products/847a310e-b868-4212-8000-3d53c20fec66",
        priceCurrency: "TWD",
        price: "1200",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        priceValidUntil: "2027-12-31",
        eligibleQuantity: { "@type": "QuantitativeValue", value: 6 },
      },
    ],
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "這瓶噴霧的成分是什麼？安全嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "本產品嚴選七大神聖植物精華——秘魯聖木、杜松、岩蘭草、白鼠尾草、大西洋雪松、乳香、沒藥，以天然植物萃取製成，不含化學香精、酒精或防腐劑。通過 SGS 安全檢測，孕婦及兒童亦可安心使用。",
      },
    },
    {
      "@type": "Question",
      name: "噴霧的效果是心理作用嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "七大神聖植物在世界各地的傳統文化中已有數千年的淨化使用歷史。秘魯聖木被南美洲原住民用於驅邪淨化，白鼠尾草是北美原住民的神聖草藥，乳香與沒藥更是聖經中記載的神聖樹脂。超過 3,000 位使用者的真實回饋證實，這些天然植物的香氣確實能帶來心靈上的安定與舒適感。",
      },
    },
    {
      "@type": "Question",
      name: "什麼時候適合使用？",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "任何你覺得需要淨化或保護的時刻都適合使用：去醫院探病前後、參加告別式前後、進入陌生空間時、去宮廟拜拜回來後、面試或重要會議前、睡前淨化臥室、感覺身體沉重不舒服時。小巧瓶身放在包包裡，隨時隨地都能使用。",
      },
    },
    {
      "@type": "Question",
      name: "一瓶可以用多久？",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "每瓶容量為 30ml，以每次噴 2-3 下的使用量計算，日常使用約可持續 1-2 個月。建議開封後 6 個月內使用完畢，以確保植物精華的最佳效果。",
      },
    },
    {
      "@type": "Question",
      name: "可以噴在身上嗎？會不會弄髒衣服？",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "可以的！噴霧為細緻水霧狀，可直接噴灑於頭頂、肩膀、胸口等部位，也可噴灑在空間中。配方為透明無色，不會弄髒衣物或留下痕跡。天然植物香氣清雅，不會過於濃烈。",
      },
    },
    {
      "@type": "Question",
      name: "跟市面上的其他淨化噴霧有什麼不同？",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "本產品有三大獨特之處：第一，嚴選七大跨文化神聖植物，涵蓋南美洲、北美洲、歐洲、中東等地的千年淨化智慧；第二，每一批次皆經由仙佛護持加持，注入神聖能量；第三，100% 天然植物萃取，無化學添加，溫和不刺鼻。",
      },
    },
    {
      "@type": "Question",
      name: "如何購買？有什麼優惠？",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "您可以透過本頁面下方的選購按鈕前往官方商城選購，提供四種超值組合：1 入 NT$290（含運費）、2 入 NT$580（免運）、3 入 NT$699（免運）、6 入 NT$1,200（免運，單入最低 NT$200）。也可以透過 LINE 官方帳號（@auslife）諮詢客服了解更多組合方案。",
      },
    },
    {
      "@type": "Question",
      name: "有提供退換貨服務嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "我們提供 7 天鑑賞期退換貨服務。若商品未拆封使用，可於收到商品後 7 天內申請退換貨。如有任何問題，歡迎透過 LINE 官方帳號聯繫我們的客服團隊，我們將竭誠為您服務。",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "首頁", item: "https://auslife.store/" },
    { "@type": "ListItem", position: 2, name: "真人實測評價", item: URL },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: ["https://auslife.store/og-image-3.png"],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
        <TestimonialClient />
      </main>
    </>
  );
}
