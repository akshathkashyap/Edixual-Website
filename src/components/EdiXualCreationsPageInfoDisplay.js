import React from 'react'
import EdiXualCreationsPIDCard from './EdiXualCreationsPIDCard'

import './EdiXualCreationsPageInfoDisplay.css'

function EdiXualCreationsPageInfoDisplay(props) {
  const info = props.info

  return (
    <>
    <div className='infocard'>
      <div className='infocard-text'>
        <div className='infocard-heading'>
          <h1>{info.heading}</h1>
        </div>
        <div className='infocard-heading-info'>
          <p>{info.headingInfo}</p>
        </div>
      </div>
      <div className='infocard-image'>
        <img src={ process.env.PUBLIC_URL + `/images/${info.headingImg}.jpg` } alt="EdiXual Creations" />
      </div>
    </div>
    {info.illustrationCall ? <EdiXualCreationsPIDCard heading={info.heading} /> : ''}
    </>
  )
}

export default EdiXualCreationsPageInfoDisplay
