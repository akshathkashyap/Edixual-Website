import React, { useEffect } from 'react'

import './EXCOriginalsTeachGeography.css'

function EXCOriginalsTeachGeography() {
  const showScanMe =() => {
    const scanMe = document.querySelector('#locationQR p')
    scanMe.style.cssText = 'opacity: 1; transform: translateX(0) translateY(75%)'
  }
  const getWindowWidth = () => {
    if (window.innerWidth < 815) {
      showScanMe()
    }
  }

  useEffect(() => {
    getWindowWidth()
    const locationCard = document.querySelector('#locationCard')
    locationCard.addEventListener('mouseover', showScanMe)
    window.addEventListener('resize', getWindowWidth)
    return () => {
      locationCard.removeEventListener('mouseover', showScanMe)
      window.removeEventListener('resize', getWindowWidth)
    }
  })

  return (
    <div className="flex-container">
      <div id="carAnimationFrame">
        <div id="car">
         <img src={ process.env.PUBLIC_URL + '/images/car.png' } alt="Car" />
        </div>
        <div id="lamps">
         <img id="lamp" src={ process.env.PUBLIC_URL + '/images/lamp.png' } alt="Lamp" />
         <img id="light" src={ process.env.PUBLIC_URL + '/images/light.png' } alt="Light" />
        </div>
        <div id="city">
         <img src="https://www.nicepng.com/png/full/923-9238382_free-png-night-city-silhouette-png-night-city.png" alt="City" />
        </div>
      </div>
      <div id="locationQR">
        <div id="locationCard">
         <img src={ process.env.PUBLIC_URL + '/images/EXCO_Location.png' } alt="Location" />
        </div>
        <p>&#8592; scan me</p>
      </div>
    </div>
  )
}

export default EXCOriginalsTeachGeography
