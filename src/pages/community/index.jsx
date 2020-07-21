import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import BGWrapper from '../../components/videobg-wrapper'
const pageTitle = 'WeStudents — Community'

const CommunityPage = () => {
    return (
        <Layout>
            <SEO title={pageTitle} />
            <ReactFullpage
                scrollingSpeed={1000} /* Options here */
                render={({ state, fullpageApi }) => {
                    console.log('state', state)
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <BGWrapper>
                                    <p>test</p>
                                </BGWrapper>
                            </div>
                            <div className="section">
                                <p>Section 2</p>
                            </div>
                        </ReactFullpage.Wrapper>
                    )
                }}
            />
        </Layout>
    )
}

export default CommunityPage
