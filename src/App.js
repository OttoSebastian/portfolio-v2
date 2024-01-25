import React, {useRef} from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
//Components
import MainHeader from './components/MainHeader';
import SideBar from './components/SideBar';

function App() {

  //References
  const topRef = useRef();
  const aboutRef = useRef();
  const educationRef = useRef();
  const workRef = useRef();
  const projectsRef = useRef();
  const itRef = useRef();
  const footerRef = useRef();

  //Handlers
  const handleGoToTop = () => {
    topRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToAboutMe = () => {
    aboutRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToEducation = () => {
    educationRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToWork = () => {
    workRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToProjects = () => {
    projectsRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToIT = () => {
    itRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToFooter = () => {
    footerRef.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <>
      <SideBar
        clickEvent1={handleGoToTop} 
        clickEvent2={handleGoToAboutMe} 
        clickEvent3={handleGoToEducation} 
        clickEvent4={handleGoToWork} 
        clickEvent5={handleGoToProjects} 
        clickEvent6={handleGoToIT}
        clickEvent7={handleGoToFooter}
      />
      <MainHeader refer={topRef}/>
      <AboutMe refer={aboutRef}/>
    </>
  );
}

export default App;
