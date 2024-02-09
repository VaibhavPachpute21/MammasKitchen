import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div>
      <div className="container-fluid contact">
        <div className="row">
          <div className="col-md-6 p-0">
            <div className="box">
              <img src="/assets/home-img-1.jpg" width={'100%'} alt="img" />
            </div>
          </div>
          <div className="col-md-6 p-0 border-left" style={{ backgroundColor: '#D9E5D6', }}>
            <div className="box">
              <div className="content">
                <h3 className="heading2">Get In Touch</h3>
                <p className="subheading2 mb-5">Eum altera facilisis an, unum novum appellantur vis ut, no suas utroque appellantur his. Vim error legere cu, ut amet antiopam mei. Per te utamur erroribus molestiae.</p>
                <p><a className='subheading4' href="mailto:vpachpute22@gmail.com">vpachpute22@gmail.com</a></p>
                <p><a className='subheading4' href="#">+91 12345 67890</a></p>
                <p><a className='subheading4' href="#">Mumbai, IND</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="row topBorder">
          <div className="col-md-6 p-0 order-last order-md-0">
            <div className="box">
              <div className="content">
                <h3 className="heading2">What are you interested in asking?</h3>
                <div className='mt-5'>
                  <form action="">
                    <div><input className='shadow-none' type="text" name='name' placeholder='your name:' /></div>
                    <div><input className='shadow-none mt-3 mb-3' type="text" name='email' placeholder='your email:' /></div>
                    <div><textarea className='shadow-none' type="text" name='email' placeholder='message:' /></div>
                    <button className='btn btn-success mt-3'>SUBMIT</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 border-left p-0 order-1">
            <div className="box">
              <img src="/assets/inner-pages-img.jpg" width={'100%'} height={'100%'} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact