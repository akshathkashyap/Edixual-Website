import React, { useEffect } from 'react'
import EdiXualCreationsNavbar from './EdiXualCreationsNavbar'
import EdiXualCreationsPageHeading from './EdiXualCreationsPageHeading'
import EdiXualCreationsPageInfo from './EdiXualCreationsPageInfo'

function EdiXualCreations(props) {
  var path = props.match.path

  useEffect(() => {
    document.title = 'EdiXual Creations'
  })

  return (
    <>
    <EdiXualCreationsNavbar path={path} />
    <EdiXualCreationsPageHeading path={path} />
    <EdiXualCreationsPageInfo path={path} />
    </>
  )
}

export default EdiXualCreations
