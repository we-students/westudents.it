/* eslint-disable react/jsx-props-no-spreading */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ReactFullpage from '@fullpage/react-fullpage'

import Bubbles from '../bubbles/index'
import SEO from '../seo'
import Footer from '../footer'
import Header from '../header'
import './layout.scss'

const Layout = ({ className, sections, seo, showBubbles }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={className}>
            <SEO {...seo} />
            <Header siteTitle={data.site.siteMetadata.title} />
            <div style={{ margin: `0 auto` }}>
                <ReactFullpage
                    anchors={['intro', 'westudents-app']}
                    navigation
                    scrollingSpeed={1000} /* Options here */
                    autoScrolling
                    scrollHorizontally
                    scrollOverflow
                    scrollOverflowReset
                    scrollOverflowOptions={{ scrollbars: false }}
                    scrollBar={false}
                    onLeave={(origin, destination, direction) => {
                        document.dispatchEvent(
                            new CustomEvent('section-scrolled', {
                                detail: {
                                    origin,
                                    destination,
                                    direction,
                                },
                            }),
                        )
                    }}
                    render={(fullpageProps) => (
                        <>
                            {showBubbles ? (
                                <Bubbles sectionCount={fullpageProps.state.sectionCount} />
                            ) : null}
                            {sections.map((renderSection) => (
                                <div className="section">{renderSection(fullpageProps)}</div>
                            ))}
                            <div className="section">
                                <Footer />
                            </div>
                        </>
                    )}
                />
            </div>
        </div>
    )
}

export default Layout
