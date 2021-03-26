/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  siteMetadata : {
    title : `Bionest Eco Solutions`,
    description : `this is site Description`,
    author: `BioNest Eco Solutions`,
    socialLinks :{
      facebook : "www.facebook.com/",
      instagram : "www.instagrm.com/",
      phone: "9875757623",
      email :"bionext@ecosolutons.com"
    },
    },
  pathPrefix: "/bionest",

  plugins: [`gatsby-plugin-postcss`,`gatsby-plugin-react-helmet`],
}
