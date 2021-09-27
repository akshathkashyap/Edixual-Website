<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './EXCOriginalsPhotoAlbum.css'

function EXCOriginalsPhotoAlbum() {
  const { albumLink } = useParams()
  const albums = ["VickyKaushalAegonLifeInsurance", "AnkurRathee", "RaghavMeattle", "AlviraPhotoshoot", "KanikaPhotoshoot", "MumbaiStreetPhotography", "FoodPhotography", "MadhusmitaDas"]
  const albumIndex = albums.indexOf(albumLink)
  const albumData = [
    {
      "albumName": "Vicky Kaushal, Aegon Life Insurance",
      "albumPre" : "VK",
      "albumSize" : "7"
    },
    {
      "albumName": "Ankur Rathee, Actor",
      "albumPre" : "AR",
      "albumSize" : "9"
    },
    {
      "albumName": "Raghav Meattle",
      "albumPre" : "RM",
      "albumSize" : "8"
    },
    {
      "albumName": "Alvira Photoshoot",
      "albumPre" : "AV",
      "albumSize" : "25"
    },
    {
      "albumName": "Kanika, Photoshoot",
      "albumPre" : "KP",
      "albumSize" : "12"
    },
    {
      "albumName": "Mumbai, Street Photography",
      "albumPre" : "MP",
      "albumSize" : "22"
    },
    {
      "albumName": "Food Photography",
      "albumPre" : "FP",
      "albumSize" : "10"
    },
    {
      "albumName": "Madhusmita Das, Actress",
      "albumPre" : "MD",
      "albumSize" : "9"
    },
  ]

  const makeAlbumPhotoList = () => {
    const albumPre = albumData[albumIndex].albumPre
    const albumSize = parseInt(albumData[albumIndex].albumSize)
    var albumPhotoList = []
    for (var i = 0; i < albumSize; i++) {
      albumPhotoList.push(`${albumPre}${i}`)
    }
    return albumPhotoList
  }
  const albumPhotoList = makeAlbumPhotoList()

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="album section-container">
      <h1 className="section-title">{albumData[albumIndex].albumName}</h1>
      <div className="album-images-container">
        {albumPhotoList.map((photo) => {
          return (
            <div key={`${albumData[albumIndex].albumName}${photo}`} className="album-image">
              <img src={ process.env.PUBLIC_URL + `/images/album/${albumData[albumIndex].albumName}/${photo}.jpg` } alt="AlbumImage" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EXCOriginalsPhotoAlbum
=======
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './EXCOriginalsPhotoAlbum.css'

function EXCOriginalsPhotoAlbum() {
  const { albumLink } = useParams()
  const albums = ["VickyKaushalAegonLifeInsurance", "AnkurRathee", "RaghavMeattle", "AlviraPhotoshoot", "KanikaPhotoshoot", "MumbaiStreetPhotography", "FoodPhotography", "MadhusmitaDas"]
  const albumIndex = albums.indexOf(albumLink)
  const albumData = [
    {
      "albumName": "Vicky Kaushal, Aegon Life Insurance",
      "albumPre" : "VK",
      "albumSize" : "7"
    },
    {
      "albumName": "Ankur Rathee, Actor",
      "albumPre" : "AR",
      "albumSize" : "9"
    },
    {
      "albumName": "Raghav Meattle",
      "albumPre" : "RM",
      "albumSize" : "8"
    },
    {
      "albumName": "Alvira Photoshoot",
      "albumPre" : "AV",
      "albumSize" : "25"
    },
    {
      "albumName": "Kanika, Photoshoot",
      "albumPre" : "KP",
      "albumSize" : "12"
    },
    {
      "albumName": "Mumbai, Street Photography",
      "albumPre" : "MP",
      "albumSize" : "22"
    },
    {
      "albumName": "Food Photography",
      "albumPre" : "FP",
      "albumSize" : "10"
    },
    {
      "albumName": "Madhusmita Das, Actress",
      "albumPre" : "MD",
      "albumSize" : "9"
    },
  ]

  const makeAlbumPhotoList = () => {
    const albumPre = albumData[albumIndex].albumPre
    const albumSize = parseInt(albumData[albumIndex].albumSize)
    var albumPhotoList = []
    for (var i = 0; i < albumSize; i++) {
      albumPhotoList.push(`${albumPre}${i}`)
    }
    return albumPhotoList
  }
  const albumPhotoList = makeAlbumPhotoList()

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="album section-container">
      <h1 className="section-title">{albumData[albumIndex].albumName}</h1>
      <div className="album-images-container">
        {albumPhotoList.map((photo) => {
          return (
            <div key={`${albumData[albumIndex].albumName}${photo}`} className="album-image">
              <img src={ process.env.PUBLIC_URL + `/images/album/${albumData[albumIndex].albumName}/${photo}.jpg` } alt="AlbumImage" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EXCOriginalsPhotoAlbum
>>>>>>> 007c24cc64b54c59379ea99b5f4153d877839866
