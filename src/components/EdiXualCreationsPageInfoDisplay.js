import React from 'react'

import './EdiXualCreationsPageInfoDisplay.css'

function EdiXualCreationsPageInfoDisplay(props) {
  const infoIndex = props.infoIndex
  const infoCardDetails = [
    {
      "heading": "About us",
      "headingInfo": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu.",
      "headingImg": "aboutUs",
    },
    {
      "heading": "Company History",
      "headingInfo": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu.",
      "headingImg": "aboutUs",
    },
    {
      "heading": "List of our Clients",
      "headingInfo": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu.",
      "headingImg": "aboutUs",
    },
    {
      "heading": "Director of the company",
      "headingInfo": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu.",
      "headingImg": "aboutUs",
    },
  ]
  return (
    <div className='infocard'>
      <div className='infocard-text'>
        <div className='infocard-heading'>
          <h1>{infoCardDetails[infoIndex].heading}</h1>
        </div>
        <div className='infocard-heading-info'>
          <p>{infoCardDetails[infoIndex].headingInfo}</p>
        </div>
      </div>
      <div className='infocard-image'>
        <img src={ process.env.PUBLIC_URL + `/images/${infoCardDetails[infoIndex].headingImg}.jpg` } alt="EdiXual Creations" />
      </div>
    </div>
  )
}

export default EdiXualCreationsPageInfoDisplay
