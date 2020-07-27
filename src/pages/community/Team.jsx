import React from 'react'
import Translate from '../../components/translation/translate'

const FacebookIcon = require('../../images/facebook_icon_white.svg')
const InstagramIcon = require('../../images/insta_icon_white.svg')
const LinkedinIcon = require('../../images/linkedin_icon_white.svg')

const Team = ({ fullpageProps }) => {
    const { isActive } = fullpageProps
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
                        <button type="button">
                            <Translate>COMMUNITY.BUTTONS.GO_TO_TEAM</Translate>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team