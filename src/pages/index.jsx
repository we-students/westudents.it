import React from 'react'
import { Link } from 'gatsby'
import Lottie from 'react-lottie'
import ReactFullpage from '@fullpage/react-fullpage'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import * as animationData from '../lotties/main.json'

const pageTitle = 'WeStudents — Home'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
}

const IndexPage = () => (
    <Layout>
        <SEO title={pageTitle} />
        <ReactFullpage
            scrollingSpeed={1000} /* Options here */
            render={({ state, fullpageApi }) => {
                console.log('state', state)
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <p>Section 1 (welcome to fullpage.js)</p>
                            <button onClick={() => fullpageApi.moveSectionDown()}>
                                Click me to move down
                            </button>
                        </div>
                        <div className="section">
                            <p>Section 2</p>
                        </div>
                    </ReactFullpage.Wrapper>
                )
            }}
        />
        <div style={{ height: 300, with: 300 }} />
        <Lottie
            options={defaultOptions}
            height={600}
            width={600}
            isStopped={false}
            isPaused={false}
        />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
)

export default IndexPage
