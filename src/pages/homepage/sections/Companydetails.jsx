/* eslint-disable react/no-array-index-key */
import React from 'react'

import Translate from '../../../components/translation/translate'

const DownloadIcon = require('../../../images/download_icon.svg')
const InteracstionsIcon = require('../../../images/interaction_icon.svg')
const AgeIcon = require('../../../images/age_icon.svg')
const SurveysIcon = require('../../../images/answer_icon.svg')

const statistics = [
    {
        icon: DownloadIcon,
        title: <Translate>STATISTICS.DOWNLOAD.TITLE</Translate>,
        value: <Translate>STATISTICS.DOWNLOAD.VALUE</Translate>,
    },
    {
        icon: InteracstionsIcon,
        title: <Translate>STATISTICS.INTERACTIONS.TITLE</Translate>,
        value: <Translate>STATISTICS.INTERACTIONS.VALUE</Translate>,
    },
    {
        icon: SurveysIcon,
        title: <Translate>STATISTICS.SURVEYS.TITLE</Translate>,
        value: <Translate>STATISTICS.SURVEYS.VALUE</Translate>,
    },
    {
        icon: AgeIcon,
        title: <Translate>STATISTICS.AGE.TITLE</Translate>,
        value: <Translate>STATISTICS.AGE.VALUE</Translate>,
    },
]

const Details = ({ fullpageProps }) => {
    const { isActive } = fullpageProps

    console.log('isActive', isActive)

    return (
        <div className={`details-wrapper ${isActive ? 'active' : ''}`}>
            <div style={{ alignItems: 'stretch' }}>
                <h1
                    style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.15em' }}
                    className="text-center"
                >
                    <Translate>STATISTICS.TITLE</Translate>
                </h1>
                <div
                    className="justify-center d-flex"
                    style={{ height: '100%', marginTop: '110px' }}
                >
                    <div className="d-flex">
                        {statistics.map((item, index) => (
                            <div
                                className="d-flex text-center item"
                                style={{ flexDirection: 'column' }}
                                key={`company_stat${index}`}
                            >
                                <div className="icon">
                                    <img src={item.icon} alt="WeStudents" />
                                </div>
                                <h1 style={{ margin: 0, fontWeight: 900, fontSize: '42px' }}>
                                    {item.value}
                                </h1>
                                <p className="name">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
