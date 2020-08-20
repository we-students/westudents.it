/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Layout from '../../components/layout'
import Intro from './Intro'
import Education from './Education'
import Connection from './Connection'
import Freedom from './Freedom'
import Features from './Features'
import Ambassador from './Ambassador'
import Representant from './Representant'
import Team from './Team'

import './styles.scss'

const pageTitle = 'WeStudents — Community'

const CommunityPage = () => (
    <Layout
        className="community-wrapper"
        seo={{ title: pageTitle }}
        showBubbles
        sections={[
            {
                anchor: 'intro',
                render: (fullpageProps) => <Intro fullpageProps={fullpageProps} />,
                headerStyle: 'transparent',
            },
            {
                anchor: 'Education',
                render: (fullpageProps) => <Education fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'Freedom',
                render: (fullpageProps) => <Freedom fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'Connection',
                render: (fullpageProps) => <Connection fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'Features',
                render: (fullpageProps) => <Features fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'Ambassador',
                render: (fullpageProps) => <Ambassador fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'Representant',
                render: (fullpageProps) => <Representant fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'Team',
                render: (fullpageProps) => <Team fullpageProps={fullpageProps} />,
                headerStyle: 'transparent',
            },
        ]}
    />
)

export default CommunityPage
