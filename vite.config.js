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
        "@kisskissbankbank/kitten",
        "classnames",
        "draft-convert",
        "draft-js",
        "draft-js-export-html",
        "formik",
        "immutable",
        "linkify-it",
        "lodash",
        "prop-types",
        "qs",
        "react",
        "react-dom",
        "styled-components",
        "tlds",
        "yup",
      ],
      output: {
        globals: {
          "draft-js": "DraftJS",
          "draft-convert": "DraftConvert",
          "draft-js-export-html": "DraftJsExportHtml",
          classnames: "classnames",
          qs: "qs",
          tlds: "tlds",
          "linkify-it": "linkifyIt",
          immutable: "Immutable",
          react: "React",
          "react-dom": "ReactDOM",
          "@kisskissbankbank/kitten": "Kitten",
          "styled-components": "styled",
          formik: "Formik",
          yup: "Yup",
          "prop-types": "PropTypes",
        },
      },
    },
  },
});
