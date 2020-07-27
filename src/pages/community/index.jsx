/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Layout from '../../components/layout'
import Intro from './Intro'
import Education from './Education'
import Connection from './Connection'
import Freedom from './Freedom'
import Features from './Features'

import './styles.scss'

const pageTitle = 'WeStudents — Community'

const CommunityPage = () => (
    <Layout
        showFooter
        className="community-wrapper"
        seo={{ title: pageTitle }}
        showBubbles
        sections={[
            (fullpageProps) => <Intro fullpageProps={fullpageProps} />,
            (fullpageProps) => <Education fullpageProps={fullpageProps} />,
            (fullpageProps) => <Freedom fullpageProps={fullpageProps} />,
            (fullpageProps) => <Connection fullpageProps={fullpageProps} />,
            (fullpageProps) => <Features fullpageProps={fullpageProps} />,
            (fullpageProps) => <p>Prova</p>,
        ]}
    />
)

export default CommunityPage
