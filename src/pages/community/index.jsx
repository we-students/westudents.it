/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Layout from '../../components/layout'
import Intro from './sections/Intro'
import Education from './sections/Education'
import Connection from './sections/Connection'
import Freedom from './sections/Freedom'
import Features from './sections/Features'
import Ambassador from './sections/Ambassador'
import Representant from './sections/Representant'
import Team from './sections/Team'

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
                anchor: 'education',
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
                anchor: 'features',
                render: (fullpageProps) => <Features fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'ambassador',
                render: (fullpageProps) => <Ambassador fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'representant',
                render: (fullpageProps) => <Representant fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'team',
                render: (fullpageProps) => <Team fullpageProps={fullpageProps} />,
                headerStyle: 'transparent',
            },
        ]}
    />
)

export default React.memo(CommunityPage)
