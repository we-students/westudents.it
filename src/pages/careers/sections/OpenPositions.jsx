/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

import GridList from '../../../components/grid-list'
import Translate from '../../../components/translation/translate'

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
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
    `).allContentfulOpenPosition.edges.map(({ node }) => node)

    return (
        <div className="open-positions container">
            <h3>
                <Translate>CARRIERS.OPEN_POSITIONS.TITLE</Translate>
            </h3>
            <p>
                <Translate>CARRIERS.OPEN_POSITIONS.SUBTITLE</Translate>
            </p>

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

                    const imgProps = item.icon
                        ? {
                              src: item.icon.file.url,
                          }
                        : {
                              src: '/static/images/candidate.png',
                          }

                    return (
                        <Link key={index} to={`/carriere/${item.slug}`}>
                            <div className="grid-item open-position-item">
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

export default React.memo(OpenPosition)
