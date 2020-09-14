/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import Collapsible from 'react-collapsible'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import FaqImage from '../../images/contact.png'

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

const OpenPosition = ({ data }) => {
    const [faqs] = useState(data.faqs.edges.map((node) => node.node))
    const [tags, setTags] = useState()
    const [selectedTag, setSelectedTag] = useState('')
    const [filteredFaqs, setFilteredFaqs] = useState(faqs)

    useEffect(() => {
        const t = [
            ...new Set(
                faqs.reduce((acc, node) => {
                    return [...acc, ...node.tags]
                }, []),
            ),
        ]

        setTags(t)
    }, [faqs])

    useEffect(() => {
        if (selectedTag !== '') {
            const f = faqs.filter((faq) => faq.tags.includes(selectedTag))
            setFilteredFaqs(f)
        }
    }, [selectedTag])

    return (
        <Layout className="faq" seo={{ title: `WeStudents — FAQ` }} showBubbles>
            <div className="faqs-wrapper container">
                <div className="top-section">
                    <div>
                        <h2>
                            Ciao, ti serve <span>aiuto</span>?
                        </h2>
                        {tags ? (
                            <div className="tags-wrapper">
                                {tags.map((tag) => (
                                    <span
                                        onClick={() => {
                                            setSelectedTag(tag)
                                        }}
                                        className={`tag ${selectedTag === tag ? 'selected' : ''}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        ) : null}
                    </div>
                    <div className="image-wrapper">
                        <img src={FaqImage} alt="Faq" />
                    </div>
                </div>

                {filteredFaqs.map((faq) => {
                    return (
                        <div className="faq-wrapper">
                            <Collapsible trigger={faq.title}>
                                {documentToReactComponents(faq.content.json, options)}
                                <div className="tags-wrapper">
                                    {faq.tags.map((tag) => (
                                        <span className="tag">{tag}</span>
                                    ))}
                                </div>
                            </Collapsible>
                        </div>
                    )
                })}
            </div>

            <div />
        </Layout>
    )
}

export const query = graphql`
    query {
        faqs: allContentfulFaq {
            edges {
                node {
                    title
                    content {
                        json
                    }
                    tags
                }
            }
        }
    }
`

export default React.memo(OpenPosition)
