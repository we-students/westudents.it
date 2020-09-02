import React, { useState, useEffect } from 'react'

import Translate from '../../../components/translation/translate'
import DesignShitImageOne from '../../../images/design-team-components/1.png'
import DesignShitImageTwo from '../../../images/design-team-components/2.png'
import DesignShitImageThree from '../../../images/design-team-components/3.png'
import DesignShitImageFour from '../../../images/design-team-components/4.png'
import DesignShitImageFive from '../../../images/design-team-components/5.png'
import DesignShitImageSix from '../../../images/design-team-components/6.png'

const OpenPosition = ({ fullpageProps = {} }) => {
    const handleCtaClick = () => {
        const { fullpageApi } = fullpageProps
        fullpageApi.moveTo(4)
    }

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
        <div className={`design-team ${isActive ? 'active' : ''}`}>
            <div className="container">
                <div>
                    <button type="button" onClick={handleCtaClick}>
                        <Translate>CARRIERS.BUTTONS.BECOME_DESIGNER</Translate>
                    </button>
                </div>
                <div className="design-things">
                    <img alt="Design thing" src={DesignShitImageOne} />
                    <img alt="Design thing" src={DesignShitImageTwo} />
                    <img alt="Design thing" src={DesignShitImageThree} />
                    <img alt="Design thing" src={DesignShitImageFour} />
                    <img alt="Design thing" src={DesignShitImageFive} />
                    <img alt="Design thing" src={DesignShitImageSix} />
                    <h3>
                        <Translate>CARRIERS.DESIGN_TEAM</Translate>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default OpenPosition
