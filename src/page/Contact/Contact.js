import React from 'react'
import Layout from '../../component/Layout'
import ASSET_PATHS from '../../constant'
import './Contact.css';

export default function Contact() {
    const imgRoute = ASSET_PATHS.IMG_URL
    return (
        <>
            <Layout>
                <div className='contact'>
                    <div className='contact-section-1'>
                        <h2><span>Talk</span> To Me</h2>
                        <p>Whether you’re an organization
                            or an individual who would like
                            to collaborate, I’m always open
                            to interesting opportunities that
                            help brands find their voice. So don’t be shy. Drop me a note!
                        </p>
                    </div>
                    <div className='contact-section-2'>
                        <div className='form'>

                            <div className='input-row'>
                                <div className='input-control'>
                                    <input type='text' placeholder='First Name' />
                                </div>

                                <div className='input-control'>
                                    <input type='text' placeholder='Last Name' />
                                </div>

                            </div>

                            <div className='input-row'>
                                <div className='input-control'>
                                    <input type='text' placeholder='Email' />
                                </div>
                                <div className='input-control'>
                                    <input type='text' placeholder='Phone' />
                                </div>
                            </div>

                            <div className='input-row'>
                                <div className='text-area-control'>

                                    <textarea placeholder='Message'>
                                    </textarea>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='contact-section-3'>
                        <button>SUBMIT</button>
                    </div>
                    
                </div>
            </Layout >
        </>
    )
}
