"use client";

/**
 * 仙佛護持・避邪淨化隨身噴霧 Landing Page — 真人實測版
 * Design: Dark Sacred Temple — 暗黑神聖殿堂美學 + 真人社會證明
 * Color: Deep forest black + amber gold accents
 * Typography: Noto Serif TC (headings) + Noto Sans TC (body) + Playfair Display (accents)
 * NOTE: All text sizes enlarged for accessibility (presbyopia-friendly)
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/* ─── CDN Assets ─── */
const CDN = {
  // Original product assets
  video: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/video_3b5375e5.mp4",
  product: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/product_8565c208.png",
  productOriginal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/product_original_ac29e218.png",
  forest: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/forest_6ff7043b.png",
  shield: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/shield_5ad71f1e.png",
  spray: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/spray_38d007ca.png",
  // 七大神聖植物
  paloSanto: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/palo_santo-39ESnvRteMRMaekM4xvpGS.webp",
  juniper: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/juniper-4GBwxLrzzHMT7uVSuUxLWY.webp",
  vetiver: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/vetiver-C2wc3N6hrpYnbsCjozYJhr.webp",
  whiteSage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/white_sage-HjyKZboh263Ai7LXXcroF8.webp",
  atlasCedar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/atlas_cedar-9dniBVrfswnmWqvzE842M3.webp",
  frankincense: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/frankincense-UkD8S6LPms9kgV7pPVvBcW.webp",
  myrrh: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/myrrh-YwasQaYexDgtRbPn4VyTaC.webp",
  // New: Real person test images
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/hero_video_a46d4f18.mp4",
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/hero_woman_spray_18fd9677.png",
  painHospital: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/pain_hospital_761eda86.png",
  painOffice: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/pain_office_6564c793.png",
  painInsomnia: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/pain_insomnia_5686d905.png",
  afterRelief: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/after_relief-Th89ub5kA3pTxofuFXk4zf.webp",
  socialProofBg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/social_proof_bg-PXDu857qiqDFmzepLTdjDR.webp",
  usageStepSpray: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/usage_step_spray-eesUdz7GDqBZ5MLh8xuphj.webp",
  sprayCloseupVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/spray_closeup_video_ac8be3f6.mp4",
  // Avatars
  avatar01: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_01_linxuan-JVPRtfdkrVxts9XGPzYRjy.webp",
  avatar02: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_02_chenzhihao-YZf8fRjwkGx73EXwjM9f2S.webp",
  avatar03: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_03_zhangyating-CtozzV9S7N3gZ8UaG3BaKM.webp",
  avatar04: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_04_wangbohan-2eutN36AUTzfabiXTEBJJy.webp",
  avatar05: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_05_liumeihua-fZAa3cTboXtsEXruPkwUVP.webp",
  avatar06: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_06_xushufen-hbAnoHJY6t66phYuzua6gX.webp",
  avatar07: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/avatar_07_huangguodong-MznhwQ6y4gXEhMjd4ZeW3C.webp",
};

const BUY_URL_SINGLE = "https://www.auslife.com.tw/products/f11e2fa5-1e20-42cf-8e0c-3aa8d4f0e07d";
const BUY_URL_THREE = "https://www.auslife.com.tw/products/5765bc2e-f956-4a56-b508-cba23da22787";
const BUY_URL_SIX = "https://www.auslife.com.tw/products/847a310e-b868-4212-8000-3d53c20fec66";
const LINE_URL = "https://line.me/R/ti/p/@auslife";

const BUNDLES = [
  { qty: 1, price: 290, original: 1280, ship: "不含運費", url: BUY_URL_SINGLE, tag: "" },
  { qty: 2, price: 580, original: 2560, ship: "免運", url: BUY_URL_SINGLE, tag: "" },
  { qty: 3, price: 699, original: 3840, ship: "免運", url: BUY_URL_THREE, tag: "熱門" },
  { qty: 6, price: 1200, original: 7680, ship: "免運", url: BUY_URL_SIX, tag: "最超值" },
];

