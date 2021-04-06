/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  siteMetadata : {
    title : `Bionest Eco Solutions`,
    description : `Eco friendly solutions for your problems`,
    author: `BioNest Eco Solutions`,
    address :`401, NDM-2 Building, Netaji Subhash Place, Pitampura, Delhi-110034, INDIA`,
    phone: "9875757623",
    email :"bionest@ecosolutons.com",
  socialLinks :{
      facebook : "#",
      instagram : "#",
      skype : "anuj.mittal227"
    },
    },
  pathPrefix: "/bionest",

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bionest Eco Solutions`,
        short_name: `Bionest`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/bioNest LOGO.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`
  ],
}
