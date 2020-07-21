import React from 'react'
import Lottie from 'react-lottie'

import * as animationData from './data.json'

const WeGatherLottieAnimation = ({ width, height }) => {
    return (
        <Lottie
            options={{
                loop: true,
                autoplay: true,
                animationData: animationData.default,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                },
            }}
            height={height}
            width={width}
            isStopped={false}
            isPaused={false}
        />
    )
}

export default WeGatherLottieAnimation
