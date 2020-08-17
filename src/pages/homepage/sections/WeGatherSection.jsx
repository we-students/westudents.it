import React, { useState, useEffect } from 'react'

import Translate from '../../../components/translation/translate'
import WeGatherLottieAnimation from '../../../components/lotties/wegather'
import useWindowSize from '../../../hooks/useWindowSize'

const WeGather = ({ onCtaPress = () => {} }) => {
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
        <div className="wegather container">
            <div className="wegather-text">
                <h3>
                    <Translate>HOMEPAGE.WEGATHER.TITLE</Translate>
                </h3>
                <p className="section-description">
                    <Translate>HOMEPAGE.WEGATHER.DESCRIPTION</Translate>
                </p>
                <button type="button" className="wegather" onClick={onCtaPress}>
                    <Translate>HOMEPAGE.BUTTONS.WEGATHER</Translate>
                </button>
            </div>
            <div>
                <div className="big-bubble" />
                <WeGatherLottieAnimation
                    width={(size.width > 1400 ? 1400 : size.width) * multiply}
                    height={(size.width > 1400 ? 1400 : size.width) * multiply}
                />
            </div>
        </div>
    )
}

export default WeGather
