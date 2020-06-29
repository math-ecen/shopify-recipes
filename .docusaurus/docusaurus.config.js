export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Shopify Tech Tips",
      "logo": {
        "alt": "Shopify Tech Tips Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/math-ecen/shopify-recipes",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Get Started",
              "to": "docs/"
            },
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/math-ecen/shopify-recipes"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Shopify Tech Tips"
    }
  },
  "title": "Shopify Tech Tips",
  "tagline": "Shopify Tech Tips",
  "url": "https://shopifytech.tips",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "math-ecen",
  "projectName": "shopify-recipes",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "intro",
          "sidebarPath": "/home/kevin/shopify-recipes/sidebars.js",
          "editUrl": "https://github.com/math-ecen/shopify-recipes/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/math-ecen/shopify-recipes/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/kevin/shopify-recipes/src/css/custom.css"
        }
      }
    ]
  ]
};