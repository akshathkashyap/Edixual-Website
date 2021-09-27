import React, { useEffect } from 'react'
import EXCOriginalsSectionCall from './EXCOriginalsSectionCall'

import './EXCOriginalsSectionTitle.css'

function EXCOriginalsSectionTitle(props) {
  const title = props.path.slice(14)
  const titles = ["WhoAreWe", "WhatHaveWeDone", "HowToReachUs", "ComingUpNext"]
  const titleIndex = titles.indexOf(title)
  const titleInfo = [
    {
      "secTitle" : "Who are we?",
      "secTitleInfo" : "As the name suggests EXC Originals is a place where originality and aesthetics come together with the sole purpose of producing something magical for the viewers."
    },
    {
      "secTitle" : "What have we done?",
      "secTitleInfo" : "The idea has always been to create pieces of art that add value to the world. We shoot, edit and promote all kinds of filmography projects. Short of creating full length movies, we can cater to any kind of creative aesthetics. May it be photo-shoots, movie stills, or artist portfolios, we do it all."
    },
    {
      "secTitle" : "How to reach us?",
      "secTitleInfo" : "You are just one phone call or email away from hiring the dream team for your project."
    },
    {
      "secTitle": "Coming up next!",
      "secTitleInfo": "The EdiXual Creation pipeline has a new exciting project ready for release, watch this space for more updates."
    }
  ]

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })

  return (
    <>
    <div className="page-title-container">
      <h1 className="page-title">{ titleInfo[titleIndex]["secTitle"] }</h1>
      <p className="page-title-info">{ titleInfo[titleIndex]["secTitleInfo"] }</p>
    </div>
    <EXCOriginalsSectionCall title = { title } />
    </>
  )
}

export default EXCOriginalsSectionTitle
