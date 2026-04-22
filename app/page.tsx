import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const URL = "https://auslife.store/";
const TITLE = "仙佛護持・避邪淨化隨身噴霧｜七大神聖植物精油能量防護";
const DESCRIPTION =
  "融合秘魯聖木、杜松、岩蘭草、白鼠尾草、大西洋雪松、乳香、沒藥七大神聖植物精油，經儀式加持的隨身淨化噴霧。為辦公、醫療、公共空間建立能量防護，啟動你的第一道結界。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
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
};

export default function Page() {
  return (
    <main>
      <HomeClient />
    </main>
  );
}
