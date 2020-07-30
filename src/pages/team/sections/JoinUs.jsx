import React from 'react'
import Translate from '../../../components/translation/translate'

const cactusImage = require('../../../images/cactus.png')

const JoinUs = () => {
    return (
        <div className="container join-us">
            <div className="text text-center">
                <h2>
                    <span>
                        <Translate>TEAM.JOIN_US</Translate>
                    </span>
                </h2>
                <p>
                    <Translate>TEAM.CACTUS</Translate>
                </p>
            </div>
            <div className="cta-section">
                <img src={cactusImage} alt="WeStudents" className="rotate-left" />
                <button type="button">
                    <Translate>TEAM.BUTTONS.JOIN</Translate>
                </button>
                <img src={cactusImage} alt="WeStudents" className="rotate-right" />
            </div>
        </div>
    )
}

export default JoinUs
