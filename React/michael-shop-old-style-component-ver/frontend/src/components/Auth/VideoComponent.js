import React from 'react'
import backgroundvideo from 'assets/videos/LoginBackground.mp4'
import styled from 'styled-components';


export const VideoContainer = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
`;



export const VideoComponent = () => {
    return (
        <>
            <VideoContainer className='video_dev' muted autoPlay loop>
                <source src={backgroundvideo} type="video/mp4" />
                <strong>Your browser does not support the video tag.</strong>
            </VideoContainer>
        </>
    )
}

export default VideoComponent