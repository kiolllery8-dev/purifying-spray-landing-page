import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://auslife.store";

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
    "神聖植物精油",
    "秘魯聖木",
    "白鼠尾草",
    "乳香",
    "沒藥",
    "岩蘭草",
    "能量防護",
    "AUS LIFE",
  ],
  authors: [{ name: "AUS LIFE" }],
  creator: "AUS LIFE",
  publisher: "AUS LIFE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName: "AUS LIFE",
    locale: "zh_TW",
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
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "eBQecTnxY_7xwmP5sqWgCnpTVLZg47BsjpWEtGVn-Uk",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@400;500;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
