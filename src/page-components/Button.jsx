import React from 'react';

export default function Button({text, onClick}) {
  return (
    <button className='codeBtn' onClick={onClick}>
      {text}
    </button>
  );
}
