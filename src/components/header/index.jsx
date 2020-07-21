import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState, useEffect, useMemo } from 'react'
import useScrollPosition from '@react-hook/window-scroll'

import WsLogo from '../../images/logo_wes.svg'

import './styles.scss'
import 'animate.css/animate.min.css'
import MenuItem from './MenuItem'

import menuItems from './menu-items'
import socialItems from './social-items'
import interpolate from '../../utils/interpolate'

const Header = ({ siteTitle }) => {
    const [shadowOpacity, setShadowOpacity] = useState(0)
    const scrollY = useScrollPosition(60 /* fps */)
    const interpolator = useMemo(() =>
        interpolate({
            inputRange: [0, 300],
            outputRange: [0, 9],
            clamp: true,
        }),
    )

    useEffect(() => {
        const so = Math.ceil(interpolator(scrollY > 300 ? 300 : scrollY))
        setShadowOpacity(so)
    }, [scrollY])

    return (
        <header
            className="main-header"
            style={{
                boxShadow: `0 14px 28px rgba(0,0,0,0.0${shadowOpacity}), 0 10px 10px rgba(0,0,0,0.0${shadowOpacity})`,
            }}
        >
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

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
