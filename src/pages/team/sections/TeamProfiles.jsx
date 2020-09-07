/* eslint-disable global-require */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GridList from '../../../components/grid-list'

const Profile = (props) => {
    const { name, image, activeImage, animImages, role } = props
    return (
        <div className="profile-item">
            <div>
                {image ? (
                    <img
                        srcSet={image.fluid.srcSet}
                        srcSetWebp={image.fluid.srcSetWebp}
                        alt="WeStudents"
                        className="main-image"
                    />
                ) : (
                    <img
                        srcSet={require('../../../images/profile-placeholder.png')}
                        alt="WeStudents"
                        className="main-image"
                    />
                )}
                {activeImage ? (
                    <img
                        srcSet={activeImage.fluid.srcSet}
                        srcSetWebp={activeImage.fluid.srcSetWebp}
                        alt="WeStudents"
                        className="image active-image"
                    />
                ) : null}
                <img
                    src={require('../../../images/profile_fade.png')}
                    className="image profile-fade"
                    alt="WeStudents"
                />
                {animImages
                    ? animImages.map((item, index) => (
                          <img
                              key={`anim_img_${index}`}
                              srcSet={item.fluid.srcSet}
                              srcSetWebp={item.fluid.srcSetWebp}
                              alt="WeStudents"
                              className={`image anim-image animation_${index}`}
                          />
                      ))
                    : null}
                <div className="text">
                    <h4>{name}</h4>
                    <p>{role}</p>
                </div>
            </div>
        </div>
    )
}

const TeamProfiles = () => {
    const data = useStaticQuery(graphql`
        query PersonQuery {
            allContentfulPerson {
                edges {
                    node {
                        name
                        role
                        image {
                            fluid {
                                srcSet
                                srcSetWebp
                            }
                        }
                        activeImage {
                            fluid {
                                srcSet
                                srcSetWebp
                            }
                        }
                        animImages {
                            fluid {
                                srcSet
                                srcSetWebp
                            }
                        }
                        order
                    }
                }
            }
        }
    `)
        .allContentfulPerson.edges.map(({ node }) => node)
        .sort((a, b) => {
            if (a.order > b.order) {
                return 1
            }
            if (b.order > a.order) {
                return -1
            }
            return 0
        })
    return (
        <div className="container team">
            <GridList
                items={data}
                cols={3}
                renderItem={(item, index) => (
                    <Profile
                        key={index}
                        role={item.role}
                        image={item.image}
                        activeImage={item.activeImage}
                        name={item.name}
                        animImages={item.animImages}
                    />
                )}
            />
        </div>
    )
}

export default TeamProfiles
