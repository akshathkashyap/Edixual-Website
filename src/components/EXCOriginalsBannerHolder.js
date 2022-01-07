import React, { useRef, useEffect } from 'react'

import './EXCOriginalsBannerHolder.css'

function EXCOriginalsBannerHolder() {
  const bannerData = [
    {"index": 0,
    "bannerName": "Looop Lapeta",
    "bannerSrc": "CULoopLapeta.jpg",
    "bannerDPSrc": "CULoopLapetaSQ.jpg",
    "des": "Looop Lapeta is an upcoming Bollywood film directed by Aakash Bhatia and jointly produced by Sony Pictures Films India, Ellipsis Entertainment and Aayush Maheshwari. It features Taapsee Pannu and Tahir Raj Bhasin in the lead roles. It is scheduled for release on 22 October 2021.",
    },
    {"index": 1,
    "bannerName": "Tape Recorder",
    "bannerSrc": "CUTapeRecorder.jpg",
    "bannerDPSrc": "CUTapeRecorderSQ.jpg",
    "des": "Tape Recorder is an upcoming Indian Short Film directed by Aniket Sritava, produced by EXC Originals. It is planned to be released by Jan 2022.",
    },
    {"index": 2,
    "bannerName": "Gal Mitthi Bol × Kiss Me More",
    "bannerSrc": "CUGalMitthiBol×KissMeMore.jpg",
    "bannerDPSrc": "CUGalMitthiBol×KissMeMoreSQ.jpg",
    "des": "Year-End Mashup by Sush & Yohan is a grand project made every year! Year-End Mashup 2020 received 1.3 million views 60k+ likes to date. EXC Originals in collaboration with various visual editors come together to bring the project to life.",
    },
  ]
  const bannerContRef = useRef()
  const nextBanner = (scroll) => {
    const bannerContWidth = bannerContRef.current.getBoundingClientRect().width
    const bannerContScroll = bannerContRef.current.scrollLeft
    const totalBanners = bannerData.length
    if (scroll) {
      if (bannerContScroll / bannerContWidth <= (totalBanners - 2)) {
        bannerContRef.current.scrollLeft = bannerContScroll + bannerContWidth
      } else {
        bannerContRef.current.scrollLeft = 0
      }
    } else {
      if (bannerContScroll !== 0) {
        bannerContRef.current.scrollLeft = bannerContScroll - bannerContWidth
      } else {
        bannerContRef.current.scrollLeft = bannerContWidth * (totalBanners - 1)
      }
    }
  }
  const toggleInfo = (event) => {
    const info = document.querySelectorAll('.banner-des')
    const infoBtn = document.querySelectorAll('.banner-btn.top.right')
    info.forEach((bannerInfo, i) => {
      if (bannerInfo.classList.contains('hidden')) {
        bannerInfo.classList.remove('hidden')
      } else {
        bannerInfo.classList.add('hidden')
      }
    })
    if (event.target.innerHTML === 'i') {
      infoBtn.forEach((btn, i) => {
        btn.innerHTML = 'x'
        btn.style.backgroundColor = 'rgba(0, 0, 0, 0)'
      })
    } else {
      infoBtn.forEach((btn, i) => {
        btn.innerHTML = 'i'
        btn.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
      })
    }
  }

  useEffect(() => {
    bannerContRef.current.addEventListener('mouseenter', () => {
      window.clearTimeout( timer )
    })
    bannerContRef.current.addEventListener('mouseleave', () => {
      timer = setTimeout(carouselAutoScroll, 4000)
    })
    var timer
    const carouselAutoScroll = () => {
      nextBanner(true)
      timer = setTimeout(carouselAutoScroll, 2500)
    }
    carouselAutoScroll()
  })

  return (
    <div className="section-container">
      <div ref={bannerContRef} className="banner-container">
        {bannerData.map((banner) => {
          return (
            <div className="banner" key={`banner${banner.index}`}>
              <img className="banner-img" src={ process.env.PUBLIC_URL + `/images/${banner.bannerSrc}` } alt="Banner"/>
              <p className="banner-des hidden">{banner.des}</p>
              <button className="banner-btn left" onClick={() => nextBanner(false)}>&#x276E;</button>
              <button className="banner-btn top right" onClick={toggleInfo}>i</button>
              <button className="banner-btn right" onClick={() => nextBanner(true)}>&#x276F;</button>
              <p className="banner-disclaimer">These artworks are not official & are made for reference purpose only. We do not hold any rights for the images / logos used above.</p>
            </div>
          )
        })}
      </div>
      <div className="banner-info-container">
        {bannerData.map((banner) => {
          return (
            <div className="banner-card" key={`banner${banner.index}info`}>
              <img className="banner-dp" src={ process.env.PUBLIC_URL + `/images/${banner.bannerDPSrc}` } alt="Banner Display"/>
              <p className="banner-name">{banner.bannerName}</p>
              <p className="banner-card-des">{banner.des}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EXCOriginalsBannerHolder
