import React from 'react'
import Translate from '../../components/translation/translate'
import './styles.scss'

const image1 = require('../../images/manifest_2.png')
const image2 = require('../../images/manifest_3.png')

const Freedom = ({ fullpageProps = {} }) => {
    const { isActive } = fullpageProps
    return (
        <div
            className="container d-flex manifest"
            style={{ height: '100vh', flexDirection: 'column' }}
        >
            <div className="manifest-item d-flex" style={{ flex: 1 }}>
                <div className="manifest-text">
                    <h1>
                        <Translate>COMMUNITY.MANIFEST.FREEDOM</Translate>
                    </h1>
                    <p className="section-description">
                        <Translate>COMMUNITY.MANIFEST.DESCRIPTION2</Translate>
                    </p>
                </div>
                <div className="images-right">
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
            </div>
        </div>
    )
}

export default Freedom
