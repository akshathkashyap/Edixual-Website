import React, { useEffect } from 'react'
import EdiXualCreationsNavbar from './EdiXualCreationsNavbar'

function EdiXualCreations() {
  useEffect(() => {
    document.title = 'EdiXual Creations'
  })
  return (
    <EdiXualCreationsNavbar />
  )
}

export default EdiXualCreations
