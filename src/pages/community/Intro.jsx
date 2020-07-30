import React, { useEffect } from 'react'
import Translate from '../../components/translation/translate'
import introVideo from '../../../static/videos/video.mp4'

import './styles.scss'

const Intro = ({ fullpageProps }) => {
    const { fullpageApi, isActive } = fullpageProps
    const video = React.createRef()
    useEffect(() => {
        if (isActive) {
            const playPromise = video.current.play()

            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.error('video error', error)
                })
            }
        } else video.current.pause()
    }, [isActive])
    return (
        <div className="video-intro-wrapper">
            <video className="videoTag" autoPlay loop muted ref={video}>
                <source src={introVideo} type="video/mp4" />
            </video>
            <div className="container intro-section" style={{ flex: 1 }}>
                <div>
                    <p className="section-title">
                        <Translate>COMMUNITY.INTRO.TITLE</Translate>
                    </p>
                </div>
                <div className="justify-center" style={{ flex: 1 }}>
                    <img
                        style={{ width: '120px' }}
                        alt="community"
                        // eslint-disable-next-line global-require
                        src={require('../../images/community_icon.svg')}
                    />
                </div>
                <div style={{ flex: 1.5, margin: '0 22%' }}>
                    <p className="section-subtitle">
                        <Translate>COMMUNITY.INTRO.SUBTITLE</Translate>
                    </p>
                </div>
                <div className="justify-center">
                    <button type="button" onClick={() => fullpageApi.moveTo(6)}>
                        <p className="text-center" style={{ marginBottom: '1em' }}>
                            <Translate>COMMUNITY.INTRO.DISCOVER</Translate>
                        </p>
                        <img
                            style={{ width: '20px' }}
                            alt="community"
                            // eslint-disable-next-line global-require
                            src={require('../../images/arrow_down.svg')}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Intro
