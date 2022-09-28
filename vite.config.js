import { resolve } from "path";
import { defineConfig } from "vite";


export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "./src/html/hex.html"),
      },
    },
  },
});
