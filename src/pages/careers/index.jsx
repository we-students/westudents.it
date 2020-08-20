import React from 'react'

import Layout from '../../components/layout'
import './styles.scss'

import Crew from './sections/Crew'
import DevTeam from './sections/DevTeam'
import DesignTeam from './sections/DesignTeam'
import OpenPositions from './sections/OpenPositions'

const pageTitle = 'WeStudents — Carriere'

const Careers = () => (
    <Layout
        className="careers"
        seo={{ title: pageTitle }}
        showBubbles
        sections={[
            {
                anchor: 'crew',
                render: (fullpageProps) => <Crew fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'dev',
                render: (fullpageProps) => <DevTeam fullpageProps={fullpageProps} />,
                headerStyle: 'transparent',
            },
            {
                anchor: 'design',
                render: (fullpageProps) => <DesignTeam fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'posizioni-aperte',
                render: (fullpageProps) => <OpenPositions fullpageProps={fullpageProps} />,
            },
        ]}
    />
)

export default Careers
