"use client";

/**
 * Money Magnet Mist 發財噴霧 Landing Page
 * Native React component — converted from money-magnet.html
 * All CSS classes prefixed with mm- to avoid collision with main site styles
 */

import { useEffect, useRef, useCallback } from "react";
import "./MoneyMagnet.css";

/* ── CDN Assets ── */
const CDN = {
  bgAltar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/bg-altar_a100cf12.png",
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/money-hero_20d5029f.mp4",
  productAltar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/product-altar_3726674c.png",
  product: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/product_7e358a87.png",
  masterXuankong: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/master-xuankong_58a34eb2.png",
  masterWang: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/master-wang_51c218d9.png",
  flow01: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/flow-01_efb618a4.png",
  flow02: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/flow-02_8a21beb8.png",
  flow03: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/flow-03_5548eb7c.png",
  flow04: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/flow-04_b36a73e0.png",
  plantVetiver: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/plant-vetiver_f0675db5.png",
  plantOrange: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/plant-orange_bb8f3651.png",
  plantBasil: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/plant-basil_64aaf163.png",
  plantPatchouli: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/plant-patchouli_c00eb64e.png",
  testiLiyating: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/testi-liyating_96813f0b.png",
  testiWangmeili: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/testi-wangmeili_3db678e9.png",
  testiChenlizhu: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/testi-chenlizhu_b5d6b92e.png",
  testiZhengmeiling: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/testi-zhengmeiling_d33ce92e.png",
  sceneBoutique: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/scene-boutique_ccd8af38.png",
  sceneLottery: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/scene-lottery_f3496ed6.png",
  sceneOffice: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/scene-office_dfe0adb5.png",
  sceneCafe: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/scene-cafe_27dd98ef.png",
  ritualMorning: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/ritual-morning_af783c92.png",
  ritualWallet: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/ritual-wallet_06d1ae3c.png",
  ritualMeeting: "https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/ritual-meeting_838fffef.png",
};

const BUY_URL = "https://www.auslife.com.tw/products/08585bdc-4f68-4927-b42c-565b75989c76";

