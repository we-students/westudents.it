import React, { useEffect } from 'react'
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
                <h3>WeGather.it</h3>
                <p className="section-description">
                    La nostra community culturale e
                    <br />
                    studentesca under 25
                </p>

                <button type="button" onClick={onCtaPress}>
                    Scopri i nostri prodotti
                </button>
            </div>
            <div>
                <WeGatherLottieAnimation
                    width={(size.width > 1400 ? 1400 : size.width) * 0.6}
                    height={(size.width > 1400 ? 1400 : size.width) * 0.6}
                />
            </div>
        </div>
    )
}

export default WeGather
