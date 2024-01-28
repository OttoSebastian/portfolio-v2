import React from 'react';

const headerStyle = {
  fontSize: "3rem",
  fontWeight: "100",
  marginBottom: "1rem"
}
const iconStyle = {
  fontSize: "3rem",
  color: "navy"
}

export default function SkillCard({icon, header="Header...", children}) {
  return (
    <div className='skillCard'>
      <div className='cardHeader'>
        <span style={iconStyle}>{icon}</span>
      </div>
      <div className='cardBody'>
        <span style={headerStyle}>{header}</span>
        {children}
      </div>
    </div>
  );
}
