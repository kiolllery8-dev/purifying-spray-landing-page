import type { Metadata } from "next";
import TestimonialClient from "./TestimonialClient";

const URL = "https://auslife.store/3/";
const TITLE = "避邪淨化噴霧真人實測｜超過 3,000 人見證・327 則真實評價";
const DESCRIPTION =
  "護理師、房仲、長輩真實回饋：告別式、醫院、空屋探訪後的淨化儀式。七大神聖植物精油隨身噴霧，細緻水霧無痕跡、天然植物香氣，4.9/5 星真實評價。";

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
};

export default function Page() {
  return (
    <main>
      <TestimonialClient />
    </main>
  );
}
