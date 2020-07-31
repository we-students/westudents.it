import React from 'react'
import Translate from '../../../components/translation/translate'

import '../styles.scss'

const WeStudentsPhone = require('../../../../static/images/westudents_app.png')

const Intro = () => {
    return (
        <div className="container intro d-flex">
            <div className="images">
                <div>
                    <img src={WeStudentsPhone} alt="WeStudents" />
                </div>
            </div>
            <div className="text-section">
                <p>
                    <Translate>WESTUDENTS.SMART</Translate>
                </p>
                <h2>
                    <Translate>WESTUDENTS.DOWNLOAD</Translate>
                </h2>
                <p>
                    <Translate>WESTUDENTS.DESCRIPTION</Translate>
                </p>
            </div>
        </div>
    )
}

export default Intro
