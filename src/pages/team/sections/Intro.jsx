/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react'

import '../styles.scss'

const Intro = () => {
    const [fullScreen, setFullscreen] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setFullscreen(false)
        }, 1000)
    }, [])

    return (
        <div className={`intro ${fullScreen ? 'fullscreen' : ''}`}>
            <div className="image-section">
                <div
                    className="team-image"
                    onClick={() => {
                        setFullscreen(!fullScreen)
                    }}
                />
            </div>
            <div className="text-section">
                <h2>test</h2>
            </div>
        </div>
    )
}

export default Intro
