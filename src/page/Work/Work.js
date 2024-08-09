import React from 'react'
import Slider from "react-slick";
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './Work.css';

export default function Work() {
    const imgRoute = ASSET_PATHS.IMG_URL

    const settings = {
        centerMode: true,
        centerPadding: '0px', // No padding for the centered slide
        slidesToShow: 3,
        speed: 500,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '0px',
                }
            }
        ],
        beforeChange: (current, next) => setActiveSlide(next), // Track active slide
    };



    const [activeSlide, setActiveSlide] = React.useState(0);

    return (
        <>
            <Layout>
                <div className='work'>

                    <h1>My <span>Work</span> Sample</h1>
                    <div className="work-section-1">

                        <div className="carousel-container">
                            <Slider {...settings}>
                                {[1, 2, 3, 4, 5].map((i, index) => (
                                    <div key={index} className={`carousel-item ${index === activeSlide ? 'active' : ''}`}>
                                        <img src={`${imgRoute}/img_2.png`} alt={`Slide ${i}`} />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    </div>
                                ))}
                            </Slider>
                        </div>





                    </div>

                    <div className='work-section-2'>
                        <h2>Portfolio</h2>
                        <button type='button'>ENTER PASSWORD</button>
                    </div>

                </div>
            </Layout >
        </>
    )
}
