import i18n from 'i18n-js'
import itTranslation from './it.json'

const Translate = (props) => {
    const { config, children } = props
    i18n.defaultLocale = 'it-IT'
    i18n.locale = 'it-IT'

    i18n.translations['it-IT'] = itTranslation
    return i18n.t(children, config)
}

export default Translate
