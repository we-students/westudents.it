import React from 'react'

import Layout from '../../components/layout'
import './styles.scss'
import Intro from './sections/Intro'
import TeamProfiles from './sections/TeamProfiles'
import JoinUs from './sections/JoinUs'

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
                anchor: 'team',
                render: (fullpageProps) => <TeamProfiles fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'candidati',
                render: (fullpageProps) => <JoinUs fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'footer',
                render: () => <div />,
            },
        ]}
    />
)

export default HomePage
