import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './EdiXualCreationsMobileNavbar.css'

function EdiXualCreationsMobileNavbar(props) {
  var path = props.path.slice(18)
  const paths = ['', '', 'services', 'work', 'contact']

  const clickHandler = (event) => {
    const navLinks = document.querySelectorAll('.mobile-nav a')
    navLinks.forEach((link, i) => {
      if (link === event.target) {
        link.style.color = 'var(--danger-color)'
      } else {
        link.style.color = 'var(--primary-text-color)'
      }
    })
  }
  const fireClickEvent = () => {
    const index = paths.indexOf(path)
    document.querySelectorAll('.mobile-nav a').forEach((link, i) => {
      if (i === (index - 1)) {
        link.click()
      }
    })
  }

  useEffect(() => {
    const navLinks = document.querySelectorAll('.mobile-nav a')
    const logo = document.querySelector('.logo a')
    logo.addEventListener('click', clickHandler)
    navLinks.forEach((link, i) => {
      link.addEventListener('click', clickHandler)
    })
    return () => {
      navLinks.forEach((link, i) => {
        link.removeEventListener('click', clickHandler)
      })
      logo.removeEventListener('click', clickHandler)
    }
  })
  useEffect(() => {
    if (path.length !== 0) {fireClickEvent()}
  }, [])

  return (
    <div className='mobile-nav'>
      <Link to='/'>
        HOME
      </Link>
      <Link to='/EdiXualCreations/services'>
        SERVICES
      </Link>
      <Link to='/EdiXualCreations/work'>
        WORK
      </Link>
      <Link to='/EdiXualCreations/contact'>
        CONTACT
      </Link>
    </div>
  )
}

export default EdiXualCreationsMobileNavbar
