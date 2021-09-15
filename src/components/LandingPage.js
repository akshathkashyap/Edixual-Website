import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  useEffect(() => {
   document.title = "EdiXual"
  })
  return (
    <div className="flex-container">
      <div className="logo-container">
        <Link to='/'>
          <img id="logoFirst" src={ process.env.PUBLIC_URL + '/images/edixualLogo_White.png' } alt="EdiXual Creations" />
        </Link>
      </div>
      <div className="logo-container">
        <Link to='/EXCOriginals'>
          <img id="logoSecond" src={ process.env.PUBLIC_URL + '/images/excoLogo_White.png' } alt="EXC Originals" />
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
