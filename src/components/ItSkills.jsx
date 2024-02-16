import React from 'react';
//Icons
import { FaWindows, FaRobot, FaHtml5, FaReact } from "react-icons/fa";
import { SiVisualstudiocode, SiCsharp, SiTypescript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
//Components
import SkillCard from '../page-components/SkillCard'

export default function ItSkills({refer}) {
  return (
    <div className='itSkillsDiv' ref={refer}>
      <div className='contentHeader'>
        <h1>What skills do I offer?</h1>
        <p style={{fontSize: "1.4rem", color: "black"}}>
          Here are some of my skills in IT and programming. These skills include programming languages, different softwares, systems etc. 
          Mainly these skills have been learned during my studies at LAB, but I'm motivated to grow my skill set on my free time aswell. 
          An example of this is my interest in Udemy's programming courses. So far I've completed one Udemy course on React, but I'm working on courses in TypeScript and Tailwind CSS. <br /><br />
          In addition to my programming skills, I possess knowledge in agile software development and data-analytics. Also Kanban-styled structure of task-management 
          has played a key part in my projects. In my studies I've included courses on Lean and Six Sigma (Yellow Belt) aswell.
        </p>
      </div>
      <div className='skillsContent'>
        <SkillCard icon={<FaWindows/>} header='Office 365'>
          All basic Office 365 apps have become very familiar to me during my studies. I've completed a more in-depth course on these aswell.
        </SkillCard>
        <SkillCard icon={<SiVisualstudiocode/>} header='Visual Studio'>
          Visual Studio Code has been the main platform for my coding projects. Also during my C# courses I used normal Visual Studio.
        </SkillCard>
        <SkillCard icon={<FaRobot/>} header='UiPath StudioX'>
          I've also included robotic process automation (RPA) in my studies. On this subject the used platform was UiPath StudioX.
        </SkillCard>
      </div>
      <div className='skillsContent'>
        <SkillCard icon={<FaHtml5/>} header='HTML'>
          Basic structure of webpages has become very familiar with HTML and using it, for example in JavaScript projects is fluent.
        </SkillCard>
        <SkillCard icon={<IoLogoCss3/>} header='CSS'>
          CSS is a part of every project and I'm currently studying a course about Tailwind CSS to deepen my understanding in CSS.
        </SkillCard>
        <SkillCard icon={<SiCsharp/>} header='C#'>
          In C# I've got experience on creating object-oriented projects. Even tho C# isn't my main point of focus at the moment, I really enjoyed working with it.
        </SkillCard>
      </div>
      <div className='skillsContent'>
        <SkillCard icon={<IoLogoJavascript/>} header='JavaScript'>
          JavaScript is at the moment my main point of focus. I think JS is one of the most important languages for Frontend-development.
        </SkillCard>
        <SkillCard icon={<FaReact/>} header='React'>
          React is my main strength as a upcoming developer. I enjoy working with it and feel like this library matches my goals when it comes to Frontend-development.
        </SkillCard>
        <SkillCard icon={<FaDatabase/>} header='MySQL'>
          There hasn't been much backend focused content in my studies, but MySQL was used on some of my school projects. Basic knowledge of datatables and queries.
        </SkillCard>
      </div>
      <div className='skillsContent'>
        <SkillCard icon={<SiTypescript/>} header='TypeScript'>
          I've completed a Udemy course about TypeScript. During the course the basics of TypeScript became familiar and I'm planning to do a project with TS soon.
        </SkillCard>
      </div>
    </div>
  )
}
