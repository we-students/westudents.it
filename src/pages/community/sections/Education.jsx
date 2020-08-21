import React from 'react'
import Translate from '../../../components/translation/translate'
import '../styles.scss'

const image1 = require('../../../images/manifest_0.png')
const image2 = require('../../../images/manifest_1.png')

const Education = ({ fullpageProps = {} }) => {
    const { isActive } = fullpageProps
    return (
        <div
            className="container d-flex manifest"
            style={{ height: '100vh', flexDirection: 'column' }}
        >
            <h2 className="text-center title">
                <Translate>COMMUNITY.MANIFEST.TITLE</Translate>
            </h2>
            <div className="manifest-item d-flex" style={{ flex: 1 }}>
                <div className="images-left">
                    <img
                        src={image1}
                        alt="We Students"
                        className={`img top ${isActive ? 'active' : null}`}
                    />
                    <img
                        src={image2}
                        alt="We Students"
                        className={`img bottom ${isActive ? 'active' : null}`}
                    />
                </div>
                <div className="manifest-text">
                    <h1>
                        <Translate>COMMUNITY.MANIFEST.EDUCATION</Translate>
                    </h1>
                    <p className="section-description">
                        <Translate>COMMUNITY.MANIFEST.DESCRIPTION1</Translate>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education
