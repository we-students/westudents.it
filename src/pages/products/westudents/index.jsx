import React from 'react'

import Layout from '../../../components/layout'
import './styles.scss'
import Intro from './sections/IntroSection'
import Demo from './sections/DemoSection'
import Details from './sections/Details'
import Sponsor from './sections/Sponsor'

const pageTitle = 'WeStudents — Prodotti WeStudents App'

const WeStudentsPage = () => (
    <Layout
        className="product-westudents"
        seo={{ title: pageTitle }}
        showBubbles
        sections={[
            {
                anchor: 'intro',
                render: (fullpageProps) => <Intro fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'demo',
                render: (fullpageProps) => <Demo fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'dettagli',
                render: (fullpageProps) => <Details fullpageProps={fullpageProps} />,
                headerStyle: 'transparent',
            },
            {
                anchor: 'sponsor',
                render: (fullpageProps) => <Sponsor fullpageProps={fullpageProps} />,
            },
        ]}
    />
)

export default WeStudentsPage
