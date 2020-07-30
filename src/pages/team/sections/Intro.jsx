/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react'
import Translate from '../../../components/translation/translate'

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
            <div className="intro-row">
                <div className="image-section">
                    <div
                        className="team-image"
                        onClick={() => {
                            setFullscreen(!fullScreen)
                        }}
                    />
                </div>
                <div className="text-section">
                    <div>
                        <p className="title">
                            <Translate>TEAM.INTRO.MEET</Translate>
                        </p>
                        <h1 className="title-big">
                            <Translate>TEAM.INTRO.TEAM</Translate>
                        </h1>
                        <div>
                            <p>
                                <Translate>TEAM.INTRO.DESCRIPTION1</Translate>
                            </p>
                            <p>
                                <Translate>TEAM.INTRO.DESCRIPTION2</Translate>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-description">
                <p>
                    <Translate>TEAM.INTRO.DISCOVER</Translate>
                </p>
            </div>
        </div>
    )
}

export default Intro
