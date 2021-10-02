import React from 'react'

import './EdiXualCreationsPIDCard.css'

function EdiXualCreationsPIDCard(props) {
  const headings = ["List of our Clients", "Graphic designing, Illustrations", "Editing", "GIFs"]
  const headingIndex = headings.indexOf(props.heading)
  const clientData = [
    {
      "title": "client1",
      "gotInfo": false,
      "info": "",
      "link": "Visit Website",
      "linkTo": "https://www.edixual.com/",
      "imgName": "aboutUs",
    },
    {
      "title": "client2",
      "gotInfo": false,
      "info": "",
      "link": "Visit Website",
      "linkTo": "https://www.edixual.com/",
      "imgName": "aboutUs",
    },
    {
      "title": "client3",
      "gotInfo": false,
      "info": "",
      "link": "Visit Website",
      "linkTo": "https://www.edixual.com/",
      "imgName": "aboutUs",
    },
    {
      "title": "client4",
      "gotInfo": false,
      "info": "",
      "link": "Visit Website",
      "linkTo": "https://www.edixual.com/",
      "imgName": "aboutUs",
    },
  ]
  const linkHandler = (link) => {
    console.log(link)
  }

  if (headingIndex === 0) {
    return (
      <div className="pid-card-container">
        {
          clientData.map((client) => {
            return (
              <div key={client.title} className='card'>
                <div className='card-image'>
                  <img src={ process.env.PUBLIC_URL + `/images/${client.imgName}.jpg` } alt="Card Image" />
                </div>
                <div className='card-link'>
                  <button onClick={() => linkHandler(client.linkTo)}>{client.link}</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
  return (
    <div>404</div>
  )
}

export default EdiXualCreationsPIDCard
