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
  const parallaxScrollHandler = () => {
    const parallaxLayers = document.querySelectorAll('.parallax-layer')
    const pixelsScrolled = window.pageYOffset
    const perspective = 0.12
    parallaxLayers.forEach((layer, i) => {
      layer.style.transform = `translateY(${pixelsScrolled * (1 - (perspective * (parallaxLayers.length - 1 - i)))}px)`
    })
  }
  const activateMobile = () => {
    const parallax = document.querySelector('.parallax')
    const parallaxLayers = document.querySelectorAll('.parallax-layer')
    if (window.innerWidth <= 815) {
      parallaxLayers.forEach((layer, i) => {
        layer.style.display = 'none'
      })
      parallax.style.backgroundImage = `url('${process.env.PUBLIC_URL + '/images/parallaxBackground.jpg'}')`
      window.removeEventListener('scroll', parallaxScrollHandler)
    } else {
      parallaxLayers.forEach((layer, i) => {
        layer.style.display = 'block'
      })
      parallax.style.backgroundImage = `none`
      window.addEventListener('scroll', parallaxScrollHandler)
    }
  }

  useEffect(() => {
    activateMobile()
    window.addEventListener('resize', activateMobile)
    return () => {
      window.removeEventListener('resize', activateMobile)
      window.removeEventListener('scroll', parallaxScrollHandler)
    }
  })

  return (
    <div className="parallax">
      <img id="layer0" className="parallax-layer" src={ process.env.PUBLIC_URL + '/images/parallaxLayer0.png' } alt="Parallax Layer" />
      <img id="layer1" className="parallax-layer" src={ process.env.PUBLIC_URL + '/images/parallaxLayer1.png' } alt="Parallax Layer" />
      <img id="layer2" className="parallax-layer" src={ process.env.PUBLIC_URL + '/images/parallaxLayer2.png' } alt="Parallax Layer" />
      <img id="layer3" className="parallax-layer" src={ process.env.PUBLIC_URL + '/images/parallaxLayer3.png' } alt="Parallax Layer" />
      <img id="layer4" className="parallax-layer" src={ process.env.PUBLIC_URL + '/images/parallaxLayer4.png' } alt="Parallax Layer" />
      <img id="layer5" className="parallax-layer" src={ process.env.PUBLIC_URL + '/images/parallaxLayer5.jpg' } alt="Parallax Layer" />
      <Link to='/EXCOriginals'>
        <img src={ process.env.PUBLIC_URL + '/images/excoLogo_White.png' } alt="EXC Originals" />
      </Link>
      <Link id="home" to='/'>HOME</Link>
      <button id="exploreBtn" onClick={scrollToExplore}>EXPLORE</button>
    </div>
  )
}

export default EXCOriginalsParallax
