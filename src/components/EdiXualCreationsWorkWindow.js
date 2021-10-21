import React from 'react'

import './EdiXualCreationsWorkWindow.css'

function EdiXualCreationsWorkWindow(props) {
  const slideNumber = props.slide
  const slideData = [
    [
      {
        "title": "Graphic designing project",
        "details": "I was a project done for company 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "link": "View Project",
        "linkTo": "https://www.edixual.com/",
        "imgName": "aboutUs_title",
      },
      {
        "title": "Illustration project",
        "details": "I was a project done for company 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "link": "View Project",
        "linkTo": "https://www.edixual.com/",
        "imgName": "aboutUs_title",
      },
      {
        "title": "Illustration project",
        "details": "I was a project done for company 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        "link": "View Project",
        "linkTo": "https://www.edixual.com/",
        "imgName": "aboutUs_title",
      },
      {
        "title": "Graphic designing project",
        "details": "I was a project done for company 4. Lorem ipsum dolor sit amet.",
        "link": "View Project",
        "linkTo": "https://www.edixual.com/",
        "imgName": "aboutUs_title",
      },
    ],
    [
      {
        "title": "Editing project",
        "details": "I was a project done for company 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "link": "View Project",
        "linkTo": "https://www.edixual.com/",
        "imgName": "aboutUs_title",
      },
      {
        "title": "Editing project",
        "details": "I was a project done for company 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "link": "View Project",
        "linkTo": "https://www.edixual.com/",
        "imgName": "aboutUs_title",
      },
      {
        "title": "Editing project",
        "details": "I was a project done for company 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "link": "View Project",
        "linkTo": "https://www.edixual.com/",
        "imgName": "aboutUs_title",
      },
      {
        "title": "Editing project",
        "details": "I was a project done for company 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
        "link": "View Project",
        "linkTo": "https://www.edixual.com/",
        "imgName": "aboutUs_title",
      },
      {
        "title": "Editing project",
        "details": "I was a project done for company 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
        "link": "View Project",
        "linkTo": "https://www.edixual.com/",
        "imgName": "aboutUs_title",
      },
      {
        "title": "Editing project",
        "details": "I was a project done for company 7.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "link": "View Project",
        "linkTo": "https://www.edixual.com/",
        "imgName": "aboutUs_title",
      },
    ],
    [
      {
        "title": "GIF",
        "details": "I was a project done for company 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        "link": "View Project",
        "linkTo": "https://www.edixual.com/",
        "imgName": "aboutUs_title",
      },
      {
        "title": "Good GIF",
        "details": "I was a project done for company 2. Lorem ipsum dolor sit amet, consectetur adipiscing.",
        "link": "View Project",
        "linkTo": "https://www.edixual.com/",
        "imgName": "aboutUs_title",
      },
      {
        "title": "GIF about something",
        "details": "I was a project done for company 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
        "link": "View Project",
        "linkTo": "https://www.edixual.com/",
        "imgName": "aboutUs_title",
      },
    ],
  ]

  const linkHandler = (link) => {
    window.open(link)
  }

  return (
    <div className='slide-info'>
      {
        slideData[slideNumber].map((project, index) => {
          return (
            <div key={`${project}${index}`} className='slide-project'>
              <h1 className='project-title'>{project.title}</h1>
              <div className='project-layout'>
                <img src={ process.env.PUBLIC_URL + `/images/${project.imgName}.jpg` } alt="Project" />
                <div className='project-details'>
                  <p>{project.details}</p>
                  <button onClick={() => linkHandler(project.linkTo)}>{project.link}</button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default EdiXualCreationsWorkWindow
