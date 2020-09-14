/* eslint-disable react/no-array-index-key */
import React from 'react'

import { Link } from 'gatsby'
import Translate from '../../components/translation/translate'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { itemList } from './privacy-items'

import './styles.scss'

const PrivacyIntro = () => (
    <Layout>
        <SEO title="Privacy policy intro" />
        <div className="container privacy-intro">
            <div className="head">
                <h2>
                    <Translate>PRIVACYAPP_INTRO.TITLE</Translate>
                </h2>
                <p>
                    <Translate>PRIVACYAPP_INTRO.SUBTITLE</Translate>
                </p>
            </div>
            <div className="content">
                {itemList.map((item, index) => (
                    <div key={`privacy_icon_${index}`} className="content-row">
                        <img src={item.icon} alt="Privacy westudents" />
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-center">
                <Link to="/privacy-policy-app">
                    <button type="button" className="discover-button">
                        <Translate>PRIVACYAPP_INTRO.BUTTON</Translate>
                    </button>
                </Link>
            </div>
        </div>
    </Layout>
)

export default React.memo(PrivacyIntro)
