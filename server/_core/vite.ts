import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      // Inject route-specific meta tags for /2 (Money Magnet Mist)
      if (url === "/2" || url.startsWith("/2?") || url.startsWith("/2#")) {
        template = template.replace(
          "<title>仙佛護持・避邪淨化隨身噴霧｜啟動你的第一道結界</title>",
          "<title>發財噴霧 · Money Magnet Mist｜植物能量・財運磁場</title>"
        );
        template = template.replace(
          '<meta name="description" content="七大神聖精油配方・仙佛加持護持。一噴，像替自己升起一道防護罩。守住氣場・隔離外界干擾・隨時安心。" />',
          '<meta name="description" content="四味神聖植物精油．正財．偏財．人財．意外財．輕輕一噴，啟動你的財運磁場。" />'
        );
        // Add OG tags before closing </head>
        const ogTags = `
    <meta property="og:title" content="發財噴霧 · Money Magnet Mist" />
    <meta property="og:description" content="四味神聖植物精油．啟動財運磁場．輕輕一噴，讓錢往你的氣場流動。" />
    <meta property="og:image" content="https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/product_7e358a87.png" />
    <meta property="og:type" content="product" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="發財噴霧 · Money Magnet Mist" />
    <meta name="twitter:description" content="四味神聖植物精油．啟動財運磁場．輕輕一噴，讓錢往你的氣場流動。" />
    <meta name="twitter:image" content="https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/product_7e358a87.png" />`;
        template = template.replace("</head>", `${ogTags}\n  </head>`);
      }

      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (req, res) => {
    const url = req.originalUrl;
    const indexPath = path.resolve(distPath, "index.html");

    // Inject route-specific meta tags for /2 (Money Magnet Mist) in production
    if (url === "/2" || url.startsWith("/2?") || url.startsWith("/2#")) {
      let html = fs.readFileSync(indexPath, "utf-8");
      html = html.replace(
        "<title>仙佛護持・避邪淨化隨身噴霧｜啟動你的第一道結界</title>",
        "<title>發財噴霧 · Money Magnet Mist｜植物能量・財運磁場</title>"
      );
      html = html.replace(
        '<meta name="description" content="七大神聖精油配方・仙佛加持護持。一噴，像替自己升起一道防護罩。守住氣場・隔離外界干擾・隨時安心。" />',
        '<meta name="description" content="四味神聖植物精油．正財．偏財．人財．意外財．輕輕一噴，啟動你的財運磁場。" />'
      );
      const ogTags = `
    <meta property="og:title" content="發財噴霧 · Money Magnet Mist" />
    <meta property="og:description" content="四味神聖植物精油．啟動財運磁場．輕輕一噴，讓錢往你的氣場流動。" />
    <meta property="og:image" content="https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/product_7e358a87.png" />
    <meta property="og:type" content="product" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="發財噴霧 · Money Magnet Mist" />
    <meta name="twitter:description" content="四味神聖植物精油．啟動財運磁場．輕輕一噴，讓錢往你的氣場流動。" />
    <meta name="twitter:image" content="https://d2xsxph8kpxj0f.cloudfront.net/310519663413887714/VizcmhaMFeJmFoPCcusNnS/product_7e358a87.png" />`;
      html = html.replace("</head>", `${ogTags}\n  </head>`);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } else {
      res.sendFile(indexPath);
    }
  });
}
