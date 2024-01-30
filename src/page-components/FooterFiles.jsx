import React from "react";
//Icons
import { FaRegFileAlt, FaGithub } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
//Files
import CV from "../personal-files/cv.pdf";
import Certificate from '../personal-files/react_certificate.pdf';

export default function FooterFiles() {

    const openGitHub = () => {
      window.open('https://github.com/OttoSebastian', '_blank');
    };
    const openCV = () => {
      window.open(CV, '_blank');
    };
    const openCertificate = () => {
      window.open(Certificate, '_blank');
    };

  return (
    <div className='footerContent'>
        <p className="footerHeader">Personal files</p>
        <div className='footerItem' onClick={openGitHub}>
          <i className="footerIcon" style={{cursor: "pointer"}}>{<FaGithub/>}</i>
          <p className='footerText' style={{cursor: "pointer"}}>GitHub</p>
        </div>
        <div className='footerItem' onClick={openCV}>
          <i className='footerIcon' style={{cursor: "pointer"}}>{<FaRegFileAlt/>}</i>
          <p className='footerText' style={{cursor: "pointer"}}>CV in finnish (.pdf)</p>
        </div>
        <div className='footerItem' onClick={openCertificate}>
          <i className='footerIcon' style={{cursor: "pointer"}}>{<PiCertificateBold/>}</i>
          <p className='footerText' style={{cursor: "pointer"}}>Udemy's React certificate (.pdf)</p>
        </div>
        <div className='footerItem'>
          <i className='footerIcon'>{<FaRegFileAlt/>}</i>
          <p className='footerText'>Thesis (Coming soon)</p>
        </div>
    </div>
  )
}