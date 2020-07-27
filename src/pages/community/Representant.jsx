import React from 'react'
import Translate from '../../components/translation/translate'

const ByWestudents = require('../../images/by_westudents.svg')

const Representant = () => {
    return (
        <div className="programs d-flex">
            <div className="westudents-background" style={{ flex: 1 }} />
            <div className="text-section" style={{ flex: 1 }}>
                <div>
                    <h2 className="title">
                        <Translate>COMMUNITY.PROGRAMS.PROGRAM</Translate>
                        <span className="representant">
                            {' '}
                            <Translate>COMMUNITY.PROGRAMS.AMBASSADOR</Translate>
                        </span>
                    </h2>
                    <img src={ByWestudents} alt="WeGather" style={{ display: 'block' }} />
                    <p className="description">
                        <Translate>COMMUNITY.PROGRAMS.AMBASSADOR_DESCRIPTION</Translate>
                    </p>
                    <button type="button" className="representant">
                        <Translate>COMMUNITY.BUTTONS.DISCOVER</Translate>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Representant
