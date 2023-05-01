import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementUiResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    createVuePlugin(),
    AutoImport({
      resolvers: [ElementUiResolver()],
    }),
    Components({
      resolvers: [ElementUiResolver()],
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
