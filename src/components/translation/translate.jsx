import i18n from 'i18n-js'
import { useStaticQuery, graphql } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'

import localTranslations from './it.json'

const Translate = ({ config, children, textOnly = false }) => {
    const data = useStaticQuery(graphql`
        query LocaleQuery {
            contentfulLocale(locale: { eq: "it-IT" }) {
                children {
                    internal {
                        content
                    }
                }
            }
        }
    `)

    if (data.contentfulLocale === null) return `${children} - NO LOCALE`

    try {
        const translation =
            process.env.NODE_ENV !== 'development'
                ? data.contentfulLocale.children[0].internal.content
                : localTranslations

        i18n.defaultLocale = 'it-IT'
        i18n.locale = 'it-IT'
        i18n.translations['it-IT'] =
            typeof translation === 'string' ? JSON.parse(translation) : translation

        const text = i18n.t(children, config)

        return textOnly ? text : ReactHtmlParser(text)
    } catch (err) {
        return `${children} - NO TRANSLATION`
    }
}

export default Translate
