/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "My Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial"
        },
        {
          type: "doc",
          docId: "template",
          position: "left",
          label: "Doc Template",
          activeBaseRegex: `/community/`
        },
        {
          to: "/community/template",
          position: "left",
          label: "Community Template"
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
        admonitions: {
          customTypes: {
            contribution: {
              keyword: `contribution`,
              infima: true,
              svg:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.23 15.39L12 15.45l-3.22 1.94c-.38.23-.85-.11-.75-.54l.85-3.66-2.83-2.45c-.33-.29-.15-.84.29-.88l3.74-.32 1.46-3.45c.17-.41.75-.41.92 0l1.46 3.44 3.74.32c.44.04.62.59.28.88l-2.83 2.45.85 3.67c.1.43-.36.77-.74.54z" fill="#855EF0"/></svg>'
            },
            funfact: {
              keyword: `funfact`,
              infima: true,
              svg:
                '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><g><rect fill="none" height="24" width="24" x="0" y="0"/></g><g><path d="M20,2H4C2.9,2,2,2.9,2,4v18l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M13.57,11.57L12,15l-1.57-3.43L7,10l3.43-1.57 L12,5l1.57,3.43L17,10L13.57,11.57z"/></g></svg>'
            },
            bestpractice: {
              keyword: `bestpractice`,
              infima: true,
              svg:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>'
            },
            faq: {
              keyword: `faq`,
              infima: true,
              svg:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>'
            },
            unity: {
              keyword: `unity`,
              infima: true,
              svg:
                '<svg width="25px" height="24px" viewBox="0 0 507 506" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="unity-logo-black" fill="#757575" fill-rule="nonzero"><path d="M451.009018,0.49163636 L244.575273,54.2842182 L214.027491,106.713018 L152.028945,106.261527 L0.92378182,253.214836 L152.028945,400.135564 L213.994909,399.684073 L244.612509,452.080291 L451.009018,505.872873 L506.305018,305.192145 L474.886836,253.214836 L506.305018,201.237527 L451.009018,0.49163636 Z M218.998545,115.151709 L376.908655,75.6811636 L286.261382,228.387491 L104.943564,228.387491 L218.998545,115.151709 Z M218.998545,391.240727 L104.943564,278.0096 L286.261382,278.0096 L376.908655,430.711273 L218.998545,391.240727 Z M421.098909,405.888582 L330.419055,253.214836 L421.098909,100.475927 L464.884218,253.214836 L421.098909,405.888582 L421.098909,405.888582 Z" id="Fill-1"></path></g></g></svg>'
            }
          }
        }
      }
    ]
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "community",
        path: "community",
        editCurrentVersion: true,
        routeBasePath: "community",
        sidebarPath: require.resolve("./sidebarsCommunity.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true
      }
    ]
  ]
};
