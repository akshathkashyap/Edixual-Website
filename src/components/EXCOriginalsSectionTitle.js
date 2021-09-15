import React from 'react'
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
      "secTitleInfo" : "EXC Originals is a subsidiary of EdiXual Creations ,established on 20th October 2019, and was created to take up out-of-the-box, unconventional and revolutionary projects that we believed in or for our content creators to lose their inhibitions and just let their creative imaginations run wild."
    },
    {
      "secTitle" : "How to reach us?",
      "secTitleInfo" : "Come, have cup of coffee"
    },
    {
      "secTitle": "Coming up next!",
      "secTitleInfo": "This is the plan so far... Got something for us?"
    }
  ]

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
