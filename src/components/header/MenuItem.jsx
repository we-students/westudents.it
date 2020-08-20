/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { Link } from 'gatsby'

const MenuItem = ({ item, color }) => {
    const [hovered, setHoveder] = useState()
    if (item.type === 'parent')
        return (
            <li onMouseLeave={() => setHoveder(false)}>
                <span onMouseEnter={() => setHoveder(true)} style={color ? { color } : null}>
                    {item.value}
                </span>
                <div
                    className={`childrens-wrapper animate__animated ${
                        hovered !== undefined
                            ? hovered
                                ? 'animate__flipInX'
                                : 'animate__flipOutX'
                            : 'hidden'
                    }`}
                >
                    <ul>
                        {item.childrens.map((children) => {
                            const props = {}
                            if (children.href[0] !== '/') props.target = '_blank'

                            return (
                                <li key={children.key}>
                                    <a href={children.href} {...props}>
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
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </li>
        )

    return (
        <li>
            <Link to={item.href} style={color ? { color } : null}>
                {item.value}
            </Link>
        </li>
    )
}

export default MenuItem
