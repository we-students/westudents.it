/* eslint-disable react/jsx-props-no-spreading */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ReactFullpage from '@fullpage/react-fullpage'

import Bubbles from '../bubbles/index'
import SEO from '../seo'
import Footer from '../footer'
import Header from '../header'
import './layout.scss'

const Layout = ({ children, className, sections, seo, showBubbles, showFooter = true }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const [activeTab, setActiveTab] = useState(0)
    const handleSectionChange = (origin, destination) => {
        setActiveTab(destination.index)
    }
    return (
        <div className={className}>
            <SEO {...seo} />
            <Header siteTitle={data.site.siteMetadata.title} />
            <div style={{ margin: `0 auto` }}>
                {sections && Array.isArray(sections) ? (
                    <ReactFullpage
                        anchors={sections.map((section) => section.anchor)}
                        navigation
                        scrollingSpeed={1000} /* Options here */
                        autoScrolling
                        scrollHorizontally
                        scrollOverflow
                        scrollOverflowReset
                        scrollOverflowOptions={{ scrollbars: false }}
                        scrollBar={false}
                        onLeave={(origin, destination, direction) =>
                            handleSectionChange(origin, destination, direction)
                        }
                        render={(fullpageProps) => {
                            return (
                                <>
                                    {showBubbles ? (
                                        <Bubbles sectionCount={fullpageProps.state.sectionCount} />
                                    ) : null}
                                    {sections.map((section, index) => (
                                        <>
                                            <div className="section">
                                                {section.render({
                                                    ...fullpageProps,
                                                    isActive: activeTab === index,
                                                })}
                                                {showFooter && index === sections.length - 1 ? (
                                                    <Footer />
                                                ) : null}
                                            </div>
                                        </>
                                    ))}
                                </>
                            )
                        }}
                    />
                ) : (
                    <>
                        {children}
                        <Footer />
                    </>
                )}
            </div>
        </div>
    )
}

export default Layout
