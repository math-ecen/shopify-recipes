module.exports = {
  title: 'Shopify Tech Tips',
  tagline: 'Shopify Tech Tips',
  url: 'https://math-ecen.github.io/shopify-recipes/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'math-ecen', // Usually your GitHub org/user name.
  projectName: 'shopify-recipes', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Shopify Tech Tips',
      logo: {
        alt: 'Shopify Tech Tips Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/math-ecen/shopify-recipes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/math-ecen/shopify-recipes',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shopify Tech Tips`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/math-ecen/shopify-recipes/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/math-ecen/shopify-recipes/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
