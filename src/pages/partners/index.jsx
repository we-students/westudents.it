import React from 'react'

import Layout from '../../components/layout'
import './styles.scss'
import Intro from './sections/Intro'
import ADV from './sections/ADV'
import OnlineDiscounts from './sections/OnlineDiscounts'
import OfflineDiscounts from './sections/OfflineDiscounts'
import Gamification from './sections/Gamification'
import WeGather from './sections/WeGather'

const pageTitle = 'WeStudents — Partners'

const PartnersPage = () => (
    <Layout
        showFooter
        className="partnerspage"
        seo={{ title: pageTitle }}
        showBubbles
        sections={[
            {
                anchor: 'intro',
                render: (fullpageProps) => <Intro fullpageProps={fullpageProps} />,
                headerStyle: 'transparent',
            },
            {
                anchor: 'adv',
                render: (fullpageProps) => <ADV fullpageProps={fullpageProps} />,
            },
            {
                anchor: 'sconti-online',
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
                anchor: 'WeGather',
                render: (fullpageProps) => <WeGather fullpageProps={fullpageProps} />,
            },
        ]}
    />
)

export default React.memo(PartnersPage)
