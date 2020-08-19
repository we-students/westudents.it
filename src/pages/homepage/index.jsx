import React from 'react'

import Layout from '../../components/layout'
import './styles.scss'
import WeStudentsApp from './sections/WeStudentsAppSection'
import WeGather from './sections/WeGatherSection'
import DaScuola from './sections/DaScuolaSection'
import Details from './sections/Companydetails'
import Sponsor from './sections/Sponsor'
import Intro from './sections/IntroSection'

const pageTitle = 'WeStudents — Home'

const HomePage = () => (
    <Layout
        showFooter
        className="homepage"
        seo={{ title: pageTitle }}
        showBubbles
        sections={[
            {
                anchor: 'intro',
                render: (fullpageProps) => <Intro fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'westudents-app',
                render: (fullpageProps) => <WeStudentsApp fullpageProps={fullpageProps} />,
            },

            {
                anchor: 'wegather',
                render: (fullpageProps) => <WeGather fullpageProps={fullpageProps} />,
            },

            {
                anchor: 'dascuola',
                render: (fullpageProps) => <DaScuola fullpageProps={fullpageProps} />,
            },

            {
                anchor: 'numeri',
                render: (fullpageProps) => <Details fullpageProps={fullpageProps} />,
            },

            {
                anchor: 'sponsors',
                render: (fullpageProps) => <Sponsor fullpageProps={fullpageProps} />,
            },
        ]}
    />
)

export default HomePage
