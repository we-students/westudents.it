/* eslint-disable react/no-array-index-key */
import React from 'react'
import Translate from '../../../components/translation/translate'

import '../styles.scss'

const PartnersIcon = require('../../../images/partners_icon.svg')

const stats = [
    {
        value: <Translate>PARTNERS.INTRO.ACTIVE_USERS_NUMBER</Translate>,
        title: <Translate>PARTNERS.INTRO.ACTIVE_USERS</Translate>,
    },
    {
        value: <Translate>PARTNERS.INTRO.ACTIONS_NUMBER</Translate>,
        title: <Translate>PARTNERS.INTRO.ACTIONS</Translate>,
    },
    {
        value: <Translate>PARTNERS.INTRO.DAILY_ACCESSES_NUMBER</Translate>,
        title: <Translate>PARTNERS.INTRO.DAILY_ACCESSES</Translate>,
    },
]

const Intro = ({ fullpageProps = {} }) => {
    const { fullpageApi } = fullpageProps

    const handleScrollTo = () => {
        if (fullpageApi) {
            fullpageApi.moveTo(2)
        } else {
            const top = document.getElementsByClassName('section')[1].offsetTop
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <div className="intro-wrapper">
            <div className="color-wrapper">
                <div className="intro-row d-flex">
                    <div style={{ flex: 1 }}>
                        <h1 className="section-name">
                            <Translate>PARTNERS.INTRO.SECTION_NAME</Translate>
                        </h1>
                        <img src={PartnersIcon} alt="WeStudents" className="partners-logo" />
                        <h1 className="title">
                            <Translate>PARTNERS.INTRO.TITLE</Translate>
                        </h1>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://westudents.typeform.com/to/VmHzVH6q"
                        >
                            <button type="button" className="white-btn">
                                <Translate>PARTNERS.BUTTONS.BEGIN_NOW</Translate>
                            </button>
                        </a>
                        <button type="button" className="btn-nobg" onClick={handleScrollTo}>
                            <div className="arrow-icon" />
                            <Translate>PARTNERS.BUTTONS.DISCOVER</Translate>
                        </button>
                    </div>
                    <div className="stats-section">
                        {stats.map((item, index) => (
                            <div key={`stats_${index}`} className="stat-item">
                                <h1>{item.value}</h1>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="btn-nobg-mobile"
                        style={{ flex: 1 }}
                        onClick={handleScrollTo}
                    >
                        <div className="arrow-icon" />
                        <Translate>PARTNERS.BUTTONS.DISCOVER</Translate>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Intro)
