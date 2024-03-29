import React from 'react'
import logo from '/assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: "#dde7d8" }}>
                <div className="container-fluid topBorder" >
                    <footer>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={logo} width={'200px'} />
                                <div className="row pt-5">
                                    <div className="col-md-3">
                                        <a href="#">INSTAGRAM</a>
                                        <a href="#">FACEBOOK</a>
                                        <a href="#">YOUTUBE</a>
                                        <a href="#">PINTEREST</a>
                                    </div>
                                    <div className="col-md-3">
                                        <Link to={'/'}>HOME</Link>
                                        <Link to={'/recipies'}>RECEPIES</Link>
                                        <Link to={'/about'}>ABOUT</Link>
                                        <Link to={'/contact'}>CONTACT</Link>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">PODCAST</a>
                                        <a href="#">APP</a>
                                        <a href="#">STORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 border-left">
                                <div className="info">
                                    <h3 className='heading2'>Subscribe to Newsletter</h3>
                                    <p className='subheading1'>Be the first to receive the latest news on upcoming posts & more.</p>
                                    <div  className="input-group mt-5 w-75">
                                        <input type="text"  className="form-control" placeholder="your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button  className="btn btn-outline-secondary" type="button" id="button-addon2">SEND</button>
                                    </div>
                                    <p className='copyright-text'>© 2024 Qode Interactive, All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer