import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "仙佛護持・避邪淨化隨身噴霧",
  description: "七大神聖植物精油・守護身心靈的隨身淨化儀式",
  metadataBase: new URL("https://auslife.store"),
  openGraph: {
    title: "仙佛護持・避邪淨化隨身噴霧",
    description: "七大神聖植物精油・守護身心靈的隨身淨化儀式",
    url: "https://auslife.store",
    siteName: "AUS LIFE",
    locale: "zh_TW",
    type: "website",
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
