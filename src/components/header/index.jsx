/* eslint-disable import/no-named-default */
import React, { useRef, useState } from 'react'
import { Link } from 'gatsby'

import WsLogo from '../../images/logo_wes.svg'
import WsLogoWhite from '../../images/logo_wes_white.svg'
import './styles.scss'
import 'animate.css/animate.min.css'
import MenuItem from './MenuItem'
import MobileMenuItem from './MobileMenuItem'
import menuItems from './menu-items'
import { default as socialItems } from './social-items'
import useWindowSize from '../../hooks/useWindowSize'

const Header = (props) => {
    const { type } = props
    const [menuOpenend, setMenuOpened] = useState(false)
    const menuButtonRef = useRef()
    const { height, width } = useWindowSize()

    const headerHeight = menuOpenend ? { height } : { height: width > 991 ? 120 : 90 }
    const headerColor =
        type === 'transparent' && !menuOpenend
            ? { backgroundColor: 'transparent', backdropFilter: 'none' }
            : null

    const toggleMobileMenu = () => {
        const { current: button } = menuButtonRef
        setMenuOpened(!menuOpenend)
        button.classList.toggle('opened')
        button.setAttribute('aria-expanded', button.classList.contains('opened'))
    }

    return (
        <header className="main-header" style={{ ...headerHeight, ...headerColor }}>
            <div className="container top">
                <div className="logo-wrapper">
                    <Link to="/">
                        <img
                            src={type === 'transparent' ? WsLogoWhite : WsLogo}
                            alt="WeStudents logo"
                        />
                    </Link>
                </div>
                <div className="menu-wrapper">
                    <nav>
                        <ul className="navigation">
                            {menuItems.map((item) => (
                                <MenuItem
                                    key={item.key}
                                    item={item}
                                    color={type === 'transparent' ? 'white' : null}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="socials-wrapper">
                    {socialItems.map((item) => (
                        <a
                            href={item.href()}
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon-wrapper"
                        >
                            {type === 'transparent' ? item.image('#fff') : item.image()}
                        </a>
                    ))}
                </div>

                <div className="hamburgher-wrapper">
                    <button
                        type="button"
                        className="menu"
                        ref={menuButtonRef}
                        onClick={toggleMobileMenu}
                        aria-label="Main Menu"
                    >
                        <svg width="100" height="100" viewBox="0 0 100 100">
                            <path
                                className={`line line1 ${type === 'transparent' ? 'white' : ''}`}
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                            />
                            <path
                                className={`line line2 ${type === 'transparent' ? 'white' : ''}`}
                                d="M 20,50 H 80"
                            />
                            <path
                                className={`line line3 ${type === 'transparent' ? 'white' : ''}`}
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`mobile-menu-content ${menuOpenend ? 'opened' : ''}`}>
                <div style={{ height: height - (width > 991 ? 120 : 90) }}>
                    <div className="social-links-wrapper">
                        {socialItems.map((item) => (
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon-wrapper"
                            >
                                {item.image()}
                            </a>
                        ))}
                    </div>
                    <nav>
                        <ul className="navigation">
                            {menuItems.map((item) =>
                                menuOpenend ? (
                                    <MobileMenuItem
                                        key={item.key}
                                        item={item}
                                        toggleMobileMenu={toggleMobileMenu}
                                    />
                                ) : null,
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
