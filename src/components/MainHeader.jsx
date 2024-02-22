import React from 'react';
import waves from '../videos/waves.mp4';

const videoBackgroundStyle = {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(100%) brightness(50%) contrast(150%)',
  };

  const headerContainer = {
    position: 'absolute',
    color: 'white',
    mixBlendMode: 'difference',
    height: '40%',
    display: 'flex',
    alignItems: 'center',
  };

export default function MainHeader({refer}) {
  return (
    <div style={videoBackgroundStyle} ref={refer}>
        <video autoPlay loop muted playsInline style={videoStyle}>
          <source src={waves} type="video/mp4" />
        </video> 
        <div style={headerContainer}>
            <h1 style={{fontSize: '30rem'}}>Otto Sebastian</h1>
        </div>
    </div>
  )
}
