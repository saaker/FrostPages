module.exports = {
  pathPrefix: "/FrostPages",
  siteMetadata: {
    title: `SAA - FrostPages`,
    description: `Seriously Doe.`,
    author: `SAA`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
	      icon: `${__dirname}/src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
