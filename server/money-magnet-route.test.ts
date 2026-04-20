import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

describe("Money Magnet Mist /2 route", () => {
  const moneyMagnetPath = path.resolve(
    import.meta.dirname,
    "..",
    "client",
    "public",
    "money-magnet.html"
  );

  it("money-magnet.html file exists in client/public", () => {
    expect(fs.existsSync(moneyMagnetPath)).toBe(true);
  });

  it("money-magnet.html contains the correct page title", () => {
    const content = fs.readFileSync(moneyMagnetPath, "utf-8");
    expect(content).toContain("Money Magnet Mist");
    expect(content).toContain("發財噴霧");
  });

  it("money-magnet.html uses CDN URLs for all images (no local paths)", () => {
    const content = fs.readFileSync(moneyMagnetPath, "utf-8");
    // All image src attributes should use CDN URLs
    const imgSrcMatches = content.match(/src="([^"]+\.(png|jpg|jpeg|webp|gif|svg|mp4))"/gi) || [];
    expect(imgSrcMatches.length).toBeGreaterThan(0);

    for (const match of imgSrcMatches) {
      const url = match.replace(/src="/i, "").replace(/"$/, "");
      // Should be a CDN URL (cloudfront) or a data URI, not a local file path
      const isCdnOrExternal = url.startsWith("https://") || url.startsWith("http://") || url.startsWith("data:");
      expect(isCdnOrExternal).toBe(true);
    }
  });

  it("money-magnet.html contains purchase button with correct price", () => {
    const content = fs.readFileSync(moneyMagnetPath, "utf-8");
    expect(content).toContain("388");
    expect(content).toContain("免運");
  });

  it("server/_core/index.ts contains /2 route definition", () => {
    const serverIndexPath = path.resolve(
      import.meta.dirname,
      "_core",
      "index.ts"
    );
    const content = fs.readFileSync(serverIndexPath, "utf-8");
    expect(content).toContain('app.get("/2"');
    expect(content).toContain("money-magnet.html");
  });
});
