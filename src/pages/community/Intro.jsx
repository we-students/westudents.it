import React from 'react'
import BGWrapper from '../../components/videobg-wrapper'
import Translate from '../../components/translation/translate'

import './styles.scss'

const Intro = () => {
    return (
        <BGWrapper>
            <div className="container intro-section" style={{ flex: 1 }}>
                <div>
                    <p className="section-title">
                        <Translate>COMMUNITY.INTRO.TITLE</Translate>
                    </p>
                </div>
                <div className="justify-center" style={{ flex: 1 }}>
                    <img
                        style={{ width: '120px' }}
                        alt="community"
                        // eslint-disable-next-line global-require
                        src={require('../../images/community_icon.svg')}
                    />
                </div>
                <div style={{ flex: 1.5, margin: '0 22%' }}>
                    <p className="section-subtitle">
                        <Translate>COMMUNITY.INTRO.SUBTITLE</Translate>
                    </p>
                </div>
                <div className="justify-center">
                    <button type="button">
                        <p className="text-center" style={{ marginBottom: '1em' }}>
                            <Translate>COMMUNITY.INTRO.DISCOVER</Translate>
                        </p>
                        <img
                            style={{ width: '20px' }}
                            alt="community"
                            // eslint-disable-next-line global-require
                            src={require('../../images/arrow_down.svg')}
                        />
                    </button>
                </div>
            </div>
        </BGWrapper>
    )
}

export default Intro
