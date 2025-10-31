const config = require('./config');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Detect Cloudflare Pages environment
const isCloudflare = process.env.CF_PAGES === '1';

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon,
      },
    },
    'gatsby-plugin-sass',
    // Only include offline plugin when NOT on Cloudflare
    !isCloudflare && 'gatsby-plugin-offline',
  ].filter(Boolean),
};
