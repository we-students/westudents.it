import React from 'react'
import Translate from '../translation/translate'
import './styles.scss'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer">
                <div style={{ display: 'flex' }} className="footer-row">
                    <div style={{ display: 'flex', flex: '2' }} className="main-section">
                        <div style={{ marginRight: '4em' }}>
                            <h4>
                                <Translate>FOOTER.PRIVACY.TITLE</Translate>
                            </h4>
                            <ul className="list-title">
                                <li className="list-item">
                                    <Translate>FOOTER.PRIVACY.ITEM1</Translate>
                                </li>
                                <li className="list-item">
                                    <Translate>FOOTER.PRIVACY.ITEM2</Translate>
                                </li>
                                <li className="list-item">
                                    <Translate>FOOTER.PRIVACY.ITEM3</Translate>
                                </li>
                                <li className="list-item">
                                    <Translate>FOOTER.PRIVACY.ITEM4</Translate>
                                </li>
                                <li className="list-item">
                                    <Translate>FOOTER.PRIVACY.ITEM5</Translate>
                                </li>
                            </ul>
                        </div>
                        <div style={{ marginRight: '4em' }}>
                            <h4>
                                <Translate>FOOTER.SUPPORT.TITLE</Translate>
                            </h4>
                            <ul className="list-title">
                                <li className="list-item">
                                    <Translate>FOOTER.SUPPORT.ITEM1</Translate>
                                </li>
                                <li className="list-item">
                                    <Translate>CONTACTS.EMAIL</Translate>
                                </li>
                                <li className="list-item">
                                    <Translate>FOOTER.SUPPORT.ITEM3</Translate>
                                </li>
                            </ul>
                            <h4>
                                <Translate>FOOTER.WORK.TITLE</Translate>
                            </h4>
                            <ul className="list-title">
                                <li className="list-item">
                                    <Translate>FOOTER.WORK.ITEM1</Translate>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>
                                <Translate>FOOTER.COMMUNITY.TITLE</Translate>
                            </h4>
                            <ul className="list-title">
                                <li className="list-item">Instagram</li>
                                <li className="list-item">Tik Tok</li>
                                <li className="list-item">Facebook</li>
                                <li className="list-item">Linkedin</li>
                                <li className="list-item">
                                    <Translate>FOOTER.COMMUNITY.ITEM1</Translate>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flex: '1' }} className="newsletter-wrapper">
                        <span className="divider" />
                        <div style={{ position: 'relative' }} className="newsletter-div">
                            <h4>
                                <Translate>FOOTER.JOIN_NEWSLETTER.TITLE</Translate>
                            </h4>
                            <p style={{ marginTop: 0, fontSize: '12px' }}>
                                <Translate>FOOTER.JOIN_NEWSLETTER.SUBTITLE</Translate>
                            </p>

                            <div className="input-container">
                                <input
                                    placeholder="Inserisci la tua mail.."
                                    className="custom-input"
                                />
                                <button className="custom-button" type="submit">
                                    Invia
                                </button>
                            </div>
                        </div>
                        <span className="horizontal-divider" />
                    </div>
                </div>
                <p className="company-info">
                    <span style={{ textDecoration: 'underline' }}>
                        <Translate>FOOTER.COMPANY.NAME</Translate>
                    </span>
                    ,<Translate>FOOTER.COMPANY.TYPE</Translate>
                </p>
            </div>
        </div>
    )
}

export default Footer
