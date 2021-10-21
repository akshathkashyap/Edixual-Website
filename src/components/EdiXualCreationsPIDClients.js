import React from 'react'

import './EdiXualCreationsPIDClients.css'

function EdiXualCreationsPIDClients() {
  const listOfClientsData = [
    {
      "clientName": "YRF",
      "clientDisplay": "YRF_Logo",
      "clientReference": "https://www.yashrajfilms.com/",
    },
    {
      "clientName": "Sony",
      "clientDisplay": "Sony_Logo",
      "clientReference": "https://www.sonypicturesnetworks.com/",
    },
    {
      "clientName": "The Glitch",
      "clientDisplay": "Glitch_Logo",
      "clientReference": "https://theglitch.in/",
    },
    {
      "clientName": "Timex",
      "clientDisplay": "Timex_Logo",
      "clientReference": "https://www.timexindia.com/",
    },
    {
      "clientName": "Frontrow",
      "clientDisplay": "Frontrow_Logo",
      "clientReference": "https://frontrow.co.in/",
    },
    {
      "clientName": "Kibbootz Films",
      "clientDisplay": "Kibbootz_Logo",
      "clientReference": "https://www.facebook.com/KibbootzFilms/",
    },
  ]

  const linkHandler = (link) => {
    window.open(link)
  }

  return (
    <div className='clients-carousel'>
      {
        listOfClientsData.map((client, index) => {
          return (
            <div key={`${client}${index}`} className='client-card'>
              <img onClick={() => linkHandler(client.clientReference)} src={ process.env.PUBLIC_URL + `/images/${client.clientDisplay}.jpg` } alt="Client" />
            </div>
          )
        })
      }
    </div>
  )
}

export default EdiXualCreationsPIDClients
