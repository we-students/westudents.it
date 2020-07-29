/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Translate from '../../../components/translation/translate'

import '../styles.scss'

const FacebookIcon = require('../../../images/facebook_icon_white.svg')
const InstagramIcon = require('../../../images/insta_icon_white.svg')
const LinkedinIcon = require('../../../images/linkedin_icon_white.svg')

const WeGather = () => {
    const data = useStaticQuery(graphql`
        query BlogPostQuery {
            allContentfulBlogPost {
                edges {
                    node {
                        link
                        title
                        articleTitle
                        heroImage {
                            fluid {
                                srcSet
                                srcSetWebp
                            }
                        }
                    }
                }
            }
        }
    `).allContentfulBlogPost.edges.map(({ node }) => node)
    return (
        <div className="wegather-section container ">
            <div className="blog-posts d-flex">
                {data.map((item, index) => (
                    <a href={item.link} rel="noopener noreferrer" target="_blank">
                        <div key={`blog_post_${index}`} className="post-card">
                            <img
                                srcSet={item.heroImage?.fluid.srcSet}
                                srcSetWebp={item.heroImage?.fluid.srcSetWebp}
                                alt="WeGather"
                            />
                            <p>{item.articleTitle}</p>
                        </div>
                    </a>
                ))}
            </div>
            <div className="WeGather-card">
                <div className="text-section">
                    <h1>
                        <Translate>PARTNERS.WEGATHER.TITLE</Translate>
                    </h1>
                    <h3>
                        <Translate>PARTNERS.WEGATHER.SUBTITLE</Translate>
                    </h3>
                    <h3>
                        <Translate>PARTNERS.WEGATHER.FOLLOW_US</Translate>
                    </h3>
                    <div style={{ marginTop: '3em' }}>
                        <a
                            className="social-icon"
                            href="https://www.instagram.com/westudentsapp/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={InstagramIcon} alt="Instagram" />
                        </a>
                        <a
                            className="social-icon"
                            href="https://www.facebook.com/WeStudentsApp/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={FacebookIcon} alt="Facebook" />
                        </a>
                        <a
                            className="social-icon"
                            href="https://www.linkedin.com/company/westudents/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={LinkedinIcon} alt="Linkedin" />
                        </a>
                    </div>
                </div>
                <div className="cta-section">
                    <div className='text'>
                        <p>
                            <Translate>PARTNERS.WEGATHER.TITLE</Translate>
                        </p>
                        <p>
                            <Translate>PARTNERS.WEGATHER.CTA</Translate>
                        </p>
                    </div>
                    <a href="https://wegather.it/">
                        <button type="button">
                            <Translate>PARTNERS.BUTTONS.GO_TO_WEGATHER</Translate>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WeGather
