import React from 'react';

const headerStyle = {
  fontSize: "3rem",
  fontWeight: "100",
  marginBottom: "1rem"
}
const iconStyle = {
  width: "5rem",
  color: "navy",
  padding: "0.5rem"
}

export default function SkillCard({icon, header="Header...", children}) {
  return (
    <div className='skillCard'>
      <div className='cardHeader'>
        <img src={icon} alt='icon' style={iconStyle}/>
      </div>
      <div className='cardBody'>
        <span style={headerStyle}>{header}</span>
        {children}
      </div>
    </div>
  );
}
