import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gabe-portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass", 
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-DNF4ZB1VGZ"
      }
    }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images/`
    },
    __key: "images"
    },
    "gatsby-plugin-tsconfig-paths"
  ]
};

export default config;
