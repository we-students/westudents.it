import React from 'react'

import Translate from '../../../components/translation/translate'
import CrewImage from '../../../images/crew.png'

const Crew = ({ fullpageProps = {} }) => {
    const { fullpageApi } = fullpageProps
    return (
        <div className="crew container">
            <div className="crew-text">
                <h2>
                    <Translate>CARRIERS.INTRO.JOIN</Translate>{' '}
                    <span>
                        <Translate>CARRIERS.INTRO.CREW</Translate>
                    </span>
                </h2>

                <p>
                    <Translate>CARRIERS.INTRO.DESCRIPTION1</Translate>
                    <br />
                    <br />
                    <Translate>CARRIERS.INTRO.DESCRIPTION2</Translate>
                </p>

                <button type="button" onClick={() => fullpageApi.moveSectionDown()}>
                    <Translate>CARRIERS.BUTTONS.DISCOVER_OPEN_POSITIONS</Translate>
                </button>
            </div>
            <div>
                <img src={CrewImage} alt="crew" />
            </div>
        </div>
    )
}

export default Crew
