import React, { useState, useRef, useEffect } from 'react'

import './EdiXualCreationsPageHeading.css'

function EdiXualCreationsPageHeading(props) {
  const [path, setPath] = useState('')
  const pageHeadingRef = useRef()
  const paths = ['', 'services', 'work', 'contact']

  const showTitle = () => {
    const index = paths.indexOf(path)
    const pageHeadingTitles = document.querySelectorAll('.page-heading .title')
    pageHeadingTitles.forEach((title, i) => {
      if (i === (index)) {
        title.style.transform = 'translateY(0)'
        pageHeadingRef.current.style.height = `calc(${title.getBoundingClientRect().height}px + 1rem)`
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
    const titles = document.querySelectorAll('.title')
    titles.forEach((title, i) => {
      title.style.backgroundImage = `url('${process.env.PUBLIC_URL}/images/textBackground${i}.jpg')`
    })
  }, [])
  useEffect(() => {
    changePath()
  })

  return (
    <div ref={pageHeadingRef} className='page-heading'>
      <h1 className= 'title'>Editing Visuals & Creating Memories</h1>
      <h1 className= 'title'>Services</h1>
      <h1 className= 'title'>Work</h1>
      <h1 className= 'title'>Contact</h1>
    </div>
  )
}

export default EdiXualCreationsPageHeading
