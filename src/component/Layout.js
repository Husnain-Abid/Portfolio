import React from 'react'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <>
            <div className='main'>
                
                <Header></Header>
                <div > {children} </div>

            </div>

        </>
    )
}
