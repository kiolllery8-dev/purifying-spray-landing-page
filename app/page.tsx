"use client";

/**
 * 仙佛護持・避邪淨化隨身噴霧 Landing Page
 * Design: Dark Sacred Temple — 暗黑神聖殿堂美學
 * Color: Deep forest black + amber gold accents
 * Typography: Noto Serif TC (headings) + Noto Sans TC (body) + Playfair Display (accents)
 * NOTE: All text sizes enlarged for accessibility (presbyopia-friendly)
 */

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const CDN = {
  video: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/video_3b5375e5.mp4",
  product: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/product_8565c208.png",
  productOriginal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/product_original_ac29e218.png",
  forest: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/forest_6ff7043b.png",
  shield: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/shield_5ad71f1e.png",
  spray: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/spray_38d007ca.png",
  // 七大神聖植物圖片
  paloSanto: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/palo_santo-39ESnvRteMRMaekM4xvpGS.webp",
  juniper: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/juniper-4GBwxLrzzHMT7uVSuUxLWY.webp",
  vetiver: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/vetiver-C2wc3N6hrpYnbsCjozYJhr.webp",
  whiteSage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/white_sage-HjyKZboh263Ai7LXXcroF8.webp",
  atlasCedar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/atlas_cedar-9dniBVrfswnmWqvzE842M3.webp",
  frankincense: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/frankincense-UkD8S6LPms9kgV7pPVvBcW.webp",
  myrrh: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/myrrh-YwasQaYexDgtRbPn4VyTaC.webp",
};

