/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby + Vercel`,
    siteUrl: `https://gatsby-template.vercel.app/`,
  },
  plugins: [],
};

console.log('Environment Variables:', JSON.stringify(process.env, null, 2));
