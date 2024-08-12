import React, { useState } from 'react'
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './CV.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CV() {
    const pdfRoute = ASSET_PATHS.IMG_URL

    const settings = {
        dots: true,            // Show navigation dots
        infinite: true,        // Enable infinite scrolling
        speed: 500,            // Transition speed
        slidesToShow: 1,       // Show only one slide at a time
        slidesToScroll: 1,     // Scroll one slide at a time
        arrows: false,         // Hide left/right arrows
        autoplay: false,       // Disable autoplay
    };

    return (
        <Layout>
            <div className='cv'>

                <div className="carousel-container">
                    <Slider {...settings}>
                        <div className="carousel-item">
                            <div>
                                <img src={`${pdfRoute}/CV2.png`} alt="Slide 1" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div>
                                <img src={`${pdfRoute}/CV1.png`} alt="Slide 2" />
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>

        </Layout >



    );

}
