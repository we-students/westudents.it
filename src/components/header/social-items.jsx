import React from 'react'
import Translate from '../translation/translate'
import InstagramLogo from '../icons/InstagramIcon'
import FacebookLogo from '../icons/FacebookIcon'
import LinkedinLogo from '../icons/LinkedinIcon'
import TikTokLogo from '../icons/TikTokIcon'

export default [
    {
        key: 'team',
        image: (color) => <InstagramLogo color={color} />,
        href: () => Translate({ children: 'CONTACTS.INSTAGRAM' }),
    },
    {
        key: 'careers',
        image: (color) => <FacebookLogo color={color} />,
        href: () => Translate({ children: 'CONTACTS.FACEBOOK' }),
    },
    {
        key: 'community',
        image: (color) => <LinkedinLogo color={color} />,
        href: () => Translate({ children: 'CONTACTS.LINKEDIN' }),
    },
    {
        key: 'partners',
        image: (color) => <TikTokLogo color={color} />,
        href: () => Translate({ children: 'CONTACTS.TIKTOK' }),
    },
]
