module.exports = {
  siteMetadata: {
    title: `Wes Bosman`,
    author: `Wes Bosman`,
    siteUrl: `https://www.wesleybosman.com`,
    description: `A personal art and code blog`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {
        start_url: `/`,
        icon: `src/images/icon.png`,
        // name: 'Wes Bosman',
        // short_name: 'Wes Bosman',
        // background_color: '#663399',
        // theme_color: '#663399',
        // display: 'minimal-ui',
      },
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
