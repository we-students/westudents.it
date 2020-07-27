import React from 'react'
import Translate from '../../components/translation/translate'

const ByWegather = require('../../images/by_wegather.svg')

const Ambassador = () => {
    return (
        <div className="programs d-flex">
            <div className="text-section" style={{ flex: 1 }}>
                <div>
                    <h2 className="title">
                        <Translate>COMMUNITY.PROGRAMS.PROGRAM</Translate>
                        <span className="ambassador">
                            {' '}
                            <Translate>COMMUNITY.PROGRAMS.AMBASSADOR</Translate>
                        </span>
                    </h2>
                    <img src={ByWegather} alt="WeGather" style={{ display: 'block' }} />
                    <p className="description">
                        <Translate>COMMUNITY.PROGRAMS.AMBASSADOR_DESCRIPTION</Translate>
                    </p>
                    <button type="button" className="ambassador">
                        <Translate>COMMUNITY.BUTTONS.DISCOVER</Translate>
                    </button>
                </div>
            </div>
            <div className="wegather-background" style={{ flex: 1 }} />
        </div>
    )
}

export default Ambassador
