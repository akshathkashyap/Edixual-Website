import React from 'react'
import EXCOriginalsTextVideo from './EXCOriginalsTextVideo'
import EXCOriginalsPhotos from './EXCOriginalsPhotos'
import EXCOriginalsVideos from './EXCOriginalsVideos'
import EXCOriginalsTeachGeography from './EXCOriginalsTeachGeography'
import EXCOriginalsBannerHolder from './EXCOriginalsBannerHolder'

import './EXCOriginalsSectionCall.css'

function EXCOriginalsSectionCall(props) {
  const title = props.title
  if (title === 'WhoAreWe') {
    return (
      <>
      <EXCOriginalsTextVideo secContClass= {'bts'} textLeft= {true} />
      <EXCOriginalsTextVideo secContClass= {'short-films-sketches'} textLeft= {false} />
      <EXCOriginalsTextVideo secContClass= {'music-videos'} textLeft= {true} />
      <EXCOriginalsTextVideo secContClass= {'marketing'} textLeft= {false} />
      </>
    )
  } else if (title === 'WhatHaveWeDone') {
    return (
      <>
      <EXCOriginalsPhotos />
      <EXCOriginalsVideos />
      </>
    )
  } else if (title === 'HowToReachUs') {
    return (
      <EXCOriginalsTeachGeography />
    )
  } else if (title === 'ComingUpNext') {
    return (
      <EXCOriginalsBannerHolder />
    )
  }

  return (
    <>Hi</>
  )
}

export default EXCOriginalsSectionCall