export default function MoneyMagnet() {
  const navRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const coinsRef = useRef<HTMLDivElement>(null);
  const burstLayerRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroFallbackRef = useRef<HTMLDivElement>(null);

  /* ── Set document title ── */
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "發財噴霧 · Money Magnet Mist｜植物能量・財運磁場";
    return () => { document.title = prevTitle; };
  }, []);

  /* ── Particles ── */
  useEffect(() => {
    const pc = particlesRef.current;
    if (!pc) return;
    const isMobile = window.matchMedia("(max-width:600px)").matches;
    const NP = isMobile ? 12 : 24;
    for (let i = 0; i < NP; i++) {
      const s = document.createElement("span");
      s.style.left = Math.random() * 100 + "vw";
      s.style.animationDelay = Math.random() * 18 + "s";
      s.style.animationDuration = (12 + Math.random() * 12) + "s";
      s.style.width = s.style.height = (1 + Math.random() * 2) + "px";
      pc.appendChild(s);
    }
    return () => { pc.innerHTML = ""; };
  }, []);

  /* ── Gold coins ── */
  useEffect(() => {
    const cl = coinsRef.current;
    if (!cl) return;
    const isMobile = window.matchMedia("(max-width:600px)").matches;
    const coinSizes = ["small", "", "", "big"];
    for (let i = 0; i < (isMobile ? 8 : 14); i++) {
      const c = document.createElement("span");
      c.className = "mm-coin " + coinSizes[Math.floor(Math.random() * coinSizes.length)];
      c.style.left = Math.random() * 100 + "vw";
      c.style.top = Math.random() * 100 + "vh";
      c.style.animationDelay = (Math.random() * 4) + "s";
      c.style.animationDuration = (2.5 + Math.random() * 3) + "s";
      cl.appendChild(c);
    }
    for (let i = 0; i < (isMobile ? 3 : 5); i++) {
      const c = document.createElement("span");
      c.className = "mm-coin drift " + coinSizes[Math.floor(Math.random() * coinSizes.length)];
      c.style.left = Math.random() * 100 + "vw";
      c.style.top = "100vh";
      c.style.animationDelay = (Math.random() * 14) + "s";
      c.style.animationDuration = (12 + Math.random() * 10) + "s, " + (2 + Math.random() * 2) + "s";
      cl.appendChild(c);
    }
    return () => { cl.innerHTML = ""; };
  }, []);

  /* ── Nav scroll ── */
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const handler = () => { nav.classList.toggle("scrolled", window.scrollY > 40); };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Hero video fallback ── */
  useEffect(() => {
    const v = heroVideoRef.current;
    const fb = heroFallbackRef.current;
    if (!v || !fb) return;
    const onError = () => { v.style.display = "none"; fb.style.display = "block"; };
    v.addEventListener("error", onError);
    const timer = setTimeout(() => {
      if (v.readyState === 0) { v.style.display = "none"; fb.style.display = "block"; }
    }, 3000);
    return () => { v.removeEventListener("error", onError); clearTimeout(timer); };
  }, []);

  /* ── Scroll reveal ── */
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".mm-pillar,.mm-flow-step,.mm-ing-row,.mm-testi-card,.mm-ritual-card").forEach(el => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      (el as HTMLElement).style.transition = "opacity .9s ease, transform .9s ease";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  /* ── Coin burst ── */
  const burst = useCallback((cx: number, cy: number, count: number) => {
    const layer = burstLayerRef.current;
    if (!layer) return;
    for (let i = 0; i < count; i++) {
      const c = document.createElement("span");
      c.className = "mm-burst-coin";
      const size = 14 + Math.random() * 20;
      c.style.width = c.style.height = size + "px";
      c.style.fontSize = Math.max(10, size * 0.55) + "px";
      c.style.left = (cx - size / 2) + "px";
      c.style.top = (cy - size / 2) + "px";
      const dx = (Math.random() * 2 - 1) * 260;
      const up = -(380 + Math.random() * 340);
      const fall = 600 + Math.random() * 300;
      const rot = (Math.random() * 2 - 1) * 720;
      const dur = 1400 + Math.random() * 900;
      c.animate([
        { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
        { transform: `translate(${dx * 0.6}px, ${up}px) rotate(${rot * 0.6}deg)`, opacity: 1, offset: 0.45 },
        { transform: `translate(${dx}px, ${fall}px) rotate(${rot}deg)`, opacity: 0 }
      ], { duration: dur, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" });
      layer.appendChild(c);
      setTimeout(() => c.remove(), dur + 100);
    }
  }, []);

  const handleCtaClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 36);
    e.currentTarget.animate([
      { filter: "brightness(1.4)", transform: "scale(1.05)" },
      { filter: "brightness(1)", transform: "scale(1)" }
    ], { duration: 450, easing: "ease-out" });
  }, [burst]);

  const handleNavBuyClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 22);
    e.currentTarget.animate([
      { filter: "brightness(1.4)", transform: "scale(1.05)" },
      { filter: "brightness(1)", transform: "scale(1)" }
    ], { duration: 450, easing: "ease-out" });
    // Smooth scroll to CTA verse
    e.preventDefault();
    const target = document.getElementById("mmCtaVerse");
    if (target) {
      const rect = target.getBoundingClientRect();
      const y = window.pageYOffset + rect.top - 80;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  }, [burst]);

  return (
    <div className="mm-page">
      <div className="mm-site-bg" />
      <div className="mm-grain" />
      <div className="mm-floating-particles" ref={particlesRef} />
      <div className="mm-coins-layer" ref={coinsRef} />
      <div className="mm-burst-layer" ref={burstLayerRef} />

      {/* NAV */}
      <nav className="mm-nav" ref={navRef}>
        <div className="mm-nav-brand">
          Money Magnet Mist
          <small>發 財 噴 霧</small>
        </div>
        <a href="#mmCtaVerse" className="mm-nav-buy" onClick={handleNavBuyClick} aria-label="購買發財噴霧">
          <span className="mm-nav-coin" aria-hidden="true" />
          <span className="mm-nav-buy-text">
            <span className="mm-nb-line1">購買</span>
            <span className="mm-nb-line2">388 / 1入 · 2入免運</span>
          </span>
        </a>
      </nav>

      {/* HERO */}
      <section className="mm-hero">
        <div className="mm-hero-video">
          <video ref={heroVideoRef} autoPlay muted loop playsInline poster={CDN.productAltar}>
            <source src={CDN.heroVideo} type="video/mp4" />
          </video>
          <div className="mm-hero-fallback" ref={heroFallbackRef} style={{ display: "none" }} />
        </div>
        <div className="mm-hero-inner">
          <p className="mm-eyebrow mm-hero-eyebrow">大自然的煉金術</p>
          <h1 className="mm-hero-title">
            發財噴霧
            <span className="accent">Money Magnet Mist</span>
          </h1>
          <p className="mm-hero-tagline">
            你的努力沒有問題，<br />
            問題是你散發的 <strong>能量</strong> ——<br />
            錢，只往對的氣場流動。
          </p>
        </div>
        <div className="mm-hero-scroll">向下探索</div>
      </section>

      {/* VERSE */}
      <section className="mm-verse">
        <div className="mm-verse-inner mm-verse-layout">
          <div className="mm-verse-energy" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" strokeWidth="1.2">
              <circle cx="60" cy="60" r="54" stroke="currentColor" strokeDasharray="2 4" opacity=".45" />
              <circle cx="60" cy="60" r="44" stroke="currentColor" opacity=".6" />
              <path d="M60 22 L68 47 L94 47 L73 62 L81 87 L60 72 L39 87 L47 62 L26 47 L52 47 Z" stroke="currentColor" fill="none" opacity=".9" />
              <circle cx="60" cy="60" r="5" stroke="currentColor" fill="none" />
              <line x1="60" y1="0" x2="60" y2="10" stroke="currentColor" opacity=".7" />
              <line x1="60" y1="110" x2="60" y2="120" stroke="currentColor" opacity=".7" />
              <line x1="0" y1="60" x2="10" y2="60" stroke="currentColor" opacity=".7" />
              <line x1="110" y1="60" x2="120" y2="60" stroke="currentColor" opacity=".7" />
              <line x1="17" y1="17" x2="24" y2="24" stroke="currentColor" opacity=".5" />
              <line x1="96" y1="96" x2="103" y2="103" stroke="currentColor" opacity=".5" />
              <line x1="17" y1="103" x2="24" y2="96" stroke="currentColor" opacity=".5" />
              <line x1="96" y1="24" x2="103" y2="17" stroke="currentColor" opacity=".5" />
            </svg>
          </div>
          <div className="mm-verse-mark">&bdquo;</div>
          <p className="mm-eyebrow" style={{ marginBottom: 30 }}>老師說</p>
          <p className="mm-verse-text">
            財富從來不是努力出來的，<br />
            財富是 <strong>磁吸</strong> 來的。<br /><br />
            當你自身帶有能量好運氣場，<br />
            <strong>正財自動進帳，偏財主動敲門，</strong><br />
            走在路上都能撿到錢。
          </p>
          <div className="mm-rule" style={{ margin: "40px auto" }} />
          <div className="mm-img-slot mm-teacher">
            <img loading="lazy" src={CDN.masterXuankong} alt="塔羅老師 玄空 · 命理專業肖像" />
          </div>
          <p className="mm-verse-source">— 塔羅老師 · 玄空</p>
        </div>
      </section>

      {/* FILM */}
      <section className="mm-film">
        <div className="mm-film-header">
          <p className="mm-eyebrow">能量之境</p>
          <h2 className="mm-section-title" style={{ marginTop: 14 }}>當植物精油遇上財運磁場</h2>
        </div>
        <div className="mm-film-frame">
          <video className="mm-film-video" controls autoPlay muted loop playsInline poster={CDN.productAltar}>
            <source src={CDN.heroVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mm-pillars mm-section">
        <div className="mm-container">
          <div className="mm-pillars-header">
            <p className="mm-eyebrow">財富四柱</p>
            <h2 className="mm-section-title" style={{ marginTop: 14 }}>四種植物，守四固財</h2>
            <div className="mm-rule" />
            <p className="mm-section-sub" style={{ marginInline: "auto" }}>
              正財．偏財．人財．意外財 ——<br />
              四味神聖植物，合而為一，打開你的財富磁場。
            </p>
          </div>
        </div>
        <div className="mm-container">
          <div className="mm-pillar-grid">
            <div className="mm-pillar" data-num="01">
              <p className="mm-pillar-zh">岩蘭草 · <span className="mm-el-seal-inline">土</span></p>
              <h3 className="mm-pillar-type">正財守護</h3>
              <p className="mm-pillar-label">扎根生金</p>
              <p className="mm-pillar-desc">
                取自地底深處的根系，五行中 <strong>土生金</strong>。
                讓你的氣場「生根」，不再焦慮飄移——
                能量穩了，錢才敢停留在你身邊。
              </p>
              <ul className="mm-pillar-list">
                <li>薪水穩定成長，業績月月提升</li>
                <li>合約自動找上門，客人說買就買</li>
                <li>工作效率倍增，主管主動加薪</li>
              </ul>
            </div>
            <div className="mm-pillar" data-num="02">
              <p className="mm-pillar-zh">甜橙 · <span className="mm-el-seal-inline">金</span></p>
              <h3 className="mm-pillar-type">偏財引動</h3>
              <p className="mm-pillar-label">陽光金幣</p>
              <p className="mm-pillar-desc">
                甜橙是陽光的精華，是金幣的顏色。
                偏財靠的是 <strong>特別機緣</strong>——
                心情高頻，宇宙才會把意外之財送來。
              </p>
              <ul className="mm-pillar-list">
                <li>發票連中、抽獎得獎、意外紅包</li>
                <li>走在路上撿到錢，天上掉下好機會</li>
                <li>朋友介紹大生意，偏財滾滾來</li>
              </ul>
            </div>
            <div className="mm-pillar" data-num="03">
              <p className="mm-pillar-zh">甜羅勒 · <span className="mm-el-seal-inline">木</span></p>
              <h3 className="mm-pillar-type">人財聚攏</h3>
              <p className="mm-pillar-label">君王守財</p>
              <p className="mm-pillar-desc">
                古名意為「君王與噴火龍」。龍守金山礦脈——
                它守的是 <strong>人緣財</strong>：
                客人主動找你、貴人主動引薦，結界護財。
              </p>
              <ul className="mm-pillar-list">
                <li>到哪裡都遇貴人，機會不請自來</li>
                <li>客戶緣旺，人脈自動帶業績進門</li>
                <li>守住既有財富，防小人耗財破運</li>
              </ul>
            </div>
            <div className="mm-pillar" data-num="04">
              <p className="mm-pillar-zh">廣藿香 · <span className="mm-el-seal-inline">火</span></p>
              <h3 className="mm-pillar-type">意外之財</h3>
              <p className="mm-pillar-label">四方來財</p>
              <p className="mm-pillar-desc">
                古稱「天上掉下來的香料」，具有 <strong>強大磁吸能量</strong>。
                無論走到哪裡都能吸引財氣，
                天上掉下的機會自動湧來。
              </p>
              <ul className="mm-pillar-list">
                <li>隨手買彩券就中獎，幸運女神眷顧</li>
                <li>不經意的機會帶來大財富</li>
                <li>到哪裡都能撿到錢，財運無處不在</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="mm-quote-band">
        <div className="mm-quote-inner">
          <div className="mm-img-slot mm-master-lg">
            <img loading="lazy" src={CDN.masterWang} alt="王玄真 大師 · 命理／芳療專業肖像" />
          </div>
          <div className="mm-quote-body">
            「四味合一，<strong>正財守、偏財引、人財聚、意外財自來</strong>——<br />
            每天噴在你身上的財氣，<br />
            是你整個人的財運磁場，<br />
            從此改頭換面。」
          </div>
          <div className="mm-quote-author">
            <p className="mm-quote-name">王玄真 大師</p>
            <p className="mm-quote-title">中華五行風水協會 會長 · 中醫芳療大師</p>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="mm-flow mm-section">
        <div className="mm-flow-header">
          <p className="mm-eyebrow">能量轉換迴圈</p>
          <h2 className="mm-section-title" style={{ marginTop: 14 }}>輕輕一噴，四步啟動金錢磁場</h2>
          <div className="mm-rule" />
        </div>
        <div className="mm-flow-list">
          {[
            { num: "01", zh: "植物分子，直達靈魂", desc: <>吸入高濃縮植物精油分子，香氣是宇宙中 <strong>最快速的頻率傳導器</strong>，不需思考，直接作用於你的能量場。</>, img: CDN.flow01 },
            { num: "02", zh: "安撫焦慮，瞬間切換", desc: <>香氣直達大腦邊緣系統，<strong>瞬間安撫擔心恐懼</strong>，把低迷耗損的腦波狀態，轉換為平靜清明的高頻狀態。</>, img: CDN.flow02 },
            { num: "03", zh: "氣場翻轉，財磁覺醒", desc: <>釋放對金錢的 <strong>匱乏感與恐懼感</strong>，氣場頻率轉為純真、富饒的正能量——這是宇宙聽得懂的語言。</>, img: CDN.flow03 },
            { num: "04", zh: "財氣自來，好運降臨", desc: <>能量提升改變外在際遇。<strong>客源自動上門、意外之財接連出現、貴人主動牽線</strong>——宇宙用各種方式把錢送到你手上。</>, img: CDN.flow04 },
          ].map(step => (
            <div className="mm-flow-step" key={step.num}>
              <div className="mm-flow-num">{step.num}</div>
              <h3 className="mm-flow-zh">{step.zh}</h3>
              <p className="mm-flow-desc">{step.desc}</p>
              <div className="mm-flow-image"><img loading="lazy" src={step.img} alt={step.zh} /></div>
            </div>
          ))}
        </div>
      </section>

      {/* INGREDIENTS DEEP DIVE */}
      <section className="mm-ing mm-section">
        <div className="mm-ing-header">
          <p className="mm-eyebrow">認識四種高能植物</p>
          <h2 className="mm-section-title" style={{ marginTop: 14 }}>老師帶你看懂每一味</h2>
          <div className="mm-rule" />
        </div>
        <div className="mm-ing-rows">
          {/* 岩蘭草 */}
          <div className="mm-ing-row">
            <div className="mm-ing-visual">
              <span className="mm-ing-el">土</span>
              <div className="mm-ing-zh">岩蘭草</div>
            </div>
            <div>
              <span className="mm-ing-badge">正財 · 五行土生金</span>
              <p className="mm-ing-subtitle">扎根生金</p>
              <p className="mm-ing-desc">
                取自地底，根系可深入地下三公尺，能量 <strong>極度穩定且厚重</strong>。
                五行屬土，土生金——它讓你的氣場生根，不再因焦慮、恐懼而頻率飄移。
                當能量穩了，錢才敢長期停留在你身邊，正財的根基就此紮穩。
              </p>
              <div className="mm-ing-plant-photo"><img loading="lazy" src={CDN.plantVetiver} alt="岩蘭草 · 土生金 · 能量視覺" /></div>
              <div className="mm-ing-lore">
                <span className="mm-el">土</span>
                據說岩蘭草稀釋到一定濃度時，會散發出類似鈔票印刷油墨的氣味，長久以來在芳療與玄學界都被視為「招財神器」。五行中土又生金，具有招財、開運的深層涵義。
              </div>
            </div>
          </div>
          {/* 甜橙 */}
          <div className="mm-ing-row">
            <div className="mm-ing-visual">
              <span className="mm-ing-el">金</span>
              <div className="mm-ing-zh">甜橙</div>
            </div>
            <div>
              <span className="mm-ing-badge">偏財 · 陽光金幣</span>
              <p className="mm-ing-subtitle">喜悅高頻</p>
              <p className="mm-ing-desc">
                甜橙是陽光凝聚的精華，是金幣的顏色與形狀。
                偏財靠的不是努力，靠的是 <strong>喜悅的振動頻率</strong>——
                當你的心情高頻、氣場明亮，宇宙就開始把意外之財用各種方式送來：
                中獎、撿錢、天外飛來的好機會。
              </p>
              <div className="mm-ing-plant-photo"><img loading="lazy" src={CDN.plantOrange} alt="甜橙 · 陽光金幣 · 能量視覺" /></div>
              <div className="mm-ing-lore">
                <span className="mm-el">金</span>
                在東西方文化裡，橙色系植物都象徵財富與豐盛。過年擺橘子、橙花入婚禮，取的都是「金元寶」「圓滿富足」的吉意。
              </div>
            </div>
          </div>
          {/* 甜羅勒 */}
          <div className="mm-ing-row">
            <div className="mm-ing-visual">
              <span className="mm-ing-el">木</span>
              <div className="mm-ing-zh">甜羅勒</div>
            </div>
            <div>
              <span className="mm-ing-badge">人財 · 君王守財</span>
              <p className="mm-ing-subtitle">聚客護財</p>
              <p className="mm-ing-desc">
                它的古名 basilescus，意為「君王」，也是「噴火龍」。
                龍在全世界神話中都是 <strong>守護金山礦脈</strong> 的神獸——
                甜羅勒守的正是人緣財：客人主動找你、貴人主動牽線，
                同時替你結界，擋掉耗財破運的能量。
              </p>
              <div className="mm-ing-plant-photo"><img loading="lazy" src={CDN.plantBasil} alt="甜羅勒 · 君王守財 · 能量視覺" /></div>
              <div className="mm-ing-lore">
                <span className="mm-el">木</span>
                在墨西哥，家家戶戶把甜羅勒掛在門口或種在門前，目的就是「招客、聚財、防小人」。噴灑於空間周圍，能強效吸引顧客進門。
              </div>
            </div>
          </div>
          {/* 廣藿香 */}
          <div className="mm-ing-row">
            <div className="mm-ing-visual">
              <span className="mm-ing-el">火</span>
              <div className="mm-ing-zh">廣藿香</div>
            </div>
            <div>
              <span className="mm-ing-badge">意外之財 · 四方來財</span>
              <p className="mm-ing-subtitle">磁吸財氣</p>
              <p className="mm-ing-desc">
                廣藿香古時候被稱為「天上掉下來的香料」，具有 <strong>強大的磁吸能量</strong>。
                五行屬火，火能生土，土能生金——形成完整的財富能量循環。
                讓你無論走到哪裡都能吸引財氣，天上掉下來的機會自動被你吸引過來。
              </p>
              <div className="mm-ing-plant-photo"><img loading="lazy" src={CDN.plantPatchouli} alt="廣藿香 · 四方來財 · 能量視覺" /></div>
              <div className="mm-ing-lore">
                <span className="mm-el">火</span>
                東方神秘學中，廣藿香被視為「財神腳下的香草」，能打通四方財路，讓財氣從四面八方匯聚而來。古時商人都會在店舖門口焚燒廣藿香，以吸引顧客和財運。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mm-testi mm-section">
        <div className="mm-testi-header">
          <p className="mm-eyebrow">真人見證</p>
          <h2 className="mm-section-title" style={{ marginTop: 14 }}>他們的財運，因此改變了</h2>
          <div className="mm-rule" />
        </div>
        <div className="mm-testi-grid">
          {[
            { type: "正財 · 業績爆發", quote: "「六月單月破百萬業績！一噴立馬來客人，沒10分鐘立馬結帳。完全不知道發生了什麼，錢就進來了。」", name: "李雅婷", age: "40歲 · 精品店店主", result: "業績 +300%", avatar: CDN.testiLiyating, scene: CDN.sceneBoutique },
            { type: "偏財 · 意外之財", quote: "「從沒中過發票的我，連續三個月中獎。尾牙還抽中三萬元！朋友說我最近運氣好得不像話。」", name: "王美麗", age: "52歲 · 家庭主婦", result: "意外收入 5萬+", avatar: CDN.testiWangmeili, scene: CDN.sceneLottery },
            { type: "人財 · 貴人晉升", quote: "「噴了之後去面試，當天傍晚主管就幫我加薪了。後來更升職主管四個部門，遇到的人都在幫我。」", name: "陳麗珠", age: "35歲 · 行銷經理", result: "月薪翻倍 · 晉升", avatar: CDN.testiChenlizhu, scene: CDN.sceneOffice },
            { type: "氣場 · 頻率轉換", quote: "「味道舒服高級，平靜帶給我耐心。心情不再低落，開始對金錢產生正向期待。更驚喜的是，桃花運也變好了，認識了現在的男友，他是事業有成的企業家，帶給我很多商業機會！」", name: "鄭美齡", age: "29歲 · 設計師", result: "桃花財運雙豐收", avatar: CDN.testiZhengmeiling, scene: CDN.sceneCafe },
          ].map((t, i) => (
            <div className="mm-testi-card" key={i}>
              <p className="mm-testi-type">{t.type}</p>
              <p className="mm-testi-quote">{t.quote}</p>
              <div className="mm-testi-foot">
                <div className="mm-testi-avatar-wrap">
                  <div className="mm-avatar-sm"><img loading="lazy" src={t.avatar} alt={t.name} /></div>
                  <div>
                    <p className="mm-testi-name">{t.name}</p>
                    <p className="mm-testi-age">{t.age}</p>
                  </div>
                </div>
                <p className="mm-testi-result">{t.result}</p>
              </div>
              <div className="mm-testi-scene"><img loading="lazy" src={t.scene} alt={`${t.name} 場景`} /></div>
            </div>
          ))}
        </div>
      </section>

      {/* RITUAL */}
      <section className="mm-ritual mm-section">
        <div className="mm-ritual-header">
          <p className="mm-eyebrow">日常儀式</p>
          <h2 className="mm-section-title" style={{ marginTop: 14 }}>三個時機，讓財氣跟著你</h2>
          <div className="mm-rule" />
          <div className="mm-ritual-product">
            <img loading="lazy" src={CDN.product} alt="發財噴霧 10ml" />
            <p className="mm-ritual-product-caption">發 財 噴 霧 · 10ml</p>
          </div>
        </div>
        <div className="mm-ritual-grid">
          {/* 01 */}
          <div className="mm-ritual-card">
            <div className="mm-ritual-num">01</div>
            <div className="mm-ritual-art" aria-hidden="true">
              <svg viewBox="0 0 120 120" fill="none" strokeWidth="1.3" color="#d1a84b">
                <line x1="10" y1="85" x2="110" y2="85" stroke="currentColor" opacity=".7" />
                <path d="M60 85 A 28 28 0 0 1 88 85" stroke="currentColor" fill="none" />
                <g stroke="currentColor" opacity=".85">
                  <line x1="60" y1="55" x2="60" y2="42" />
                  <line x1="44" y1="63" x2="36" y2="55" />
                  <line x1="76" y1="63" x2="84" y2="55" />
                  <line x1="40" y1="75" x2="30" y2="75" />
                  <line x1="80" y1="75" x2="90" y2="75" />
                </g>
                <path d="M60 62 L63.5 72 L74 72 L65.5 78 L69 88 L60 82 L51 88 L54.5 78 L46 72 L56.5 72 Z" stroke="currentColor" fill="none" opacity=".9" />
                <circle cx="60" cy="85" r="48" stroke="currentColor" strokeDasharray="3 5" opacity=".35" />
                <circle cx="60" cy="85" r="36" stroke="currentColor" strokeDasharray="2 4" opacity=".45" />
              </svg>
            </div>
            <h3 className="mm-ritual-title">每天開工前，噴灑於空間</h3>
            <p className="mm-ritual-desc">淨化磁場，為一整天建立豐盛能量場域。開工就在高頻狀態，客人自動上門。</p>
            <div className="mm-ritual-scene"><img loading="lazy" src={CDN.ritualMorning} alt="清晨店面 · 噴霧淨化空間" /></div>
          </div>
          {/* 02 */}
          <div className="mm-ritual-card">
            <div className="mm-ritual-num">02</div>
            <div className="mm-ritual-art" aria-hidden="true">
              <svg viewBox="0 0 120 120" fill="none" strokeWidth="1.3" color="#d1a84b">
                <circle cx="60" cy="60" r="52" stroke="currentColor" opacity=".35" />
                <circle cx="60" cy="60" r="46" stroke="currentColor" strokeDasharray="2 5" opacity=".55" />
                <path d="M60 20 L86 68 L34 68 Z" stroke="currentColor" opacity=".75" />
                <path d="M60 100 L34 52 L86 52 Z" stroke="currentColor" opacity=".75" />
                <circle cx="60" cy="60" r="16" stroke="currentColor" fill="none" />
                <circle cx="60" cy="60" r="11" stroke="currentColor" strokeDasharray="1 2" opacity=".7" />
                <text x="60" y="66" textAnchor="middle" fill="#d1a84b" fontFamily="Playfair Display, serif" fontWeight="900" fontSize="16">$</text>
                <g stroke="currentColor" opacity=".7">
                  <path d="M15 60 L30 60 M26 56 L30 60 L26 64" />
                  <path d="M105 60 L90 60 M94 56 L90 60 L94 64" />
                  <path d="M60 15 L60 30 M56 26 L60 30 L64 26" />
                  <path d="M60 105 L60 90 M56 94 L60 90 L64 94" />
                </g>
              </svg>
            </div>
            <h3 className="mm-ritual-title">噴在錢包、存摺或名片上</h3>
            <p className="mm-ritual-desc">建立你與金錢之間的正向連結。每一張名片，都帶著磁吸財氣的頻率，人脈就是錢脈。</p>
            <div className="mm-ritual-scene"><img loading="lazy" src={CDN.ritualWallet} alt="皮夾 · 名片 · 存摺 · 噴霧" /></div>
          </div>
          {/* 03 */}
          <div className="mm-ritual-card">
            <div className="mm-ritual-num">03</div>
            <div className="mm-ritual-art" aria-hidden="true">
              <svg viewBox="0 0 120 120" fill="none" strokeWidth="1.3" color="#d1a84b">
                <circle cx="60" cy="60" r="52" stroke="currentColor" opacity=".35" />
                <circle cx="60" cy="60" r="42" stroke="currentColor" strokeDasharray="3 4" opacity=".55" />
                <g stroke="currentColor" opacity=".55">
                  <line x1="60" y1="2" x2="60" y2="14" />
                  <line x1="60" y1="106" x2="60" y2="118" />
                  <line x1="2" y1="60" x2="14" y2="60" />
                  <line x1="106" y1="60" x2="118" y2="60" />
                  <line x1="16" y1="16" x2="25" y2="25" />
                  <line x1="95" y1="95" x2="104" y2="104" />
                  <line x1="16" y1="104" x2="25" y2="95" />
                  <line x1="95" y1="25" x2="104" y2="16" />
                </g>
                <g stroke="currentColor">
                  <circle cx="42" cy="46" r="7" />
                  <path d="M32 80 C32 66 52 66 52 80 L52 80" strokeLinecap="round" />
                  <circle cx="78" cy="46" r="7" />
                  <path d="M88 80 C88 66 68 66 68 80 L68 80" strokeLinecap="round" />
                  <path d="M52 70 L60 64 L68 70" strokeLinecap="round" />
                  <path d="M60 58 L62 63 L67 63 L63 66 L65 71 L60 68 L55 71 L57 66 L53 63 L58 63 Z" fill="#d1a84b" opacity=".85" />
                </g>
              </svg>
            </div>
            <h3 className="mm-ritual-title">重要面試、簽約、見客戶前</h3>
            <p className="mm-ritual-desc">披上無形的自信氣場與財富磁場。讓對方第一眼就感受到你的能量，談判更順、合作更易。</p>
            <div className="mm-ritual-scene"><img loading="lazy" src={CDN.ritualMeeting} alt="面試 · 簽約 · 衣物噴霧氣場" /></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mm-cta" id="mmCta">
        <div className="mm-cta-spark" style={{ top: "15%", left: "12%" }}>✦</div>
        <div className="mm-cta-spark" style={{ top: "25%", right: "18%", animationDelay: ".5s" }}>✦</div>
        <div className="mm-cta-spark" style={{ top: "65%", left: "20%", animationDelay: "1s" }}>✦</div>
        <div className="mm-cta-spark" style={{ bottom: "20%", right: "15%", animationDelay: "1.5s" }}>✦</div>
        <div className="mm-cta-spark" style={{ top: "40%", right: "8%", animationDelay: "2s" }}>✦</div>
        <div className="mm-cta-spark" style={{ bottom: "35%", left: "8%", animationDelay: ".3s" }}>✦</div>

        <div className="mm-cta-inner">
          <p className="mm-cta-eye">停止耗損 · 開始磁吸</p>
          <h2 className="mm-cta-title">
            銀行裡的金庫已在你面前，<br />
            <span>你，準備好接收財富了嗎？</span>
          </h2>
          <p className="mm-cta-verse" id="mmCtaVerse">
            正財守根基，偏財引機緣，<br />
            到哪裡都遇貴人，走在路上都是財。
          </p>
          <div className="mm-cta-product">
            <img loading="lazy" src={CDN.product} alt="發財噴霧" />
            <p className="mm-cta-volume">容量 · 10ml</p>
          </div>
          <div className="mm-price-line">
            <span className="mm-price-num">388</span>
            <span className="mm-price-unit">元</span>
          </div>
          <a className="mm-cta-btn" href={BUY_URL} target="_blank" rel="noopener noreferrer" onClick={handleCtaClick}>
            <span className="mm-cb-line1">立 即 入 手 · 啟 動 財 運</span>
            <span className="mm-cb-line2">2 入免運・啟動雙倍招財儀式</span>
          </a>
          <p className="mm-cta-note">✦ IFA 認證配方 · 高濃縮植物精油 · 輕輕一噴立即切換財富頻率 ✦</p>
          <div className="mm-cta-badges">
            <span className="mm-cta-badge">岩蘭草 · 正財</span>
            <span className="mm-cta-badge">甜橙 · 偏財</span>
            <span className="mm-cta-badge">甜羅勒 · 人財</span>
            <span className="mm-cta-badge">廣藿香 · 意外財</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mm-footer">
        <div className="mm-footer-brand">Money Magnet Mist</div>
        <p className="mm-footer-sub">發 財 噴 霧 · 植 物 能 量 密 法</p>
        <p className="mm-footer-meta">&copy; 2026 Money Magnet Mist · All Rights Reserved</p>

        {/* Contact info — larger fonts for accessibility */}
        <div className="mm-footer-contact">
          <p>
            <span className="mm-footer-contact-label">公司｜</span>
            <span className="mm-footer-contact-value">舒園國際開發有限公司</span>
          </p>
          <p>
            <span className="mm-footer-contact-label">📞 可打電話來訂購｜</span>
            <a href="tel:+886422752009" className="mm-footer-contact-tel">04-2275-2009</a>
          </p>
          <p>
            <span className="mm-footer-contact-label">地址｜</span>
            <span className="mm-footer-contact-value">台中市太平區精美路 122 號</span>
          </p>
        </div>

        <p className="mm-footer-credit">
          網頁設計 by{" "}
          <a href="https://show.intelliverse.tw/" target="_blank" rel="noopener noreferrer">
            靈境智造 Intelliverse
          </a>{" "}
          · 讓 AI 幫你賺錢
        </p>
      </footer>
    </div>
  );
}
