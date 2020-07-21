import React from 'react'
import MainLottieAnimation from '../../components/lotties/main'

import useWindowSize from '../../hooks/useWindowSize'

const Intro = ({ onCtaPress = () => {} }) => {
    const size = useWindowSize()

    return (
        <div className="intro container">
            <div className="intro-text">
                <h2>
                    Il <span>futuro</span> della scuola,
                    <br />
                    pensato dagli studenti.
                </h2>

                <button type="button" onClick={onCtaPress}>
                    Scopri i nostri prodotti
                </button>
            </div>
            <div>
                <MainLottieAnimation
                    width={(size.width > 1400 ? 1400 : size.width) * 0.4}
                    height={(size.width > 1400 ? 1400 : size.width) * 0.4}
                />
            </div>
        </div>
    )
}

export default Intro
