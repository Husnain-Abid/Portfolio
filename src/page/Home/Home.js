import React from 'react'
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    const imgRoute = ASSET_PATHS.IMG_URL
    return (
        <>
            <Layout>
                <div className='content'>

                    <div className='section-1'>

                        <div className='box-1'>
                            <h1>
                                i craft strategic <span>creative </span>   content
                            </h1>
                            <p>
                                With 20 years of experience as a regional Creative Director, both on the agency and client sides, I specialize in creating compelling, culturally resonant communications.
                                I’m driven by my desire to create impactful and authentic ideas that resonate with diverse audiences.</p>
                            <button>MY CV</button>
                        </div>

                        <div className='box-2'>
                            <img src={`${imgRoute}/img_1.png`}></img>
                        </div>
                    </div>

                    <div className='section-2'>
                        <div className='box-2'>
                            <img src={`${imgRoute}/img_2.png`}></img>
                        </div>

                        <div className='box-1'>
                            <h1>
                                Welcome To My <span> Hybrid </span> World
                            </h1>
                            <p>
                                My mixed British and Saudi heritage allowed me to develop an understanding of a rich and often complex culture, honing my sensibility for cultural nuances and sensitivities.
                                I have been able to bridge diverse cultural contexts for multinational brands, balancing tone of voice, cultural authenticity, and brand equity.
                            </p>
                            <button>
                                MY WORK
                            </button>
                        </div>
                    </div>

                    <div className='section-3'>

                        <div className='box-1'>
                            <h1>
                                Want to <span>collaborate?</span>
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <button>
                                LETS TALK
                            </button>
                        </div>

                        <div className='box-2'>
                            <img src={`${imgRoute}/img_3.png`}></img>
                        </div>

                    </div>

                    <div className='section-4'>
                        <div className='title'>WORKED WITH</div>
                        <div className='box-1'>
                            {/* <div>
                                <img src={`${imgRoute}/image_6.png`}></img>
                            </div>
                            <div>
                                <img src={`${imgRoute}/image_5.png`}></img>
                            </div>
                            <div>
                                <img src={`${imgRoute}/image_7.png`}></img>
                            </div>
                            <div>
                                <img src={`${imgRoute}/image_8.png`}></img>
                            </div> */}
                        </div>
                    </div>

                    <div className='section-5'>
                        <div className='title'> TESTIMONIALS </div>
                        <h2> They Really Love Me </h2>

                        <div className='box-1'>
                            <div className='card'>
                                <h4>JACK - APPLE</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                            <div className='card'>
                                <h4>JACK - APPLE</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                            <div className='card'>
                                <h4>JACK - APPLE</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                            </div>

                        </div>


                    </div>

                    <div className='footer'>
                        <div className='foot-nav'>
                            <div className='nav'>

                                <div className='logo'>
                                    <h2><Link to="/">Safiyyah</Link></h2>
                                </div>

                                <div className='nav-links'>
                                    <ul className='links'>
                                        <li><Link to="/about"> ABOUT </Link></li>
                                        <li><Link to="/cv">MY CV </Link></li>
                                        <li><Link to="/contact">LETS TALK</Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <hr/>

                        <div className='terms'>

                            <div className='icons'>
                                <div className='icon'></div>
                                <div className='icon'></div>
                                <div className='icon'></div>
                                <div className='icon'></div>
                                <div className='icon'></div>
                            </div>

                            <div className='privacy'>
                                <span>© 2010 — 2020   Privacy — Terms</span>
                            </div>

                        </div>

                    </div>


                </div>
            </Layout >
        </>
    )
}
