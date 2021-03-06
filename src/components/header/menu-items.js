import WeStudentsLogo from '../../images/westudentsapp.svg'
import WeGatherLogo from '../../images/wegather.svg'
import DaScuolaLogo from '../../images/dascuola.svg'

export default [
    {
        key: 'products',
        type: 'parent',
        value: 'Prodotti',
        childrens: [
            {
                key: 'westudents',
                value: 'WeStudents App',
                image: WeStudentsLogo,
                href: '/prodotti/westudents',
                description: 'Il diario smart per gli studenti delle scuole superiori',
            },
            {
                key: 'wegather',
                value: 'WeGather',
                image: WeGatherLogo,
                href: 'https://wegather.it',
                description: 'La nostra community culturale e studentesca under 25',
            },
            {
                key: 'dascuola',
                value: 'DaScuola',
                image: DaScuolaLogo,
                href: 'https://dascuola.it',
                description: 'La piattaforma di e-learning più completa di sempre',
            },
        ],
    },
    { key: 'team', value: 'Team', href: '/team' },
    { key: 'careers', value: 'Carriere', href: '/carriere' },
    { key: 'community', value: 'Community', href: '/community' },
    { key: 'partners', value: 'Partners', href: '/partners' },
]
