import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Money Magnet Mist /2 Route Integration", () => {
  const projectRoot = path.resolve(import.meta.dirname, "..");

  it("MoneyMagnet.tsx React component exists", () => {
    const componentPath = path.join(projectRoot, "client", "src", "pages", "MoneyMagnet.tsx");
    expect(fs.existsSync(componentPath)).toBe(true);
  });

  it("MoneyMagnet.css scoped styles exist", () => {
    const cssPath = path.join(projectRoot, "client", "src", "pages", "MoneyMagnet.css");
    expect(fs.existsSync(cssPath)).toBe(true);
  });

  it("MoneyMagnet.tsx is a native React component (not iframe)", () => {
    const componentPath = path.join(projectRoot, "client", "src", "pages", "MoneyMagnet.tsx");
    const content = fs.readFileSync(componentPath, "utf-8");
    // Should NOT contain iframe
    expect(content).not.toContain("<iframe");
    // Should contain React JSX structure
    expect(content).toContain("mm-page");
    expect(content).toContain("mm-hero");
    expect(content).toContain("mm-nav");
  });

  it("App.tsx has /2 route pointing to MoneyMagnet component", () => {
    const appPath = path.join(projectRoot, "client", "src", "App.tsx");
    const content = fs.readFileSync(appPath, "utf-8");
    expect(content).toContain('path={"/2"}');
    expect(content).toContain("MoneyMagnet");
  });

  it("MoneyMagnet.tsx uses CDN URLs for all images and videos", () => {
    const componentPath = path.join(projectRoot, "client", "src", "pages", "MoneyMagnet.tsx");
    const content = fs.readFileSync(componentPath, "utf-8");
    // All CDN URLs should use cloudfront
    const cdnUrls = content.match(/https:\/\/d2xsxph8kpxj0f\.cloudfront\.net[^"'\s]*/g) || [];
    expect(cdnUrls.length).toBeGreaterThan(10);
  });

  it("MoneyMagnet.css uses mm- prefix for CSS rule selectors", () => {
    const cssPath = path.join(projectRoot, "client", "src", "pages", "MoneyMagnet.css");
    const content = fs.readFileSync(cssPath, "utf-8");
    // Extract only CSS rule selectors (lines that contain { )
    const ruleLines = content.split("\n").filter(l => l.includes("{") && !l.trim().startsWith("/*") && !l.trim().startsWith("@"));
    const selectorClasses: string[] = [];
    for (const line of ruleLines) {
      const selectorPart = line.split("{")[0];
      const matches = selectorPart.match(/\.[a-zA-Z][a-zA-Z0-9_-]*/g) || [];
      selectorClasses.push(...matches);
    }
    const nonMmClasses = selectorClasses.filter(
      (cls) => !cls.startsWith(".mm-") && cls !== ".scrolled" && cls !== ".small" && cls !== ".big" && cls !== ".drift" && cls !== ".accent"
    );
    expect(nonMmClasses.length).toBe(0);
  });

  it("MoneyMagnet.tsx sets correct document title", () => {
    const componentPath = path.join(projectRoot, "client", "src", "pages", "MoneyMagnet.tsx");
    const content = fs.readFileSync(componentPath, "utf-8");
    expect(content).toContain("發財噴霧 · Money Magnet Mist｜植物能量・財運磁場");
  });

  it("vite.ts serves dedicated 2.html for /2 route in production", () => {
    const vitePath = path.join(projectRoot, "server", "_core", "vite.ts");
    const content = fs.readFileSync(vitePath, "utf-8");
    expect(content).toContain('url === "/2"');
    expect(content).toContain("2.html");
  });

  it("client/public/2.html exists with Money Magnet Mist OG meta tags", () => {
    const htmlPath = path.join(projectRoot, "client", "public", "2.html");
    expect(fs.existsSync(htmlPath)).toBe(true);
    const content = fs.readFileSync(htmlPath, "utf-8");
    expect(content).toContain("發財噴霧 · Money Magnet Mist");
    expect(content).toContain('og:title');
    expect(content).toContain('og:image');
    expect(content).toContain('og:description');
    expect(content).toContain('twitter:card');
    expect(content).toContain('product_7e358a87.png');
    // Should NOT contain main page title
    expect(content).not.toContain("仙佛護持");
  });

  it("vite.config.ts includes 2.html as multi-page entry", () => {
    const viteConfigPath = path.join(projectRoot, "vite.config.ts");
    const content = fs.readFileSync(viteConfigPath, "utf-8");
    expect(content).toContain("page2");
    expect(content).toContain("2.html");
  });

  it("MoneyMagnet.tsx includes buy link to auslife.com.tw", () => {
    const componentPath = path.join(projectRoot, "client", "src", "pages", "MoneyMagnet.tsx");
    const content = fs.readFileSync(componentPath, "utf-8");
    expect(content).toContain("auslife.com.tw");
  });

  it("MoneyMagnet.tsx includes price 388", () => {
    const componentPath = path.join(projectRoot, "client", "src", "pages", "MoneyMagnet.tsx");
    const content = fs.readFileSync(componentPath, "utf-8");
    expect(content).toContain("388");
  });

  it("Original Home.tsx is not modified", () => {
    const homePath = path.join(projectRoot, "client", "src", "pages", "Home.tsx");
    const content = fs.readFileSync(homePath, "utf-8");
    expect(content).toContain("仙佛護持");
    expect(content).toContain("避邪淨化");
  });

  it("server/_core/index.ts does NOT have Express /2 route (uses React routing)", () => {
    const indexPath = path.join(projectRoot, "server", "_core", "index.ts");
    const content = fs.readFileSync(indexPath, "utf-8");
    expect(content).not.toContain('app.get("/2"');
    expect(content).not.toContain("money-magnet.html");
  });
});
