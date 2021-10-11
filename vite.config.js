const path = require("path");
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index.jsx"),
      name: "Underwood",
      fileName: (format) => `underwood.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "styled-components", "lodash"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
