import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import './EdiXualCreationsFooter.css'

function EdiXualCreationsFooter() {
  const logoRef = useRef()

  const links = ["https://www.youtube.com/channel/UCK-C8phxPQ_uFfax-0J4xFA/featured",
                "https://www.instagram.com/edixual/",
                "https://www.facebook.com/pg/edixual/community/?ref=page_internal",
                "https://twitter.com/Edi_Xual"]

  const handleMouseOver = (event) => {
    event.target.previousSibling.style.transform = 'translateX(0)'
    logoRef.current.style.filter = 'brightness(100%)'
  }
  const handleMouseOut = (event) => {
    event.target.previousSibling.style.transform = 'translateX(-100%)'
    logoRef.current.style.filter = 'brightness(80%)'
  }
  const handleLinks = (link) => {
    window.open(link)
  }

  return (
    <footer className='exc-footer'>
      <div className='footer-content'>
        <Link to='/EdiXualCreations'>
          <img ref={logoRef} src={ process.env.PUBLIC_URL + '/images/edixualLogo_White.png' } alt="EdiXual Creations" />
        </Link>
        <div className='footer-links'>
          <div className='footer-link-container'>
            <span></span>
            <p onClick={() => handleLinks(links[0])} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onMouseOut={handleMouseOut}>YOUTUBE</p>
          </div>
          <div className='footer-link-container'>
            <span></span>
            <p onClick={() => handleLinks(links[1])} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>INSTAGRAM</p>
          </div>
          <div className='footer-link-container'>
            <span></span>
            <p onClick={() => handleLinks(links[2])} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>FACEBOOK</p>
          </div>
          <div className='footer-link-container'>
            <span></span>
            <p onClick={() => handleLinks(links[3])} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>TWITTER</p>
          </div>
          <div className='footer-link-container'>
            <span></span>
            <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>CONTACT :  +91 9004949930</p>
          </div>
          <div className='footer-link-container'>
            <span></span>
            <p onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>EMAIL :  edixual@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default EdiXualCreationsFooter
