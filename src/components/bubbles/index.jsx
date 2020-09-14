/* eslint-disable no-plusplus */
import React, { useCallback, useState, useEffect } from 'react'

import SmallBubble from '../../images/bubble_small.png'
import MediumBubble from '../../images/bubble_medium.png'
import LargeBubble from '../../images/bubble_big.png'

import getRandomInt from '../../utils/index'
import useWindowSize from '../../hooks/useWindowSize'

import './styles.scss'

const Bubble = (props) => {
    const {
        width,
        height,
        positionX,
        positionY,
        horizontalShift,
        verticalShift,
        image,
        rotation,
    } = props
    const style = {
        width: `${width}px`,
        height: `${height}px`,
    }
    return (
        <>
            <div
                className="bubble-wrapper"
                style={{
                    ...style,
                    [positionX]: '0px',
                    [positionY]: '0px',
                    transform: `translate(${horizontalShift}px,${verticalShift}px) rotate(${rotation}deg)`,
                }}
            >
                <span
                    className="custom-bubble"
                    style={{
                        ...style,
                        backgroundImage: `url(${image})`,
                    }}
                />
            </div>
        </>
    )
}

const Bubbles = (props) => {
    const [isMounted, setIsMounted] = useState(false)
    const sizes = useWindowSize()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const isFirefox = isMounted ? navigator.userAgent.toLowerCase().indexOf('firefox') > -1 : false

    const bubblesSvgs = [
        {
            image: LargeBubble,
            width: 440,
            height: 510,
        },
        {
            image: MediumBubble,
            width: 350,
            height: 420,
        },
        {
            image: SmallBubble,
            width: 190,
            height: 190,
        },
    ]
    const { sectionCount } = props

    const generateBubbles = useCallback(() => {
        if (sectionCount > 0 && bubblesSvgs) {
            const bubblesTemp = []
            for (let i = 0; i < sectionCount; i++) {
                for (let z = 0; z < getRandomInt(1, 3); z++) {
                    const y = sizes.height * Math.random() + i * sizes.height
                    const randomBubble = bubblesSvgs[Math.floor(Math.random() * bubblesSvgs.length)]
                    const x = sizes.width * Math.random()
                    const rotation = getRandomInt(0, 360)
                    bubblesTemp.push(
                        <Bubble
                            image={randomBubble.image}
                            key={`bubble_${x}_${y}`}
                            horizontalShift={x}
                            verticalShift={y}
                            positionX="left"
                            positionY="top"
                            height={randomBubble.height}
                            width={randomBubble.width}
                            rotation={rotation}
                        />,
                    )
                }
            }

            return bubblesTemp
        }
        return []
    }, [sectionCount])

    return isFirefox ? null : (
        <div className="bubble-wrapper-container" style={{ height: `calc(${sectionCount}*100vh)` }}>
            {generateBubbles()}
        </div>
    )
}

export default React.memo(Bubbles)
