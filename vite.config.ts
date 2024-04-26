import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
  server: {
    proxy: {
      "/feed": {
        target: "https://medium.com/feed/@bagaz",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/feed/, ""),
      },
    },
  },
});
