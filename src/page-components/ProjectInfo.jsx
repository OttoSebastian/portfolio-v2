import React from 'react';
//Components
import Button from './Button';

const nameStyle = {
    color: "navy",
    fontWeight: "600"
}

export default function ProjectInfo({name="Project name...", keyWords="Key words...", buttonClick}) {
  return (
    <div className='projectInfo'>
        <div className='projectName'>
            <span style={nameStyle}>{name}</span>
        </div>
        <div className='projectKeyWords'>
            {keyWords}
        </div>
        <div className='projectCode'>
            <Button text={"See code"} onClick={buttonClick}/>
        </div>
    </div>
  );
}
