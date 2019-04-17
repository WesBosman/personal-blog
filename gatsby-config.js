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
        icon: "src/images/web_icon.png",
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
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
