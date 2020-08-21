/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from 'react'
import { Link } from 'gatsby'
import Collapsible from 'react-collapsible'

const MenuItem = ({ item, toggleMobileMenu }) => {
    if (item.type === 'parent')
        return (
            <li>
                <Collapsible trigger={item.value}>
                    {item.childrens.map((children) => {
                        let external = false
                        const props = {}
                        if (children.href[0] !== '/') {
                            props.target = '_blank'
                            external = true
                        }

                        return (
                            <li key={children.key}>
                                {external ? (
                                    <a href={children.href} {...props} onClick={toggleMobileMenu}>
                                        <div className="sub-item-info">
                                            <span className="sub-item-title">{children.value}</span>
                                        </div>
                                    </a>
                                ) : (
                                    <Link to={children.href} onClick={toggleMobileMenu}>
                                        <div className="sub-item-info">
                                            <span className="sub-item-title">{children.value}</span>
                                        </div>
                                    </Link>
                                )}
                            </li>
                        )
                    })}
                </Collapsible>
            </li>
        )

    return (
        <li>
            <Link to={item.href} onClick={toggleMobileMenu}>
                {item.value}
            </Link>
        </li>
    )
}

export default MenuItem
