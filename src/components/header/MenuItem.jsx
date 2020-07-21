/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { Link } from 'gatsby'

const MenuItem = ({ item }) => {
    const [hovered, setHoveder] = useState()

    if (item.type === 'parent')
        return (
            <li onMouseLeave={() => setHoveder(false)}>
                <span onMouseEnter={() => setHoveder(true)}>{item.value}</span>
                <div
                    className={`childrens-wrapper animate__animated ${
                        hovered !== undefined
                            ? hovered
                                ? 'animate__fadeInDown'
                                : 'animate__fadeOutUp'
                            : 'hidden'
                    }`}
                >
                    <ul>
                        {item.childrens.map((children) => {
                            return (
                                <li key={children.key}>
                                    <Link to={children.href}>
                                        <img
                                            className="sub-item-logo"
                                            src={children.image}
                                            alt={`${children.value} logo`}
                                        />
                                        <div className="sub-item-info">
                                            <span className="sub-item-title">{children.value}</span>
                                            <span className="sub-item-description">
                                                {children.description}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </li>
        )

    return (
        <li>
            <Link to={item.href}>{item.value}</Link>
        </li>
    )
}

export default MenuItem
