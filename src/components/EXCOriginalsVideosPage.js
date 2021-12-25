import React from 'react'

import './EXCOriginalsVideosPage.css'

function EXCOriginalsVideosPage() {
    const videosLinks = [
        {
            linkId: 0,
            linkUrl: "https://www.youtube.com/embed/agoTVmCUh70?autoplay=1&mute=1",
        },
        {
            linkId: 1,
            linkUrl: "https://www.youtube.com/embed/agoTVmCUh70?autoplay=1&mute=1",
        },
        {
            linkId: 2,
            linkUrl: "https://www.youtube.com/embed/agoTVmCUh70?autoplay=1&mute=1",
        },
        {
            linkId: 3,
            linkUrl: "https://www.youtube.com/embed/agoTVmCUh70?autoplay=1&mute=1",
        },
        {
            linkId: 4,
            linkUrl: "https://www.youtube.com/embed/agoTVmCUh70?autoplay=1&mute=1",
        },
        {
            linkId: 5,
            linkUrl: "https://www.youtube.com/embed/agoTVmCUh70?autoplay=1&mute=1",
        },

    ]
    return (
        <div className="videos-page section-container">
        <h1 className="section-title">videos</h1>
            <div className="videos-page-frames-container">
                {videosLinks.map((link) => {
                return (
                    <div key={`${link.linkId}`} className="videos-page-frame">
                        <iframe src={`${link.linkUrl}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                )
                })}
            </div>
        </div>
    )
}

export default EXCOriginalsVideosPage
