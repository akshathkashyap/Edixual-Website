import React, { useEffect } from 'react'
import EdiXualCreationsNavbar from './EdiXualCreationsNavbar'
import EdiXualCreationsPageHeading from './EdiXualCreationsPageHeading'

function EdiXualCreations(props) {

  useEffect(() => {
    document.title = 'EdiXual Creations'
  })

  return (
    <>
    <EdiXualCreationsNavbar path={props.match.path} />
    <EdiXualCreationsPageHeading path={props.match.path} />
    </>
  )
}

export default EdiXualCreations
