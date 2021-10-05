import React from 'react'

import './EdiXualCreationsPIDCard.css'

function EdiXualCreationsPIDCard(props) {
  const headings = ["List of our Clients", "Graphic designing, Illustrations", "Editing", "GIFs"]
  const headingIndex = headings.indexOf(props.heading)
  const gdiData = [
    {
      "title": "Graphic designing project",
      "details": "I was a project done for company 1",
      "link": "View Project",
      "linkTo": "https://www.edixual.com/",
      "imgName": "aboutUs",
    },
    {
      "title": "Illustration project",
      "details": "I was a project done for company 2",
      "link": "View Project",
      "linkTo": "https://www.edixual.com/",
      "imgName": "aboutUs",
    },
    {
      "title": "Illustration project",
      "details": "I was a project done for company 3",
      "link": "View Project",
      "linkTo": "https://www.edixual.com/",
      "imgName": "aboutUs",
    },
    {
      "title": "Graphic designing project",
      "details": "I was a project done for company 4",
      "link": "View Project",
      "linkTo": "https://www.edixual.com/",
      "imgName": "aboutUs",
    },
  ]
  const linkHandler = (link) => {
    console.log(link)
  }

  if (headingIndex === 1) {
    return (
      <div className="pid-card-container">
        {
          gdiData.map((gdi) => {
            return (
              <div key={gdi.title} className='card'>
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
        <div className='card-container-btn expand'><span></span><span></span></div>
      </div>
    )
  }
  return (
    <div>404</div>
  )
}

export default EdiXualCreationsPIDCard
