module.exports = {
  siteMetadata: {
    title: `Wes Bosman`,
    author: `Wes Bosman`,
    siteUrl: `https://www.wesleybosman.com`,
    description: `A personal art and code blog`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wes Bosman`,
        short_name: `Wes Bosman`,
        start_url: `/`,
        background_color: `#226597`,
        theme_color: `#87C0CD`,
        icon: "src/images/favicons/favicon-64.png",
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`
          },
          {
            family: `Rock Salt`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cache`,
      options: {
        extraDirsToCache: []
      }
    },
    {
      resolve: `gatsby-plugin-anchor-links`
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-transition-link`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-transformer-sharp",
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-a11y-emoji"
          },
          {
            resolve: "gatsby-remark-emojis",
            options: {
              class: "emoji-icon",
              escapeCharacter: "#",
              size: 32
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-sharp",
    },
    {
      resolve: "gatsby-plugin-scroll-reveal"
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-138952196-1`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato", "RockSalt"],
        },
      },
    },
  ],
}
