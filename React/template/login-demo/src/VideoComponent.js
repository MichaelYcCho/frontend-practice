import React from 'react'
import backgroundvideo from './background.mp4'
import './videocomponent.css'

export const VideoComponent = () => {
    return (
        <div>
            <video className='video_dev' muted autoPlay loop>
                <source src={backgroundvideo} type="video/mp4" />
                <strong>Your browser does not support the video tag.</strong>
            </video>
        </div>
    )
}

export default VideoComponent