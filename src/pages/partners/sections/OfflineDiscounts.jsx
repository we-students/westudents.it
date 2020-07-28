/* eslint-disable react/no-array-index-key */
/* eslint-disable global-require */
import React from 'react'
import Translate from '../../../components/translation/translate'

import '../styles.scss'

const Image1 = require('../../../../static/images/partners/offline_discounts_phone_0.png')
const Image2 = require('../../../../static/images/partners/offline_discounts_phone_1.png')
const Image3 = require('../../../../static/images/partners/offline_discounts_icons.png')
const Image4 = require('../../../../static/images/partners/offline_discounts_icons2.png')

const features = [
    {
        icon: require('../../../images/offline_discounts_0.svg'),
        name: <Translate>PARTNERS.OFFLINE_DISCOUNTS.ITEM1</Translate>,
    },
    {
        icon: require('../../../images/offline_discounts_1.svg'),
        name: <Translate>PARTNERS.OFFLINE_DISCOUNTS.ITEM2</Translate>,
    },
    {
        icon: require('../../../images/offline_discounts_2.svg'),
        name: <Translate>PARTNERS.OFFLINE_DISCOUNTS.ITEM3</Translate>,
    },
    {
        icon: require('../../../images/offline_discounts_3.svg'),
        name: <Translate>PARTNERS.OFFLINE_DISCOUNTS.ITEM4</Translate>,
    },
]

const OfflineDiscounts = () => {
    return (
        <div className="container partner-sections">
            <div className="images offline-discounts">
                <img src={Image1} className="phone1" alt="WeStudents" />
                <img src={Image2} className="phone2" alt="WeStudents" />
                <img src={Image3} className="icons" alt="WeStudents" />
                <img src={Image4} className="icons2" alt="WeStudents" />
            </div>
            <div className="text-section text-right">
                <h1>
                    <Translate>PARTNERS.OFFLINE_DISCOUNTS.TITLE</Translate>
                </h1>
                <p className="subtitle">
                    <Translate>PARTNERS.OFFLINE_DISCOUNTS.SUBTITLE</Translate>
                </p>
                {features.map((item, index) => (
                    <div key={`list_item_adv_${index}`} className="d-flex justify-right list-item">
                        <p>{item.name}</p>
                        <div className="rounded-icon">
                            <img src={item.icon} alt={item.name} />
                        </div>
                    </div>
                ))}
                <button type="button" className="orange-btn">
                    <Translate>PARTNERS.BUTTONS.BEGIN_NOW</Translate>
                </button>
            </div>
        </div>
    )
}

export default OfflineDiscounts
