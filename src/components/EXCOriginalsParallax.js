import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './EXCOriginalsParallax.css'

function EXCOriginalsParallax() {
  const scrollToExplore = () => {
    var targetPosition = document.getElementsByClassName('parallax')[0].offsetHeight
    var startPosition = window.pageYOffset
    var distance = targetPosition - startPosition
    var startTime = null
    var duration = 3000

    const animation = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime
      }
      var timeElapsed = currentTime - startTime
      var run = easeOut(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    const easeOut = (t, b, c, d) => {
      t /= d
	    t--
	    return c*(t*t*t + 1) + b
    }

    requestAnimationFrame(animation)
  }

  useEffect(() => {
    const parallax = document.querySelector('.parallax')
    parallax.style.backgroundImage = `url('${process.env.PUBLIC_URL + '/images/parallaxBackground.jpg'}')`
  })

  return (
    <div className="parallax">
      <Link to='/EXCOriginals'>
        <img src={ process.env.PUBLIC_URL + '/images/excoLogo_White.png' } alt="EXC Originals" />
      </Link>
      <Link id="home" to='/'>HOME</Link>
      <button id="exploreBtn" onClick={scrollToExplore}>EXPLORE</button>
    </div>
  )
}

export default EXCOriginalsParallax
