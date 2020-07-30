/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

import GridList from '../../../components/grid-list'

const OpenPosition = () => {
    const openPositions = useStaticQuery(graphql`
        query OpenPositionsQuery {
            allContentfulOpenPosition {
                edges {
                    node {
                        category
                        slug
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
                items={openPositions}
                cols={3}
                renderItem={(item, index) => {
                    const title = (() => {
                        if (item.title.length > 30) {
                            return `${item.title.substring(0, 30)}...`
                        }

                        return item.title
                    })()

                    const description = (() => {
                        const desc = item.shortDescription.json.content.reduce((acc, curr) => {
                            return `${acc} ${curr.content[0].value}`
                        }, '')

                        if (desc.length > 160) {
                            return `${desc.substring(0, 180)}...`
                        }

                        return desc
                    })()

                    const imgProps =
                        item.icon && item.icon.fluid
                            ? {
                                  srcSet: item.icon.fluid.srcSet,
                                  srcSetWebp: item.icon.fluid.srcSetWebp,
                              }
                            : {
                                  src: '/static/images/candidate.png',
                              }

                    return (
                        <Link to={`/carriere/${item.slug}`}>
                            <div key={index} className="grid-item open-position-item">
                                <img {...imgProps} alt="Posizione aperta" />
                                <div className="infos ">
                                    <h4>{title}</h4>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </Link>
                    )
                }}
            />
        </div>
    )
}

export default OpenPosition
