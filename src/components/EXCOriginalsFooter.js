import React from 'react'
import { Link } from 'react-router-dom'

import './EXCOriginalsFooter.css'

function EXCOriginalsFooter() {

  return (
    <footer className="exco-footer">
      <div className="footer-logo">
        <Link to='/EXCOriginals'>
          <img src={ process.env.PUBLIC_URL + '/images/excoLogo_White.png' } alt="EXC Originals" />
        </Link>
      </div>
      <div className="footer-info">
        <div className="info">
          <h1>CONTACT</h1>
          <p>+91 9004949930</p>
        </div>
        <div className="info">
          <h1>E-MAIL</h1>
          <p>edixual@gmail.com</p>
        </div>
        <div className="info">
          <h1>NEWSLETTER</h1>
          <p>Website is is still in the soft launch phase, so there might be some hiccups...</p>
          <p>Checkout Sush and Yohan Year End Mashup in COMING UP NEXT page.</p>
        </div>
        <div className="info">
          <h1>SERVICES</h1>
          <p>Want to work with us?</p>
          <Link to='/EXCOriginals/HowToReachUs'>Yeah!</Link>
        </div>
      </div>
    </footer>
  )
}

export default EXCOriginalsFooter
