import React, { useEffect } from 'react'
import EdiXualCreationsPageInfoDisplay from './EdiXualCreationsPageInfoDisplay'
import EdiXualCreationsPIDClients from './EdiXualCreationsPIDClients'
import EdiXualCreationsWorkWindow from './EdiXualCreationsWorkWindow'
import EdiXualCreationsContact from './EdiXualCreationsContact'
import EdiXualCreationsFooter from './EdiXualCreationsFooter'

import './EdiXualCreationsPageInfo.css'

function EdiXualCreationsPageInfo(props) {
  var path = props.path.slice(18)
  const paths = ['', 'services', 'work', 'contact']
  const infoCardDetails = [
    {
      "heading": "About us",
      "headingInfo": ["EdiXual Creations is a Video Editing and Graphic design company that has morphed itself into a one-stop solution for anything and everything related to digital art and aesthetic entertainment.", "Thanks to our tireless family of designers, artists, and editors, and their passion, we provide the best service in the market.", "We have never believed in compromising the originality and brilliance of our products. And with a team of highly motivated creative geniuses, we have been able to achieve record-breaking feats throughout our exciting journey and aim to continue doing just that for many more years to come…"],
      "headingImg": "aboutUs_title",
      "illustrationCall": false,
    },
    {
      "heading": "Company History",
      "headingInfo": ["What started off as a mere start-up soon snowballed into a business that never shied away from challenges. May it be editing a video in 15 minutes on a live event or making a name for ourselves in the entertainment industry all by ourselves.", "Just 5 years since its establishment, EdiXual Creations has already managed to garner numerous high profile clients like YRF Films, Zee Music India, JJust Music, Aegon Insurance, GM Modular and many more, which helped us grow our business internationally and with credible and authentic testimonials for our future clients to recognize the integrity and quality that comes with our brand."],
      "headingImg": "companyHistory_title",
      "illustrationCall": false,
    },
    {
      "heading": "List of our Clients",
      "headingInfo": ["Just 5 years since its establishment, EdiXual Creations has already managed to garner numerous high profile clients like YRF Films, Zee Music India, JJust Music, Aegon Insurance, GM Modular and many more, which helped us grow our business internationally and with credible and authentic testimonials for our future clients to recognize the integrity and quality that comes with our brand."],
      "headingImg": "loc_title",
      "illustrationCall": false,
    },
    {
      "heading": "Director of the company",
      "headingInfo": ["Born in 1999, Aniket Sritava had a brilliant inquisitive mind that made him diverse, vibrant, and versatile in the field of Film-making and Direction.", "He started off as a Youtuber with 60,000 subscribers and is now one of the most successful film-makers in Mumbai at his age. May it be directing, editing or shooting an event, as the creator/CEO of EdiXual Creations he has never backed down from a challenge.", "The way he likes to describe it: “I am just trying to create a movie called Life”"],
      "headingImg": "director",
      "illustrationCall": false,
    },
    {
      "heading": "Graphic designing and Illustrations",
      "headingInfo": ["Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users’ specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.", "An illustration can explain an idea even without the text nearby. People who look at the picture should see the story, 'read' it as they would read the text. To tell a story with an illustration means to convey some meaning, to explain a certain context only with the help of an image."],
      "headingImg": "gdi_title",
      "illustrationCall": true,
    },
    {
      "heading": "Editing",
      "headingInfo": ["Many people use the term editing to describe all their post-production work, especially in non-professional situations.", "Video editing is the process of manipulating and rearranging video shots to create a new work. Editing is usually considered to be one part of the post production process — other post-production tasks include titling, colour correction, sound mixing, etc.", "Photo editing is the act of altering an image. But that’s oversimplifying a subject that can be complex and employs different methods and tools. Some photo editing is even done offline, on actual photographs, posters or other printed collateral."],
      "headingImg": "editing_title",
      "illustrationCall": true,
    },
    {
      "heading": "GIFs",
      "headingInfo": ["We say “animated images” because GIFs aren’t really videos. If anything, they’re more like flipbooks. For one, they don’t have sound (you probably noticed that). Also, the GIF format wasn’t created for animations; that’s just how things worked out. See, GIF files can hold multiple pictures at once, and people realized that these pictures could load sequentially (again, like a flipbook) if they’re decoded a certain way."],
      "headingImg": "gifs_title",
      "illustrationCall": true,
    },
  ]

  const clickHandler = (index) => {
    let underline = document.querySelector('.work-slider-titles .underline')
    let slider = document.querySelector('.work-slider-slide')
    underline.style.transform = `translateX(calc(100% * ${index}))`
    slider.scrollLeft = window.innerWidth * index
  }
  const scrollHandler = () => {
    let slider = document.querySelector('.work-slider-slide')
    let stops = [0, window.innerWidth, window.innerWidth * 2]
    stops.forEach((stop, i) => {
      if (Math.floor(slider.scrollLeft) === stop) {
        clickHandler(i)
      }
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  if (paths.indexOf(path) === 0) {
    return (
      <div className='pageInfo-container'>
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[0]}/>
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[1]}/>
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[2]}/>
        <EdiXualCreationsPIDClients />
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[3]}/>
        <EdiXualCreationsFooter />
      </div>
    )
  } else if (paths.indexOf(path) === 1) {
    return (
      <div className='pageInfo-container'>
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[4]}/>
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[5]}/>
        <EdiXualCreationsPageInfoDisplay info={infoCardDetails[6]}/>
        <EdiXualCreationsFooter />
      </div>
    )
  } else if (paths.indexOf(path) === 2) {
    return (
      <div className='work-slider'>
        <div className='work-slider-titles'>
          <h1 onClick={() => clickHandler(0)}>Graphic designing and Illustrations<span className='underline'></span></h1>
          <h1 onClick={() => clickHandler(1)}>Editing</h1>
          <h1 onClick={() => clickHandler(2)}>GIFs</h1>
        </div>
        <div onScroll={() => scrollHandler()} className='work-slider-slide'>
          <EdiXualCreationsWorkWindow slide={0} />
          <EdiXualCreationsWorkWindow slide={1} />
          <EdiXualCreationsWorkWindow slide={2} />
        </div>
      </div>
    )
  } else if (paths.indexOf(path) === 3) {
    return (
      <div className='pageInfo-container'>
        <EdiXualCreationsContact />
        <EdiXualCreationsFooter />
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
