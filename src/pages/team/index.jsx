import React from 'react'

import Layout from '../../components/layout'
import './styles.scss'
import Intro from './sections/Intro'

const pageTitle = 'WeStudents — Team'

const HomePage = () => (
    <Layout
        showFooter
        className="teampage"
        seo={{ title: pageTitle }}
        showBubbles
        sections={[
            {
                anchor: 'intro',
                render: (fullpageProps) => <Intro fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'last',
                render: () => <p>Footer section</p>,
            },
        ]}
    />
)

export default HomePage
