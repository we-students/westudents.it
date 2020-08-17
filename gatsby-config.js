const envs = require('dotenv').config(
    process.env.NODE_ENV === 'development'
        ? {
              path: process.env && process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env',
          }
        : {},
)

console.log('envs', envs)

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
        {
            resolve: 'gatsby-plugin-firebase',
            options: {
                credentials: {
                    apiKey: envs.FIREBASE_API_KEY,
                    authDomain: envs.FIREBASE_AUTH_DOMAIN,
                    databaseURL: envs.FIREBASE_DATABASE_URL,
                    projectId: envs.FIREBASE_PROJECT_ID,
                    storageBucket: envs.FIREBASE_STORAGE_BUCKET,
                    messagingSenderId: envs.FIREBASE_MESSAGING_SENDER_ID,
                    appId: envs.FIREBASE_APP_ID,
                    measurementId: envs.MEASUREMENT_ID,
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
