import React from 'react'

import Layout from '../../components/layout'
import './styles.scss'
import Intro from './sections/IntroSection'

const pageTitle = 'WeStudents — Prodotti WeStudents App'

const WeStudentsPage = () => (
    <Layout
        showFooter
        className="product-westudents"
        seo={{ title: pageTitle }}
        showBubbles
        sections={[
            {
                anchor: 'intro',
                render: (fullpageProps) => <Intro fullpageProps={fullpageProps} />,
            },
        ]}
    />
)

export default WeStudentsPage
