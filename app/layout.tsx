import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://auslife.store";
const BRAND = "AUS LIFE";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#c9a85c" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1310" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "仙佛護持・避邪淨化隨身噴霧｜AUS LIFE",
    template: "%s｜AUS LIFE",
  },
  description:
    "融合秘魯聖木、白鼠尾草、乳香等七大神聖植物精油，經儀式加持的隨身淨化噴霧。為辦公、醫療、公共空間建立無形能量防護。",
  keywords: [
    "避邪噴霧",
    "淨化噴霧",
    "避邪淨化噴霧",
    "隨身噴霧",
    "神聖植物精油",
    "秘魯聖木",
    "Palo Santo",
    "白鼠尾草",
    "乳香",
    "沒藥",
    "岩蘭草",
    "杜松精油",
    "大西洋雪松",
    "能量防護",
    "空間淨化",
    "氣場淨化",
    "能量噴霧",
    "祈福噴霧",
    "仙佛護持",
    "發財噴霧",
    "Money Magnet Mist",
    "財運香氛",
    "AUS LIFE",
    "auslife.store",
  ],
  applicationName: BRAND,
  authors: [{ name: BRAND, url: SITE_URL }],
  creator: BRAND,
  publisher: BRAND,
  category: "天然香氛・能量保養",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName: BRAND,
    locale: "zh_TW",
    alternateLocale: ["zh_HK"],
    type: "website",
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
    title: "仙佛護持・避邪淨化隨身噴霧｜AUS LIFE",
    description:
      "七大神聖植物精油・隨身能量防護。融合秘魯聖木、白鼠尾草、乳香等植物精華，為日常建立淨化結界。",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "zh-TW": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "1zPLqymOi-iBw1NrZMFaS7FNbpCZJw8HRXjyx6WS-QI",
  },
  other: {
    "format-detection": "telephone=no",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND,
  legalName: "舒園國際開發有限公司",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "AUS LIFE 專注於天然植物精油能量保養，結合跨文化神聖植物傳統與現代芳療，為日常建立淨化儀式。",
  areaServed: "TW",
  telephone: "+886-4-2275-2009",
  address: {
    "@type": "PostalAddress",
    streetAddress: "精美路 122 號",
    addressLocality: "太平區",
    addressRegion: "台中市",
    addressCountry: "TW",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+886-4-2275-2009",
    contactType: "customer service",
    areaServed: "TW",
    availableLanguage: ["zh-TW"],
  },
  sameAs: [
    "https://www.auslife.com.tw/",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND,
  url: SITE_URL,
  inLanguage: "zh-TW",
  publisher: {
    "@type": "Organization",
    name: BRAND,
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://d2xsxph8kpxj0f.cloudfront.net" crossOrigin="" />
        <link rel="dns-prefetch" href="https://d2xsxph8kpxj0f.cloudfront.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@400;500;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
