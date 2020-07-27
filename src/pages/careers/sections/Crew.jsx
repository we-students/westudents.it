import React from 'react'

import CrewImage from '../../../images/crew.png'

const Crew = ({ fullpageProps }) => {
    const { fullpageApi } = fullpageProps
    return (
        <div className="crew container">
            <div className="crew-text">
                <h2>
                    Join the <span>crew</span>
                </h2>

                <p>
                    Ah, ciao! Piacere di conoscerti.
                    <br />
                    <br />
                    Grazie per aver cliccato su questa sezione. Vuol dire che ti interessa davvero
                    diventare uno dei brutti ceffi del team WeStudents.
                </p>

                <button type="button" onClick={() => fullpageApi.moveSectionDown()}>
                    Scopri le posizione aperte
                </button>
            </div>
            <div>
                <img src={CrewImage} alt="crew" />
            </div>
        </div>
    )
}

export default Crew
