import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'

import './EdiXualCreationsMobileNavbar.css'

function EdiXualCreationsMobileNavbar(props) {
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

  return (
    <div className='mobile-nav'>
      <Link to='/'>
        HOME
      </Link>
      <Link to='/EdiXualCreations'>
        SERVICES
      </Link>
      <Link to='/EdiXualCreations'>
        WORK
      </Link>
      <Link to='/EdiXualCreations'>
        CONTACT
      </Link>
    </div>
  )
}

export default EdiXualCreationsMobileNavbar
