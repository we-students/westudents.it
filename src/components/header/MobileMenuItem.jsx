/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from 'react'
import { Link } from 'gatsby'
import Collapsible from 'react-collapsible'

const MenuItem = ({ item }) => {
    if (item.type === 'parent')
        return (
            <li>
                <Collapsible trigger={item.value}>
                    {item.childrens.map((children) => {
                        const props = {}
                        if (children.href[0] !== '/') props.target = '_blank'

                        return (
                            <li key={children.key}>
                                <a href={children.href} {...props}>
                                    <div className="sub-item-info">
                                        <span className="sub-item-title">{children.value}</span>
                                    </div>
                                </a>
                            </li>
                        )
                    })}
                </Collapsible>
            </li>
        )

    return (
        <li>
            <Link to={item.href}>{item.value}</Link>
        </li>
    )
}

export default MenuItem
