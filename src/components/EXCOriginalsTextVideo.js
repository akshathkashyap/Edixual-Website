import React, { useEffect } from 'react'

import './EXCOriginalsTextVideo.css'

function EXCOriginalsTextVideo(props) {
  const secContClass = props.secContClass
  const secContClasses = ["bts", "short-films-sketches", "music-videos", "marketing"]
  const secContClassesIndex = secContClasses.indexOf(secContClass)
  const secContent = [
    {
      "secTitle" : "behind the scenes",
      "secText" : "Have you ever visited Youtube for a Music Video or a Short film but then 2 hours later found yourself watching Behind-the-scenes or Blooper Videos? If that’s something you imagine yourself doing a lot you are going to absolutely love this space!",
      "secVideoSrc" : "https://media2.giphy.com/media/rsqdA4EdGg7LRppAWC/giphy.gif?cid=790b761198b29156ed594eb13357f2dcaf62db00e3f358bf&rid=giphy.gif&ct=g"
    },
    {
      "secTitle" : "short films / sketches",
      "secText" : "Doesn’t matter if you like short-films, music videos, visualizers, sketches or behind-the-scenes we have got everything covered!",
      "secVideoSrc" : "https://media3.giphy.com/media/c3WZRg33Xa1wd7pS9S/giphy.gif?cid=790b76114f3e61792776e990c490ea96e5c9733977eae536&rid=giphy.gif&ct=g"
    },
    {
      "secTitle" : "music videos",
      "secText" : "We have already been a part of some ground-breaking projects like (Tadipaar III, ….) which crossed the million views milestone within days of getting released. Check out the Videos section to know more but beware, you might just get addicted.",
      "secVideoSrc" : "https://media2.giphy.com/media/92EwBuCyZpTGDt2q5U/giphy_s.gif?cid=790b7611102fdf0a581c72bf34baa3604e593f731e7c2cda&rid=giphy_s.gif&ct=g"
    },
    {
      "secTitle" : "marketing",
      "secText" : "Thanks to our multiple collaborators we have never believed in compromising the originality and brilliance of our products. And with a team of highly motivated creative geniuses, we have been able to achieve record breaking feats throughout our exciting journey and aim to continue doing just that for many more years to come…",
      "secVideoSrc" : "https://media.giphy.com/media/ymTxohR7QWdAOBuYtC/giphy.gif"
    },
  ]

  const scrollHandler = () => {
    var client = document.querySelector(`.${secContClass} .section-title`)
    var clientTop = client.getBoundingClientRect().top
    var clientText = document.querySelector(`.${secContClass} .section-flex-box .section-box p`)
    var clientVideo = document.querySelector(`.${secContClass} .section-flex-box .section-box img`)
    if (clientTop <= 250) {
      clientText.style.cssText = "opacity: 1; transform: translateY(0);"
      clientVideo.style.cssText = "opacity: 1; transform: translateY(0);"
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  })

  return (
    <div className={`${secContClass} section-container`}>
      <h1 className="section-title">{secContent[secContClassesIndex]["secTitle"]}</h1>
      <div className="section-flex-box">
        <div className="section-box">
          { props.textLeft ? <p>{secContent[secContClassesIndex]["secText"]}</p> : <img src={secContent[secContClassesIndex]["secVideoSrc"]} alt="GIF"/> }
        </div>
        <div className="section-box">
          { props.textLeft ? <img src={secContent[secContClassesIndex]["secVideoSrc"]} alt="GIF"/> : <p>{secContent[secContClassesIndex]["secText"]}</p> }
        </div>
      </div>
    </div>
  )
}

export default EXCOriginalsTextVideo
