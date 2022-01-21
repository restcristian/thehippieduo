module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "The Hippie Duo",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        // datalayer to be set before GTM is loaded
        // should be a stringified object or object
        //
        // Defaults to null
        id: "G-L35RF9TSNV",
        includeInDevelopment: false,
        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          }
        },
      },
    }
  ],
};
