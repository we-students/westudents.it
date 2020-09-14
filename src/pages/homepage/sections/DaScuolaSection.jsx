import React, { useEffect, useState } from 'react'

import Translate from '../../../components/translation/translate'
import DaScuolaLottieAnimation from '../../../components/lotties/dascuola'
import useWindowSize from '../../../hooks/useWindowSize'

import DaScuolaLogo from '../../../images/dascuola.svg'

const DaScuola = ({ onCtaPress = () => {} }) => {
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
        <div className="dascuola container">
            <div className="lottie-wrapper">
                <div className="big-bubble" />
                <DaScuolaLottieAnimation
                    width={(size.width > 1400 ? 1400 : size.width) * multiply}
                    height={(size.width > 1400 ? 1400 : size.width) * multiply}
                />
                <div className="logo">
                    <img src={DaScuolaLogo} alt="DaScuola App" />
                </div>
            </div>
            <div className="dascuola-text">
                <h3>
                    <Translate>HOMEPAGE.DASCUOLA.TITLE</Translate>
                </h3>
                <p className="section-description">
                    <Translate>HOMEPAGE.DASCUOLA.DESCRIPTION</Translate>
                </p>
                <a rel="noopener noreferrer" target="_blank" href="https://dascuola.it/">
                    <button type="button" className="dascuola" onClick={onCtaPress}>
                        <Translate>HOMEPAGE.BUTTONS.DASCUOLA</Translate>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default React.memo(DaScuola)
