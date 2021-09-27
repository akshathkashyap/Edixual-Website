<<<<<<< HEAD
import React, { useEffect } from 'react'
import EXCOriginalsSideNavbar from './EXCOriginalsSideNavbar'
import EXCOriginalsFooter from './EXCOriginalsFooter'
import EXCOriginalsPageContent from './EXCOriginalsPageContent'


import './EXCOriginals.css'

function EXCOriginals(props) {
  var path = props.match.path
  useEffect(() => {
    document.title = "EXC Originals"
    path = props.match.path
  })
  return (
    <>
      <EXCOriginalsSideNavbar />
      <EXCOriginalsPageContent path= {path}/>
      <EXCOriginalsFooter />
    </>
  )
}

export default EXCOriginals
=======
import React, { useEffect } from 'react'
import EXCOriginalsSideNavbar from './EXCOriginalsSideNavbar'
import EXCOriginalsFooter from './EXCOriginalsFooter'
import EXCOriginalsPageContent from './EXCOriginalsPageContent'


import './EXCOriginals.css'

function EXCOriginals(props) {
  var path = props.match.path
  useEffect(() => {
    document.title = "EXC Originals"
    path = props.match.path
  })
  return (
    <>
      <EXCOriginalsSideNavbar />
      <EXCOriginalsPageContent path= {path}/>
      <EXCOriginalsFooter />
    </>
  )
}

export default EXCOriginals
>>>>>>> 007c24cc64b54c59379ea99b5f4153d877839866
