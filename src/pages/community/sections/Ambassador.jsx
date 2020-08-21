import React from 'react'
import Translate from '../../../components/translation/translate'

const ByWegather = require('../../../images/by_wegather.svg')

const Ambassador = () => {
    return (
        <div className="programs d-flex">
            <div className="text-section" style={{ flex: 1 }}>
                <div className="text-container">
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
                    </div>
                    <button type="button" className="ambassador">
                        <span className="default">
                            <Translate>COMMUNITY.BUTTONS.DISCOVER</Translate>
                        </span>
                        <span className="active">
                            <Translate>COMMUNITY.BUTTONS.WEGATHER</Translate>
                        </span>
                    </button>
                </div>
            </div>
            <div className="wegather-background" style={{ flex: 1 }} />
        </div>
    )
}

export default Ambassador
