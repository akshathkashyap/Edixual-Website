import React, { useEffect } from 'react'

import './EXCOriginalsVideos.css'

function EXCOriginalsVideos() {
  const scrollHandler = () => {
    const videoFrames = document.querySelectorAll('.video-grid iframe')
    const buffer = window.innerHeight * 0.66
    const viewAllBtn = document.querySelector('#viewAll')
    videoFrames.forEach((frame, i) => {
      if (frame.getBoundingClientRect().top <= buffer) {
        viewAllBtn.style.top = `${10 + (40 * i)}vh`
      }
    })
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  })

  return (
    <div className="videos section-container">
      <h1 className="section-title">videos</h1>
      <div className="video-grid">
        <iframe src="https://www.youtube.com/embed/agoTVmCUh70?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/1TkAeCl7LVg?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/doaRxgf2ylc?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div id="videoBtnCtn">
          <button id="viewAll" onClick={() => {window.open("https://www.youtube.com/channel/UCK-C8phxPQ_uFfax-0J4xFA/featured")}}>view all</button>
        </div>
      </div>
    </div>
  )
}

export default EXCOriginalsVideos
