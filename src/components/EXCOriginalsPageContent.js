import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EXCOriginalsParallax from './EXCOriginalsParallax'
import EXCOriginalsDirector from './EXCOriginalsDirector'
import EXCOriginalsClients from './EXCOriginalsClients'
import EXCOriginalsSectionTitle from './EXCOriginalsSectionTitle'

import './EXCOriginalsPageContent.css'

function EXCOriginalsPageContent(props) {
  const clickHandler = () => {
    var navbar = document.querySelector('.navbar')
    var navBtn = document.querySelector('#mobileNavBtn')
    if (navbar.classList.contains('nav-close')) {
      navbar.classList.remove('nav-close')
      navbar.classList.add('nav-open')
      navBtn.innerHTML = '&#9932;'
      disableScroll(true)
    } else {
      navbar.classList.remove('nav-open')
      navbar.classList.add('nav-close')
      navBtn.innerHTML = '&#9776;'
      disableScroll(false)
    }
  }
  const disableScroll = (disable) => {
    var body = document.getElementsByTagName("BODY")[0]
    if (disable) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }
  }

  if (props.path === '/EXCOriginals') {
    return (
      <>
        <EXCOriginalsParallax />
        <div className="page-container">
          <button id="mobileNavBtn" onClick={ clickHandler }>&#9776;</button>
          <EXCOriginalsDirector />
          <EXCOriginalsClients />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="top-nav">
        <Link to='/EXCOriginals'>
          <img src={ process.env.PUBLIC_URL + '/images/excoLogo_White.png' } alt="EXC Originals" />
        </Link>
        <Link id="home" to='/'>HOME</Link>
        <button id="mobileNavBtn" onClick={ clickHandler }>&#9776;</button>
      </div>
      <EXCOriginalsSectionTitle path = { props.path } />
    </>
  )
}

export default EXCOriginalsPageContent
