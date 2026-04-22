import type { Metadata } from "next";
import Script from "next/script";
import HomeClient from "./HomeClient";

const URL = "https://auslife.store/";
const TITLE = "仙佛護持・避邪淨化隨身噴霧｜七大神聖植物精油能量防護";
const DESCRIPTION =
  "融合秘魯聖木、杜松、岩蘭草、白鼠尾草、大西洋雪松、乳香、沒藥七大神聖植物精油，經儀式加持的隨身淨化噴霧。為辦公、醫療、公共空間建立能量防護，啟動你的第一道結界。";
const META_PIXEL_ID = "929045363234091";

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
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      <main>
        <HomeClient />
      </main>
    </>
  );
}
