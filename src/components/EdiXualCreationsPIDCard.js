import React, { useState, useRef, useEffect} from 'react'

import './EdiXualCreationsPIDCard.css'

function EdiXualCreationsPIDCard(props) {
  const headings = ["List of our Clients", "Graphic designing, Illustrations", "Editing", "GIFs"]
  const headingIndex = headings.indexOf(props.heading)
  const gdiData = [
    {
      "title": "Graphic designing project",
      "details": "I was a project done for company 1.",
      "link": "View Project",
      "linkTo": "https://www.edixual.com/",
      "imgName": "aboutUs_title",
    },
    {
      "title": "Illustration project",
      "details": "I was a project done for company 2",
      "link": "View Project",
      "linkTo": "https://www.edixual.com/",
      "imgName": "aboutUs_title",
    },
    {
      "title": "Illustration project",
      "details": "I was a project done for company 3",
      "link": "View Project",
      "linkTo": "https://www.edixual.com/",
      "imgName": "aboutUs_title",
    },
    {
      "title": "Graphic designing project",
      "details": "I was a project done for company 4",
      "link": "View Project",
      "linkTo": "https://www.edixual.com/",
      "imgName": "aboutUs_title",
    },
  ]
  const [expand, setExpand] = useState(false)
  const cardsContainerRef = useRef()
  const cardContainerHeightRef = useRef({height: 0})
  const cardRef = useRef()
  const expandBtnRef = useRef()
  const linkHandler = (link) => {
    console.log(link)
  }
  const clickHandler = () => {
    expandBtnRef.current.removeEventListener('click', clickHandler)
    setExpand(true)
    if (!(expandBtnRef.current.classList.contains('expand'))) {
      expandBtnRef.current.classList.add('expand')
    }
  }
  useEffect(() => {
    let cardContainerHeight = cardsContainerRef.current.getBoundingClientRect().height
    if (cardContainerHeightRef.current.height <= cardContainerHeight) {
      cardContainerHeightRef.current.height = cardContainerHeight
    }
  })
  useEffect(() => {
    let cardHeight = cardRef.current.getBoundingClientRect().height
    if (!expand) {
      cardsContainerRef.current.style.maxHeight = `calc(${cardHeight}px + 5.5rem)`
    } else {
      cardsContainerRef.current.style.maxHeight = `${cardContainerHeightRef.current.height}px`
    }
  })
  useEffect(() => {
    expandBtnRef.current.addEventListener('click', clickHandler)
  }, [])

  if (headingIndex === 1) {
    return (
      <div ref={cardsContainerRef} className="pid-card-container">
        {
          gdiData.map((gdi, index) => {
            return (
              <div ref={index === 0 ? cardRef : null} key={`${gdi.title}${index}`} className='card'>
                <div className='card-title'>{gdi.title}</div>
                <div className='card-image'>
                  <img src={ process.env.PUBLIC_URL + `/images/${gdi.imgName}.jpg` } alt="Card Image" />
                </div>
                <div className='card-details'>{gdi.details}</div>
                <div className='card-link'>
                  <button onClick={() => linkHandler(gdi.linkTo)}>{gdi.link}</button>
                </div>
              </div>
            )
          })
        }
        <div ref={expandBtnRef} className='card-container-btn'><span></span><span></span></div>
      </div>
    )
  }
  return (
    <div>404</div>
  )
}

export default EdiXualCreationsPIDCard
