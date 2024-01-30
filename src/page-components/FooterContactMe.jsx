import React from 'react';
//Icons
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

export default function FooterContactMe() {
  return (
    <div className='footerContent'>
        <p className='footerHeader'>Contact me</p>
        <div className='footerItem'>
          <i className='footerIcon'>{<MdOutlineEmail/>}</i>
          <p className='footerText'>ottoh2000@gmail.com</p>
        </div>
        <div className='footerItem'>
          <i className='footerIcon'>{<BsTelephone/>}</i>
          <p className='footerText'>+358 458492988</p>
        </div>
    </div>
  );
}
