import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Translate from '../../../components/translation/translate'

const Sponsor = () => {
    const partners = useStaticQuery(graphql`
        query {
            allContentfulPartner {
                nodes {
                    nome
                    order
                    logo {
                        file {
                            url
                        }
                    }
                }
            }
        }
    `)
        .allContentfulPartner.nodes.map((node) => ({
            name: node.nome,
            img: node.logo.file.url,
            order: node.order,
        }))
        .sort((a, b) => a.order - b.order)

    return (
        <div className="sponsor container d-flex">
            <h1 className="title text-center">
                <Translate>HOMEPAGE.SPONSORS.TITLE</Translate>
            </h1>
            <div className="sponsors-items">
                {partners.map((item) => (
                    <img
                        key={`img_${item.name}`}
                        src={item.img}
                        alt={item.name}
                        className="sponsor-icon"
                    />
                ))}
            </div>
            <div className="cta-section">
                <h3 className="cta-text text-center">
                    <Translate>HOMEPAGE.SPONSORS.CTA</Translate>
                </h3>
                <div className="d-flex justify-center">
                    <Link to="/partners">
                        <button type="button">
                            <Translate>HOMEPAGE.BUTTONS.DISCOVER</Translate>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Sponsor)
