import { defineConfig } from "vite";
import Hmr, { esbuildOptions } from "nixix/vite-plugin";
import viteJsconfigPaths from "vite-jsconfig-paths";
import path from "path";

function resolve(string) {
  return path.resolve(__dirname, string);
}

export default defineConfig({
  plugins: [viteJsconfigPaths(), Hmr(`src/index.tsx`)],
  resolve: {
    alias: {
      "@": resolve('./')
    },
  },
  esbuild: {
    ...esbuildOptions,
  },
});
