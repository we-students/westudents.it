/* eslint-disable react/no-array-index-key */
/* eslint-disable global-require */
import React from 'react'
import Translate from '../../../components/translation/translate'

import '../styles.scss'

const Image1 = require('../../../../static/images/partners/discount_phone_0.png')
const Image2 = require('../../../../static/images/partners/discount_phone_1.png')
const Image3 = require('../../../../static/images/partners/discount_icons.png')
const Image4 = require('../../../../static/images/partners/discount_icons_1.png')

const features = [
    {
        icon: require('../../../images/discount_0.svg'),
        name: <Translate>PARTNERS.DISCOUNTS.ITEM1</Translate>,
    },
    {
        icon: require('../../../images/discount_1.svg'),
        name: <Translate>PARTNERS.DISCOUNTS.ITEM2</Translate>,
    },
    {
        icon: require('../../../images/discount_2.svg'),
        name: <Translate>PARTNERS.DISCOUNTS.ITEM3</Translate>,
    },
    {
        icon: require('../../../images/discount_3.svg'),
        name: <Translate>PARTNERS.DISCOUNTS.ITEM4</Translate>,
    },
]

const OnlineDiscounts = () => {
    return (
        <div className="container partner-sections">
            <div className="text-section">
                <h1>
                    <Translate>PARTNERS.DISCOUNTS.TITLE</Translate>
                </h1>
                <p className="subtitle">
                    <Translate>PARTNERS.DISCOUNTS.SUBTITLE</Translate>
                </p>
                {features.map((item, index) => (
                    <div key={`list_item_online_discount_${index}`} className="d-flex list-item">
                        <div className="rounded-icon">
                            <img src={item.icon} alt={item.name} />
                        </div>
                        <p>{item.name}</p>
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
            <div className="images online-discounts slide-bottom-on-hover">
                <img src={Image1} className="phone1" alt="WeStudents" />
                <img src={Image2} className="phone2" alt="WeStudents" />
                <img src={Image3} className="icons" alt="WeStudents" />
                <img src={Image4} className="icons2" alt="WeStudents" />
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

export default React.memo(OnlineDiscounts)
