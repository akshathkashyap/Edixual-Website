import React, { useState, useRef, useEffect} from 'react'

import './EdiXualCreationsPIDCard.css'

function EdiXualCreationsPIDCard(props) {
  const headings = ["Graphic designing, Illustrations", "Editing", "GIFs"]
  const headingIndex = headings.indexOf(props.heading)
  const gdiData = [
    {
      "title": "Graphic designing",
      "details": "Custom graphic design for Kajal Mahajan, Social media Influencer",
      "link": "View Project",
      "linkTo": "https://www.edixual.com/EdiXualCreations/work",
      "imgName": "graphics_hero",
    },
    {
      "title": "Illustration",
      "details": "An Illustrationm made for Chirag Havelia, Director - Havelia Ventures Pvt Ltd",
      "link": "View Project",
      "linkTo": "https://www.edixual.com/EdiXualCreations/work",
      "imgName": "illustrations_hero",
    },
  ]
  const editingData = [
    {
      "title": "Video Editing",
      "details": "Company anual showreel for 2020",
      "link": "View Project",
      "linkTo": "https://www.youtube.com/watch?v=VxQDE5-JgTA",
      "imgName": "editing1_hero",
    },
    {
      "title": "Photo Editing",
      "details": "Photo edit for thumbnail for a youtube video",
      "link": "View Project",
      "linkTo": "https://www.instagram.com/edixual/p/B-zHeernRJb/?utm_medium=copy_link",
      "imgName": "editing2_hero",
    },
  ]
  const gifData = [
    {
      "title": "GIF",
      "details": "I was a project done for company 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      "link": "View Project",
      "linkTo": "https://www.edixual.com/EdiXualCreations/work",
      "imgName": "graphics_hero",
    },
    {
      "title": "Good GIF",
      "details": "I was a project done for company 2. Lorem ipsum dolor sit amet, consectetur adipiscing.",
      "link": "View Project",
      "linkTo": "https://www.edixual.com/EdiXualCreations/work",
      "imgName": "graphics_hero",
    },
  ]

  const linkHandler = (link) => {
    window.open(link)
  }
  const serviceHandler = (service) => {
    window.open("https://www.edixual.com/EdiXualCreations/work")
  }

  if (headingIndex === 0) {
    return (
      <div className="pid-card-container">
        {
          gdiData.map((gdi, index) => {
            return (
              <div key={`${gdi.title}${index}`} className='card'>
                <div className='card-title'>{gdi.title}</div>
                <div className='card-image'>
                  <img src={ process.env.PUBLIC_URL + `/images/album/EdiXualCreationsWork/${gdi.imgName}.jpg` } alt="Card Image" />
                </div>
                <div className='card-details'>{gdi.details}</div>
                <div className='card-link'>
                  <button onClick={() => linkHandler(gdi.linkTo)}>{gdi.link}</button>
                </div>
              </div>
            )
          })
        }
        <div onclick={() => serviceHandler(0)} className='card-container-btn'>
          <div className='dot-dot-dot'>
            <span></span><span></span><span></span>
            <div className='btn-tooltip'>View All</div>
          </div>
        </div>
      </div>
    )
  } else if (headingIndex === 1) {
    return (
      <div className="pid-card-container">
        {
          editingData.map((editing, index) => {
            return (
              <div key={`${editing.title}${index}`} className='card'>
                <div className='card-title'>{editing.title}</div>
                <div className='card-image'>
                  <img src={ process.env.PUBLIC_URL + `/images/album/EdiXualCreationsWork/${editing.imgName}.jpg` } alt="Card Image" />
                </div>
                <div className='card-details'>{editing.details}</div>
                <div className='card-link'>
                  <button onClick={() => linkHandler(editing.linkTo)}>{editing.link}</button>
                </div>
              </div>
            )
          })
        }
        <div onclick={() => serviceHandler(1)} className='card-container-btn'>
          <div className='dot-dot-dot'>
            <span></span><span></span><span></span>
            <div className='btn-tooltip'>View All</div>
          </div>
        </div>
      </div>
    )
  } else if (headingIndex === 2) {
    return (
      <div className="pid-card-container">
        {
          gifData.map((gif, index) => {
            return (
              <div key={`${gif.title}${index}`} className='card'>
                <div className='card-title'>{gif.title}</div>
                <div className='card-image'>
                  <img src={ process.env.PUBLIC_URL + `/images/album/EdiXualCreationsWork/${gif.imgName}.jpg` } alt="Card Image" />
                </div>
                <div className='card-details'>{gif.details}</div>
                <div className='card-link'>
                  <button onClick={() => linkHandler(gif.linkTo)}>{gif.link}</button>
                </div>
              </div>
            )
          })
        }
        <div onclick={() => serviceHandler(2)} className='card-container-btn'>
          <div className='dot-dot-dot'>
            <span></span><span></span><span></span>
            <div className='btn-tooltip'>View All</div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>404</div>
  )
}

export default EdiXualCreationsPIDCard
