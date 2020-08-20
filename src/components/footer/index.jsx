/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Link } from 'gatsby'
import * as Yup from 'yup'

import Translate from '../translation/translate'
import './styles.scss'

const validationSchema = Yup.object({
    email: Yup.string().email('Non sembra essere una mail').required('La mail è obbligatoria'),
})

const Footer = () => {
    const [form, setForm] = useState({ email: '', privacy: false })

    const handleSubmit = () => {}

    const formik = useFormik({
        initialValues: { email: '' },
        onSubmit: async (values) => handleSubmit(values),
        validationSchema,
    })

    return (
        <div className="footer-wrapper container">
            <div className="footer">
                <div style={{ display: 'flex' }} className="footer-row">
                    <div style={{ display: 'flex', flex: '2' }} className="main-section">
                        <div style={{ marginRight: '4em' }}>
                            <h4>
                                <Translate>FOOTER.PRIVACY.TITLE</Translate>
                            </h4>
                            <ul className="list-title">
                                <li className="list-item">
                                    <Link
                                        to={Translate({
                                            children: 'FOOTER.PRIVACY.ITEM1LINK',
                                            textOnly: true,
                                        })}
                                    >
                                        <Translate>FOOTER.PRIVACY.ITEM1</Translate>
                                    </Link>
                                </li>
                                <li className="list-item">
                                    <Link
                                        to={Translate({
                                            children: 'FOOTER.PRIVACY.ITEM2LINK',
                                            textOnly: true,
                                        })}
                                    >
                                        <Translate>FOOTER.PRIVACY.ITEM2</Translate>
                                    </Link>
                                </li>
                                <li className="list-item">
                                    <Link
                                        to={Translate({
                                            children: 'FOOTER.PRIVACY.ITEM3LINK',
                                            textOnly: true,
                                        })}
                                    >
                                        <Translate>FOOTER.PRIVACY.ITEM3</Translate>
                                    </Link>
                                </li>
                                <li className="list-item">
                                    <Link
                                        to={Translate({
                                            children: 'FOOTER.PRIVACY.ITEM4LINK',
                                            textOnly: true,
                                        })}
                                    >
                                        <Translate>FOOTER.PRIVACY.ITEM4</Translate>
                                    </Link>
                                </li>
                                <li className="list-item">
                                    <Link
                                        to={Translate({
                                            children: 'FOOTER.PRIVACY.ITEM5LINK',
                                            textOnly: true,
                                        })}
                                    >
                                        <Translate>FOOTER.PRIVACY.ITEM5</Translate>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div style={{ marginRight: '4em' }}>
                            <h4>
                                <Translate>FOOTER.SUPPORT.TITLE</Translate>
                            </h4>
                            <ul className="list-title">
                                <li className="list-item">
                                    <Link
                                        to={Translate({
                                            children: 'FOOTER.SUPPORT.ITEM1LINK',
                                            textOnly: true,
                                        })}
                                    >
                                        <Translate>FOOTER.SUPPORT.ITEM1</Translate>
                                    </Link>
                                </li>
                                <li className="list-item">
                                    <Link
                                        to={Translate({
                                            children: 'FOOTER.SUPPORT.ITEM2LINK',
                                            textOnly: true,
                                        })}
                                    >
                                        <Translate>FOOTER.SUPPORT.ITEM2</Translate>
                                    </Link>
                                </li>
                                <li className="list-item">
                                    <Link
                                        to={Translate({
                                            children: 'FOOTER.SUPPORT.ITEM3LINK',
                                            textOnly: true,
                                        })}
                                    >
                                        <Translate>FOOTER.SUPPORT.ITEM3</Translate>
                                    </Link>
                                </li>
                            </ul>
                            <h4>
                                <Translate>FOOTER.WORK.TITLE</Translate>
                            </h4>
                            <ul className="list-title">
                                <li className="list-item">
                                    <Link
                                        to={Translate({
                                            children: 'FOOTER.WORK.ITEM1LINK',
                                            textOnly: true,
                                        })}
                                    >
                                        <Translate>FOOTER.WORK.ITEM1</Translate>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>
                                <Translate>FOOTER.COMMUNITY.TITLE</Translate>
                            </h4>
                            <ul className="list-title">
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={Translate({
                                        children: 'CONTACTS.INSTAGRAM',
                                        textOnly: true,
                                    })}
                                >
                                    <li className="list-item">Instagram</li>
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={Translate({
                                        children: 'CONTACTS.TIKTOK',
                                        textOnly: true,
                                    })}
                                >
                                    <li className="list-item">Tik Tok</li>
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={Translate({
                                        children: 'CONTACTS.FACEBOOK',
                                        textOnly: true,
                                    })}
                                >
                                    <li className="list-item">Facebook</li>
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={Translate({
                                        children: 'CONTACTS.LINKEDIN',
                                        textOnly: true,
                                    })}
                                >
                                    <li className="list-item">Linkedin</li>
                                </a>
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

                            <form className="newsletter-check" onSubmit={formik.handleSubmit}>
                                <div className="input-container">
                                    <input
                                        placeholder="Inserisci la tua mail.."
                                        className="custom-input"
                                    />
                                    <button className="custom-button" type="submit">
                                        Invia
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="checkbox-wrapper"
                                    onClick={() => setForm({ ...form, privacy: !form.privacy })}
                                >
                                    <input
                                        type="checkbox"
                                        id="subscribe_id"
                                        name="subscribe"
                                        checked={form.privacy}
                                    />
                                    <label style={{ fontSize: '10px' }} htmlFor="subscribe_id">
                                        <Translate>FOOTER.JOIN_NEWSLETTER.CONDITIONS</Translate>
                                    </label>
                                </button>
                            </form>
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
