import React from 'react'

import './EXCOriginalsBannerHolder.css'

function EXCOriginalsBannerHolder() {
  const bannerData = [
    {"index": 0,
    "bannerName": "Back to the future",
    "bannerSrc": "https://c4.wallpaperflare.com/wallpaper/772/72/890/fiction-collage-poster-art-wallpaper-preview.jpg",
    "bannerDPSrc": "https://c4.wallpaperflare.com/wallpaper/772/72/890/fiction-collage-poster-art-wallpaper-preview.jpg",
    "des": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."},
    {"index": 1,
    "bannerName": "Star Wars",
    "bannerSrc": "https://c4.wallpaperflare.com/wallpaper/776/18/529/star-wars-the-force-awakens-film-posters-movie-poster-collage-wallpaper-preview.jpg",
    "bannerDPSrc": "https://c4.wallpaperflare.com/wallpaper/776/18/529/star-wars-the-force-awakens-film-posters-movie-poster-collage-wallpaper-preview.jpg",
    "des": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",},
    {"index": 2,
    "bannerName": "Interstellar",
    "bannerSrc": "https://c4.wallpaperflare.com/wallpaper/775/852/888/adventure-film-futuristic-interstellar-wallpaper-preview.jpg",
    "bannerDPSrc": "https://c4.wallpaperflare.com/wallpaper/775/852/888/adventure-film-futuristic-interstellar-wallpaper-preview.jpg",
    "des": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",},
  ]
  const nextBanner = (scroll) => {
    const bannerCont = document.querySelector('.banner-container')
    const bannerContWidth = bannerCont.getBoundingClientRect().width
    const bannerContScroll = bannerCont.scrollLeft
    const totalBanners = bannerData.length
    if (scroll) {
      if (bannerContScroll / bannerContWidth <= (totalBanners - 2)) {
        bannerCont.scrollLeft = bannerContScroll + bannerContWidth
      } else {
        bannerCont.scrollLeft = 0
      }
    } else {
      if (bannerContScroll !== 0) {
        bannerCont.scrollLeft = bannerContScroll - bannerContWidth
      } else {
        bannerCont.scrollLeft = bannerContWidth * (totalBanners - 1)
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

  return (
    <div className="section-container">
      <div className="banner-container">
        {bannerData.map((banner) => {
          return (
            <div className="banner" key={`banner${banner.index}`}>
              <img className="banner-img" src={banner.bannerSrc} alt="Banner Image"/>
              <p className="banner-des hidden">{banner.des}</p>
              <button className="banner-btn left" onClick={() => nextBanner(false)}>&#x276E;</button>
              <button className="banner-btn top right" onClick={toggleInfo}>i</button>
              <button className="banner-btn right" onClick={() => nextBanner(true)}>&#x276F;</button>
            </div>
          )
        })}
      </div>
      <div className="banner-info-container">
        {bannerData.map((banner) => {
          return (
            <div className="banner-card" key={`banner${banner.index}info`}>
              <img className="banner-dp" src={banner.bannerDPSrc} alt="Banner Display Picture"/>
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
