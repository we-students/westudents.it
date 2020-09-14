import React, { useEffect, useState } from 'react'

import Layout from '../../components/layout'
import './styles.scss'
import Intro from './sections/Intro'
import TeamProfiles from './sections/TeamProfiles'
import JoinUs from './sections/JoinUs'

const pageTitle = 'WeStudents — Team'

const TeamPage = () => {
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const width = window.innerWidth
        setWindowWidth(width)
    }, [])

    return windowWidth === undefined ? null : (
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
                    render: (fullpageProps) => (
                        <TeamProfiles windowWidth={windowWidth} fullpageProps={fullpageProps} />
                    ),
                },
                {
                    anchor: 'candidati',
                    render: (fullpageProps) => <JoinUs fullpageProps={fullpageProps} />,
                },
            ]}
        />
    )
}

export default React.memo(TeamPage)
