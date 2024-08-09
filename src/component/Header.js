import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className='header'>
                <div className='navbar'>
                    <div className='logo'>
                        <h2><Link to="/">Safiyyah</Link></h2>
                    </div>

                    <div className='nav-links'>
                        <i
                            className="fa fa-bars"
                            aria-hidden="true"
                            onClick={() => setShow(!show)}
                        />

                        <ul className={`links ${show ? 'show' : ''}`}>
                            <li><Link to="/about" onClick={() => setShow(false)}>ABOUT</Link></li>
                            <li><Link to="/cv" onClick={() => setShow(false)}>MY CV</Link></li>
                            <li><Link to="/contact" onClick={() => setShow(false)}>LETS TALK</Link></li>
                        </ul>
                    </div>

                </div>
                <hr />
            </div>

        </>
    )
}