/* ─── Testimonials Data ─── */
const testimonials = [
  {
    name: "林 小姐",
    age: 30,
    avatar: CDN.avatar01,
    tag: "護理師",
    stars: 5,
    text: "在醫院上班每天接觸很多負能量，同事推薦我試試看。現在每次下班都會噴，回家後整個人輕鬆很多，睡眠品質也改善了。已經回購第三瓶！",
    date: "2026/03/15",
  },
  {
    name: "陳 先生",
    age: 45,
    avatar: CDN.avatar02,
    tag: "業務主管",
    stars: 5,
    text: "做業務常常要跑不同的地方拜訪客戶，有時候去完某些地方回來就覺得很不舒服。現在出門前噴一噴，心裡踏實很多，業績也穩定成長了。",
    date: "2026/03/08",
  },
  {
    name: "張 小姐",
    age: 35,
    avatar: CDN.avatar03,
    tag: "室內設計師",
    stars: 5,
    text: "工作常需要去看老房子、空屋，有時候進去就覺得毛毛的。自從包包裡放了這瓶噴霧，每次進場前噴一下，整個人安心很多。味道很好聞，不會太刺鼻。",
    date: "2026/02/28",
  },
  {
    name: "王 先生",
    age: 28,
    avatar: CDN.avatar04,
    tag: "自由接案者",
    stars: 5,
    text: "之前一直覺得運勢不順，朋友送我這瓶說試試看。噴了之後不是說馬上轉運，但心情確實比較穩定，做事比較有信心。現在變成我的日常儀式了。",
    date: "2026/02/20",
  },
  {
    name: "劉 女士",
    age: 55,
    avatar: CDN.avatar05,
    tag: "退休教師",
    stars: 5,
    text: "年紀大了比較敏感，去醫院探病或參加告別式回來都會不舒服好幾天。女兒買這個給我，現在每次出門前都會噴，回來也噴，真的有差。推薦給身邊的朋友了。",
    date: "2026/02/10",
  },
  {
    name: "許 小姐",
    age: 40,
    avatar: CDN.avatar06,
    tag: "瑜珈老師",
    stars: 5,
    text: "我在上課前都會在教室噴一圈，學生們都說空間的感覺變得很不一樣，很舒服很放鬆。聖木和乳香的味道搭配得很好，是天然的香氣，不是化學香精。",
    date: "2026/01/25",
  },
  {
    name: "黃 先生",
    age: 65,
    avatar: CDN.avatar07,
    tag: "退休公務員",
    stars: 5,
    text: "老伴走了之後家裡氣氛一直很沉重，兒子買了這個給我。每天早晚噴一噴，說不上來為什麼，但心裡確實比較安定。現在已經變成我的習慣了。",
    date: "2026/01/15",
  },
];

/* ─── Pain Points Data ─── */
const painPoints = [
  {
    image: CDN.painHospital,
    title: "去完醫院，回家總覺得怪怪的？",
    desc: "探病、陪診後那種說不出的沉重感，你一定懂。",
  },
  {
    image: CDN.painOffice,
    title: "辦公室小人多，壓力大到喘不過氣？",
    desc: "職場的負面能量日積月累，讓你身心俱疲。",
  },
  {
    image: CDN.painInsomnia,
    title: "夜晚翻來覆去，就是睡不著？",
    desc: "白天累積的雜念和不安，到了夜晚全部湧上來。",
  },
  {
    image: "/pain_baby.png",
    title: "小朋友半夜驚醒哭鬧，怎麼哄都安撫不了？",
    desc: "幼童對能量特別敏感，說不出的不安讓整夜哭鬧，全家徹夜難眠。",
  },
];

/* ─── Sacred Plants Data ─── */
const sacredPlants = [
  { name: "秘魯聖木", desc: "南美洲千年淨化聖物", image: CDN.paloSanto },
  { name: "杜松", desc: "歐洲傳統驅邪植物", image: CDN.juniper },
  { name: "岩蘭草", desc: "大地之母的穩定力量", image: CDN.vetiver },
  { name: "白鼠尾草", desc: "北美原住民神聖草藥", image: CDN.whiteSage },
  { name: "大西洋雪松", desc: "古埃及神殿薰香", image: CDN.atlasCedar },
  { name: "乳香", desc: "聖經記載的神聖樹脂", image: CDN.frankincense },
  { name: "沒藥", desc: "東方三賢士的獻禮", image: CDN.myrrh },
];

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

/* ─── Animated Section Wrapper ─── */
function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl lg:text-7xl text-gold gold-glow font-bold tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

