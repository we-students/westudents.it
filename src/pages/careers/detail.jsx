import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../../components/layout'
import './styles.scss'

import MapMarker from '../../images/map_marker.png'

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

const CareerDetails = ({ data }) => {
    const { title, place, description } = data.allContentfulOpenPosition.edges[0].node

    return (
        <Layout className="careers" seo={{ title: `WeStudents — ${title}` }} showBubbles>
            <div className="container career-details">
                <div className="top-bar">
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <div>
                        <button className="custom-button" type="submit">
                            Candidati
                        </button>
                    </div>
                </div>
                <div className="place-row">
                    <img src={MapMarker} alt="map marker" />
                    <p>{place}</p>
                </div>
                <p>{documentToReactComponents(description.json, options)} </p>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query OpenPositionDetailQuery($slug: String) {
        allContentfulOpenPosition(filter: { slug: { eq: $slug } }) {
            edges {
                node {
                    place
                    title
                    description {
                        json
                    }
                }
            }
        }
    }
`

export default CareerDetails