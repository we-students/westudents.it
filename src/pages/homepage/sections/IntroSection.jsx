import React, { useState, useEffect } from 'react'

import Translate from '../../../components/translation/translate'
import MainLottieAnimation from '../../../components/lotties/main'
import useWindowSize from '../../../hooks/useWindowSize'

const Intro = ({ fullpageProps = {} }) => {
    const { fullpageApi } = fullpageProps
    const size = useWindowSize()
    const [multiply, setMultiply] = useState()

    const introTitle = Translate({ children: 'HOMEPAGE.INTRO', textOnly: true }).split(
        '##placeholder##',
    )

    useEffect(() => {
        const m = (() => {
            if (size.width < 767) return 1
            if (size.width >= 768 && size.width < 991) return 0.8

            return 0.4
        })()

        setMultiply(m)
    }, [])

    const handleScrollTo = () => {
        if (fullpageApi) {
            fullpageApi.moveTo(2)
        } else {
            const top = document.getElementsByClassName('section')[1].offsetTop
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

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

                <button type="button" onClick={handleScrollTo}>
                    <Translate>HOMEPAGE.BUTTONS.INTRO</Translate>
                </button>
            </div>
            {size.width > 576 ? (
                <div>
                    <MainLottieAnimation
                        width={(size.width > 1400 ? 1400 : size.width) * multiply}
                        height={(size.width > 1400 ? 1400 : size.width) * multiply}
                    />
                </div>
            ) : null}
        </div>
    )
}

export default Intro
