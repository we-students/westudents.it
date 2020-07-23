import i18n from 'i18n-js'
import { useStaticQuery, graphql } from 'gatsby'

const Translate = (props) => {
    const { config, children } = props

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
        const translation = data.contentfulLocale.children[0].internal.content
        i18n.defaultLocale = 'it-IT'
        i18n.locale = 'it-IT'
        i18n.translations['it-IT'] = JSON.parse(translation)
        return i18n.t(children, config)
    } catch (err) {
        return `${children} - NO TRANSLATION`
    }
}

export default Translate
