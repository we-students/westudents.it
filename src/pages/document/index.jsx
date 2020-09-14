import React from 'react'
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../../components/layout'
import './styles.scss'

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
}

const Document = ({ data }) => {
    const { title, content } = data.document.edges[0].node
    return (
        <Layout
            showFooter
            className="homepage"
            seo={{ title: `WeStudents — ${title}` }}
            showBubbles
        >
            <div className="container document">
                <h2>{title}</h2>
                {documentToReactComponents(content.json, options)}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String) {
        document: allContentfulDocument(filter: { slug: { eq: $slug } }) {
            edges {
                node {
                    title
                    slug
                    content {
                        json
                    }
                }
            }
        }
    }
`

export default React.memo(Document)
