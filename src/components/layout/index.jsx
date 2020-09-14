/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-props-no-spreading */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useCallback, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ReactFullpage from '@fullpage/react-fullpage'
import Modal from 'react-modal'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { getCookie, setCookie } from '../../utils/cookies'
import Bubbles from '../bubbles'
import SEO from '../seo'
import Footer from '../footer'
import Header from '../header'
import './layout.scss'

const Layout = ({ children, className, sections, seo, showBubbles, showFooter = true }) => {
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const { width } = window.screen
        setWindowWidth(width)

        caches.keys().then((cacheNames) => {
            cacheNames.forEach((cacheName) => {
                caches.delete(cacheName)
            })
        })
    }, [])

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const [isCookieModalVisible, setCookieModalVisible] = useState(
        getCookie('cookieCheck') !== 'true',
    )
    const [headerStyle, setHeaderStyle] = useState(sections ? sections[0].headerStyle : undefined)
    const handleSectionChange = (origin, destination) => {
        setHeaderStyle(sections[destination.index].headerStyle)
    }

    const acceptCookies = () => {
        setCookie('cookieCheck', true, 365)
        setCookieModalVisible(false)
    }

    useScrollPosition(() => {
        if (windowWidth < 992 && sections) {
            const sectionsElems = document.getElementsByClassName('section')

            let targetIndex = 0
            let targetOffset = sectionsElems[0].getBoundingClientRect().y

            for (let i = 0; i < sectionsElems.length; i++) {
                const offset = sectionsElems[i].getBoundingClientRect().y

                if (offset < 0) {
                    if (offset > targetOffset) {
                        targetOffset = offset
                        targetIndex = i
                    }
                }
            }

            setHeaderStyle(sections[targetIndex].headerStyle)
        }
    })

    const renderSectionContent = useCallback(() => {
        if (windowWidth < 992) {
            return (
                <>
                    {sections.map((section, index) => {
                        return (
                            <div className="section">
                                {section.render({
                                    sectionIndex: index,
                                })}
                                {showFooter && index === sections.length - 1 ? <Footer /> : null}
                            </div>
                        )
                    })}
                </>
            )
        }

        return (
            <ReactFullpage
                // anchors={sections.map((section) => section.anchor)}
                navigation
                scrollingSpeed={1000} /* Options here */
                fitToSection={false}
                autoScrolling
                lockAnchors
                scrollHorizontally
                scrollOverflowOptions={{ scrollbars: false }}
                scrollOverflow
                scrollBar={false}
                fitToSectionDelay={1000}
                onLeave={(origin, destination, direction) =>
                    handleSectionChange(origin, destination, direction)
                }
                render={(fullpageProps) => (
                    <>
                        {showBubbles ? (
                            <Bubbles sectionCount={fullpageProps.state.sectionCount} />
                        ) : null}
                        {sections.map((section, index) => (
                            <div className="section" key={`section_${section.anchor}`}>
                                {section.render({
                                    ...fullpageProps,
                                    sectionIndex: index,
                                })}
                                {showFooter && index === sections.length - 1 ? <Footer /> : null}
                            </div>
                        ))}
                    </>
                )}
            />
        )
    }, [windowWidth])

    return (
        <div className={className}>
            {console.log('rendering laypout')}
            <SEO {...seo} />
            <Header siteTitle={data.site.siteMetadata.title} type={headerStyle} />
            <div style={{ margin: `0 auto` }}>
                {sections && Array.isArray(sections) ? (
                    renderSectionContent()
                ) : (
                    <>
                        {children}
                        <Footer />
                    </>
                )}
            </div>
            <Modal
                isOpen={isCookieModalVisible}
                contentLabel="Cookie"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        maxWidth: 300,
                        textAlign: 'center',
                        padding: 30,
                    },
                }}
            >
                <p>
                    Questo sito usa dei cookie di terze parti e dei cookie di profilazione. Nella
                    cookie policy puoi trovare altre informazioni in merito e revocare il consenso
                    alla loro installazione. Proseguendo nella navigazione, accetti che i cookie
                    siano installati.
                </p>

                <button style={{ marginTop: 20 }} type="button" onClick={acceptCookies}>
                    Ok, accetto
                </button>
            </Modal>
        </div>
    )
}

export default React.memo(Layout)
