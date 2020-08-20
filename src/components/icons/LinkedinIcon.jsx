import * as React from 'react'

function LinkedinIcon(props) {
    const { color = 'url(#prefix__a)' } = props
    return (
        <svg width={40} height={40} viewBox="0 0 40 40">
            <defs>
                <linearGradient
                    id="prefix__a"
                    x1={0.075}
                    y1={0.077}
                    x2={1}
                    y2={1}
                    gradientUnits="objectBoundingBox"
                >
                    <stop offset={0} stopColor="#f2666a" />
                    <stop offset={1} stopColor="#ff9d64" />
                </linearGradient>
            </defs>
            <path
                d="M17.468 21.469H4a4 4 0 01-4-4V4a4 4 0 014-4h13.468a4 4 0 014 4v13.468a4.005 4.005 0 01-4 4.001zm-4.084-10.755a1.738 1.738 0 011.738 1.737V18a.205.205 0 00.205.205h2.693a.205.205 0 00.205-.205v-6.615a3.415 3.415 0 00-3.411-3.412h-.541a3.038 3.038 0 00-2.489 1.3 3.112 3.112 0 00-.166.266H11.591v-1.1a.206.206 0 00-.206-.206H8.756a.206.206 0 00-.206.206V18a.206.206 0 00.206.206h2.686a.205.205 0 00.205-.206v-5.526a1.755 1.755 0 011.717-1.76zM3.991 8.228a.5.5 0 00-.495.5v8.982a.5.5 0 00.495.495H6.1a.5.5 0 00.495-.495V8.724a.5.5 0 00-.495-.5zM5.04 6.854h.04a1.8 1.8 0 00-.027-3.594 1.8 1.8 0 00-1.81 1.795 1.784 1.784 0 001.764 1.8z"
                transform="translate(9.514 9.182)"
                fill={color}
            />
            <path fill="none" d="M0 0h40v40H0z" />
        </svg>
    )
}

export default LinkedinIcon
