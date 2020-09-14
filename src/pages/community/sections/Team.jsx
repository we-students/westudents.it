import React, { useState, useEffect } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Link } from 'gatsby'
import Translate from '../../../components/translation/translate'

const FacebookIcon = require('../../../images/facebook_icon_white.svg')
const InstagramIcon = require('../../../images/insta_icon_white.svg')
const LinkedinIcon = require('../../../images/linkedin_icon_white.svg')

const Team = ({ fullpageProps = {} }) => {
    const [isActive, setIsActive] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)
    const [windowHeight, setWindowHeight] = useState(0)

    useEffect(() => {
        const { width, height } = window.screen
        setWindowWidth(width)
        setWindowHeight(height)
    }, [])

    useEffect(() => {
        if (fullpageProps.fullpageApi) {
            setIsActive(
                fullpageProps.fullpageApi.getActiveSection().index === fullpageProps.sectionIndex,
            )
        }
    }, [fullpageProps])

    useScrollPosition(() => {
        if (windowWidth < 992 && fullpageProps) {
            const sectionsElems = document.getElementsByClassName('section')
            const { height, y } = sectionsElems[fullpageProps.sectionIndex].getBoundingClientRect()
            setIsActive(y <= windowHeight - 200 && y > -height)
        }
    })

    return (
        <div className={`d-flex team-wrapper ${isActive ? 'active' : null}`}>
            <div className="bg-wrapper d-flex">
                <div style={{ flex: 2, padding: '0 18%' }} className="text-section">
                    <h2 style={{ marginBottom: 0 }}>
                        <Translate>COMMUNITY.TEAM.TITLE</Translate>
                    </h2>
                    <h2>
                        <Translate>COMMUNITY.TEAM.SUBTITLE</Translate>
                    </h2>
                    <br />
                    <p className="social">
                        <Translate>COMMUNITY.TEAM.SOCIAL</Translate>
                    </p>
                    <br />
                    <div style={{ color: 'white' }}>
                        <a
                            className="social-icon"
                            href="https://www.instagram.com/westudentsapp/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={InstagramIcon} alt="Instagram" />
                        </a>
                        <a
                            className="social-icon"
                            href="https://www.facebook.com/WeStudentsApp/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={FacebookIcon} alt="Facebook" />
                        </a>
                        <a
                            className="social-icon"
                            href="https://www.linkedin.com/company/westudents/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={LinkedinIcon} alt="Linkedin" />
                        </a>
                    </div>
                </div>
                <div style={{ flex: 2 }} className="cta">
                    <div>
                        <p>
                            <Translate>COMMUNITY.TEAM.CTA</Translate>
                        </p>
                        <Link to="/team">
                            <button type="button">
                                <Translate>COMMUNITY.BUTTONS.GO_TO_TEAM</Translate>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Team)
