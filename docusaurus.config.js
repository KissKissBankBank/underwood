module.exports = {
  title: "Underwood",
  tagline: "Text editor based on Draft.JS",
  url: "https://underwood.vercel.app/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "KissKissBankBank",
  projectName: "underwood",
  onBrokenLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
  plugins: ["docusaurus-plugin-sass"],
  themeConfig: {
    navbar: {
      title: "Underwood",
      logo: {
        alt: "Underwood logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/editor",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "playground", label: "Playground", position: "left" },
        {
          href: "https://github.com/KissKissBankBank/underwood",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/doc1",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/underwood",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/KissKissBankBank/underwood",
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/KissKissBankBank/underwood/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
