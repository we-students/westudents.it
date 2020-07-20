import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import WsLogo from '../../images/logo_wes.svg'
import menuItems from './menu-items'

import './styles.scss'
import 'animate.css/animate.min.css'
import MenuItem from './MenuItem'

const Header = ({ siteTitle }) => (
    <header className="main-header">
        <div className="container">
            <div className="logo-wrapper">
                <img src={WsLogo} alt="WeStudents logo" />
            </div>
            <div className="menu-wrapper">
                <nav>
                    <ul className="navigation">
                        {menuItems.map((item) => (
                            <MenuItem key={item.key} item={item} />
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="socials-wrapper">{/* Social links */}</div>
        </div>

        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
