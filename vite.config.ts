import { defineConfig } from "vite";

export default defineConfig({
  base: "/java-hashmap-presentation/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          mermaid: ["mermaid"],
          reveal: ["reveal.js"],
        },
        chunkFileNames: 'assets/chunk-[hash].js',
        entryFileNames: 'assets/entry-[hash].js',
        assetFileNames: 'assets/asset-[hash][extname]'
      },
    },
  },
  optimizeDeps: {
    include: ["mermaid", "reveal.js"],
  },
});
