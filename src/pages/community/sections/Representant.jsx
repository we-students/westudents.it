import React from 'react'

import Translate from '../../../components/translation/translate'

const ByWestudents = require('../../../images/by_westudents.svg')

const Representant = () => {
    return (
        <div className="programs d-flex">
            <div className="westudents-background" style={{ flex: 1 }} />
            <div className="text-section" style={{ flex: 1 }}>
                <div className="text-container">
                    <div>
                        <h2 className="title">
                            <Translate>COMMUNITY.PROGRAMS.PROGRAM</Translate>
                            <span className="representant">
                                {' '}
                                <Translate>COMMUNITY.PROGRAMS.REPRESENTANT</Translate>
                            </span>
                        </h2>
                        <img src={ByWestudents} alt="WeGather" style={{ display: 'block' }} />
                        <p className="description">
                            <Translate>COMMUNITY.PROGRAMS.REPRESENTANT_DESCRIPTION</Translate>
                        </p>
                    </div>
                    <a
                        href="https://forms.monday.com/forms/a1d7ec079ab37ad1343f7e28e77e33e8?r=use1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button type="button" className="representant">
                            <span className="default">
                                <Translate>COMMUNITY.BUTTONS.DISCOVER</Translate>
                            </span>
                            <span className="active">
                                <Translate>COMMUNITY.BUTTONS.JOIN</Translate>
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Representant)
