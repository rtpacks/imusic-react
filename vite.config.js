import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import styleImport from 'vite-plugin-style-import'
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 此处也可设置直角、边框色、字体大小等
          "primary-color": "#897060",
        },
        javascriptEnabled: true,
      },
    },
  },
});
