/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import firebase from 'gatsby-plugin-firebase'
import * as Yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha'

import Layout from '../../components/layout'
import Loader from '../../components/loader'
import './styles.scss'

import ContactImage from '../../images/contact.png'

const pageTitle = 'Contattaci'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object({
    fullname: Yup.string().required('Il nome è obbligatorio'),
    email: Yup.string().email('Non sembra essere una mail').required('La mail è obbligatoria'),
    phone: Yup.string().matches(phoneRegExp, 'Numero di telefono non valido'),
    text: Yup.string().required('Non devi dirci niente?'),
    subject: Yup.string().required(),
    privacy: Yup.bool().oneOf([true], 'Devi accettare la privacy'),
})

const ContactPage = () => {
    const recaptchaRef = React.createRef()

    useEffect(() => {
        firebase.auth().signInAnonymously()
    }, [])

    const handleSubmit = async (values) => {
        const token = await recaptchaRef.current.executeAsync()

        const subFunc = firebase.functions().httpsCallable('NAMEFUNC')
        const resp = await subFunc({
            fullname: values.fullname,
            email: values.email,
            phone: values.phone,
            text: values.text,
            subject: values.subject,
            recaptcha: token,
        })

        console.log(resp)
    }

    const formik = useFormik({
        validationSchema,
        initialValues: {
            fullname: '',
            email: '',
            phone: '',
            text: '',
            subject: 'altro',
            privacy: false,
        },
        onSubmit: async (values) => handleSubmit(values),
    })

    return (
        <Layout className="contact" seo={{ title: `WeStudents — ${pageTitle}` }} showBubbles>
            <div className="container top-section">
                <div>
                    <h2>Contattaci</h2>
                    <p>
                        Per qualsiasi informazione siamo a tua disposizione Compila il form qui
                        sotto per essere ricontattato da noi!
                        <br />
                        Ti risponderemo appena possibile!
                    </p>
                </div>
                <div className="image-wrapper">
                    <img src={ContactImage} alt="Contattaci" />
                </div>
            </div>

            <div className="form-wrapper container">
                <form onSubmit={formik.handleSubmit}>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        size="invisible"
                        sitekey={process.env.GATSBY_RECAPTCHA_CODE}
                    />

                    <div
                        className={`input-wrapper ${
                            formik.errors.fullname && formik.touched.fullname ? 'error' : ''
                        }`}
                    >
                        <input
                            name="fullname"
                            placeholder="Come ti chiami?*"
                            value={formik.values.fullname}
                            onChange={formik.handleChange('fullname')}
                            onBlur={formik.handleBlur('fullname')}
                        />
                        <small className="error-info">{formik.errors.fullname}</small>
                    </div>
                    <div
                        className={`input-wrapper ${
                            formik.errors.email && formik.touched.email ? 'error' : ''
                        }`}
                    >
                        <input
                            name="email"
                            placeholder="Qual è la tua mail?*"
                            value={formik.values.email}
                            onChange={formik.handleChange('email')}
                            onBlur={formik.handleBlur('email')}
                        />
                        <small className="error-info">{formik.errors.email}</small>
                    </div>
                    <div
                        className={`input-wrapper ${
                            formik.errors.phone && formik.touched.phone ? 'error' : ''
                        }`}
                    >
                        {' '}
                        <input
                            name="phone"
                            placeholder="Potete chiamarmi al numero"
                            value={formik.values.phone}
                            onChange={formik.handleChange('phone')}
                            onBlur={formik.handleBlur('phone')}
                        />
                        <small className="error-info">{formik.errors.phone}</small>
                    </div>
                    <div
                        className={`input-wrapper ${
                            formik.errors.text && formik.touched.text ? 'error' : ''
                        }`}
                    >
                        <textarea
                            name="text"
                            placeholder="Devo dirvi"
                            onChange={formik.handleChange('text')}
                            onBlur={formik.handleBlur('text')}
                        >
                            {formik.values.text}
                        </textarea>
                        <small className="error-info">{formik.errors.text}</small>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="elementari-medie-radio">
                            <input
                                id="elementari-medie-radio"
                                type="radio"
                                name="subject"
                                value="elementari e medie"
                                checked={formik.values.subject === 'elementari e medie'}
                                onChange={formik.handleChange('subject')}
                            />
                            Elementari e medie
                        </label>{' '}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="superiori-radio">
                            <input
                                id="superiori-radio"
                                type="radio"
                                name="subject"
                                value="superiori"
                                checked={formik.values.subject === 'superiori'}
                                onChange={formik.handleChange('subject')}
                            />
                            Superiori
                        </label>{' '}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="altro-radio">
                            <input
                                id="altro-radio"
                                type="radio"
                                name="subject"
                                value="altro"
                                checked={formik.values.subject === 'altro'}
                                onChange={formik.handleChange('subject')}
                            />
                            Altro
                        </label>{' '}
                    </div>
                    <div className={`input-wrapper ${formik.errors.privacy ? 'error' : ''}`}>
                        <label htmlFor="privacy">
                            <input
                                id="privacy"
                                type="checkbox"
                                name="privacy"
                                value={formik.values.privacy}
                                onChange={formik.handleChange('privacy')}
                            />
                            Dichiaro di aver preso visione della Privacy Policy e di acconsentire al
                            trattamento dei miei dati personali
                        </label>
                        <small className="error-info">{formik.errors.privacy}</small>
                    </div>

                    <button type="submit" disabled={formik.isSubmitting}>
                        <span>Invia</span>
                        {formik.isSubmitting ? <Loader /> : null}
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default ContactPage
