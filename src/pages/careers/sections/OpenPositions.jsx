import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import GridList from '../../../components/grid-list'

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

const OpenPosition = ({ fullpageProps }) => {
    const data = useStaticQuery(graphql`
        query OpenPositionsQuery {
            allContentfulOpenPosition {
                edges {
                    node {
                        category
                        level
                        place
                        title
                        createdAt(formatString: "DD/MM/YYYY")
                        description {
                            json
                        }
                        shortDescription {
                            json
                        }
                        icon {
                            fluid {
                                srcSet
                                srcSetWebp
                            }
                        }
                    }
                }
            }
        }
    `).allContentfulOpenPosition.edges.map(({ node }) => node)

    return (
        <div className="open-positions container">
            <h3>Tutte le posizioni aperte</h3>
            <p>Non sei un developer o un designer? Scopri le altre posizioni aperte!</p>

            <GridList
                items={data}
                cols={3}
                renderItem={(item, index) => {
                    return (
                        <div key={index} className="grid-item open-position-item">
                            <img
                                srcSet={item.icon.fluid.srcSet}
                                srcSetWebp={item.icon.fluid.srcSetWebp}
                                alt="Posizione aperta"
                            />
                            <h4>{item.title}</h4>
                            <p>{documentToReactComponents(item.shortDescription.json, options)} </p>
                        </div>
                    )
                }}
            />
        </div>
    )
}

export default OpenPosition
