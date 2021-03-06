import React, { useState, useEffect } from 'react'
import Translate from '../../../components/translation/translate'
import '../styles.scss'

const image1 = require('../../../images/manifest_0.png')
const image2 = require('../../../images/manifest_1.png')

const Education = ({ fullpageProps = {} }) => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (fullpageProps.fullpageApi) {
            setIsActive(
                fullpageProps.fullpageApi.getActiveSection().index === fullpageProps.sectionIndex,
            )
        } else {
            const sectionsElems = document.getElementsByClassName('section')
            const { height, y } = sectionsElems[fullpageProps.sectionIndex].getBoundingClientRect()
            setIsActive(y <= 0 && y > -height)
        }
    }, [fullpageProps])
    return (
        <div
            className="container d-flex manifest"
            style={{ height: '100vh', flexDirection: 'column' }}
        >
            <h2 className="text-center title" style={{ flex: 1 }}>
                <Translate>COMMUNITY.MANIFEST.TITLE</Translate>
            </h2>
            <div className="manifest-item d-flex" style={{ flex: 2 }}>
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

export default React.memo(Education)
