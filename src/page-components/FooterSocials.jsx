import React from 'react';
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";

export default function FooterSocials() {

  const openInstagram = () => {
    window.open('https://www.instagram.com/otto_sebastian/', '_blank');
  };
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/otto-hyyrynen-267692265', '_blank');
  };
  const openTwitter = () => {
    window.open('https://twitter.com/OttoHyyrynen', '_blank');
  };
  const openFacebook = () => {
    window.open('https://www.facebook.com/od.hyyrynen', '_blank');
  };

  return (
    <div className='footerContent'>
        <p className="footerHeader">My socials</p>
        <div className='footerItem' onClick={openInstagram}>
          <i className="footerIcon" style={{cursor: "pointer"}}>{<BsInstagram/>}</i>
          <p className='footerText' style={{cursor: "pointer"}}>Instagram</p>
        </div>
        <div className='footerItem' onClick={openLinkedIn}>
          <i className="footerIcon" style={{cursor: "pointer"}}>{<RiLinkedinLine/>}</i>
          <p className='footerText' style={{cursor: "pointer"}}>LinkedIn</p>
        </div>
        <div className='footerItem' onClick={openTwitter}>
          <i className="footerIcon" style={{cursor: "pointer"}}>{<BsTwitterX/>}</i>
          <p className='footerText' style={{cursor: "pointer"}}>Twitter/X</p>
        </div>
        <div className='footerItem' onClick={openFacebook}>
          <i className="footerIcon" style={{cursor: "pointer"}}>{<AiOutlineFacebook/>}</i>
          <p className='footerText' style={{cursor: "pointer"}}>Facebook</p>
        </div>
    </div>
  )
}