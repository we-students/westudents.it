/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import firebase from 'gatsby-plugin-firebase'
import * as Yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha'

import Layout from '../../components/layout'
import Loader from '../../components/loader'
import './styles.scss'

const validationSchema = Yup.object({
    fullname: Yup.string().required('Ci serve sapere il tuo nome'),
    role: Yup.string().required('Che cosa vuoi fare?'),
    cv_name: Yup.string().required('Ci serve il tuo curriculum'),
    profile: Yup.string().url('Non sembra un url valido'),
    privacy: Yup.bool().oneOf([true], 'Devi accettare la privacy'),
})

const CareerSubmission = ({ data, pageContext }) => {
    const { title } = data.position.edges[0].node
    const { slug } = pageContext
    const [isUploading, setIsUploading] = useState(false)
    const [fullFileName, setFullFileName] = useState()

    const recaptchaRef = React.createRef()

    useEffect(() => {
        firebase.auth().signInAnonymously()
    }, [])

    const openPositions = data.all.edges.reduce(
        (acc, { node: item }) => ({ ...acc, [item.slug]: item }),
        {},
    )

    const formik = useFormik({
        initialValues: {
            fullname: '',
            role: openPositions[slug] ? openPositions[slug].title : '',
            cv_name: '',
            profile: '',
            privacy: false,
        },
        onSubmit: async (values) => handleSubmit(values),
        validationSchema,
    })

    const handleFileUpload = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0]
            const date = new Date()
            formik.handleChange('cv_name')(file.name)

            const ffn = `${date.toISOString()}_${slug}_${file.name}`

            setFullFileName(ffn)

            setIsUploading(true)

            firebase
                .storage()
                .ref()
                .child(`westudents.it/cv/${ffn}`)
                .put(file)
                .then(() => {
                    setIsUploading(false)
                })
        }
    }

    const handleSubmit = async (values) => {
        const token = await recaptchaRef.current.executeAsync()

        const subFunc = firebase.functions().httpsCallable('submitJobApplicationForm')
        const { data: resp } = await subFunc({
            fullname: values.fullname,
            role: values.role,
            cv_url: `https://firebasestorage.googleapis.com/v0/b/practical-bot-198011.appspot.com/o/westudents.it%2Fcv%2F${encodeURIComponent(
                fullFileName,
            )}?alt=media`,
            profile: values.profile,
            recaptcha: token,
        })

        if (resp.success) {
            Swal.fire({
                status: 'success',
                title: 'Ok',
                html: 'Ok!',
            })

            formik.resetForm()
        }
    }

    return (
        <Layout className="careers" seo={{ title: `WeStudents — ${title}` }} showBubbles>
            <div className="container career-submission">
                <h4>Form di candidatura</h4>
                <form onSubmit={formik.handleSubmit}>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        size="invisible"
                        sitekey={process.env.GATSBY_RECAPTCHA_CODE}
                    />

                    <p className="main-text">
                        Mi chiamo
                        <div>
                            <span
                                id="fullname"
                                className="input"
                                role="textbox"
                                contentEditable
                                onInput={(e) => {
                                    formik.handleChange('fullname_tmp')(e.target.innerText)
                                }}
                                onBlur={(e) => {
                                    formik.handleBlur('fullname')(e)
                                    formik.handleChange('fullname')(e.target.innerText)
                                }}
                            >
                                {formik.values.fullname}
                            </span>
                            <span className="input-placeholder">Nome e Cognome</span>
                            {formik.errors.fullname && formik.touched.fullname ? (
                                <small className="error-info">{formik.errors.fullname}</small>
                            ) : null}
                        </div>
                        e vorrei entrare nel team di WeStudents come
                        <div>
                            <span
                                id="role"
                                className="input"
                                role="textbox"
                                contentEditable
                                onFocus={async (event) => {
                                    event.target.blur()
                                    event.persist()

                                    const { value } = await Swal.fire({
                                        title: 'Posizione',
                                        input: 'select',
                                        inputOptions: Object.entries(openPositions).reduce(
                                            (acc, [key, item]) => {
                                                return { ...acc, [key]: item.title }
                                            },
                                            {},
                                        ),
                                        inputValue: formik.values.role ? formik.values.role : slug,
                                        inputPlaceholder: 'Seleziona la posizione',
                                    })

                                    if (value) {
                                        formik.handleChange('role')(openPositions[value].title)
                                        formik.handleBlur('role')(event)
                                    }
                                }}
                            >
                                {formik.values.role}
                            </span>
                            <span className="input-placeholder">posizione</span>
                            {formik.errors.role && formik.touched.role ? (
                                <small className="error-info">{formik.errors.role}</small>
                            ) : null}
                        </div>
                        . Questo è il mio cv
                        <div>
                            <span
                                id="cv"
                                className="input"
                                role="textbox"
                                contentEditable
                                onFocus={(event) => {
                                    document.getElementById('cv_file').click()
                                    formik.handleBlur('cv_name')(event)
                                    event.target.blur()
                                }}
                            >
                                {formik.values.cv_name}
                            </span>
                            <span className="input-placeholder">nome file</span>
                            {formik.errors.cv_name && formik.touched.cv_name ? (
                                <small className="error-info">{formik.errors.cv_name}</small>
                            ) : null}
                        </div>
                        mentre qui potete visionare i miei lavori
                        <div>
                            <span
                                id="link"
                                className="input"
                                role="textbox"
                                contentEditable
                                onInput={(e) => {
                                    formik.handleChange('link_tmp')(e.target.innerText)
                                }}
                                onBlur={(e) => {
                                    formik.handleBlur('profile')(e)
                                    formik.handleChange('profile')(e.target.innerText)
                                }}
                            >
                                {formik.values.profile}
                            </span>
                            <span className="input-placeholder">link</span>
                            {formik.errors.profile && formik.touched.profile ? (
                                <small className="error-info">{formik.errors.profile}</small>
                            ) : null}
                        </div>
                        <input
                            type="file"
                            id="cv_file"
                            name="cv"
                            accept=".xlsx,.xls,image/*,.doc,.docx,.ppt,.pptx,.txt,.pdf"
                            onChange={handleFileUpload}
                        />
                    </p>

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

                    <button type="submit" disabled={isUploading || formik.isSubmitting}>
                        <span>Candidati</span>
                        {isUploading || formik.isSubmitting ? <Loader /> : null}
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String) {
        position: allContentfulOpenPosition(filter: { slug: { eq: $slug } }) {
            edges {
                node {
                    place
                    title
                    description {
                        json
                    }
                }
            }
        }

        all: allContentfulOpenPosition {
            edges {
                node {
                    category
                    slug
                    level
                    place
                    title
                    createdAt(formatString: "DD/MM/YYYY")
                    description {
                        json
                    }
                    shortDescription {
                        json
                    }
                    icon {
                        fluid {
                            srcSet
                            srcSetWebp
                        }
                    }
                }
            }
        }
    }
`

export default CareerSubmission
