import React, { useEffect, useState } from 'react'

import Layout from '../../components/layout'
import './styles.scss'

const pageTitle = 'WeStudents — Login'

const LoginPage = () => {
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const width = window.innerWidth
        setWindowWidth(width)
    }, [])

    return windowWidth === undefined ? null : (
        <Layout
            showFooter
            className="loginpage"
            seo={{ title: pageTitle }}
            showBubbles
            sections={[
                {
                    anchor: 'intro',
                    render: () => <div>login placeholder</div>,
                },
            ]}
        />
    )
}

export default React.memo(LoginPage)
