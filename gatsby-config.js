module.exports = {
  siteMetadata: {
    title: 'Basic blog',
    author: 'Aaron Po',
    description: 'This is a basic blog.',
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
  ],
};
