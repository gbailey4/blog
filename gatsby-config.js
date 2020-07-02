require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `Graham Bailey`,
    siteTitleAlt: `Graham Bailey - Blog about Personal Projects and Learning`,
    siteHeadline: `Graham Bailey - Personal Blog`,
    siteUrl: `https://grahambailey.io`,
    siteDescription: `Graham Bailey's Personal Blog. Experience Product Management and Marketing professional blog about technical personal projects and learnings.`,
    siteLanguage: `en`,
    author: `Graham Bailey`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        formatString: `MMMM DD, YYYY`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Contact`,
            slug: `/contact`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/grahambailey`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/grahamabailey`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Graham Bailey - Personal Blog`,
        short_name: `Graham Bailey`,
        description: `Personal blog for Graham Bailey. I'm an experienced Product Management and Marketing professional blogging about personal projects and learnings.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
