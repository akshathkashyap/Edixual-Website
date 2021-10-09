import React, { useEffect } from 'react'

import './EXCOriginalsDirector.css'

function EXCOriginalsDirector() {
  const handleMouseOver = (img, secTitle, p1, p2) => {
    img.style.filter = 'grayscale(0)'
    secTitle.style.color = 'var(--primary-text-color)'
    p1.style.cssText = 'transform: translateX(0); opacity: 1'
    p2.style.cssText = 'transform: translateX(0); opacity: 1'
  }
  const handleMouseOut = (img, secTitle) => {
    secTitle.style.color = 'var(--secondary-text-color)'
  }
  const scrollHandler = () => {
    var img = document.querySelector('.img-wrapper img')
    var secTitle = document.querySelector('.director .section-title')
    var p1 = document.querySelector('.director-img-container p')
    var p2 = document.querySelector('.director-about-container p')
    var director = document.querySelector('.director .section-title')
    var directorTop = director.getBoundingClientRect().top
    if (directorTop <= (window.innerHeight / 3)) {
      handleMouseOver(img, secTitle, p1, p2)
      document.removeEventListener('scroll', scrollHandler)
    }
  }
  useEffect(() => {
    var img = document.querySelector('.img-wrapper img')
    var secTitle = document.querySelector('.director .section-title')
    var p1 = document.querySelector('.director-img-container p')
    var p2 = document.querySelector('.director-about-container p')

    img.addEventListener('mouseover', () => handleMouseOver(img, secTitle, p1, p2))
    img.addEventListener('mouseout', () => handleMouseOut(img, secTitle))

    return () => {
      img.removeEventListener('mouseover', handleMouseOver)
      img.removeEventListener('mouseout', handleMouseOut)
    }
  })
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  })

  return (
    <div className="director section-container">
      <h1 className="section-title">director</h1>
      <div className="director-img-container">
        <p>aniket sritava	&#8594;</p>
        <div className="img-wrapper">
          <img src={ process.env.PUBLIC_URL + '/images/director.jpg' } alt="Aniket Sritava" />
        </div>
      </div>
      <div className="director-about-container">
        <p>Aniket Sritava has been the strongest pillar on which EdiXual was built on. With his inertly inquisitive mind, he has managed to excel in a wide range of skills. When asked how he manages to do all that, he says<br /><br /><strong>“I’m just trying to create a movie called LIFE.”</strong></p>
      </div>
    </div>
  )
}

export default EXCOriginalsDirector
