import React, { useEffect } from 'react'

import './EXCOriginalsVideosPage.css'

function EXCOriginalsVideosPage() {
    const videos = [
        {
            title: 'Showreels',
            url: "https://www.youtube.com/embed/agoTVmCUh70?autoplay=1&mute=1",
            list: [],
        },
        {
            title: 'Zee Music',
            url: "https://www.youtube.com/embed/B4Dk77lF1SM?autoplay=1&mute=1",
            list: [],
        },
        {
            title: 'Sush and Yohan',
            url: "https://www.youtube.com/embed/g-OgMcLChBI?autoplay=1&mute=1",
            list: [
                {
                    name: '2021 YEAR END MASHUP - SUSH & YOHAN (BEST 130+ SONGS OF 2021)',
                    url: "https://youtu.be/uX7PFOsG4F4",
                },
                {
                    name: 'Friendship Mashup 2021 - Sush & Yohan',
                    url: "https://www.youtube.com/watch?v=9gQzPpBxTbY",
                },
                {
                    name: '2020 YEAR END MASHUP - SUSH & YOHAN (BEST 120+ SONGS OF 2020)',
                    url: "https://youtu.be/GLCa7SQV4eg",
                }
            ],
        },
        {
            title: 'Karry Renes',
            url: "https://www.youtube.com/embed/8Zwslpwx_NE?autoplay=1&mute=1",
            list: [
                {
                    name: 'Karry Renes - COMIGO (ft. Madhurxo) | EXC Originals',
                    url: "https://youtu.be/WP-XXzu_W70",
                },
                {
                    name: 'Karry Renes - TuneCore Flip The Beat Challenge (Feat. Ritviz)',
                    url: "https://youtu.be/9K1Gca92feU",
                },
                {
                    name: 'Karry Renes - PANCHI (Feat. Pratyaksh Rajbhatt)',
                    url: "https://youtu.be/nQ5VBywSXdA",
                },
                {
                    name: 'Karry Renes - Mujhse Bura Na Koi (Feat. Akansha Tripathi)',
                    url: "https://youtu.be/HkmIKclAlFY",
                }
            ],
        },
        {
            title: 'Pratyaksh Rajbhatt',
            url: "https://www.youtube.com/embed/Ucfs9nO6BO4?autoplay=1&mute=1",
            list: [],
        },
        {
            title: 'Mohit Modanwal',
            url: "https://www.youtube.com/embed/COmiOH58ja4?autoplay=1&mute=1",
            list: [
                {
                    name: 'Woh Ladki Hai Kahan | Dil Chahta Hai | Mohit Modanwal | Saif Ali Khan, Sonali Kulkarni | Happy Music',
                    url: "https://youtu.be/ZohRUv2EyOE",
                },
                {
                    name: 'Heartless X Rooh | Mohit Modanwal Lit Remix - Karry Renes',
                    url: "https://youtu.be/LHAEPnrp4I4",
                },
                {
                    name: 'AE KASH | MOHIT MODANWAL | SACH KEHTE HAIN | AKSHAY KUMAR | REPRISE VERSION',
                    url: "https://youtu.be/0inwXEbfthM",
                },
                {
                    name: 'MOHIT MODANWAL | SUPERHIT AUDIO JUKEBOX 2021',
                    url: "https://www.youtube.com/watch?v=7nJnTNLP2Ak",
                }
            ],
        },
        {
            title: 'Lockdown Made Me Do It',
            url: "https://www.youtube.com/embed/OKgI8GKGkkE?autoplay=1&mute=1",
            list: [
                {
                    name: 'LockDown Visuals',
                    url: "https://www.youtube.com/watch?v=doaRxgf2ylc",
                },
                {
                    name: 'Thandi Hawa | Ritviz | Lost Stories Remix | Visuals',
                    url: "https://www.youtube.com/watch?v=RR6-6BECB_E",
                },
            ],
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <div className="videos-page section-container">
        <h1 className="section-title">videos</h1>
        <div className="videos-page-frames-container">
            {videos.map((video) => {
                return (
                    <div key={`${video.title}`} className="videos-page-frame">
                        <header className='video-title'>{video.title}</header>
                        <iframe src={`${video.url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <ul>
                            {video.list.map((listItem) => {
                                return (
                                    <li key={`${listItem.name}`} onClick={() => {window.open(listItem.url)}}>{listItem.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default EXCOriginalsVideosPage
