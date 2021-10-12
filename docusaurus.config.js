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
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  themeConfig: {
    navbar: {
      title: "Underwood",
      logo: {
        alt: "Underwood logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/displayer",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/KissKissBankBank/underwood",
          label: "GitHub",
          position: "right",
        },
        {
          type: 'localeDropdown',
          position: 'left',
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
            {
              label: "Second Doc",
              to: "docs/doc2",
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
            {
              label: "Twitter",
              href: "https://twitter.com/Kissbankers",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
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
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/KissKissBankBank/underwood/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
