/* eslint-disable react/no-array-index-key */
/* eslint-disable global-require */
import React from 'react'
import Translate from '../../../components/translation/translate'

import '../styles.scss'

const Image1 = require('../../../../static/images/partners/gamification_phone.png')
const Image2 = require('../../../../static/images/partners/gamification_icons.png')

const Gamification = () => {
    return (
        <div className="container partner-sections">
            <div className="text-section">
                <h1>
                    <Translate>PARTNERS.GAMIFICATION.TITLE</Translate>
                </h1>
                <p className="subtitle">
                    <Translate>PARTNERS.GAMIFICATION.SUBTITLE</Translate>
                </p>
                <p>
                    <Translate>PARTNERS.GAMIFICATION.DESCRIPTION</Translate>
                </p>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://westudents.typeform.com/to/VmHzVH6q"
                >
                    <button type="button" className="orange-btn">
                        <Translate>PARTNERS.BUTTONS.BEGIN</Translate>
                    </button>
                </a>
            </div>
            <div className="images gamification">
                <img src={Image1} className="phone1" alt="WeStudents" />
                <img src={Image2} className="icons" alt="WeStudents" />
            </div>
            <a
                rel="noopener noreferrer"
                className="d-flex"
                target="_blank"
                href="https://westudents.typeform.com/to/VmHzVH6q"
            >
                <button type="button" className="orange-btn-mobile">
                    <Translate>PARTNERS.BUTTONS.BEGIN_NOW</Translate>
                </button>
            </a>
        </div>
    )
}

export default Gamification
