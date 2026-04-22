/**
 * SiteNav — 全站共用頂部導航選單
 * 三個產品頁面間自由切換
 * Design: 半透明黑底 + 金色點綴，符合暗黑神聖殿堂美學
 */

import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";

interface NavItem {
  path: string;
  label: string;
  shortLabel: string;
  emoji: string;
}

const NAV_ITEMS: NavItem[] = [
  { path: "/", label: "避邪淨化噴霧", shortLabel: "淨化噴霧", emoji: "🛡️" },
  { path: "/2", label: "發財噴霧", shortLabel: "發財噴霧", emoji: "💰" },
  { path: "/3", label: "真人實測版", shortLabel: "真人實測", emoji: "✨" },
];

export default function SiteNav() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <>
      <nav
        className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(10, 8, 6, 0.95)"
            : "rgba(10, 8, 6, 0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(212, 175, 55, 0.2)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 20px rgba(0, 0, 0, 0.4)"
            : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: scrolled ? "56px" : "64px",
            transition: "height 0.3s ease",
          }}
        >
          {/* Brand */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: "1.25rem",
                fontFamily: "'Noto Serif TC', serif",
                fontWeight: 700,
                background: "linear-gradient(135deg, #d4af37, #f5d76e, #d4af37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.05em",
              }}
            >
              AUS LIFE
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
            className="site-nav__desktop"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.path}
                href={item.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontWeight: isActive(item.path) ? 600 : 400,
                  color: isActive(item.path)
                    ? "#f5d76e"
                    : "rgba(255, 255, 255, 0.75)",
                  background: isActive(item.path)
                    ? "rgba(212, 175, 55, 0.12)"
                    : "transparent",
                  border: isActive(item.path)
                    ? "1px solid rgba(212, 175, 55, 0.25)"
                    : "1px solid transparent",
                  transition: "all 0.25s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.color = "#f5d76e";
                    e.currentTarget.style.background = "rgba(212, 175, 55, 0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                <span style={{ fontSize: "1rem" }}>{item.emoji}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="site-nav__hamburger"
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              width: "40px",
              height: "40px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              borderRadius: "8px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(212, 175, 55, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
            aria-label="Toggle navigation menu"
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#d4af37",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: mobileOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#d4af37",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "#d4af37",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform: mobileOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9998,
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className="site-nav__mobile-panel"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "280px",
          height: "100vh",
          zIndex: 9999,
          background: "rgba(15, 12, 8, 0.98)",
          borderLeft: "1px solid rgba(212, 175, 55, 0.2)",
          boxShadow: "-8px 0 30px rgba(0, 0, 0, 0.5)",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          padding: "5rem 1.5rem 2rem",
          gap: "0.5rem",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "1px solid rgba(212, 175, 55, 0.2)",
            borderRadius: "8px",
            color: "#d4af37",
            fontSize: "1.25rem",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Mobile brand */}
        <div
          style={{
            marginBottom: "1.5rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid rgba(212, 175, 55, 0.15)",
          }}
        >
          <span
            style={{
              fontSize: "1.1rem",
              fontFamily: "'Noto Serif TC', serif",
              fontWeight: 700,
              background: "linear-gradient(135deg, #d4af37, #f5d76e, #d4af37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.05em",
            }}
          >
            AUS LIFE 產品系列
          </span>
        </div>

        {/* Mobile Nav Links */}
        {NAV_ITEMS.map((item) => (
          <a
            key={item.path}
            href={item.path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.875rem 1rem",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "1.05rem",
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: isActive(item.path) ? 600 : 400,
              color: isActive(item.path)
                ? "#f5d76e"
                : "rgba(255, 255, 255, 0.8)",
              background: isActive(item.path)
                ? "rgba(212, 175, 55, 0.12)"
                : "transparent",
              border: isActive(item.path)
                ? "1px solid rgba(212, 175, 55, 0.25)"
                : "1px solid transparent",
              transition: "all 0.25s ease",
            }}
          >
            <span style={{ fontSize: "1.25rem" }}>{item.emoji}</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{item.label}</span>
              {isActive(item.path) && (
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(212, 175, 55, 0.6)",
                    marginTop: "2px",
                  }}
                >
                  目前瀏覽中
                </span>
              )}
            </div>
          </a>
        ))}

        {/* Mobile footer */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: "1rem",
            borderTop: "1px solid rgba(212, 175, 55, 0.1)",
            textAlign: "center",
          }}
        >
          <a
            href="https://www.auslife.com.tw"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.85rem",
              color: "rgba(255, 255, 255, 0.4)",
              textDecoration: "none",
              fontFamily: "'Noto Sans TC', sans-serif",
            }}
          >
            auslife.com.tw — 官方商城
          </a>
        </div>
      </div>

      {/* CSS for responsive breakpoints */}
      <style>{`
        .site-nav__desktop {
          display: flex !important;
        }
        .site-nav__hamburger {
          display: none !important;
        }
        @media (max-width: 768px) {
          .site-nav__desktop {
            display: none !important;
          }
          .site-nav__hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
