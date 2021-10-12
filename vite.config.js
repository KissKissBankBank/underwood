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
      external: [
        "formik",
        "yup",
        "react",
        "react-dom",
        "styled-components",
        "lodash",
        "@kisskissbankbank/kitten",
      ],
      output: {
        globals: {
          react: "React",
          ["react-dom"]: "ReactDOM",
          "@kisskissbankbank/kitten": "Kitten",
          "styled-components": "styled",
          formik: "Formik",
          yup: "Yup",
        },
      },
    },
  },
});
