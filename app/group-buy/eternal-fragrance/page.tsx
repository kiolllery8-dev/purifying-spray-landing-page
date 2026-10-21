import type { Metadata } from "next";

const products = [
  {
    sku: "B361",
    name: "黃金爆富皂",
    size: "125g±10g",
    image: "https://cdn.auslife.tw/uploads/1777269827109-07c95798.jpg",
    description:
      "金磚造型香皂，使用時可搓揉出細緻泡沫，適合作為日常沐浴清潔，也可搭配節慶或贈禮情境選用。",
    details: [
      "黃金爆富皂以醒目的金磚造型呈現，兼具日常清潔用品與主題贈禮的視覺特色。使用時以清水沾濕皂體，在掌心或沐浴用品上搓揉起泡，再依一般清潔方式使用。",
      "125g±10g 的份量適合居家使用，也能搭配開工、入厝、節慶或祝福主題組合。金色外觀醒目，陳列時也具有鮮明的主題感。",
    ],
    highlights: ["金磚造型", "日常清潔", "節慶贈禮"],
    url: "https://auslife.tw/products/beauty-crown-125g10g",
  },
  {
    sku: "A913",
    name: "尤加利滾珠精油",
    size: "5.3ml",
    image: "https://cdn.auslife.tw/uploads/1777269828229-4a60257e.jpg",
    description:
      "清新的尤加利香氣搭配隨身滾珠設計，體積輕巧，方便在通勤、工作或旅行時攜帶使用。",
    details: [
      "尤加利滾珠精油以清新、帶有草本感的尤加利氣息為主，5.3ml 小容量方便放入口袋、隨身包或旅行收納袋。滾珠頭可控制局部使用範圍，使用簡單俐落。",
      "適合安排在通勤、工作空檔、長途移動或戶外活動時使用。請依商品標示塗抹於適用部位，避開眼周、黏膜及受傷肌膚；初次使用者可先少量測試。",
    ],
    highlights: ["尤加利香氣", "5.3ml 隨身瓶", "滾珠設計"],
    url: "https://auslife.tw/products/aus-life-53ml",
  },
  {
    sku: "A662",
    name: "茶樹檸檬香桃潔顏洗卸慕斯",
    size: "150ml",
    image: "https://cdn.auslife.tw/uploads/1777269815874-5f00fe3a.jpg",
    description:
      "按壓即可產生綿密泡沫，可作為日常臉部潔顏與卸除淡妝使用，讓清潔步驟簡單俐落。",
    details: [
      "潔顏洗卸慕斯採按壓式泡沫瓶，省去另外搓泡的步驟。綿密泡沫可在清潔時減少反覆摩擦，適合作為每日臉部清潔，亦可依產品標示用於卸除日常淡妝。",
      "使用時先以清水潤濕肌膚，取適量泡沫輕柔按摩，再以清水洗淨。濃妝、防水型彩妝或眼唇彩妝，可依個人需要搭配專用卸妝產品。",
    ],
    highlights: ["按壓式泡沫", "日常潔顏", "150ml 容量"],
    url: "https://auslife.tw/products/auslife-cha-shu-ning-meng-xiang-tao-jie-yan-xi-xie-mu-si-150ml",
  },
  {
    sku: "A2057",
    name: "恬睡好眠精油滾珠",
    size: "10ml",
    image: "https://cdn.auslife.tw/uploads/1777269832629-faecb3a5.jpg",
    description:
      "以薰衣草、依蘭與洋甘菊等花草香氣調和的滾珠，可安排於晚間休息或睡前的日常聞香儀式。",
    details: [
      "這款複方滾珠以薰衣草、依蘭與洋甘菊等花草香氣調和，氣味柔和，適合融入夜晚休息前的個人聞香習慣。10ml 滾珠瓶方便控制用量，也適合放在床邊或旅行盥洗包中。",
      "可依產品標示於適用部位少量滾動，搭配安靜閱讀、伸展或休息前的日常程序使用。",
    ],
    highlights: ["花草複方香氣", "晚間聞香", "10ml 滾珠瓶"],
    url: "https://auslife.tw/products/aus-garden-10ml-7",
  },
  {
    sku: "A2052",
    name: "薰衣草精油滾珠",
    size: "10ml",
    image: "https://cdn.auslife.tw/uploads/1777269833510-a4f06245.jpg",
    description:
      "以經典薰衣草花香為主的隨身滾珠，適合在休息、閱讀或睡前使用，為日常增添柔和香氣。",
    details: [
      "薰衣草精油滾珠以熟悉的薰衣草花香為主，氣味柔和，適合偏好單一主調香氣的人。滾珠包裝讓使用更方便，10ml 規格也利於隨身攜帶。",
      "可在閱讀、休息、旅行住宿或晚間個人儀式中，依包裝標示少量使用。香氣感受因人而異，初次使用或肌膚較敏感者，建議先於小範圍測試。",
    ],
    highlights: ["薰衣草花香", "日常聞香", "方便攜帶"],
    url: "https://auslife.tw/products/aus-garden-10ml-2",
  },
  {
    sku: "A915",
    name: "薄荷滾珠精油",
    size: "5.3ml",
    image: "https://cdn.auslife.tw/uploads/1777269827848-61500473.jpg",
    description:
      "清新的薄荷香氣搭配方便使用的滾珠設計，適合在悶熱天氣、工作空檔或需要清新感時隨身使用。",
    details: [
      "薄荷滾珠精油以鮮明的薄荷氣息為特色，使用時帶來清新、沁涼的感受。5.3ml 小瓶身不占空間，適合放在工作包、運動袋或旅行隨身用品中。",
      "可依產品標示於適用部位少量滾動，適合悶熱天氣、工作空檔或外出時使用，為日常帶來清新沁涼的感受。",
    ],
    highlights: ["薄荷清新感", "小巧隨身", "局部滾動使用"],
    url: "https://auslife.tw/products/auslife-bao-he-gun-zhu-jing-you-5.3ml",
  },
  {
    sku: "PP30",
    name: "薄荷淨涼舒緩滾珠油",
    size: "30ml",
    image: "/group-buy/eternal-fragrance/pp30-peppermint-roll-on.png",
    description:
      "以清新薄荷香氣為特色，滾珠設計可直接於局部肌膚輕柔滾動，使用時帶來清涼、清爽的觸感。30ml 容量兼顧使用份量與攜帶便利性，可放在辦公桌、隨身包或旅行收納袋中，依產品標示於需要時使用。",
    details: [
      "複合精油舒緩滾珠以清新薄荷氣息為主要特色，滾動時帶來清涼、清爽的使用感受。滾珠頭可貼合局部肌膚，方便控制使用範圍，不必直接以手沾取。",
      "30ml 規格兼顧日常使用份量與攜帶便利性，可放在辦公桌、隨身包或旅行收納袋中。",
    ],
    highlights: ["30ml 容量", "複合清新氣息", "滾珠設計"],
  },
  {
    sku: "A931",
    name: "全效舒緩神奇茶樹霜",
    size: "25ml",
    image: "https://cdn.auslife.tw/uploads/1777269828817-aa6825cc.jpg",
    description:
      "含茶樹油精華的隨身霜，25ml 小容量便於日常或戶外活動攜帶；使用方式與適用部位請依產品標示。",
    details: [
      "全效舒緩神奇茶樹霜以茶樹油精華為商品特色，採25ml 小容量包裝，適合放在居家用品櫃、隨身包或戶外活動收納袋中備用。霜狀質地便於依需要取用。",
      "使用時依產品標示取適量，均勻塗抹於適用部位。霜狀質地方便控制用量，適合日常或外出時使用。",
    ],
    highlights: ["茶樹油精華", "25ml 隨身容量", "霜狀質地"],
    url: "https://auslife.tw/products/auslife-quan-xiao-shu-huan-shen-qi-cha-shu-shuang-25ml",
  },
];

