/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const careers = await graphql(`
        query AllCareers {
            allContentfulOpenPosition {
                edges {
                    node {
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
        path: `/partners`,
        component: require.resolve(`./src/pages/partners/index.jsx`),
    })

    createPage({
        path: `/contattaci`,
        component: require.resolve(`./src/pages/contact/index.jsx`),
    })

    careers.data.allContentfulOpenPosition.edges.forEach(({ node }) => {
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
}
