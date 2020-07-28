import React from 'react'

import Layout from '../../components/layout'
import './styles.scss'
import Intro from './sections/Intro'
import ADV from './sections/ADV'
import OnlineDiscounts from './sections/OnlineDiscounts'
import OfflineDiscounts from './sections/OfflineDiscounts'
import Gamification from './sections/Gamification'

const pageTitle = 'WeStudents — Partners'

const HomePage = () => (
    <Layout
        showFooter
        className="partnerspage"
        seo={{ title: pageTitle }}
        showBubbles
        sections={[
            {
                anchor: 'intro',
                render: (fullpageProps) => <Intro fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'adv',
                render: (fullpageProps) => <ADV fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'sconti_online',
                render: (fullpageProps) => <OnlineDiscounts fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'sconti-offline',
                render: (fullpageProps) => <OfflineDiscounts fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'gamification',
                render: (fullpageProps) => <Gamification fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'last',
                render: () => <p>Footer section</p>,
            },
        ]}
    />
)

export default HomePage
