import React from 'react'

import './EXCOriginalsVideosPage.css'

function EXCOriginalsVideosPage() {
    const videos = [
        {
            title: 'Showreels',
            url: "https://www.youtube.com/embed/VxQDE5-JgTA?autoplay=1&mute=1",
            list: [{name: 'Showreel 2019', url: "https://www.youtube.com/watch?v=z4Kjtf2aO6w&t=25s"}],
        },
        {
            title: 'Events',
            url: "https://www.youtube.com/embed/lYc1dOVl55M?autoplay=1&mute=1",
            list: [{name: 'Ace Tech Exhibition - 2018 Day 2!', url: "https://www.youtube.com/watch?v=JWBARduPMmk"}, {name: 'Ace Tech Exhibition Day 1', url: "https://www.youtube.com/watch?v=8I4AuuG-Jas&t=1s"}, {name: 'Launch of New Range of GM Fans at JITO Udaan', url: "https://www.youtube.com/watch?v=-susUCCDqRw"}, {name: 'Abhinesh Weds Apekshita', url: "https://youtu.be/oup0gJBtVV4"}],
        },
        {
            title: 'Brands',
            url: "https://www.youtube.com/embed/QVoXKg2jMn0?autoplay=1&mute=1",
            list: [{name: 'ICICI Suna kya case study', url: "https://youtu.be/U2uZ_qOjx40"}, {name: 'syska final render', url: "https://youtu.be/P7g-ilaLyMk"}, {name: 'Meme Compilation #1 | Sajjad Khan', url: "https://youtu.be/GBPCs7k_OCw",}],
        },
        {
            title: 'Restaurents and Clubs',
            url: "https://www.youtube.com/embed/NL6O9qVeuP4?autoplay=1&mute=1",
            list: [{name: "The Stadium Bar Valentine's day Aftermovie", url: "https://youtu.be/BqOeaX51qmI"}, {name: 'Roti & Grill Menu Overview (EdiXual Creations version)', url: "https://youtu.be/kbeUq9-Fl50"}],
        },
        {
            title: 'Vlogs',
            url: "https://www.youtube.com/embed/kmpU6jbUrlc?autoplay=1&mute=1",
            list: [{name: 'Mohsin Khan’s Birthday in Singapore | Halloween 2019', url: "https://youtu.be/cwvM3b4enzA"}, {name: '2 WEDDINGS IN 1 DAY! Mumbai & Surat |', url: "https://www.youtube.com/watch?v=JKUC9BhscrI&t=428s"}, {name: 'How to Style Joggers | Simple & Easy Ways', url: "https://www.youtube.com/watch?v=Hcj157xfb00&t"}, {name: 'WHEN YOU LOVE YOUR CAR TOO MUCH', url: "https://youtu.be/O6XjbIOwXOI"}],
        },
        {
            title: 'Personal projects',
            url: "https://www.youtube.com/embed/Vuq4fgjAJhM?autoplay=1&mute=1",
            list: [{name: 'MNM Collaring Drive with #TeamEXC', url: "https://youtu.be/wobPZMynFb4"}, {name: 'Project Funny News', url: "https://youtu.be/gZfDtDBXk5Y"}, {name: 'Office Inauguration | EdiXual Creations & Dynamic Events', url: "https://youtu.be/4bKtBhU2anU"}],
        },

    ]
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
                                    <li onClick={() => {window.open(listItem.url)}}>{listItem.name}</li>
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
