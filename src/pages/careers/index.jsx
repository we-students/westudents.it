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
            (fullpageProps) => <Crew fullpageProps={fullpageProps} />,
            (fullpageProps) => <DevTeam fullpageProps={fullpageProps} />,
            (fullpageProps) => <DesignTeam fullpageProps={fullpageProps} />,
            (fullpageProps) => <OpenPositions fullpageProps={fullpageProps} />,
        ]}
    />
)

export default Careers
