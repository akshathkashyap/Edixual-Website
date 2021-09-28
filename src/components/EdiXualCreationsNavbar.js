import React, { useState, useEffect } from 'react'
import EdiXualCreationsMobileNavbar from './EdiXualCreationsMobileNavbar'
import { Link } from 'react-router-dom'

import './EdiXualCreationsNavbar.css'

function EdiXualCreationsNavbar(props) {
  var path = props.path.slice(18)
  const [navbar, setNavbar] = useState('desktop')
  const paths = ['', '', 'services', 'work', 'contact']

  const selectNav = () => {
    window.innerWidth <= 815 ? setNavbar('mobile') : setNavbar('desktop')
  }
  const fireClickEvent = () => {
    const index = paths.indexOf(path)
    document.querySelectorAll('.navbar-li a').forEach((link, i) => {
      if (i === index) {
        link.click()
      }
    })
  }
  const clickHandler = (event) => {
    const navLinks = document.querySelectorAll('.navbar-li a')
    navLinks.forEach((link, i) => {
      if (i >= 2) {
        if (link === event.target) {
          link.style.transform = 'translateY(calc(50px + 0.5rem))'
        } else {
          link.style.transform = 'translateY(0)'
        }
      }
    })
  }

  useEffect(() => {
    selectNav()
    window.addEventListener('resize', selectNav)
    return () => {
      window.removeEventListener('resize', selectNav)
    }
  })
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-li a')
    navLinks.forEach((link, i) => {
      link.addEventListener('click', clickHandler)
    })
    return () => {
      navLinks.forEach((link, i) => {
        link.removeEventListener('click', clickHandler)
      })
    }
  })
  useEffect(() => {
    if (path.length !== 0) {fireClickEvent()}
  }, [])

  return (
    <>
    <nav>
      <ul>
        <li className='navbar-li logo'>
          <Link to='/EdiXualCreations'>
            <img src={ process.env.PUBLIC_URL + '/images/edixualLogo_White.png' } alt="EdiXual Creations" />
          </Link>
        </li>
        <li className='navbar-li'>
          <Link to='/'>
            HOME
          </Link>
        </li>
        <li className='navbar-li'>
          <Link to='/EdiXualCreations/services'>
            SERVICES
          </Link>
        </li>
        <li className='navbar-li'>
          <Link to='/EdiXualCreations/work'>
            WORK
          </Link>
        </li>
        <li className='navbar-li'>
          <Link to='/EdiXualCreations/contact'>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
    {navbar === 'mobile' ? <EdiXualCreationsMobileNavbar path={props.path} /> : ''}
    </>
  )
}

export default EdiXualCreationsNavbar
