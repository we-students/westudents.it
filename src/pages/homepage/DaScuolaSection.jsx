import React, { useEffect } from 'react'
import Translate from '../../components/translation/translate'
import DaScuolaLottieAnimation from '../../components/lotties/dascuola'

import useWindowSize from '../../hooks/useWindowSize'

const DaScuola = ({ onCtaPress = () => {} }) => {
    const size = useWindowSize()

    useEffect(() => {
        // console.log('size', size)
    }, [size])

    return (
        <div className="dascuola container">
            <div>
                <DaScuolaLottieAnimation
                    width={(size.width > 1400 ? 1400 : size.width) * 0.5}
                    height={(size.width > 1400 ? 1400 : size.width) * 0.5}
                />
            </div>
            <div className="dascuola-text">
                <h3>
                    <Translate>HOMEPAGE.DASCUOLA.TITLE</Translate>
                </h3>
                <p className="section-description">
                    <Translate>HOMEPAGE.DASCUOLA.DESCRIPTION</Translate>
                </p>

                <button type="button" className="dascuola" onClick={onCtaPress}>
                    <Translate>HOMEPAGE.BUTTONS.DASCUOLA</Translate>
                </button>
            </div>
        </div>
    )
}

export default DaScuola
