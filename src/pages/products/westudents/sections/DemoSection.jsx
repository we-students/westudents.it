/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import Translate from '../../../../components/translation/translate'

import BlogIcon from '../../../../images/blog_icon.png'
import ShopIcon from '../../../../images/shop_icon.png'
import GamificationIcon from '../../../../images/gamification_icon.png'
import BancoIcon from '../../../../images/banco_icon.png'
import ChatIcon from '../../../../images/chat_icon.png'
import DiarioIcon from '../../../../images/diario_icon.png'

import '../styles.scss'

const responsive = {
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
}

const Intro = ({ fullpageProps = {} }) => {
    const [selectedSection, setSelectedSection] = useState('blog')

    return (
        <div className="demo container">
            <div style={{ display: 'none' }}>
                <img src="/images/demo_westudents/blog.png" alt="preload blog" />
                <img src="/images/demo_westudents/shop.png" alt="preload shop" />
                <img src="/images/demo_westudents/gamification.png" alt="preload gamification" />
                <img src="/images/demo_westudents/banco.png" alt="preload banco" />
                <img src="/images/demo_westudents/diario.png" alt="preload diario" />
                <img src="/images/demo_westudents/chat.png" alt="preload chat" />
            </div>
            <h3>
                <Translate>WESTUDENTS.ALL_NEEDS</Translate>
                <span className="highlight">
                    <Translate>WESTUDENTS.ONE_APP</Translate>
                </span>

                <div className={`demo-wrapper ${selectedSection}`}>
                    <div className="left">
                        <div className="blog-selector" onClick={() => setSelectedSection('blog')}>
                            <div className="top-part">
                                <h4>
                                    <Translate>WESTUDENTS.BLOG_TITLE</Translate>
                                </h4>
                                <img src={BlogIcon} alt="Blog" />
                            </div>
                            <p>
                                <Translate>WESTUDENTS.BLOG_CONTENT</Translate>
                            </p>
                        </div>
                        <div className="shop-selector" onClick={() => setSelectedSection('shop')}>
                            <div className="top-part">
                                <h4>
                                    <Translate>WESTUDENTS.SHOP_TITLE</Translate>
                                </h4>
                                <img src={ShopIcon} alt="Shop" />
                            </div>
                            <p>
                                <Translate>WESTUDENTS.SHOP_CONTENT</Translate>
                            </p>
                        </div>
                        <div
                            className="gamification-selector"
                            onClick={() => setSelectedSection('gamification')}
                        >
                            <div className="top-part">
                                <h4>
                                    <Translate>WESTUDENTS.GAMIFICATION_TITLE</Translate>
                                </h4>
                                <img src={GamificationIcon} alt="Gamification" />
                            </div>
                            <p>
                                <Translate>WESTUDENTS.GAMIFICATION_CONTENT</Translate>
                            </p>
                        </div>
                    </div>
                    <div className="center">
                        <div className="image-wrapper" />
                    </div>
                    <div className="right">
                        <div className="banco-selector" onClick={() => setSelectedSection('banco')}>
                            <div className="top-part">
                                <img src={BancoIcon} alt="Banco" />
                                <h4>
                                    <Translate>WESTUDENTS.BANCO_TITLE</Translate>
                                </h4>
                            </div>
                            <p>
                                <Translate>WESTUDENTS.BANCO_CONTENT</Translate>
                            </p>
                        </div>

                        <div
                            className="diario-selector"
                            onClick={() => setSelectedSection('diario')}
                        >
                            <div className="top-part">
                                <img src={DiarioIcon} alt="Diario" />
                                <h4>
                                    <Translate>WESTUDENTS.DIARIO_TITLE</Translate>
                                </h4>
                            </div>
                            <p>
                                <Translate>WESTUDENTS.DIARIO_CONTENT</Translate>
                            </p>
                        </div>

                        <div className="chat-selector" onClick={() => setSelectedSection('chat')}>
                            <div className="top-part">
                                <img src={ChatIcon} alt="Chat" />
                                <h4>
                                    <Translate>WESTUDENTS.CHAT_TITLE</Translate>
                                </h4>
                            </div>
                            <p>
                                <Translate>WESTUDENTS.CHAT_CONTENT</Translate>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mobile-demo-wrapper">
                    <Carousel
                        responsive={responsive}
                        showDots={false}
                        removeArrowOnDeviceType={['tablet', 'mobile']}
                        additionalTransfrom={15}
                        autoPlaySpeed={4000}
                        autoPlay={fullpageProps.isActive}
                        infinite
                    >
                        <div className="carousel-item">
                            <div className="top-part">
                                <img src={BlogIcon} alt="Blog" />
                                <h4>
                                    <Translate>WESTUDENTS.BLOG_TITLE</Translate>
                                </h4>
                            </div>
                            <p>
                                <Translate>WESTUDENTS.BLOG_CONTENT</Translate>
                            </p>
                            <div className="demo-image">
                                <img src="/images/demo_westudents/blog.png" alt="Blog" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="top-part">
                                <img src={ShopIcon} alt="Shop" />
                                <h4>
                                    <Translate>WESTUDENTS.SHOP_TITLE</Translate>
                                </h4>
                            </div>
                            <p>
                                <Translate>WESTUDENTS.SHOP_CONTENT</Translate>
                            </p>
                            <div className="demo-image">
                                <img src="/images/demo_westudents/shop.png" alt="Shop" />
                            </div>{' '}
                        </div>
                        <div className="carousel-item">
                            <div className="top-part">
                                <img src={GamificationIcon} alt="Gamification" />
                                <h4>
                                    <Translate>WESTUDENTS.GAMIFICATION_TITLE</Translate>
                                </h4>
                            </div>
                            <p>
                                <Translate>WESTUDENTS.GAMIFICATION_CONTENT</Translate>
                            </p>
                            <div className="demo-image">
                                <img
                                    src="/images/demo_westudents/gamification.png"
                                    alt="Gamification"
                                />
                            </div>{' '}
                        </div>
                        <div className="carousel-item">
                            <div className="top-part">
                                <img src={BancoIcon} alt="Banco" />
                                <h4>
                                    <Translate>WESTUDENTS.BANCO_TITLE</Translate>
                                </h4>
                            </div>
                            <p>
                                <Translate>WESTUDENTS.BANCO_CONTENT</Translate>
                            </p>
                            <div className="demo-image">
                                <img src="/images/demo_westudents/banco.png" alt="Banco" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="top-part">
                                <img src={DiarioIcon} alt="Diario" />
                                <h4>
                                    <Translate>WESTUDENTS.DIARIO_TITLE</Translate>
                                </h4>
                            </div>
                            <p>
                                <Translate>WESTUDENTS.DIARIO_CONTENT</Translate>
                            </p>
                            <div className="demo-image">
                                <img src="/images/demo_westudents/diario.png" alt="Diario" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="top-part">
                                <img src={ChatIcon} alt="Chat" />
                                <h4>
                                    <Translate>WESTUDENTS.CHAT_TITLE</Translate>
                                </h4>
                            </div>
                            <p>
                                <Translate>WESTUDENTS.CHAT_CONTENT</Translate>
                            </p>
                            <div className="demo-image">
                                <img src="/images/demo_westudents/chat.png" alt="Chat" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </h3>
        </div>
    )
}

export default React.memo(Intro)
