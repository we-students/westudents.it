const envsFromFile = require('dotenv').config({
    path: process.env && process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env',
}).parsed

const envs = envsFromFile || process.env

module.exports = {
    siteMetadata: {
        title: `WeStudents.it`,
        description: ``,
        author: `https://github.com/we-students`,
        siteUrl: `https://westudents.it/`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-netlify`,
        'gatsby-plugin-remove-serviceworker',
        'gatsby-plugin-sass',
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
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: envs.CONTENTFUL_SPACE_ID,
                accessToken: envs.CONTENTFUL_ACCESS_TOKEN,
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
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-NWJDCWH',
                includeInDevelopment: false,
                defaultDataLayer: { platform: 'gatsby' },
                // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
                // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
                // dataLayerName: 'YOUR_DATA_LAYER_NAME',
            },
        },
        {
            resolve: `gatsby-plugin-create-client-paths`,
            options: { prefixes: [`/login/*`] },
        },
    ],
}
