import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import imageminPlugin from "vite-plugin-imagemin";

const env = dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    imageminPlugin({ optipng: {}, pngquant: {}, jpegtran: {} }),
  ],
  server: {
    port: 3001,
  },
  preview: {
    port: 4270,
  },
  build: {
    incremental: true,
    babel: {
      presets: ["@babel/preset-env", "@babel/present-react"],
    },
    cache: true,
    minify: true,
    cssMinify: true,
    mode: "production",
    chunks: true,
    moduleBuilding: true,
    debug: true,
    prerenderPaths: ["/"],
    modulePreload: true,
    outDir: "dist",
  },
  assetsInclude: ["assets"],
});
