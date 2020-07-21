/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ actions }) => {
    const { createPage } = actions

    createPage({
        path: `/`,
        component: require.resolve(`./src/pages/homepage/index.jsx`),
    })
}
