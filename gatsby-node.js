/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions }) => {
    const { createPage } = actions
    createPage({
        path: `/`,
        component: require.resolve(`./src/pages/index.jsx`),
    })
    createPage({
        path: `/community`,
        component: require.resolve(`./src/pages/community/index.jsx`),
    })

    createPage({
        path: `/carriere`,
        component: require.resolve(`./src/pages/careers/index.jsx`),
    })
}
