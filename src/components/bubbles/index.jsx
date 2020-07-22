import React, { useEffect, useState, useCallback } from 'react'

import SmallBubble from '../../images/bubble_small.svg'
import MediumBubble from '../../images/bubble_medium.svg'
import LargeBubble from '../../images/bubble_big.svg'

import getRandomInt from '../../utils/index'

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
                    transform: `translate(${horizontalShift}px,${verticalShift}px)`,
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
    const bubblesSvgs = [
        {
            image: LargeBubble,
            width: 270,
            height: 320,
        },
        {
            image: MediumBubble,
            width: 160,
            height: 250,
        },
        {
            image: SmallBubble,
            width: 120,
            height: 160,
        },
    ]
    const { sectionCount } = props
    const [bubbles, setBubbles] = useState([])
    const { width: windowWidth, height: windowHeight } = window.screen
    const generateBubbles = () => {
        if (sectionCount > 0 && bubblesSvgs) {
            const bubblesTemp = []
            for (let i = 0; i < sectionCount; i++) {
                const randomBubble = bubblesSvgs[Math.floor(Math.random() * bubblesSvgs.length)]
                const x = windowWidth * Math.random()
                const y = windowHeight * Math.random()
                const opacity = Math.random() + 0.2
                bubblesTemp.push(
                    <Bubble
                        image={randomBubble.image}
                        key={`bubble_${x}_${y}`}
                        horizontalShift={x}
                        verticalShift={y}
                        positionX="left"
                        positionY="top"
                        opacity={opacity}
                        height={randomBubble.height}
                        width={randomBubble.width}
                        rotation={0}
                    />,
                )
            }

            return bubblesTemp
        }
        return []
    }

    useEffect(() => {
        if (sectionCount > 0) {
            setBubbles(generateBubbles())
        }
    }, [sectionCount])

    return (
        <div className="bubble-wrapper-container" style={{ height: `calc(${sectionCount}*100vh)` }}>
            {bubbles}
        </div>
    )
}

export default Bubbles
