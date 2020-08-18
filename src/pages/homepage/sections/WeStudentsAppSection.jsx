import React, { useEffect, useState } from 'react'

import { Link } from 'gatsby'
import Translate from '../../../components/translation/translate'
import WeStudentsAppLottieAnimation from '../../../components/lotties/westudents-app'
import useWindowSize from '../../../hooks/useWindowSize'

import WeStudentsLogo from '../../../images/westudentsapp.svg'

const WeStudentsApp = () => {
    const size = useWindowSize()
    const [multiply, setMultiply] = useState()

    useEffect(() => {
        const m = (() => {
            if (size.width < 767) return 1.2
            if (size.width >= 768 && size.width < 991) return 0.8

            return 0.5
        })()

        setMultiply(m)
    }, [size])

    return (
        <div className="westudents-app container">
            <div>
                <div className="big-bubble" />
                <WeStudentsAppLottieAnimation
                    width={(size.width > 1400 ? 1400 : size.width) * multiply}
                    height={(size.width > 1400 ? 1400 : size.width) * multiply}
                />
                <div className="logo">
                    <img src={WeStudentsLogo} alt="WeStudents App" />
                </div>
            </div>
            <div className="westudents-app-text">
                <h3>
                    <Translate>HOMEPAGE.WESTUDENTS.TITLE</Translate>
                </h3>
                <p className="section-description">
                    <Translate>HOMEPAGE.WESTUDENTS.DESCRIPTION</Translate>
                </p>
                <Link to="/prodotti/westudents">
                    <button type="button" className="westudents">
                        <Translate>HOMEPAGE.BUTTONS.WESTUDENTS</Translate>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default WeStudentsApp
