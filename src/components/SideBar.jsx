import React from 'react';
//Icons
import { IoHome, IoGridOutline, IoCodeSlashOutline, IoPersonOutline } from "react-icons/io5";
import { AiOutlineInfo } from "react-icons/ai";

export default function NavigationBar({
  clickEvent1, 
  clickEvent2, 
  clickEvent3, 
  clickEvent4, 
  clickEvent5
}) {

  //Click handlers
  const section1 = () => {
    clickEvent1();
  };
  const section2 = () => {
    clickEvent2();
  };
  const section3 = () => {
    clickEvent3();
  };
  const section4 = () => {
    clickEvent4();
  };
  const section5 = () => {
    clickEvent5();
  };

  return (
    <div className='sidebar'>
      <div className='item' onClick={section1}>
        <IoHome class="icon"/>
        <div className='text'>Home</div>
      </div>
      <hr className='hrSideBar'/>
      <div className='item' onClick={section2}>
        <AiOutlineInfo class="icon"/>
        <div className='text'>About me</div>
      </div>
      <div className='item' onClick={section3}>
        <IoCodeSlashOutline class="icon"/>
        <div className='text'>Skills</div>
      </div>
      <div className='item' onClick={section4}>
        <IoGridOutline class="icon"/>
        <div className='text'>Projects</div>
      </div>
      <div className='item' onClick={section5}>
        <IoPersonOutline  class="icon"/>
        <div className='text'>Personal</div>
      </div>
    </div>
  )
}