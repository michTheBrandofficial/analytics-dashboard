// @ts-check
import { defineConfig } from "vite";
import Hmr, { esbuildOptions } from "nixix/vite-plugin";
import viteJsconfigPaths from "vite-jsconfig-paths";
import path from "path";
import routerAutocomplete from "./routes/plugin";

function resolve(string) {
  return path.resolve(__dirname, string);
}

export default defineConfig({
  plugins: [viteJsconfigPaths(), Hmr(`src/index.tsx`), routerAutocomplete({entryPoint: 'routes/index.tsx', definitionFile: `routes/types/index.d.ts`})],
  resolve: {
    alias: {
      "@": resolve('./')
    },
  },
  esbuild: {
    ...esbuildOptions,
  },
});
