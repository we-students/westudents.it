import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Intro from './IntroSection'
import './styles.scss'
import WeStudentsApp from './WeStudentsAppSection'
import WeGather from './WeGatherSection'

const pageTitle = 'WeStudents — Home'

const HomePage = () => (
    <Layout className="homepage">
        <SEO title={pageTitle} />
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
            render={({ fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <Intro onCtaPress={() => fullpageApi.moveSectionDown()} />
                        </div>
                        <div className="section">
                            <WeStudentsApp onCtaPress={() => fullpageApi.moveSectionDown()} />
                        </div>
                        <div className="section">
                            <WeGather onCtaPress={() => fullpageApi.moveSectionDown()} />
                        </div>
                    </ReactFullpage.Wrapper>
                )
            }}
        />
    </Layout>
)

export default HomePage
