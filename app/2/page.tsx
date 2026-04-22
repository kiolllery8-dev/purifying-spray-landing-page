import type { Metadata } from "next";
import MoneyMagnetClient from "./MoneyMagnetClient";

const URL = "https://auslife.store/2/";
const TITLE = "發財噴霧 Money Magnet Mist｜植物能量・財運磁場隨身香氛";
const DESCRIPTION =
  "岩蘭草、甜橙、甜羅勒、廣藿香四款植物能量調香，依五行土生金原理設計。命理塔羅老師推薦，為皮夾、名片、衣物注入財運磁場的隨身香氛儀式。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "AUS LIFE",
    locale: "zh_TW",
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
};

export default function Page() {
  return (
    <main>
      <MoneyMagnetClient />
    </main>
  );
}