/* ─── Particles Background ─── */
function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float-particle"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100 + 100}%`,
            background: `oklch(0.75 0.12 85 / ${Math.random() * 0.5 + 0.2})`,
            animationDuration: `${Math.random() * 15 + 10}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Section Wrapper with Scroll Animation ─── */
function AnimatedSection({ children, className = "", delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={CDN.forest}
        >
          <source src={CDN.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[oklch(0.1_0.01_150)]" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[oklch(0.75_0.12_85)] tracking-[0.35em] text-lg md:text-xl font-light mb-6"
          style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
        >
          仙 佛 護 持 ・ 避 邪 淨 化
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="gold-glow text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.92 0.05 85)" }}
        >
          啟動你的
          <br />
          <span style={{ color: "oklch(0.8 0.14 85)" }}>第一道結界</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-[oklch(0.8_0.02_85)] text-xl md:text-2xl max-w-2xl leading-relaxed font-light"
        >
          七大神聖植物精油配方，一噴即為自己升起一道能量防護罩。
          <br className="hidden md:block" />
          守住氣場，隔離外界干擾。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12"
        >
          <a
            href="#product"
            className="inline-block px-10 py-5 border border-[oklch(0.75_0.12_85/50%)] text-[oklch(0.85_0.1_85)] tracking-widest text-lg hover:bg-[oklch(0.75_0.12_85/15%)] transition-all duration-500 rounded-sm"
            style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
          >
            探 索 守 護 之 力
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-7 h-12 border border-[oklch(0.75_0.12_85/40%)] rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 rounded-full bg-[oklch(0.75_0.12_85/60%)]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Product Showcase ─── */
function ProductSection() {
  return (
    <div id="product" className="relative py-20 md:py-28 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[oklch(0.75_0.12_85/6%)] blur-[120px]" />

      <div className="container relative z-10">
        <AnimatedSection>
          <p
            className="text-center text-[oklch(0.75_0.12_85)] tracking-[0.3em] text-base md:text-lg mb-4"
            style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
          >
            SACRED PROTECTION
          </p>
          <h2
            className="text-center text-4xl md:text-6xl font-bold mb-8"
            style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.9 0.04 85)" }}
          >
            神聖守護・隨身結界
          </h2>
          <p className="text-center text-[oklch(0.65_0.02_85)] text-xl md:text-2xl max-w-3xl mx-auto mb-6 leading-relaxed">
            融合秘魯聖木、杜松、岩蘭草等七大神聖植物精油，
            經由仙佛加持護持，為你在混亂環境中守住氣場。
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <AnimatedSection delay={0.2}>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-[oklch(0.75_0.12_85/8%)] blur-[80px] animate-pulse-glow" />
              </div>
              <img
                src={CDN.product}
                alt="仙佛護持・避邪淨化隨身噴霧"
                className="relative z-10 w-full max-w-md rounded-lg gold-glow-box"
              />
            </div>
          </AnimatedSection>

          {/* Product Details */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full border border-[oklch(0.75_0.12_85/30%)] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="oklch(0.75 0.12 85)" strokeWidth="1.5">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.88 0.06 85)" }}>
                    仙佛加持・能量護持
                  </h3>
                  <p className="text-[oklch(0.6_0.02_85)] leading-relaxed text-lg">
                    經由神聖儀式加持，每一瓶都承載著守護的力量。為你在辦公、公共空間、醫療院所等場所，建立無形的能量防護。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full border border-[oklch(0.75_0.12_85/30%)] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="oklch(0.75 0.12 85)" strokeWidth="1.5">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    <path d="M12 6V12L16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.88 0.06 85)" }}>
                    七大神聖植物精油
                  </h3>
                  <p className="text-[oklch(0.6_0.02_85)] leading-relaxed text-lg">
                    秘魯聖木 Palo Santo、杜松精油、岩蘭草、白鼠尾草、大西洋雪松、乳香、沒藥 — 每一滴都是大自然的淨化結界。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full border border-[oklch(0.75_0.12_85/30%)] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="oklch(0.75 0.12 85)" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.88 0.06 85)" }}>
                    隨身攜帶・隨時淨化
                  </h3>
                  <p className="text-[oklch(0.6_0.02_85)] leading-relaxed text-lg">
                    10ml 輕巧瓶身，放入口袋或包包，隨時隨地為自己噴上一道結界。搬入新居、探病、參加告別式前，都能即時啟動防護。
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

/* ─── Ingredients Section ─── */
function IngredientsSection() {
  const ingredients = [
    { name: "秘魯聖木", en: "Palo Santo", desc: "南美洲千年淨化聖物，燃燒時散發溫暖木質香氣，驅散負面能量。", img: CDN.paloSanto },
    { name: "杜松精油", en: "Juniper", desc: "歐洲傳統淨化植物，守護空間的純淨與安寧。", img: CDN.juniper },
    { name: "岩蘭草", en: "Vetiver", desc: "深根大地的穩定力量，幫助扎根與安定心神。", img: CDN.vetiver },
    { name: "白鼠尾草", en: "White Sage", desc: "北美原住民神聖草藥，強力淨化與祝福之用。", img: CDN.whiteSage },
    { name: "大西洋雪松", en: "Atlas Cedar", desc: "古埃及神殿用材，象徵永恆與神聖的保護。", img: CDN.atlasCedar },
    { name: "乳香", en: "Frankincense", desc: "三千年神聖薰香，連結天地、提升靈性頻率。", img: CDN.frankincense },
    { name: "沒藥", en: "Myrrh", desc: "古老的療癒聖品，修復能量場的裂縫與損傷。", img: CDN.myrrh },
  ];

  return (
    <div className="relative py-20 md:py-28" style={{ background: "linear-gradient(180deg, oklch(0.1 0.01 150) 0%, oklch(0.08 0.015 150) 50%, oklch(0.1 0.01 150) 100%)" }}>
      <div className="container relative z-10">
        <AnimatedSection>
          <p
            className="text-center text-[oklch(0.75_0.12_85)] tracking-[0.3em] text-base md:text-lg mb-3"
            style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
          >
            SEVEN SACRED BOTANICALS
          </p>
          <h2
            className="text-center text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.9 0.04 85)" }}
          >
            七大神聖植物
          </h2>
          <p className="text-center text-[oklch(0.6_0.02_85)] text-xl md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed">
            每一種植物都承載著千年的淨化智慧，
            為你編織最強大的能量防護網。
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ingredients.slice(0, 6).map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.1}>
              <div className="group relative rounded-xl border border-[oklch(0.75_0.12_85/10%)] bg-[oklch(0.13_0.01_150/80%)] backdrop-blur-sm hover:border-[oklch(0.75_0.12_85/30%)] hover:bg-[oklch(0.15_0.01_150/90%)] transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.75_0.12_85/20%)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Plant Image */}
                <div className="w-full h-48 md:h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.01_150)] via-transparent to-transparent" style={{ top: '30%' }} />
                </div>
                {/* Text Content */}
                <div className="p-6 pt-4">
                  <p className="text-[oklch(0.75_0.12_85/60%)] text-sm md:text-base tracking-widest mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.en}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.88 0.06 85)" }}>
                    {item.name}
                  </h3>
                  <p className="text-[oklch(0.55_0.02_85)] text-base md:text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 7th ingredient centered */}
        <div className="max-w-md mx-auto mt-8">
          <AnimatedSection delay={0.6}>
            <div className="group relative rounded-xl border border-[oklch(0.75_0.12_85/10%)] bg-[oklch(0.13_0.01_150/80%)] backdrop-blur-sm hover:border-[oklch(0.75_0.12_85/30%)] hover:bg-[oklch(0.15_0.01_150/90%)] transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.75_0.12_85/20%)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-full h-48 md:h-56 overflow-hidden">
                <img
                  src={ingredients[6].img}
                  alt={ingredients[6].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.13_0.01_150)] via-transparent to-transparent" style={{ top: '30%' }} />
              </div>
              <div className="p-6 pt-4">
                <p className="text-[oklch(0.75_0.12_85/60%)] text-sm md:text-base tracking-widest mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {ingredients[6].en}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.88 0.06 85)" }}>
                  {ingredients[6].name}
                </h3>
                <p className="text-[oklch(0.55_0.02_85)] text-base md:text-lg leading-relaxed">
                  {ingredients[6].desc}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

/* ─── Shield / Protection Visual Section ─── */
function ShieldSection() {
  return (
    <div className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={CDN.shield} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.1_0.01_150)] via-transparent to-[oklch(0.1_0.01_150)]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p
              className="text-[oklch(0.75_0.12_85)] tracking-[0.3em] text-base md:text-lg mb-4"
              style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
            >
              ENERGY SHIELD ACTIVATED
            </p>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 leading-tight"
              style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.9 0.04 85)" }}
            >
              為自己升起
              <br />
              <span className="gold-glow" style={{ color: "oklch(0.8 0.14 85)" }}>一道能量防護罩</span>
            </h2>
            <p className="text-[oklch(0.65_0.02_85)] text-xl md:text-2xl leading-relaxed mb-14 max-w-3xl mx-auto">
              在混亂的環境中，你需要守住自己的氣場。
              一噴，讓安定與保護留在身上，隔開外界的干擾。
              無論是辦公室、醫院、公共空間，還是搬入新居、參加告別式 —
              隨時為自己啟動最溫柔的防護。
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
              {[
                { icon: "🛡️", title: "守護氣場", desc: "在混亂環境中維持內在安定" },
                { icon: "✨", title: "淨化空間", desc: "為居家與工作場所帶來清淨" },
                { icon: "🌿", title: "天然配方", desc: "100% 純天然植物精油萃取" },
              ].map((item) => (
                <div key={item.title} className="p-8">
                  <div className="text-5xl mb-5">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.88 0.06 85)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[oklch(0.55_0.02_85)] text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

/* ─── Usage Scenarios ─── */
function UsageSection() {
  const scenarios = [
    "辦公室・會議室",
    "公共空間・捷運",
    "醫療院所・探病",
    "搬入新居・裝潢後",
    "參加告別式",
    "感覺磁場混亂時",
    "冥想靜心前",
    "旅行住宿時",
  ];

  return (
    <div className="relative py-20 md:py-28" style={{ background: "linear-gradient(180deg, oklch(0.1 0.01 150) 0%, oklch(0.12 0.01 150) 100%)" }}>
      <div className="container relative z-10">
        <AnimatedSection>
          <p
            className="text-center text-[oklch(0.75_0.12_85)] tracking-[0.3em] text-base md:text-lg mb-4"
            style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
          >
            WHEN TO USE
          </p>
          <h2
            className="text-center text-4xl md:text-6xl font-bold mb-10"
            style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.9 0.04 85)" }}
          >
            適用場景
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
            {scenarios.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="px-8 py-4 rounded-full border border-[oklch(0.75_0.12_85/20%)] text-[oklch(0.8_0.04_85)] text-lg md:text-xl hover:bg-[oklch(0.75_0.12_85/10%)] hover:border-[oklch(0.75_0.12_85/40%)] transition-all duration-400"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

/* ─── How To Use Section ─── */
function HowToUseSection() {
  const steps = [
    {
      step: "01",
      title: "隨身攜帶",
      desc: "10ml 輕巧瓶身，放入口袋或包包，隨時準備好你的結界。",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="oklch(0.75 0.12 85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "噴灑淨化",
      desc: "將噴霧噴在自己的外部衣物部位，或想要淨化的部位，讓神聖植物精油為你建立防護。",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="oklch(0.75 0.12 85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "安心守護",
      desc: "讓能量防護罩包覆全身，安心面對各種環境與場合。",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="oklch(0.75 0.12 85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative py-20 md:py-28" style={{ background: "oklch(0.09 0.012 150)" }}>
      <div className="container relative z-10">
        <AnimatedSection>
          <p
            className="text-center text-[oklch(0.75_0.12_85)] tracking-[0.3em] text-base md:text-lg mb-3"
            style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
          >
            HOW TO USE
          </p>
          <h2
            className="text-center text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.9 0.04 85)" }}
          >
            使用方式
          </h2>
          <p className="text-center text-[oklch(0.6_0.02_85)] text-xl md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed">
            帶在身上，隨時噴在自己外部衣物部位
            或想要淨化的部位即可。
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item, i) => (
            <AnimatedSection key={item.step} delay={i * 0.15}>
              <div className="group relative p-8 rounded-xl border border-[oklch(0.75_0.12_85/10%)] bg-[oklch(0.13_0.01_150/80%)] backdrop-blur-sm hover:border-[oklch(0.75_0.12_85/30%)] transition-all duration-500 text-center">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.75_0.12_85/20%)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Step Number */}
                <p
                  className="text-[oklch(0.75_0.12_85/30%)] text-6xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.step}
                </p>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-full border border-[oklch(0.75_0.12_85/30%)] flex items-center justify-center mb-5">
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl md:text-3xl font-semibold mb-4"
                  style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.88 0.06 85)" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[oklch(0.6_0.02_85)] text-lg md:text-xl leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Video Section ─── */
function VideoSection() {
  return (
    <div className="relative py-20 md:py-28 overflow-hidden" style={{ background: "oklch(0.08 0.015 150)" }}>
      <div className="container relative z-10">
        <AnimatedSection>
          <p
            className="text-center text-[oklch(0.75_0.12_85)] tracking-[0.3em] text-base md:text-lg mb-4"
            style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
          >
            WATCH THE FILM
          </p>
          <h2
            className="text-center text-4xl md:text-6xl font-bold mb-10"
            style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.9 0.04 85)" }}
          >
            感受守護的力量
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden gold-glow-box">
            <video
              controls
              playsInline
              poster={CDN.forest}
              className="w-full aspect-video"
            >
              <source src={CDN.video} type="video/mp4" />
            </video>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "林小萱",
      age: 30,
      avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_hospital-buALMgnoPEUAucXsAsUggT.webp",
      scenario: "醫院",
      quote: "每次去醫院探病前，我都會先噴一下。回家後不再覺得身體沉重、精神疲憊，整個人清爽很多。現在已經是我包包裡的必備品了。",
    },
    {
      name: "陳志豪",
      age: 45,
      avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_spirit-PaKSCv5u5wSWCfgQ5yH7Tj.webp",
      scenario: "卡到陰",
      quote: "之前常常莫名頭痛、失眠，朋友說可能是卡到陰。用了這瓶噴霧後，睡眠品質明顯改善，那種沉重壓迫感也消失了，真的很神奇。",
    },
    {
      name: "張雅婷",
      age: 35,
      avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_colleague-RgfHtbUUupZpvHD88TXCdB.webp",
      scenario: "防小人",
      quote: "辦公室人際關係很複雜，總覺得有人在背後搞小動作。開始每天上班前噴一下之後，工作氛圍變好了，小人也不再來找麻煩。",
    },
    {
      name: "王柏翰",
      age: 28,
      avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_unlucky-7SH2JgVqUPwWcHNU67nKmu.webp",
      scenario: "倒楣事",
      quote: "有一陣子諸事不順，車子壞、手機摔、工作也出包。朋友推薦我試試這瓶噴霧，用了一週後運勢真的有感回升，倒楣的事情不再接連發生。",
    },
    {
      name: "劉美華",
      age: 55,
      avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_funeral-hAP56HEnLxJiuRAwVKevS5.webp",
      scenario: "喪葬場所",
      quote: "參加完告別式後總覺得身體不舒服、心情低落好幾天。現在每次去之前和之後都會噴，回來後身心狀態穩定許多，不再被那股沉重的氣場影響。",
    },
    {
      name: "許淑芬",
      age: 40,
      avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_miasma-F7pJemGCxckvyARbRTmrr9.webp",
      scenario: "防障氣",
      quote: "我對環境的能量很敏感，去人多的地方常常覺得頭暈不適。噴了這瓶之後，就像多了一層隱形的保護罩，再也不怕被外面的障氣影響了。",
    },
    {
      name: "黃國棟",
      age: 65,
      avatar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_karma-AhhQWgXELyAUdY9ypnX7YA.webp",
      scenario: "去業障",
      quote: "修行多年，深知業障對身心的影響。這瓶噴霧融合了七大神聖植物，每次靜坐前噴灑，能明顯感受到空間的淨化與內心的安定，是修行路上的好夥伴。",
    },
  ];

  return (
    <div className="relative py-20 md:py-28" style={{ background: "linear-gradient(180deg, oklch(0.08 0.015 150) 0%, oklch(0.1 0.01 150) 50%, oklch(0.08 0.015 150) 100%)" }}>
      <div className="container relative z-10">
        <AnimatedSection>
          <p
            className="text-center text-[oklch(0.75_0.12_85)] tracking-[0.3em] text-base md:text-lg mb-3"
            style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
          >
            REAL TESTIMONIALS
          </p>
          <h2
            className="text-center text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.9 0.04 85)" }}
          >
            使用者真實見證
          </h2>
          <p className="text-center text-[oklch(0.6_0.02_85)] text-xl md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed">
            來自各行各業的真實回饋，
            見證守護的力量。
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="group relative p-8 rounded-xl border border-[oklch(0.75_0.12_85/10%)] bg-[oklch(0.13_0.01_150/80%)] backdrop-blur-sm hover:border-[oklch(0.75_0.12_85/25%)] transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.75_0.12_85/20%)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Scenario Tag */}
                <div className="inline-block px-4 py-1.5 rounded-full border border-[oklch(0.75_0.12_85/30%)] bg-[oklch(0.75_0.12_85/8%)] mb-6">
                  <span className="text-[oklch(0.8_0.1_85)] text-base font-medium">{t.scenario}</span>
                </div>

                {/* Quote */}
                <p className="text-[oklch(0.7_0.02_85)] text-lg md:text-xl leading-relaxed mb-8 italic">
                  「{t.quote}」
                </p>

                {/* Avatar + Name */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[oklch(0.75_0.12_85/30%)]"
                  />
                  <div>
                    <p className="text-[oklch(0.85_0.04_85)] text-lg font-semibold" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                      {t.name}
                    </p>
                    <p className="text-[oklch(0.5_0.02_85)] text-base">
                      {t.age} 歲
                    </p>
                  </div>
                  {/* Star Rating */}
                  <div className="ml-auto flex gap-1">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <svg key={si} width="18" height="18" viewBox="0 0 24 24" fill="oklch(0.75 0.12 85)" stroke="none">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <div className="relative py-20 md:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[oklch(0.75_0.12_85/8%)] blur-[150px]" />

      <div className="container relative z-10 text-center">
        <AnimatedSection>
          <img
            src={CDN.productOriginal}
            alt="淨化噴霧產品"
            className="w-28 md:w-36 mx-auto mb-12 drop-shadow-[0_0_30px_oklch(0.75_0.12_85/30%)]"
          />
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 gold-glow leading-tight"
            style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.88 0.08 85)" }}
          >
            立即噴上你的
            <br />
            第一道結界 →
          </h2>
          <p className="text-[oklch(0.6_0.02_85)] text-xl md:text-2xl max-w-lg mx-auto mb-14 leading-relaxed">
            願守護神時刻看顧您。
            <br />
            讓安定與保護，從此刻開始。
          </p>

          <p className="text-center text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.85 0.12 85)" }}>
            售價290元<span className="text-xl md:text-2xl font-normal text-[oklch(0.6_0.02_85)]">&nbsp;/ 10ML</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <motion.a
              href="https://www.auslife.com.tw/products/f11e2fa5-1e20-42cf-8e0c-3aa8d4f0e07d"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, boxShadow: "0 0 40px oklch(0.75 0.12 85 / 50%), 0 0 80px oklch(0.75 0.12 85 / 20%)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-block px-12 py-5 bg-[oklch(0.75_0.12_85)] text-[oklch(0.1_0.01_150)] font-semibold tracking-wider text-lg rounded-sm transition-colors duration-300 hover:bg-[oklch(0.8_0.12_85)]"
              style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
            >
              立 即 購 買<br />2 入 免 運
            </motion.a>
            <motion.a
              href="https://line.me/R/ti/p/@ssh4900o"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, boxShadow: "0 0 30px oklch(0.75 0.12 85 / 25%)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-block px-12 py-5 border border-[oklch(0.75_0.12_85/40%)] text-[oklch(0.8_0.08_85)] tracking-wider text-lg rounded-sm transition-colors duration-300 hover:bg-[oklch(0.75_0.12_85/10%)] hover:border-[oklch(0.75_0.12_85/70%)]"
              style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
            >
              LINE 諮 詢
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

/* ─── Floating Product Card (Fixed Bottom-Right) ─── */
function FloatingProductCard() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (> 400px)
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 60, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-4 px-5 py-4 rounded-2xl shadow-2xl border border-[oklch(0.75_0.12_85/25%)] backdrop-blur-xl"
      style={{
        background: "oklch(0.12 0.015 150 / 92%)",
        boxShadow: "0 8px 40px oklch(0 0 0 / 40%), 0 0 20px oklch(0.75 0.12 85 / 12%)",
      }}
    >
      {/* Close button */}
      <button
        onClick={() => setDismissed(true)}
        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[oklch(0.2_0.01_150)] border border-[oklch(0.75_0.12_85/30%)] flex items-center justify-center text-[oklch(0.6_0.02_85)] hover:text-[oklch(0.85_0.1_85)] hover:bg-[oklch(0.25_0.01_150)] transition-colors"
        aria-label="關閉"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 2L10 10M10 2L2 10" />
        </svg>
      </button>

      {/* Product Image */}
      <div className="relative shrink-0">
        <div className="absolute inset-0 rounded-xl bg-[oklch(0.75_0.12_85/10%)] blur-lg" />
        <img
          src={CDN.productOriginal}
          alt="淨化噴霧"
          className="relative w-16 h-20 md:w-20 md:h-24 object-contain drop-shadow-[0_0_8px_oklch(0.75_0.12_85/30%)]"
        />
      </div>

      {/* Info + Button */}
      <div className="flex flex-col gap-2">
        <p
          className="text-base md:text-lg font-semibold leading-tight"
          style={{ fontFamily: "'Noto Serif TC', serif", color: "oklch(0.88 0.06 85)" }}
        >
          避邪淨化噴霧
        </p>
        <p className="text-lg md:text-xl font-bold" style={{ color: "oklch(0.8 0.14 85)" }}>
          NT$290
          <span className="text-sm font-normal text-[oklch(0.55_0.02_85)] ml-1">/ 10ML</span>
        </p>
        <motion.a
          href="https://www.auslife.com.tw/products/f11e2fa5-1e20-42cf-8e0c-3aa8d4f0e07d"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px oklch(0.75 0.12 85 / 40%)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="inline-block px-6 py-2.5 bg-[oklch(0.75_0.12_85)] text-[oklch(0.1_0.01_150)] font-semibold tracking-wider text-sm md:text-base rounded-lg text-center transition-colors duration-300 hover:bg-[oklch(0.8_0.12_85)]"
          style={{ fontFamily: "'Noto Sans TC', sans-serif" }}
        >
          立即購買<br />2入免運
        </motion.a>
      </div>
    </motion.div>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-[oklch(1_0_0/6%)] py-10" style={{ background: "oklch(0.08 0.01 150)" }}>
      <div className="container text-center">
        <p
          className="text-[oklch(0.75_0.12_85/60%)] text-base tracking-[0.2em] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sacred Protection Spray
        </p>
        <p className="text-[oklch(0.45_0.01_85)] text-base">
          © 2026 仙佛護持・避邪淨化隨身噴霧. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
      <Particles />
      <HeroSection />
      <ProductSection />
      <IngredientsSection />
      <ShieldSection />
      <UsageSection />
      <HowToUseSection />
      <VideoSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingProductCard />
    </div>
  );
}
