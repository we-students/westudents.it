import React from 'react'
import { Link } from 'gatsby'

import Translate from '../../../../components/translation/translate'

const GomaIcon = require('../../../../images/sponsors/Goma.svg')
const MediolanumIcon = require('../../../../images/sponsors/Mediolanum.svg')
const MuseoegizioIcon = require('../../../../images/sponsors/Museo_egizio.svg')
const PoloIcon = require('../../../../images/sponsors/Polo_del_900.svg')
const YoungIcon = require('../../../../images/sponsors/Young_platform.svg')

const sponsors = [
    { name: 'Goma elettronica', icon: GomaIcon },
    { name: 'Mediolanum', icon: MediolanumIcon },
    { name: 'young platform', icon: YoungIcon },
    { name: 'museo egizio', icon: MuseoegizioIcon },
    { name: 'polo del 900', icon: PoloIcon },
]

const Sponsor = () => {
    return (
        <div className="sponsor container d-flex">
            <h1 className="title text-center">
                <Translate>HOMEPAGE.SPONSORS.TITLE</Translate>
            </h1>
            <div className="sponsors-items">
                {sponsors.map((item) => (
                    <img
                        key={`img_${item.name}`}
                        src={item.icon}
                        alt={item.name}
                        className="sponsor-icon"
                    />
                ))}
            </div>
            <div className="cta-section">
                <h3 className="cta-text text-center">
                    <Translate>HOMEPAGE.SPONSORS.CTA</Translate>
                </h3>
                <div className="d-flex justify-center">
                    <Link to="/partners">
                        <button type="button">
                            <Translate>HOMEPAGE.BUTTONS.DISCOVER</Translate>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Sponsor)
