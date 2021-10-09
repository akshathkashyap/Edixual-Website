import React, { useEffect, useRef } from 'react'

import './EXCOriginalsClients.css'

function EXCOriginalsClients() {
  const clientsLinks = ["https://www.yashrajfilms.com/",
                "https://www.sonypicturesnetworks.com/",
                "https://www.instagram.com/ellipsisentertainment/?hl=en",
                "http://www.applauseentertainment.in/",
                "https://theglitch.in/",
                "https://www.facebook.com/KibbootzFilms/",
                "https://www.mindshiftinteractive.com/",
                "https://www.imarketz.in/",
                "https://www.youtube.com/channel/UCOvZZg0EyZxG-xQ_FA2M3Qw",
                "https://www.youtube.com/channel/UCAAPcQLflmxYGDcRwC4bJKw",
                "https://frontrow.co.in/",
                "https://www.youtube.com/c/Subtlesleeves",
                "https://www.aegonlife.com/",
                "https://www.timexindia.com/",]

  const clientRef = useRef()
  const clickHandler = (link) => {
    window.open(clientsLinks[link])
  }
  const scrollHandler = () => {
    var clientTop = clientRef.current.getBoundingClientRect().top
    var clientsContainer = document.querySelector('.clients-container')
    if (clientTop <= (window.innerHeight / 3)) {
      clientsContainer.style.borderRadius = '10vw'
      document.removeEventListener('scroll', scrollHandler)
    }
  }
  const hoverHandler = (focus) => {
    var client = document.querySelector('.clients .section-title')
    if (focus) {
      client.style.color = 'var(--primary-text-color)'
    } else {
      client.style.color = 'var(--secondary-text-color)'
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  })
  useEffect(() => {
    var clients = document.querySelectorAll('.client')
    clients.forEach((client) => {
      client.addEventListener('mouseover', () => hoverHandler(true))
      client.addEventListener('mouseout', () => hoverHandler(false))
    })
    return () => {
      clients.forEach((client) => {
        client.removeEventListener('mouseover', hoverHandler)
        client.removeEventListener('mouseout', hoverHandler)
      })
    }
  })

  return (
    <div className="clients section-container">
      <h1 ref={clientRef} className="section-title">clients</h1>
      <div className="clients-container">
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/YRF_Logo.jpg' } alt="YRF" />
          <div className="client-info" onClick={() => clickHandler(0)}>
            <p>YASH RAJ FILMS</p>
          </div>
        </div>
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/Sony_Logo.jpg' } alt="Sony Networks Pictures" />
          <div className="client-info" onClick={() => clickHandler(1)}>
            <p>SONY PICTURES AND NETWORKS INDIA</p>
          </div>
        </div>
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/Ellipsis_Logo.jpg' } alt="Ellipsis Entertainment" />
          <div className="client-info" onClick={() => clickHandler(2)}>
            <p>Ellipsis Entertainment</p>
          </div>
        </div>
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/Applause_Logo.jpg' } alt="Applause Entertainment" />
          <div className="client-info" onClick={() => clickHandler(3)}>
            <p>Applause Entertainment</p>
          </div>
        </div>
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/Glitch_Logo.jpg' } alt="The Glitch" />
          <div className="client-info" onClick={() => clickHandler(4)}>
            <p>The Glitch</p>
          </div>
        </div>
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/Kibbootz_Logo.jpg' } alt="Kibbootz Films" />
          <div className="client-info" onClick={() => clickHandler(5)}>
            <p>Kibbootz Films</p>
          </div>
        </div>
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/MindShift_Logo.jpg' } alt="MindShift Interactive" />
          <div className="client-info" onClick={() => clickHandler(6)}>
            <p>MindShift Interactive</p>
          </div>
        </div>
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/iMarketz_Logo.jpg' } alt="iMarketz" />
          <div className="client-info" onClick={() => clickHandler(7)}>
            <p>iMarketz</p>
          </div>
        </div>
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/Sandy_Logo.jpg' } alt="Sandy" />
          <div className="client-info" onClick={() => clickHandler(8)}>
            <p>SUSH AND YOHAN</p>
          </div>
        </div>
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/Karry_Logo.jpg' } alt="Karry" />
          <div className="client-info" onClick={() => clickHandler(9)}>
            <p>KARRY RENES</p>
          </div>
        </div>
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/Frontrow_Logo.jpg' } alt="Frontrow" />
          <div className="client-info" onClick={() => clickHandler(10)}>
            <p>Frontrow</p>
          </div>
        </div>
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/Subtle_Logo.jpg' } alt="Subtle Sleeves" />
          <div className="client-info" onClick={() => clickHandler(11)}>
            <p>Subtle Sleeves</p>
          </div>
        </div>
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/Aegon_Logo.jpg' } alt="Aegon life" />
          <div className="client-info" onClick={() => clickHandler(12)}>
            <p>Aegon life</p>
          </div>
        </div>
        <div className="client">
          <img src={ process.env.PUBLIC_URL + '/images/Timex_Logo.jpg' } alt="Timex" />
          <div className="client-info" onClick={() => clickHandler(13)}>
            <p>Timex</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EXCOriginalsClients
