import React from 'react'
import { Link } from 'gatsby'

import WsLogo from '../../images/logo_wes.svg'
import './styles.scss'
import 'animate.css/animate.min.css'
import MenuItem from './MenuItem'
import menuItems from './menu-items'
import socialItems from './social-items'

const Header = () => {
    return (
        <header className="main-header">
            <div className="container">
                <div className="logo-wrapper">
                    <Link to="/">
                        <img src={WsLogo} alt="WeStudents logo" />
                    </Link>
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
                <div className="socials-wrapper">
                    {socialItems.map((item) => (
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon-wrapper"
                        >
                            <img src={item.image} alt={`${item.value} logo`} />
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header
