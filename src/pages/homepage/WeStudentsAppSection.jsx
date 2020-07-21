import React, { useEffect } from 'react'
import WeStudentsAppLottieAnimation from '../../components/lotties/westudents-app'

import useWindowSize from '../../hooks/useWindowSize'

const WeStudentsApp = ({ onCtaPress = () => {} }) => {
    const size = useWindowSize()

    useEffect(() => {
        // console.log('size', size)
    }, [size])

    return (
        <div className="westudents-app container">
            <div>
                <WeStudentsAppLottieAnimation
                    width={(size.width > 1400 ? 1400 : size.width) * 0.6}
                    height={(size.width > 1400 ? 1400 : size.width) * 0.6}
                />
            </div>
            <div className="westudents-app-text">
                <h3>WeStudents App</h3>
                <p className="section-description">
                    Il diario smart per gli studenti
                    <br />
                    del liceo
                </p>

                <button type="button" onClick={onCtaPress}>
                    Scopri i nostri prodotti
                </button>
            </div>
        </div>
    )
}

export default WeStudentsApp
