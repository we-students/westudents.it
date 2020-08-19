import React from 'react'

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
    return (
        <div className={`design-team ${fullpageProps.isActive ? 'active' : ''}`}>
            <div className="container">
                <div>
                    <button type="button" onClick={handleCtaClick}>
                        Diventa un designer
                    </button>
                </div>
                <div className="design-things">
                    <img alt="Design thing" src={DesignShitImageOne} />
                    <img alt="Design thing" src={DesignShitImageTwo} />
                    <img alt="Design thing" src={DesignShitImageThree} />
                    <img alt="Design thing" src={DesignShitImageFour} />
                    <img alt="Design thing" src={DesignShitImageFive} />
                    <img alt="Design thing" src={DesignShitImageSix} />
                    <h3>Design team</h3>
                </div>
            </div>
        </div>
    )
}

export default OpenPosition
