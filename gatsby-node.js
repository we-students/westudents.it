/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const { data } = await graphql(`
        query AllCareers {
            careers: allContentfulOpenPosition {
                edges {
                    node {
                        slug
                    }
                }
            }

            documents: allContentfulDocument {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `)

    createPage({
        path: `/`,
        component: require.resolve(`./src/pages/homepage/index.jsx`),
    })
    createPage({
        path: `/community`,
        component: require.resolve(`./src/pages/community/index.jsx`),
    })

    createPage({
        path: `/carriere`,
        component: require.resolve(`./src/pages/careers/index.jsx`),
    })

    createPage({
        path: `/team`,
        component: require.resolve(`./src/pages/team/index.jsx`),
    })

    createPage({
        path: `/prodotti/westudents`,
        component: require.resolve(`./src/pages/product-westudents/index.jsx`),
    })

    createPage({
        path: `/partners`,
        component: require.resolve(`./src/pages/partners/index.jsx`),
    })

    createPage({
        path: `/contattaci`,
        component: require.resolve(`./src/pages/contact/index.jsx`),
    })

    data.careers.edges.forEach(({ node }) => {
        createPage({
            path: `/carriere/${node.slug}`,
            component: require.resolve(`./src/pages/careers/detail.jsx`),
            context: {
                slug: node.slug,
            },
        })

        createPage({
            path: `/carriere/${node.slug}/candidatura`,
            component: require.resolve(`./src/pages/careers/submission.jsx`),
            context: {
                slug: node.slug,
            },
        })
    })

    data.documents.edges.forEach(({ node }) => {
        createPage({
            path: `/${node.slug}`,
            component: require.resolve(`./src/pages/document/index.jsx`),
            context: {
                slug: node.slug,
            },
        })
    })
}
