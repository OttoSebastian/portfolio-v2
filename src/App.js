import React, {useRef} from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
//Components
import MainHeader from './components/MainHeader';
import SideBar from './components/SideBar';
import ItSkills from './components/ItSkills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  //References
  const topRef = useRef();
  const aboutRef = useRef();
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
  const handleGoToIT = () => {
    itRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToProjects = () => {
    projectsRef.current.scrollIntoView({behavior: "smooth"});
  }
  const handleGoToFooter = () => {
    footerRef.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <>
      <SideBar
        clickEvent1={handleGoToTop} 
        clickEvent2={handleGoToAboutMe}
        clickEvent3={handleGoToIT}
        clickEvent4={handleGoToProjects} 
        clickEvent5={handleGoToFooter}
      />
      <MainHeader refer={topRef}/>
      <AboutMe refer={aboutRef}/>
      <ItSkills refer={itRef}/>
      <Projects refer={projectsRef}/>
      <Footer refer={footerRef}/>
    </>
  );
}

export default App;
