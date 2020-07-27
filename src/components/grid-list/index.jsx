import React from 'react'

import './styles.scss'

const GridList = ({ items, cols, renderItem }) => {
    console.log(items, cols, renderItem)

    return (
        <div
            className="grid-container"
            style={{
                gridTemplateColumns: `${Array.from(Array(cols).keys()).reduce(
                    (acc) => `${acc} auto `,
                    '',
                )}`,
            }}
        >
            {items.map((item, index) => renderItem(item, index))}
        </div>
    )
}

export default GridList
