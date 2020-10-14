import React from 'react'
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ReactMarkdown from 'react-markdown'

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
    const { title, content, markdown } = data.document.edges[0].node

    return (
        <Layout
            showFooter
            className="homepage"
            seo={{ title: `WeStudents — ${title}` }}
            showBubbles
        >
            <div className="container document">
                <h2>{title}</h2>
                {markdown === true ? (
                    <ReactMarkdown
                        source={content.json.content.reduce((acc, curr) => {
                            const text = curr.content.reduce((innerAcc, innerCurr) => {
                                return `${innerAcc}\n${innerCurr.value.replace('\n', '\n')}`
                            }, '')

                            return `${acc}\n${text}`
                        }, '')}
                    />
                ) : (
                    documentToReactComponents(content.json, options)
                )}
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
                    markdown
                    content {
                        json
                    }
                }
            }
        }
    }
`

export default React.memo(Document)
