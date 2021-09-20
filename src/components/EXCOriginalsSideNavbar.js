import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import './EXCOriginalsSideNavbar.css'

function EXCOriginalsSideNavbar(props) {
  const links = ["https://www.youtube.com/channel/UCK-C8phxPQ_uFfax-0J4xFA/featured",
                "https://www.instagram.com/edixual/",
                "https://www.facebook.com/pg/edixual/community/?ref=page_internal",
                "https://twitter.com/Edi_Xual"]
  const [navBarOpen, setNavBarOpen] = useState(false)
  const toggleNav = (open) => {
    var navbar = document.querySelector('.navbar')
    var navBtn = document.querySelector('#navBtn')
    if (open) {
      navbar.classList.remove('nav-close')
      navbar.classList.add('nav-open')
      navBtn.innerHTML = '&#9932;'
    } else {
      navbar.classList.remove('nav-open')
      navbar.classList.add('nav-close')
      navBtn.innerHTML = '&#9776;'
    }
  }
  const navBrandLinksHandler = (link) => {
    if (link !== undefined ) {
      window.open(links[link])
    }
    setNavBarOpen(!navBarOpen)
  }
  const disableScroll = (disable) => {
    var body = document.getElementsByTagName("BODY")[0]
    if (disable) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }
  }
  useEffect(() => {
    toggleNav(navBarOpen)
    disableScroll(navBarOpen)
  })

  return (
    <div className="navbar nav-close">
      <div className="open-nav">
        <button id="navBtn" onClick={() => setNavBarOpen(!navBarOpen)}>&#9776;</button>
      </div>
      <nav>
        <Link to='/EXCOriginals/WhoAreWe' onClick= {() => navBrandLinksHandler()}>
          <h1 id="who_are_we" className="nav-title">WHO ARE WE?</h1>
        </Link>
        <Link to='/EXCOriginals/WhatHaveWeDone' onClick= {() => navBrandLinksHandler()}>
          <h1 id="what_have_we_done" className="nav-title">WHAT HAVE WE DONE?</h1>
        </Link>
        <Link to='/EXCOriginals/HowToReachUs' onClick= {() => navBrandLinksHandler()}>
          <h1 id="how_to_reach_us" className="nav-title">HOW TO REACH US?</h1>
        </Link>
        <Link to='/EXCOriginals/ComingUpNext' onClick= {() => navBrandLinksHandler()}>
          <h1 id="coming_up_next" className="nav-title">COMING UP NEXT!</h1>
        </Link>
        <div className="nav-brand-links">
          <img id="youtube" src={ process.env.PUBLIC_URL + '/images/youtube.png' } alt="YouTube" onClick= {() => navBrandLinksHandler(0)} />
          <img id="instagram" src={ process.env.PUBLIC_URL + '/images/instagram.png' } alt="Instagram" onClick= {() => navBrandLinksHandler(1)} />
          <img id="facebook" src={ process.env.PUBLIC_URL + '/images/facebook.png' } alt="Facebook" onClick= {() => navBrandLinksHandler(2)} />
          <img id="twitter" src={ process.env.PUBLIC_URL + '/images/twitter.png' } alt="Twitter" onClick= {() => navBrandLinksHandler(3)} />
        </div>
      </nav>
    </div>
  )
}

export default EXCOriginalsSideNavbar
