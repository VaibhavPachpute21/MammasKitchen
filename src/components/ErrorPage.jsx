import React from 'react'
import logo from '/assets/logo.png'

const ErrorPage = () => {
    return (
        <div>
            <div className="container p-5 text-center">
                <div>
                    <img src={logo} width={'200px'}/>
                    <h2 className="heading2 py-3">404 - The page is not here.</h2>
                    <p className="subheading2">Oops! The page you are looking for does not exist.<br />
                        It might have been moved or deleted.</p>
                    
                </div>
            </div>
        </div>
    )
}

export default ErrorPage