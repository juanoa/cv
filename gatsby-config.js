const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'CV de Juan Otálora',
    description:
      'Hola, mi nombre es Juan Otálora, soy Ingeniero Informático y hago cosas para Internet.',
    siteUrl: 'https://cv.juanoa.com', // No trailing slash allowed!
    image: '/og.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@juanoa_',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'JuanOtalora',
        short_name: 'juanoa',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://api-juanoa.herokuapp.com',
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          'job',
          'project',
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
