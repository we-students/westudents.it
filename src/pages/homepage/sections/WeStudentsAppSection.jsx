import React from 'react'

import Translate from '../../../components/translation/translate'
import WeStudentsAppLottieAnimation from '../../../components/lotties/westudents-app'
import useWindowSize from '../../../hooks/useWindowSize'

const WeStudentsApp = ({ onCtaPress = () => {} }) => {
    const size = useWindowSize()

    return (
        <div className="westudents-app container">
            <div>
                <WeStudentsAppLottieAnimation
                    width={(size.width > 1400 ? 1400 : size.width) * 0.5}
                    height={(size.width > 1400 ? 1400 : size.width) * 0.5}
                />
            </div>
            <div className="westudents-app-text">
                <h3>
                    <Translate>HOMEPAGE.WESTUDENTS.TITLE</Translate>
                </h3>
                <p className="section-description">
                    <Translate>HOMEPAGE.WESTUDENTS.DESCRIPTION</Translate>
                </p>

                <button type="button" className="westudents" onClick={onCtaPress}>
                    <Translate>HOMEPAGE.BUTTONS.WESTUDENTS</Translate>
                </button>
            </div>
        </div>
    )
}

export default WeStudentsApp
