/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: " My New Blog",
    description: "This is my awesome blog I made from scratch",
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images/`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/pages/`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
};
