import React from 'react'
import Translate from '../../components/translation/translate'
import MainLottieAnimation from '../../components/lotties/main'

import useWindowSize from '../../hooks/useWindowSize'

const Intro = ({ onCtaPress = () => {} }) => {
    const size = useWindowSize()

    const introTitle = Translate({ children: 'HOMEPAGE.INTRO' }).split('##placeholder##')
    return (
        <div className="intro container">
            <div className="intro-text">
                <h2>
                    {introTitle[0]}
                    <span>
                        <Translate>HOMEPAGE.FUTURE</Translate>
                    </span>
                    {introTitle[1]}
                </h2>

                <button type="button" onClick={onCtaPress}>
                    <Translate>HOMEPAGE.BUTTONS.INTRO</Translate>
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
