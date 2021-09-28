import React from 'react'
import EdiXualCreationsPageInfoDisplay from './EdiXualCreationsPageInfoDisplay'

import './EdiXualCreationsPageInfo.css'

function EdiXualCreationsPageInfo(props) {
  var path = props.path.slice(18)
  const paths = ['', '', 'services', 'work', 'contact']

  if (paths.indexOf(path) === 0) {
    return (
      <div className='pageInfo-container'>
      <EdiXualCreationsPageInfoDisplay infoIndex={0}/>
      <EdiXualCreationsPageInfoDisplay infoIndex={1}/>
      <EdiXualCreationsPageInfoDisplay infoIndex={2}/>
      <EdiXualCreationsPageInfoDisplay infoIndex={3}/>
      </div>
    )
  } else if (paths.indexOf(path) === 2) {
    return (
      <div>
        I'm div number two
      </div>
    )
  } else if (paths.indexOf(path) === 3) {
    return (
      <div>
        I'm div number three
      </div>
    )
  } else if (paths.indexOf(path) === 4) {
    return (
      <div>
        I'm div number four
      </div>
    )
  }
  return (
    <div>
      404
    </div>
  )
}

export default EdiXualCreationsPageInfo
