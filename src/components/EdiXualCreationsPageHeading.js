import React, { useState, useEffect } from 'react'

import './EdiXualCreationsPageHeading.css'

function EdiXualCreationsPageHeading(props) {
  const [path, setPath] = useState('')
  const paths = ['', '', 'services', 'work', 'contact']

  const showTitle = () => {
    const index = paths.indexOf(path)
    const pageHeadingTitles = document.querySelectorAll('.page-heading .title')
    pageHeadingTitles.forEach((title, i) => {
      if (i === (index - 2)) {
        title.style.transform = 'translateY(0)'
      } else {
        title.style.transform = 'translateY(calc(-100% - 1.5rem))'
      }
    })
  }
  const changePath = () => {
    setPath(props.path.slice(18))
    showTitle()
  }

  useEffect(() => {
    changePath()
  })

  return (
    <div className='page-heading'>
      <h1 className= 'title'>Services</h1>
      <h1 className= 'title'>Work</h1>
      <h1 className= 'title'>Contact</h1>
    </div>
  )
}

export default EdiXualCreationsPageHeading
