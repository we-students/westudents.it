import React from 'react'

import Translate from '../../../components/translation/translate'
import CrewImage from '../../../images/crew.png'

const Crew = ({ fullpageProps = {} }) => {
    const { fullpageApi } = fullpageProps

    const handleCtaClick = () => {
        if (fullpageApi) {
            fullpageApi.moveTo(2)
        } else {
            const top = document.getElementsByClassName('section')[1].offsetTop
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <div className="crew container">
            <div className="crew-text">
                <p className="small-title">
                    <Translate>CARRIERS.INTRO.JOIN</Translate>{' '}
                </p>
                <h1>
                    <Translate>CARRIERS.INTRO.CREW</Translate>
                </h1>

                <p>
                    <Translate>CARRIERS.INTRO.DESCRIPTION1</Translate>
                    <br />
                    <br />
                    <Translate>CARRIERS.INTRO.DESCRIPTION2</Translate>
                </p>

                <button type="button" onClick={handleCtaClick}>
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