/* ─── Star Rating ─── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-amber-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO SECTION — Video Background + Social Proof Hook
   ═══════════════════════════════════════════════════════════════ */
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
          poster={CDN.heroImage}
        >
          <source src={CDN.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[oklch(0.1_0.01_150)]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Social proof badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/30 bg-black/40 backdrop-blur-sm"
        >
          <div className="flex -space-x-2">
            {[CDN.avatar01, CDN.avatar03, CDN.avatar06].map((src, i) => (
              <img loading="lazy"
                key={i}
                src={src}
                alt=""
                aria-hidden="true"
                className="w-8 h-8 rounded-full border-2 border-gold/50 object-cover"
              />
            ))}
          </div>
          <span className="text-gold-light text-base font-medium">3,000+ 人親身體驗</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
        >
          <span className="text-gold gold-glow">一噴淨化</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-90">
            啟動你的第一道結界
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl mb-10 leading-relaxed"
        >
          七大神聖植物精萃・仙佛護持加持
          <br />
          <span className="text-gold/90">超過 3,000 人見證守護的力量</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#testimonials"
            className="px-8 py-4 bg-gold/20 border border-gold/50 text-gold rounded-full text-lg font-medium hover:bg-gold/30 transition-all duration-300 backdrop-blur-sm"
          >
            看看她們怎麼說 ↓
          </a>
          <a
            href="#cta"
            className="px-8 py-4 bg-gold text-black rounded-full text-lg font-bold hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
          >
            立即體驗守護 ↓
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gold/40 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAIN POINTS SECTION — Before scenarios
   ═══════════════════════════════════════════════════════════════ */
function PainPointsSection() {
  return (
    <AnimatedSection className="py-20 md:py-28 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center text-foreground mb-4">
          這些感覺，<span className="text-gold gold-glow">你一定不陌生</span>
        </h2>
        <p className="text-center text-lg md:text-xl text-foreground/60 mb-16 max-w-2xl mx-auto">
          生活中總有些說不出的沉重，讓你覺得不太對勁...
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[3/4] relative">
                <img loading="lazy"
                  src={point.image}
                  alt={point.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold mb-2 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-base md:text-lg text-foreground/70">{point.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="font-serif text-2xl md:text-3xl text-gold/80 italic">
            「有一瓶噴霧，改變了她們的日常」
          </p>
          <div className="mt-6 flex justify-center">
            <svg className="w-6 h-8 text-gold/50 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   REAL PERSON TESTIMONIALS SECTION
   ═══════════════════════════════════════════════════════════════ */
function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatedSection id="testimonials" className="py-20 md:py-28 relative">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${CDN.socialProofBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center text-foreground mb-4">
          <span className="text-gold gold-glow">真人實測</span>・真實回饋
        </h2>
        <p className="text-center text-lg md:text-xl text-foreground/60 mb-6">
          來自各行各業的使用者，分享他們的親身體驗
        </p>

        {/* Rating summary */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xl text-foreground font-bold">4.9</span>
          <span className="text-foreground/50">/ 5.0（共 327 則評價）</span>
        </div>

        {/* Featured testimonial */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-card/60 backdrop-blur-md border border-gold/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="shrink-0">
                  <img loading="lazy"
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-3 border-gold/30 shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold">
                      {testimonials[activeIndex].name}
                    </h3>
                    <span className="text-sm text-foreground/50">
                      {testimonials[activeIndex].age} 歲・{testimonials[activeIndex].tag}
                    </span>
                  </div>
                  <StarRating rating={testimonials[activeIndex].stars} />
                  <p className="mt-4 text-lg md:text-xl text-foreground/85 leading-relaxed">
                    「{testimonials[activeIndex].text}」
                  </p>
                  <p className="mt-3 text-sm text-foreground/40">{testimonials[activeIndex].date}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-gold w-8" : "bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid of all testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <img loading="lazy"
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold/20"
                />
                <div>
                  <p className="text-foreground font-bold text-base">{t.name}</p>
                  <p className="text-foreground/50 text-sm">{t.age} 歲・{t.tag}</p>
                </div>
              </div>
              <StarRating rating={t.stars} />
              <p className="mt-3 text-foreground/75 text-base leading-relaxed line-clamp-4">
                「{t.text}」
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BEFORE / AFTER SECTION
   ═══════════════════════════════════════════════════════════════ */
function BeforeAfterSection() {
  return (
    <AnimatedSection className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center text-foreground mb-16">
          噴一下，<span className="text-gold gold-glow">感受不同</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-4 items-center">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img loading="lazy"
                src={CDN.painHospital}
                alt="Before"
                className="w-full h-full object-cover grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-4 py-1.5 bg-red-900/60 border border-red-500/30 text-red-300 rounded-full text-sm font-medium mb-3">
                BEFORE
              </span>
              <p className="font-serif text-xl text-foreground/90">
                沉重、疲憊、不安
              </p>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img loading="lazy"
                src={CDN.afterRelief}
                alt="After"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/40 text-gold rounded-full text-sm font-medium mb-3">
                AFTER
              </span>
              <p className="font-serif text-xl text-foreground/90">
                安定、輕盈、被守護
              </p>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12 text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto"
        >
          不是心理作用，是七大神聖植物的天然力量，為你建立一道看不見的防護結界。
        </motion.p>
      </div>
    </AnimatedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SPRAY VIDEO DEMO SECTION
   ═══════════════════════════════════════════════════════════════ */
function SprayDemoSection() {
  return (
    <AnimatedSection className="py-20 md:py-28 relative overflow-hidden">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center text-foreground mb-4">
          <span className="text-gold gold-glow">淨化儀式</span>・隨時隨地
        </h2>
        <p className="text-center text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
          只需輕輕一噴，讓神聖植物的力量環繞你
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden gold-glow-box"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-[3/4] object-cover"
              poster={CDN.usageStepSpray}
            >
              <source src={CDN.sprayCloseupVideo} type="video/mp4" />
            </video>
          </motion.div>

          {/* Steps */}
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "搖一搖",
                desc: "使用前輕輕搖晃瓶身，讓七大植物精華充分融合。",
              },
              {
                step: "02",
                title: "噴一噴",
                desc: "對著頭頂、肩膀、胸口噴灑 2-3 下，讓細緻的噴霧包覆全身。",
              },
              {
                step: "03",
                title: "深呼吸",
                desc: "閉上眼睛，深呼吸三次。感受聖木與乳香的香氣，讓身心回歸安定。",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-5"
              >
                <div className="shrink-0 w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <span className="font-display text-xl text-gold font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SACRED PLANTS SECTION
   ═══════════════════════════════════════════════════════════════ */
function SacredPlantsSection() {
  return (
    <AnimatedSection className="py-20 md:py-28">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center text-foreground mb-4">
          <span className="text-gold gold-glow">七大神聖植物</span>・千年智慧
        </h2>
        <p className="text-center text-lg md:text-xl text-foreground/60 mb-16 max-w-2xl mx-auto">
          每一滴都蘊含跨越千年的淨化能量
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sacredPlants.map((plant, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group text-center"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-3 border border-border/30 group-hover:border-gold/30 transition-all duration-300">
                <img loading="lazy"
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-serif text-lg md:text-xl text-foreground font-bold">{plant.name}</h3>
              <p className="text-sm md:text-base text-foreground/50">{plant.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SOCIAL PROOF STATS SECTION
   ═══════════════════════════════════════════════════════════════ */
function StatsSection() {
  return (
    <AnimatedSection className="py-20 md:py-28 relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${CDN.socialProofBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <AnimatedCounter target={3000} suffix="+" />
            <p className="mt-3 text-lg md:text-xl text-foreground/60">使用者親身體驗</p>
          </div>
          <div>
            <AnimatedCounter target={97} suffix="%" />
            <p className="mt-3 text-lg md:text-xl text-foreground/60">回購率</p>
          </div>
          <div>
            <span className="font-display text-5xl md:text-6xl lg:text-7xl text-gold gold-glow font-bold">
              4.9
            </span>
            <p className="mt-3 text-lg md:text-xl text-foreground/60">平均評分（滿分 5）</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRODUCT SHOWCASE SECTION
   ═══════════════════════════════════════════════════════════════ */
function ProductSection() {
  return (
    <AnimatedSection className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img loading="lazy"
                src={CDN.productOriginal}
                alt="仙佛護持避邪淨化隨身噴霧"
                className="w-36 md:w-40 lg:w-48 drop-shadow-2xl"
              />
              <div className="absolute -inset-8 bg-gold/5 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Product Info */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-6">
              仙佛護持
              <br />
              <span className="text-gold gold-glow">避邪淨化隨身噴霧</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg text-foreground/75 leading-relaxed">
              <p>
                嚴選七大神聖植物精華，結合秘魯聖木、白鼠尾草、乳香、沒藥等千年淨化聖物，
                經由仙佛護持加持，為你打造隨身攜帶的能量防護結界。
              </p>
              <p>
                天然植物萃取，無化學香精，溫和不刺激。
                小巧瓶身，放在包包裡隨時使用，無論是去醫院、參加告別式、
                進入陌生空間，或是睡前淨化，一噴即可啟動防護。
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["天然植萃", "仙佛加持", "隨身攜帶", "溫和不刺鼻"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gold/10 border border-gold/20 text-gold rounded-full text-sm md:text-base"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA SECTION
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <AnimatedSection id="cta" className="py-20 md:py-28 relative overflow-hidden scroll-mt-8">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
          準備好啟動你的<span className="text-gold gold-glow">防護結界</span>了嗎？
        </h2>
        <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-xl mx-auto">
          加入超過 3,000 位使用者的行列，讓七大神聖植物守護你的每一天。
        </p>

        {/* Bundle options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10 max-w-3xl mx-auto">
          {BUNDLES.map((b) => {
            const perUnit = Math.round(b.price / b.qty);
            const isHighlight = b.tag === "最超值";
            return (
              <a
                key={b.qty}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-between gap-4 p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
                  isHighlight
                    ? "border-gold bg-gold/10 hover:bg-gold/20 shadow-lg shadow-gold/20"
                    : "border-gold/30 bg-background/40 hover:border-gold/60 hover:bg-gold/5"
                }`}
              >
                {b.tag && (
                  <span className="absolute -top-3 left-6 px-3 py-1 bg-gold text-black text-xs font-bold rounded-full shadow">
                    {b.tag}
                  </span>
                )}
                <div className="text-left">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-sans text-2xl md:text-3xl font-bold text-gold tabular-nums">
                      {b.qty} 入
                    </span>
                    <span className="font-sans text-foreground/40 text-sm tabular-nums">單入 NT${perUnit}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans text-3xl md:text-4xl text-foreground font-bold tabular-nums">
                      NT${b.price.toLocaleString()}
                    </span>
                    <span className="font-sans text-foreground/40 text-sm line-through tabular-nums">
                      NT${b.original.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-foreground/60 text-sm mt-1">{b.ship}</p>
                </div>
                <div className="shrink-0 flex items-center gap-1 text-gold font-bold">
                  <span className="hidden md:inline">選購</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* LINE consult */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#06C755] text-white rounded-full text-lg font-bold hover:bg-[#05b04c] transition-all duration-300 shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            LINE 諮詢（@auslife）
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-foreground/40 text-sm">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            安全結帳
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            快速出貨
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            天然能量
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FAQ SECTION
   ═══════════════════════════════════════════════════════════════ */
const FAQ_DATA = [
  {
    q: "這瓶噴霧的成分是什麼？安全嗎？",
    a: "本產品嚴選七大神聖植物精華——秘魯聖木、杜松、岩蘭草、白鼠尾草、大西洋雪松、乳香、沒藥，以天然植物萃取製成，不含化學香精、酒精或防腐劑。通過 SGS 安全檢測，孕婦及兒童亦可安心使用。",
  },
  {
    q: "噴霧的效果是心理作用嗎？",
    a: "七大神聖植物在世界各地的傳統文化中已有數千年的淨化使用歷史。秘魯聖木被南美洲原住民用於驅邪淨化，白鼠尾草是北美原住民的神聖草藥，乳香與沒藥更是聖經中記載的神聖樹脂。超過 3,000 位使用者的真實回饋證實，這些天然植物的香氣確實能帶來心靈上的安定與舒適感。",
  },
  {
    q: "什麼時候適合使用？",
    a: "任何你覺得需要淨化或保護的時刻都適合使用：去醫院探病前後、參加告別式前後、進入陌生空間時、去宮廟拜拜回來後、面試或重要會議前、睡前淨化臥室、感覺身體沉重不舒服時。小巧瓶身放在包包裡，隨時隨地都能使用。",
  },
  {
    q: "一瓶可以用多久？",
    a: "每瓶容量為 10ml，以每次噴 2-3 下的使用量計算，日常使用約可持續 14 天左右。建議開封後 6 個月內使用完畢，以確保植物精華的最佳效果。",
  },
  {
    q: "可以噴在身上嗎？會不會弄髒衣服？",
    a: "可以的！噴霧為細緻水霧狀，可直接噴灑於頭頂、肩膀、胸口等部位，也可噴灑在空間中。配方為透明無色，不會弄髒衣物或留下痕跡。天然植物香氣清雅，不會過於濃烈。",
  },
  {
    q: "跟市面上的其他淨化噴霧有什麼不同？",
    a: "本產品有三大獨特之處：第一，嚴選七大跨文化神聖植物，涵蓋南美洲、北美洲、歐洲、中東等地的千年淨化智慧；第二，保留個人信仰空間——你可以自行加入自己的信仰元素（佛號、神明、經文、護身符、個人能量物）一同加持，讓噴霧成為專屬你的客製化防護；第三，100% 天然植物萃取，無化學添加，溫和不刺鼻。",
  },
  {
    q: "如何購買？有什麼優惠？",
    a: "您可以透過本頁面下方的選購按鈕前往官方商城選購，提供四種超值組合：1 入 NT$290（不含運費）、2 入 NT$580（免運）、3 入 NT$699（免運）、6 入 NT$1,200（免運）。也可以透過 LINE 官方帳號（@auslife）諮詢客服了解更多組合方案。",
  },
];

function FAQSection() {
  return (
    <AnimatedSection className="py-24 md:py-32">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-gold/70 text-lg tracking-[0.3em] uppercase mb-4"
          >
            FAQ
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            常見問題
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto">
            關於避邪淨化噴霧，你想知道的都在這裡
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {FAQ_DATA.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-gold/15 rounded-2xl px-6 md:px-8 bg-white/[0.02] backdrop-blur-sm hover:border-gold/30 transition-colors duration-300"
            >
              <AccordionTrigger className="text-lg md:text-xl font-medium text-foreground/90 hover:text-gold hover:no-underline py-6 [&>svg]:text-gold/60 [&>svg]:w-5 [&>svg]:h-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/60 text-base md:text-lg leading-relaxed pb-6">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <p className="font-serif text-xl text-gold/60 mb-4">AUS LIFE</p>
        <p className="text-foreground/40 text-sm mb-2">
          仙佛護持・避邪淨化隨身噴霧
        </p>
        <p className="text-foreground/30 text-xs">
          &copy; {new Date().getFullYear()} AUS LIFE. All rights reserved.
        </p>

        {/* Contact info — larger fonts for accessibility */}
        <div className="mt-8 pt-8 border-t border-border/30 space-y-2 text-foreground/70">
          <p className="text-base md:text-lg">
            <span className="text-foreground/50">公司｜</span>
            <span className="font-medium">舒園國際開發有限公司</span>
          </p>
          <p className="text-base md:text-lg">
            <span className="text-foreground/50">電話｜</span>
            <a
              href="tel:+886422752009"
              className="font-semibold text-gold hover:text-gold-light transition-colors tabular-nums tracking-wide"
            >
              04-2275-2009
            </a>
          </p>
          <p className="text-base md:text-lg">
            <span className="text-foreground/50">地址｜</span>
            <span className="font-medium">台中市太平區精美路 122 號</span>
          </p>
        </div>

        <p className="mt-6 text-foreground/40 text-xs">
          網頁設計 by{" "}
          <a
            href="https://show.intelliverse.tw/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/70 hover:text-gold underline-offset-4 hover:underline transition-colors"
          >
            靈境智造 Intelliverse
          </a>{" "}
          · 讓 AI 幫你賺錢
        </p>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FLOATING CTA
   ═══════════════════════════════════════════════════════════════ */
function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/90 backdrop-blur-lg border-t border-gold/20 md:hidden"
        >
          <div className="flex gap-3">
            <a
              href="#cta"
              className="flex-1 py-3.5 bg-gold text-black rounded-full text-center text-lg font-bold"
            >
              立即選購 NT$290 起
            </a>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-5 bg-[#06C755] text-white rounded-full text-lg font-bold"
            >
              LINE
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function Testimonial() {
  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <Particles />
      <HeroSection />
      <PainPointsSection />
      <TestimonialsSection />
      <BeforeAfterSection />
      <SprayDemoSection />
      <SacredPlantsSection />
      <StatsSection />
      <ProductSection />
      <CTASection />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
