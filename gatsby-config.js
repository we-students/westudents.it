const envs = require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
}).parsed

module.exports = {
    siteMetadata: {
        title: `WeStudents.it`,
        description: ``,
        author: `https://github.com/we-students`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `WeStudents.it website`,
                short_name: `westudents.it`,
                start_url: `/`,
                background_color: `#f0494e`,
                theme_color: `#fcab7c`,
                display: `minimal-ui`,
                icon: `src/images/westudentsapp.svg`,
            },
        },
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: envs.CONTENTFUL_SPACE_ID, // or process.env.CONTENTFUL_SPACE_ID
                accessToken: envs.CONTENTFUL_ACCESS_TOKEN, // or process.env.CONTENTFUL_TOKEN
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
