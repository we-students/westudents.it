import React, { useEffect } from 'react'
import Translate from '../../components/translation/translate'
import WeGatherLottieAnimation from '../../components/lotties/wegather'

import useWindowSize from '../../hooks/useWindowSize'

const WeGather = ({ onCtaPress = () => {} }) => {
    const size = useWindowSize()

    useEffect(() => {
        // console.log('size', size)
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
                <WeGatherLottieAnimation
                    width={(size.width > 1400 ? 1400 : size.width) * 0.5}
                    height={(size.width > 1400 ? 1400 : size.width) * 0.5}
                />
            </div>
        </div>
    )
}

export default WeGather
