/* eslint-disable react/no-array-index-key */
/* eslint-disable global-require */
import React from 'react'
import Translate from '../../../components/translation/translate'

import '../styles.scss'

const Image1 = require('../../../../static/images/partners/adv_phone_0.png')
const Image2 = require('../../../../static/images/partners/adv_phone_1.png')
const Image3 = require('../../../../static/images/partners/adv_icons.png')

const features = [
    {
        icon: require('../../../images/adv_0.svg'),
        name: <Translate>PARTNERS.ADV.ITEM1</Translate>,
    },
    {
        icon: require('../../../images/adv_1.svg'),
        name: <Translate>PARTNERS.ADV.ITEM2</Translate>,
    },
    {
        icon: require('../../../images/adv_2.svg'),
        name: <Translate>PARTNERS.ADV.ITEM3</Translate>,
    },
    {
        icon: require('../../../images/adv_3.svg'),
        name: <Translate>PARTNERS.ADV.ITEM4</Translate>,
    },
]

const ADV = () => {
    return (
        <div className="container partner-sections">
            <div className="images adv">
                <img src={Image1} className="phone1" alt="WeStudents" />
                <img src={Image2} className="phone2" alt="WeStudents" />
                <img src={Image3} className="icons" alt="WeStudents" />
            </div>
            <div className="text-section right">
                <h1>
                    <Translate>PARTNERS.ADV.TITLE</Translate>
                </h1>
                <p className="subtitle">
                    <Translate>PARTNERS.ADV.SUBTITLE</Translate>
                </p>
                {features.map((item, index) => (
                    <div key={`list_item_adv_${index}`} className="d-flex list-item">
                        <p>{item.name}</p>
                        <div className="rounded-icon">
                            <img src={item.icon} alt={item.name} />
                        </div>
                    </div>
                ))}
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://westudents.typeform.com/to/VmHzVH6q"
                >
                    <button type="button" className="orange-btn">
                        <Translate>PARTNERS.BUTTONS.BEGIN_NOW</Translate>
                    </button>
                </a>
            </div>
            <a
                rel="noopener noreferrer"
                target="_blank"
                className="d-flex"
                href="https://westudents.typeform.com/to/VmHzVH6q"
            >
                <button type="button" className="orange-btn-mobile">
                    <Translate>PARTNERS.BUTTONS.BEGIN_NOW</Translate>
                </button>
            </a>
        </div>
    )
}

export default ADV
