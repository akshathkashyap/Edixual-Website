import React, { useEffect } from 'react'
import EdiXualCreationsPageInfoDisplay from './EdiXualCreationsPageInfoDisplay'

import './EdiXualCreationsPageInfo.css'

function EdiXualCreationsPageInfo(props) {
  var path = props.path.slice(18)
  const paths = ['', '', 'services', 'work', 'contact']
  const infoCardDetails = [
    {
      "heading": "About us",
      "headingInfo": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu.",
      "headingImg": "aboutUs",
      "illustrationCall": false,
    },
    {
      "heading": "Company History",
      "headingInfo": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu.",
      "headingImg": "aboutUs",
      "illustrationCall": false,
    },
    {
      "heading": "List of our Clients",
      "headingInfo": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu.",
      "headingImg": "aboutUs",
      "illustrationCall": true,
    },
    {
      "heading": "Director of the company",
      "headingInfo": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu.",
      "headingImg": "aboutUs",
      "illustrationCall": false,
    },
    {
      "heading": "Graphic designing, Illustrations",
      "headingInfo": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu.",
      "headingImg": "aboutUs",
      "illustrationCall": true,
    },
    {
      "heading": "Editing",
      "headingInfo": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu.",
      "headingImg": "aboutUs",
      "illustrationCall": true,
    },
    {
      "heading": "GIFs",
      "headingInfo": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu.",
      "headingImg": "aboutUs",
      "illustrationCall": true,
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  if (paths.indexOf(path) === 0) {
    return (
      <div className='pageInfo-container'>
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[0]}/>
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[1]}/>
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[2]}/>
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[3]}/>
      </div>
    )
  } else if (paths.indexOf(path) === 2) {
    return (
      <div className='pageInfo-container'>
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[4]}/>
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[5]}/>
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[6]}/>
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
