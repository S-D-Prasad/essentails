import React, { useState } from 'react';
import { Card, Image } from 'antd';
import videoUrl from '../assets/Banners/Banner-1.mp4';


const SingleBanner = ({ title, description, buttonText, buttonLink }) => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = React.createRef();

    const handleMouseEnter = () => {
        setIsHovered(true);
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        videoRef.current.pause();
    };

    return (
        <>


            <Card
                style={{
                    width: '100%',
                    borderRadius: '10px',
                 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    marginTop: '5px',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <video
                    ref={videoRef}
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    style={{
                        width: '100%',
                        borderRadius: '10px',
                        
                        filter: isHovered ? 'brightness(90%)' : 'brightness(100%)', // Change brightness on hover
                    }}
                />
            </Card>

        </>
    );
};

export default SingleBanner;
