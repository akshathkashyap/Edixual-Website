import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import EXCOriginalsParallax from './EXCOriginalsParallax'
import EXCOriginalsDirector from './EXCOriginalsDirector'
import EXCOriginalsClients from './EXCOriginalsClients'
import EXCOriginalsSectionTitle from './EXCOriginalsSectionTitle'

import './EXCOriginalsPageContent.css'

function EXCOriginalsPageContent(props) {

  if (props.path === '/EXCOriginals') {
    return (
      <>
        <EXCOriginalsParallax />
        <div className="page-container">
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
      </div>
      <EXCOriginalsSectionTitle path = { props.path } />
    </>
  )
}

export default EXCOriginalsPageContent
