import React from 'react'
import InstagramLogo from '../icons/InstagramIcon'
import FacebookLogo from '../icons/FacebookIcon'
import LinkedinLogo from '../icons/LinkedinIcon'
import TikTokLogo from '../icons/TikTokIcon'

export default [
    {
        key: 'team',
        image: (color) => <InstagramLogo color={color} />,
        href: 'https://instagram.com',
    },
    {
        key: 'careers',
        image: (color) => <FacebookLogo color={color} />,
        href: 'https://facebook.com',
    },
    {
        key: 'community',
        image: (color) => <LinkedinLogo color={color} />,
        href: 'https://linkedin.com',
    },
    {
        key: 'partners',
        image: (color) => <TikTokLogo color={color} />,
        href: 'https://tiktok.com',
    },
]
