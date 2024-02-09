import React from 'react'
import '../styles/recipe.css'

const Sidebar = () => {
  return (
    <div>
        <div className="box">
              <img src="/assets/autor-sidebar.jpg" width={'100%'} alt="img" />
              <h5 className='heading4 mt-4'>Hi I’m Lesli</h5>
              <p className="subheading4 mb-5">I create simple, delicious recipes that require 10 ingredients or less, one bowl, or 30 minutes or less to prepare.</p>
              <img src="/assets/widget-img.jpg" width={'100%'} alt="img" />
              <h5 className="heading4 mt-5">Follow me</h5>
              <div className='followme'>
                <a href="#">INSTAGRAM</a>
                <a href="#">FACEBOOK</a>
                <a href="#">YOUTUBE</a>
                <a href="#">PINTEREST</a>
              </div>
              <div className="subscribe mt-5">
                <h5 className="heading4">Subscribe to Newsletter</h5>
                <input type="email" placeholder='your email' className='form-control' />
                <button className='btn btn-success mt-3'>SEND</button>
              </div>
              <h5 className="heading4 mt-5">Free Recipe Book</h5>
              <div>
                <img src="/assets/sidebar-img.png" alt="img" />
              </div>
              <div>
                <button className='btn btn-success mt-3'>GET MY E BOOK</button>

              </div>
            </div>
    </div>
  )
}

export default Sidebar