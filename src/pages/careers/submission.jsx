import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import firebase from 'gatsby-plugin-firebase'
import ReCAPTCHA from 'react-google-recaptcha'

import Layout from '../../components/layout'
import './styles.scss'

const CareerSubmission = ({ data, pageContext }) => {
    const { title, place, description } = data.position.edges[0].node
    const { slug } = pageContext
    const [isUploading, setIsUploading] = useState(false)
    const [cvUrl, setCvUrl] = useState()

    const openPositions = data.all.edges.reduce(
        (acc, { node: item }) => ({ ...acc, [item.slug]: item }),
        {},
    )

    const formik = useFormik({
        initialValues: {
            fullname: '',
            role: openPositions[slug] ? openPositions[slug].title : '',
            cv_name: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    const handleFileUpload = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0]
            const date = new Date()
            formik.handleChange('cv_name')(file.name)

            setIsUploading(true)

            firebase
                .storage()
                .ref()
                .child(`westudents.it/cv/${date.toISOString()}_${slug}_${file.name}`)
                .put(file)
                .then(function (snapshot) {
                    setIsUploading(false)
                    setCvUrl(snapshot.metadata.fullPath)
                })
        }
    }

    return (
        <Layout className="careers" seo={{ title: `WeStudents — ${title}` }} showBubbles>
            <div className="container career-submission">
                <h4>
                    Form di candidatura
                    {formik.values.fullname}
                </h4>

                <form onSubmit={formik.handleSubmit}>
                    <p className="main-text">
                        Mi chiamo
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
                        e vorrei entrare nel team di WeStudents come
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
                        . Questo è il mio cv
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
                        mentre qui potete visionare i miei lavori
                        <span
                            id="link"
                            className="input"
                            role="textbox"
                            contentEditable
                            onInput={(e) => {
                                formik.handleChange('link_tmp')(e.target.innerText)
                            }}
                            onBlur={(e) => {
                                formik.handleBlur('link')(e)
                                formik.handleChange('link')(e.target.innerText)
                            }}
                        >
                            {formik.values.link}
                        </span>
                        <ReCAPTCHA
                            sitekey="Your client site key"
                            onChange={(value) => {
                                console.log('Captcha value:', value)
                            }}
                        />
                        <input
                            type="file"
                            id="cv_file"
                            name="cv"
                            accept=".xlsx,.xls,image/*,.doc,.docx,.ppt,.pptx,.txt,.pdf"
                            onChange={handleFileUpload}
                        />
                    </p>

                    <button type="submit">Submit</button>
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
