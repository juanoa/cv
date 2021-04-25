module.exports = {
  siteMetadata: {
    title: 'Juan Otálora | Ingeniero Informático',
    description:
      '¡Hola! Mi nombre es Juan Otálora, soy Ingeniero Informático y hago cosas para Internet.',
    siteUrl: 'https://cv.juanoa.com',
    image: '/og.png',
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
        name: `CV de Juan Otálora`,
        short_name: `CV de juanoa.com`,
        description: `Ingeniero informático`,
        start_url: `/`,
        background_color: `#e9e9e9`,
        theme_color: `#5564eb`,
        display: `minimal-ui`,
        icon: `static/manifest/icon-512x512.png`,
        icons: [
          {
            src: `static/manifest/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `static/manifest/icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `static/manifest/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `static/manifest/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://api-juanoa.herokuapp.com',
        contentTypes: ['job', 'project'],
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
