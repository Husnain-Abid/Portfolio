import React from 'react'
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './Profile.css';

export default function Profile() {
    const imgRoute = ASSET_PATHS.IMG_URL
    return (
        <>
            <Layout>
                <div className='profile'>
                    <h1>Portfolio</h1>
                    <div className='profile-section-1'>
                        
                        <div className='img-box'>
                            <img src={`${imgRoute}/img_2.png`}></img>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                        
                        <div className='img-box'>
                            <img src={`${imgRoute}/img_2.png`}></img>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                        
                        <div className='img-box'>
                            <img src={`${imgRoute}/img_2.png`}></img>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                        
                        <div className='img-box'>
                            <img src={`${imgRoute}/img_2.png`}></img>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>

                    </div>
                    


                </div>
            </Layout >
        </>
    )
}
