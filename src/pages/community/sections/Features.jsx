/* eslint-disable react/no-array-index-key */
import React from 'react'
import Translate from '../../../components/translation/translate'

const ConncetedIcon = require('../../../images/connected_icon.svg')
const SustainableIcon = require('../../../images/sustainable_icon.svg')
const InnvoativeIcon = require('../../../images/innovative_icon.svg')

const features = [
    {
        title: <Translate>COMMUNITY.FEATURES.CONNECTED</Translate>,
        description: <Translate>COMMUNITY.FEATURES.ITEM1</Translate>,
        icon: ConncetedIcon,
    },
    {
        title: <Translate>COMMUNITY.FEATURES.SUSTAINABLE</Translate>,
        description: <Translate>COMMUNITY.FEATURES.ITEM2</Translate>,
        icon: SustainableIcon,
    },
    {
        title: <Translate>COMMUNITY.FEATURES.INNOVATIVE</Translate>,
        description: <Translate>COMMUNITY.FEATURES.ITEM3</Translate>,
        icon: InnvoativeIcon,
    },
]

const Features = () => {
    return (
        <div className="container features">
            <h3 className="text-center title">
                <Translate>COMMUNITY.FEATURES.TITLE</Translate>
            </h3>
            <div className="d-flex features-container">
                {features.map((item, index) => (
                    <div key={`community_feature${index}`} className="feature">
                        <div className="d-flex justify-center">
                            <img src={item.icon} alt="We Students" />
                        </div>
                        <h3 className="text-center">{item.title}</h3>
                        <p className="text-center description">{item.description}</p>
                    </div>
                ))}
            </div>
            <p className="text-center bottom-description" style={{ flex: 1 }}>
                <Translate>COMMUNITY.FEATURES.SUBTITLE</Translate>
            </p>
        </div>
    )
}

export default Features
