import React from 'react'

import Translate from '../../../../components/translation/translate'
import WeStudentsAppLottieAnimation from '../../../../components/lotties/westudents-app'
import useWindowSize from '../../../../hooks/useWindowSize'

import AppStoreBadge from '../../../../images/app_store_badge.png'
import PlaystoreBadge from '../../../../images/playstore_badge.png'

import '../styles.scss'

const Intro = () => {
    const size = useWindowSize()

    return (
        <div className="intro container">
            <div>
                <WeStudentsAppLottieAnimation
                    width={(size.width > 1400 ? 1400 : size.width) * 0.5}
                    height={(size.width > 1400 ? 1400 : size.width) * 0.5}
                />
            </div>
            <div className="westudents-app-text">
                <div className="text-section">
                    <h3>
                        <Translate>WESTUDENTS.SMART</Translate>
                    </h3>
                    <h2>
                        <Translate>WESTUDENTS.DOWNLOAD</Translate>
                    </h2>
                    <p>
                        <Translate>WESTUDENTS.DESCRIPTION</Translate>
                    </p>
                    <div className="stores">
                        <button type="button">
                            <img src={AppStoreBadge} alt="appstore" />
                        </button>
                        <button type="button">
                            <img src={PlaystoreBadge} alt="playstore" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
