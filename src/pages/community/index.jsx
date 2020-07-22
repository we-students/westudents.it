import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import BGWrapper from '../../components/videobg-wrapper'
import Translation from '../../components/translation/translate'

import './styles.scss'

const pageTitle = 'WeStudents — Community'

const CommunityPage = () => {
    return (
        <Layout className="community-wrapper">
            <SEO title={pageTitle} />
            <ReactFullpage
                scrollingSpeed={1000} /* Options here */
                render={({ state, fullpageApi }) => {
                    console.log('state', state)
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <BGWrapper>
                                    <div className="container intro-section" style={{ flex: 1 }}>
                                        <div>
                                            <p className="section-title">
                                                <Translation>COMMUNITY.INTRO.TITLE</Translation>
                                            </p>
                                        </div>
                                        <div className="justify-center" style={{ flex: 1 }}>
                                            <img
                                                style={{ width: '120px' }}
                                                alt="community"
                                                // eslint-disable-next-line global-require
                                                src={require('../../images/community_icon.svg')}
                                            />
                                        </div>
                                        <div style={{ flex: 1.5, margin: '0 30%' }}>
                                            <p className="section-subtitle">
                                                <Translation>COMMUNITY.INTRO.SUBTITLE</Translation>
                                            </p>
                                        </div>
                                        <div style={{ flex: 1 }} className="scroll-to">
                                            <p
                                                className="text-center"
                                                style={{ marginBottom: '1em' }}
                                            >
                                                <Translation>COMMUNITY.INTRO.DISCOVER</Translation>
                                            </p>
                                            <div className="justify-center">
                                                <img
                                                    style={{ width: '20px' }}
                                                    alt="community"
                                                    // eslint-disable-next-line global-require
                                                    src={require('../../images/arrow_down.svg')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </BGWrapper>
                            </div>
                            <div className="section">
                                <div className="container manifest">
                                    <p className="title text-center">
                                        <Translation>COMMUNITY.MANIFEST.TITLE</Translation>
                                    </p>
                                    <div className="manifest-list">
                                        <p>
                                            <span style={{ fontWeight: 'bold', fontSize: '17px' }}>
                                                1.
                                            </span>
                                            <Translation>COMMUNITY.MANIFEST.ITEM1</Translation>
                                        </p>
                                        <p>
                                            <span style={{ fontWeight: 'bold', fontSize: '17px' }}>
                                                2.
                                            </span>
                                            <Translation>COMMUNITY.MANIFEST.ITEM2</Translation>
                                        </p>
                                        <p>
                                            <span style={{ fontWeight: 'bold', fontSize: '17px' }}>
                                                3.
                                            </span>
                                            <Translation>COMMUNITY.MANIFEST.ITEM3</Translation>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    )
                }}
            />
        </Layout>
    )
}

export default CommunityPage
