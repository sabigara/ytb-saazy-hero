import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { VitePluginFonts } from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePluginFonts({
      google: {
        families: [
          {
            name: "Inter",
            styles: "wght@400;500;600;700;800",
          },
        ],
      },
    }),
  ],
});
