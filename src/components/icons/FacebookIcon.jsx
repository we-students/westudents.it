import * as React from 'react'

function FacebookIcon(props) {
    const { color = 'url(#prefix__a)' } = props
    return (
        <svg width={40} height={40} viewBox="0 0 40 40">
            <defs>
                <linearGradient
                    id="prefix__a"
                    x1={-0.066}
                    x2={1}
                    y2={1}
                    gradientUnits="objectBoundingBox"
                >
                    <stop offset={0} stopColor="#f2666a" />
                    <stop offset={1} stopColor="#ff9d64" />
                </linearGradient>
            </defs>
            <path
                d="M19.5 0H1.139A1.139 1.139 0 000 1.14V19.5a1.14 1.14 0 001.139 1.14h9.884v-7.994H8.334V9.531h2.689v-2.3a3.753 3.753 0 014.005-4.117 22.306 22.306 0 012.4.122v2.789h-1.646c-1.293 0-1.542.615-1.542 1.516V9.53h3.085l-.4 3.115h-2.686v7.992H19.5a1.14 1.14 0 001.14-1.139V1.139A1.139 1.139 0 0019.5 0z"
                transform="translate(9.593 9.55)"
                fill={color}
            />
            <path fill="none" d="M0 0h40v40H0z" />
        </svg>
    )
}

export default FacebookIcon
