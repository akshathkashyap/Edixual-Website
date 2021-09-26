import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './EXCOriginalsPhotos.css'

function EXCOriginalsPhotos() {
  const albumData = [
    {
      "albumIndex": "0",
      "albumName": "Vicky Kaushal, Aegon Life Insurance",
      "albumLink": "VickyKaushalAegonLifeInsurance",
    },
    {
      "albumIndex": "1",
      "albumName": "Ankur Rathee, Actor",
      "albumLink": "AnkurRathee",
    },
    {
      "albumIndex": "2",
      "albumName": "Raghav Meattle",
      "albumLink": "RaghavMeattle",
    },
    {
      "albumIndex": "3",
      "albumName": "Alvira Photoshoot",
      "albumLink": "AlviraPhotoshoot",
    },
    {
      "albumIndex": "4",
      "albumName": "Kanika, Photoshoot",
      "albumLink": "KanikaPhotoshoot",
    },
    {
      "albumIndex": "5",
      "albumName": "Mumbai, Street Photography",
      "albumLink": "MumbaiStreetPhotography",
    },
    {
      "albumIndex": "6",
      "albumName": "Food Photography",
      "albumLink": "FoodPhotography",
    },
//    {
//      "albumIndex": "7",
//      "albumName": "Madhusmita Das, Actress",
//      "albumLink": "MadhusmitaDas",
//    },
  ]
  const handleScrollAnimation = () => {
    const viewportWidth = window.innerWidth
    const albumWidth = document.querySelector('.carousel-img').getBoundingClientRect().width
    document.querySelectorAll('.carousel-img').forEach((album, i) => {
      const albumLeft = album.getBoundingClientRect().left
      if (-albumWidth < albumLeft && albumLeft < viewportWidth) {
        const albumImg = album.children[0]
        albumImg.style.left = `${-200 + (200 * (1 / ((viewportWidth + albumWidth) / (albumLeft + albumWidth))))}px`
      }
      if (albumLeft <= (viewportWidth / 2) && albumLeft >= (viewportWidth / 2) - albumWidth) {
        album.classList.remove('unselected')
        album.classList.add('selected')
      } else {
        album.classList.add('unselected')
        album.classList.remove('selected')
      }
    })
  }
  const handleAlbumHeadClick = (event) => {
    document.querySelectorAll('.carousel-info-slider h2').forEach((h2, i) => {
      if (h2 === event.target) {
        shiftAlbumFocus(i)
        shiftAlbumInfoFocus(i)
      }
    })
  }
  const shiftAlbumFocus = (albumIndex) => {
    const carousel = document.querySelector('.carousel')
    const carouselWidth = carousel.getBoundingClientRect().width
    const albumWidth = document.querySelector('.carousel-img').getBoundingClientRect().width
    const focusAlbum = document.querySelectorAll('.carousel-img')[albumIndex]
    carousel.scrollLeft = focusAlbum.offsetLeft - (carouselWidth / 2) + (albumWidth / 2)
  }
  const shiftAlbumInfoFocus = (albumIndex) => {
    const infoSlider = document.querySelector('.carousel-info-slider')
    const infoSliderWidth = infoSlider.getBoundingClientRect().width
    const infoWidth = document.querySelector('.carousel-info-slider h2').getBoundingClientRect().width
    const focusInfo = document.querySelectorAll('.carousel-info-slider h2')[albumIndex]
    infoSlider.scrollLeft = focusInfo.offsetLeft - (infoSliderWidth / 2) + (infoWidth / 2)
    document.querySelectorAll('.carousel-info-slider h2').forEach((info, i) => {
      info.style.color = 'var(--hover-color)'
    })
    focusInfo.style.color = 'var(--primary-text-color)'
  }

  useEffect(() => {
    const carousel = document.querySelector('.carousel')
    const carouselWidth = carousel.getBoundingClientRect().width
    carousel.scrollLeft = carouselWidth / 2
  }, [])
  useEffect(() => {
    const carousel = document.querySelector('.carousel')
    const infoSliderAlbums = document.querySelectorAll('.carousel-info-slider h2')
    carousel.addEventListener('scroll', handleScrollAnimation)
    infoSliderAlbums.forEach((albumHead, i) => {
      albumHead.addEventListener('click', handleAlbumHeadClick)
    })
    return () => {
      carousel.removeEventListener('scroll', handleScrollAnimation)
      infoSliderAlbums.forEach((albumHead, i) => {
        albumHead.removeEventListener('click', handleAlbumHeadClick)
      })
    }
  })
  useEffect(() => {
    const carousel = document.querySelector('.carousel')
    var isScrolling
    carousel.addEventListener('scroll', function ( event ) {
	    window.clearTimeout( isScrolling )
	    isScrolling = setTimeout(function() {
        document.querySelectorAll('.carousel-img').forEach((img, i) => {
          if (img.classList.contains('selected')) {
            shiftAlbumInfoFocus(i)
          }
        })
      }, 250)
    }, false)
  })

  return (
    <div className="photos section-container">
      <h1 className="section-title">photos</h1>
      <div className="carousel">
        {albumData.map((album) => {
          return (
            <div key={`album${album.albumIndex}`} className={`carousel-img ${album.albumIndex === '0' ? 'selected' : 'unselected'}`}>
              <img src={ process.env.PUBLIC_URL + `/images/album/${album.albumName}/0.jpg` } alt="Img" />
              <div className="carousel-info-card">
                <Link to={`/EXCOriginals/WhatHaveWeDone/Photos/${album.albumLink}`}>
                  <button>view album</button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <div className="carousel-info-slider">
        {albumData.map((album) => {
          return (
            <h2 key={`albumInfo${album.albumIndex}`}>{album.albumName}</h2>
          )
        })}
      </div>
    </div>
  )
}

export default EXCOriginalsPhotos
