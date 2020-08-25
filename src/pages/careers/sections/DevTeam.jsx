import React from 'react'

import Translate from '../../../components/translation/translate'
import DevShitImageOne from '../../../images/dev-team-components/1.png'
import DevShitImageTwo from '../../../images/dev-team-components/2.png'
import DevShitImageThree from '../../../images/dev-team-components/3.png'
import DevShitImageFour from '../../../images/dev-team-components/4.png'
import DevShitImageFive from '../../../images/dev-team-components/5.png'
import DevShitImageSix from '../../../images/dev-team-components/6.png'
import DevShitImageSeven from '../../../images/dev-team-components/7.png'

const OpenPosition = ({ fullpageProps = {} }) => {
    const handleCtaClick = () => {
        const { fullpageApi } = fullpageProps
        fullpageApi.moveTo(4)
    }

    return (
        <div className={`dev-team ${fullpageProps.isActive ? 'active' : ''}`}>
            <div className="container">
                <div className="dev-things">
                    <img alt="Dev thing" src={DevShitImageOne} />
                    <img alt="Dev thing" src={DevShitImageTwo} />
                    <img alt="Dev thing" src={DevShitImageThree} />
                    <img alt="Dev thing" src={DevShitImageFour} />
                    <img alt="Dev thing" src={DevShitImageFive} />
                    <img alt="Dev thing" src={DevShitImageSix} />
                    <img alt="Dev thing" src={DevShitImageSeven} />
                    <img alt="Dev thing" src={DevShitImageSeven} />
                </div>
                <div>
                    <button type="button" onClick={handleCtaClick}>
                        <Translate>CARRIERS.BUTTONS.BECOME_DEVELOPER</Translate>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OpenPosition
