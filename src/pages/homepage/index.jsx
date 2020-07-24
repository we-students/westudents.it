import React from 'react'

import Layout from '../../components/layout'
import Intro from './IntroSection'
import './styles.scss'
import WeStudentsApp from './WeStudentsAppSection'
import WeGather from './WeGatherSection'
import Details from './Companydetails'

const pageTitle = 'WeStudents — Home'

const HomePage = () => (
    <Layout
        className="homepage"
        seo={{ title: pageTitle }}
        showBubbles
        sections={[
            (fullpageProps) => <Intro fullpageProps={fullpageProps} />,
            (fullpageProps) => <WeStudentsApp fullpageProps={fullpageProps} />,
            (fullpageProps) => <WeGather fullpageProps={fullpageProps} />,
            (fullpageProps) => <Details fullpageProps={fullpageProps} />,
        ]}
    />
)

export default HomePage
