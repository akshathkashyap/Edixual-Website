import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './EXCOriginalsFooter.css'

function EXCOriginalsFooter() {
  const clickHandler = () => {
    window.open("https://docs.google.com/forms/d/1LS1xK-xFW83euMCg0f2YqMPj-i54Jvj1-_czP595now/edit")
  }

  return (
    <footer>
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
          <p>Website is soon to become fully functional.</p>
          <p>Loop Lapeta behind the scenes now streaming. Checkout our WHAT"S COMING UP! page to learn more.</p>
        </div>
        <div className="info">
          <h1>FEEDBACK</h1>
          <p>Worked with us before?</p>
          <p>Give us your valuable feedback.</p>
          <button onClick={clickHandler}>give my feedback</button>
        </div>
      </div>
    </footer>
  )
}

export default EXCOriginalsFooter
