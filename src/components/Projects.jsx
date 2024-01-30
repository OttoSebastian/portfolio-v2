import React from 'react';
//Logo
import logo from '../images/logo.png';
//Components
import ProjectInfo from '../page-components/ProjectInfo';

const logoStyle = {
  borderRadius: "50%",
  width: "12%",
  marginTop: "5rem",
  marginBottom: "3rem"
}

export default function Projects({refer}) {

  const portfolioCode = () => {
    window.open('https://github.com/OttoSebastian/portfolio-v2', '_blank');
  };
  const weatherAppCode = () => {
    window.open('https://github.com/OttoSebastian/weather-app', '_blank');
  };

  return (
    <div className='projectsDiv' ref={refer}>
        <div className='contentHeader'>
            <h1>My coding projects</h1>
            <p style={{fontSize: "1.4rem", color: "black"}}>
              Here you can find all my free time projects listed below. The goal with these projects has been to create something I'm interested about 
              and also to test my learned skills in practice. Mainly these two projects are focused on JavaScript and React. In the Weather app project I wanted 
              to implement some API-calls to my code to get a basic understanding of how they work. In the Portfolio project (the one you are looking at right now) 
              I tried to focus on creating a clean and minimalist-styled webpage with React, and I think it turned out to match my vision pretty well. 
              You can find my future projects here aswell, or in my Github profile. Feel free to take a look at the code of each project!
            </p>
        </div>
        <div className='projectListContainer'>
            <ProjectInfo name='Webpage portfolio' keyWords='HTML, CSS, JavaScript, React' buttonClick={portfolioCode}/><br />
            <ProjectInfo name='Weather app' keyWords='HTML, CSS, JavaScript, React, API-calls' buttonClick={weatherAppCode}/>
        </div>
        <img src={logo} alt="logo" style={logoStyle}/>
    </div>
  );
}
