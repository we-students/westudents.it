import React, { useEffect, useState } from 'react'

import Translate from '../../../components/translation/translate'
import introVideo from '../../../../static/videos/video.mp4'

import CommunityIcon from '../../../images/community_icon.svg'
import ArrowDownIcon from '../../../images/arrow_down.svg'

import '../styles.scss'

const Intro = ({ fullpageProps = {} }) => {
    const video = React.createRef()
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        video.current[isActive ? 'play' : 'pause']()
    }, [isActive])

    const handleScrollTo = () => {
        if (fullpageProps.fullpageApi) {
            fullpageProps.fullpageApi.moveTo(2)
        } else {
            const top = document.getElementsByClassName('section')[1].offsetTop
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    useEffect(() => {
        if (fullpageProps.fullpageApi) {
            setIsActive(
                fullpageProps.fullpageApi.getActiveSection().index === fullpageProps.sectionIndex,
            )
        } else {
            const sectionsElems = document.getElementsByClassName('section')
            const { height, y } = sectionsElems[fullpageProps.sectionIndex].getBoundingClientRect()
            setIsActive(y <= 0 && y > -height)
        }
    }, [fullpageProps])
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
                <div className="justify-center cta">
                    <img alt="community" src={CommunityIcon} />
                </div>
                <div className="section-subtitle">
                    <p>
                        <Translate>COMMUNITY.INTRO.SUBTITLE</Translate>
                    </p>
                </div>
                <div
                    className="justify-center"
                    style={{ marginTop: '20px', alignItems: 'flex-end' }}
                >
                    <button type="button" onClick={handleScrollTo}>
                        <p className="text-center" style={{ marginBottom: '1em' }}>
                            <Translate>COMMUNITY.INTRO.DISCOVER</Translate>
                        </p>
                        <img style={{ width: '20px' }} alt="freccia in giù" src={ArrowDownIcon} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Intro