export const metadata: Metadata = {
  title: "永恆香氛有限公司",
  description: "永恆香氛有限公司商品圖片、規格與產品資料。",
  alternates: {
    canonical: "/group-buy/eternal-fragrance/",
  },
  openGraph: {
    title: "永恆香氛有限公司",
    description: "永恆香氛有限公司商品圖片、規格與產品資訊。",
    url: "/group-buy/eternal-fragrance/",
    type: "website",
  },
};

export default function EternalFragranceGroupBuyPage() {
  return (
    <main className="min-h-screen bg-[#f3f1ea] text-[#24332c]">
      <header className="border-b border-[#d9ded8] bg-[#173e34] text-white">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8">
          <div className="flex items-center justify-between gap-6">
            <a
              href="https://auslife.store/"
              className="font-serif text-lg tracking-[0.05em] text-[#f1e7c7]"
            >
              AUS LIFE
            </a>
            <span className="rounded-full border border-white/20 px-3 py-1 text-xs tracking-[0.05em] text-white/75">
              GROUP BUY
            </span>
          </div>
        </div>
      </header>

      <section className="border-b border-[#d9ded8] bg-[linear-gradient(135deg,#f8f5ed_0%,#e8eee8_100%)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-end md:py-20">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.05em] text-[#477063]">
              ETERNAL FRAGRANCE
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-[#173e34] sm:text-5xl">
              永恆香氛有限公司
            </h1>
          </div>
          <div className="w-fit rounded-2xl border border-[#ccd5cf] bg-white/70 px-5 py-4 shadow-sm backdrop-blur">
            <span className="block text-xs tracking-[0.05em] text-[#718078]">SELECTED ITEMS</span>
            <strong className="mt-1 block font-serif text-3xl text-[#173e34]">{products.length} 項</strong>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16" aria-label="商品資訊">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold tracking-[0.05em] text-[#608174]">PRODUCT INFORMATION</p>
          </div>
          <p className="hidden text-sm text-[#718078] sm:block">資料更新：2026/10/21</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.sku}
              className="group overflow-hidden rounded-[1.4rem] border border-[#d8ded9] bg-white shadow-[0_12px_35px_rgba(31,62,51,0.06)]"
            >
              <div className="flex min-h-72 items-center justify-center bg-[#f8f8f4] p-6 sm:p-8">
                <img
                  src={product.image}
                  alt={`${product.name} ${product.size} 商品圖片`}
                  className="max-h-64 max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-[#edf0ed] p-6 sm:p-7">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#e8f0ec] px-3 py-1 text-xs font-bold tracking-[0.05em] text-[#366052]">
                    {product.sku}
                  </span>
                  <span className="text-sm font-medium text-[#718078]">{product.size}</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold leading-snug text-[#173e34]">
                  {product.name}
                </h3>
                <p className="mt-4 leading-7 text-[#5f6d66]">{product.description}</p>
                <details className="group/detail mt-6 overflow-hidden rounded-2xl border border-[#d7dfda] bg-[#f8faf7]">
                  <summary className="flex min-h-12 list-none items-center justify-between gap-4 px-5 py-3 font-semibold text-[#173e34] transition-colors hover:bg-[#eef3ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#173e34] [&::-webkit-details-marker]:hidden">
                    <span>查看詳細介紹</span>
                    <span
                      aria-hidden="true"
                      className="text-xl leading-none transition-transform duration-200 group-open/detail:rotate-45"
                    >
                      ＋
                    </span>
                  </summary>
                  <div className="border-t border-[#dfe5e1]">
                    <div className="flex min-h-52 items-center justify-center bg-white p-5">
                      <img
                        src={product.image}
                        alt={`${product.name} ${product.size} 詳細介紹圖`}
                        className="max-h-48 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-4 p-5 text-sm leading-7 text-[#5f6d66] sm:p-6">
                      {product.details.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {product.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="rounded-full border border-[#cfdbd4] bg-white px-3 py-1 text-xs font-medium text-[#416457]"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                      {product.url ? (
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center rounded-full bg-[#173e34] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#245749] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173e34]"
                        >
                          查看澳思萊官網完整說明
                          <span aria-hidden="true" className="ml-2">↗</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>

        <article className="mt-12 overflow-hidden rounded-[1.75rem] border border-[#d5ddd7] bg-[#173e34] text-white shadow-[0_18px_50px_rgba(31,62,51,0.12)] sm:mt-16">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex min-h-[420px] items-center justify-center bg-[#f4f6f1] p-6 sm:p-10 lg:min-h-[640px]">
              <img
                src="/group-buy/eternal-fragrance/pp30-peppermint-roll-on.png"
                alt="PP30 複合精油舒緩滾珠 30ml 詳細商品圖"
                className="max-h-[590px] w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="text-sm font-semibold tracking-[0.05em] text-[#bad4c8]">PP30 · 30ml</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                複合精油舒緩滾珠
              </h2>
              <p className="mt-6 leading-8 text-white/80">
                以清新薄荷氣息為主要特色，滾動時帶來清涼、清爽的使用感受。滾珠頭可貼合局部肌膚，方便控制使用範圍，不必直接以手沾取，讓日常使用更簡單。
              </p>
              <p className="mt-4 leading-8 text-white/80">
                30ml 規格適合放在辦公桌、隨身包或旅行收納袋中，可依產品標示，在工作空檔、運動後或外出時使用。
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["30ml", "日常使用容量"],
                  ["滾珠設計", "方便局部使用"],
                  ["清新氣息", "薄荷涼感體驗"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <strong className="block text-[#f1e7c7]">{title}</strong>
                    <span className="mt-1 block text-sm leading-6 text-white/65">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/15 pt-7">
                <h3 className="font-semibold text-[#f1e7c7]">使用方式</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  依產品包裝標示，於適用部位少量滾動，可安排在工作空檔、運動後或外出時使用。
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <footer className="border-t border-[#d9ded8] bg-[#e8ebe6]">
        <div className="mx-auto max-w-6xl px-5 py-9 text-sm leading-7 text-[#68756e] sm:px-8">
          <p>本頁整理商品圖片、規格與使用資訊，內容將依澳思萊官網及商品資料持續更新。</p>
          <p className="mt-3 text-xs tracking-[0.05em] text-[#819088]">AUS LIFE · GROUP BUY INFORMATION</p>
        </div>
      </footer>
    </main>
  );
}
