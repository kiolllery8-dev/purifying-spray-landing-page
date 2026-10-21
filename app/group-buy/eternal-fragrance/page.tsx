import type { Metadata } from "next";

const products = [
  {
    sku: "B361",
    name: "黃金爆富皂",
    size: "125g±10g",
    image: "https://cdn.auslife.tw/uploads/1777269827109-07c95798.jpg",
    description:
      "金磚造型香皂，使用時可搓揉出細緻泡沫，適合作為日常沐浴清潔，也可搭配節慶或贈禮情境選用。",
    url: "https://auslife.tw/products/beauty-crown-125g10g",
  },
  {
    sku: "A913",
    name: "尤加利滾珠精油",
    size: "5.3ml",
    image: "https://cdn.auslife.tw/uploads/1777269828229-4a60257e.jpg",
    description:
      "清新的尤加利香氣搭配隨身滾珠設計，體積輕巧，方便在通勤、工作或旅行時攜帶使用。",
    url: "https://auslife.tw/products/aus-life-53ml",
  },
  {
    sku: "A662",
    name: "茶樹檸檬香桃潔顏洗卸慕斯",
    size: "150ml",
    image: "https://cdn.auslife.tw/uploads/1777269815874-5f00fe3a.jpg",
    description:
      "按壓即可產生綿密泡沫，可作為日常臉部潔顏與卸除淡妝使用，讓清潔步驟簡單俐落。",
    url: "https://auslife.tw/products/auslife-cha-shu-ning-meng-xiang-tao-jie-yan-xi-xie-mu-si-150ml",
  },
  {
    sku: "A2057",
    name: "恬睡好眠精油滾珠",
    size: "10ml",
    image: "https://cdn.auslife.tw/uploads/1777269832629-faecb3a5.jpg",
    description:
      "以薰衣草、依蘭與洋甘菊等花草香氣調和的滾珠，可安排於晚間休息或睡前的日常聞香儀式。",
    url: "https://auslife.tw/products/aus-garden-10ml-7",
  },
  {
    sku: "A2052",
    name: "薰衣草精油滾珠",
    size: "10ml",
    image: "https://cdn.auslife.tw/uploads/1777269833510-a4f06245.jpg",
    description:
      "以經典薰衣草花香為主的隨身滾珠，適合在休息、閱讀或睡前使用，為日常增添柔和香氣。",
    url: "https://auslife.tw/products/aus-garden-10ml-2",
  },
  {
    sku: "A915",
    name: "薄荷滾珠精油",
    size: "5.3ml",
    image: "https://cdn.auslife.tw/uploads/1777269827848-61500473.jpg",
    description:
      "清新的薄荷香氣搭配方便使用的滾珠設計，適合在悶熱天氣、工作空檔或需要清新感時隨身使用。",
    url: "https://auslife.tw/products/auslife-bao-he-gun-zhu-jing-you-5.3ml",
  },
  {
    sku: "PP30",
    name: "薄荷淨涼舒緩滾珠油",
    size: "30ml",
    image: "/group-buy/eternal-fragrance/pp30-peppermint-roll-on.png",
    description:
      "以清新薄荷香氣為特色，滾珠設計可直接於局部肌膚輕柔滾動，使用時帶來清涼、清爽的觸感。30ml 規格方便隨身攜帶。",
    note: "實際成分、適用部位與使用方式請以產品包裝標示為準。",
  },
  {
    sku: "A931",
    name: "全效舒緩神奇茶樹霜",
    size: "25ml",
    image: "https://cdn.auslife.tw/uploads/1777269828817-aa6825cc.jpg",
    description:
      "含茶樹油精華的隨身霜，25ml 小容量便於日常或戶外活動攜帶；使用方式與適用部位請依產品標示。",
    url: "https://auslife.tw/products/auslife-quan-xiao-shu-huan-shen-qi-cha-shu-shuang-25ml",
  },
];

export const metadata: Metadata = {
  title: "永恆香氛有限公司｜團購商品資料",
  description: "永恆香氛有限公司團購需求商品之圖片、規格與產品資料。",
  alternates: {
    canonical: "/group-buy/eternal-fragrance/",
  },
  openGraph: {
    title: "永恆香氛有限公司｜團購商品資料",
    description: "本頁整理團購需求商品的圖片、規格與產品資訊。",
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
              className="font-serif text-lg tracking-[0.14em] text-[#f1e7c7]"
            >
              AUS LIFE
            </a>
            <span className="rounded-full border border-white/20 px-3 py-1 text-xs tracking-[0.12em] text-white/75">
              GROUP BUY
            </span>
          </div>
        </div>
      </header>

      <section className="border-b border-[#d9ded8] bg-[linear-gradient(135deg,#f8f5ed_0%,#e8eee8_100%)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-end md:py-20">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#477063]">
              ETERNAL FRAGRANCE
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-[#173e34] sm:text-5xl">
              永恆香氛有限公司
            </h1>
            <p className="mt-4 text-xl text-[#4d5f57]">團購商品資料</p>
            <p className="mt-6 max-w-2xl leading-8 text-[#66736d]">
              本頁整理本次需求商品的圖片、規格與簡要介紹，方便瀏覽與比較。各商品實際包裝、成分、售價及供貨狀況，請以澳思萊官網或後續確認資料為準。
            </p>
          </div>
          <div className="w-fit rounded-2xl border border-[#ccd5cf] bg-white/70 px-5 py-4 shadow-sm backdrop-blur">
            <span className="block text-xs tracking-[0.14em] text-[#718078]">SELECTED ITEMS</span>
            <strong className="mt-1 block font-serif text-3xl text-[#173e34]">{products.length} 項</strong>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16" aria-labelledby="products-heading">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] text-[#608174]">PRODUCT INFORMATION</p>
            <h2 id="products-heading" className="mt-2 font-serif text-3xl text-[#173e34]">
              本次需求商品
            </h2>
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
                  <span className="rounded-full bg-[#e8f0ec] px-3 py-1 text-xs font-bold tracking-[0.1em] text-[#366052]">
                    {product.sku}
                  </span>
                  <span className="text-sm font-medium text-[#718078]">{product.size}</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold leading-snug text-[#173e34]">
                  {product.name}
                </h3>
                <p className="mt-4 leading-7 text-[#5f6d66]">{product.description}</p>
                {product.note && <p className="mt-3 text-sm leading-6 text-[#7b867f]">{product.note}</p>}
                {product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#173e34] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#245749] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173e34]"
                  >
                    查看澳思萊官網資料
                    <span aria-hidden="true" className="ml-2">↗</span>
                  </a>
                ) : (
                  <p className="mt-6 inline-flex min-h-11 items-center rounded-full border border-[#cfd8d2] px-5 py-2.5 text-sm font-medium text-[#66736d]">
                    商品資料以實品標示為準
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#d9ded8] bg-[#e8ebe6]">
        <div className="mx-auto max-w-6xl px-5 py-9 text-sm leading-7 text-[#68756e] sm:px-8">
          <p>
            本頁為商品資料整理，不包含正式報價、交易條件或促購活動。商品資訊可能因官網更新而調整，實際內容以商品包裝及澳思萊官網即時資料為準。
          </p>
          <p className="mt-3 text-xs tracking-[0.08em] text-[#819088]">AUS LIFE · GROUP BUY INFORMATION</p>
        </div>
      </footer>
    </main>
  );
}
