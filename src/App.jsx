import React from 'react';
import { ThemeProvider } from './context/Theme';
import './index.css';
import Navbar from './components/Navbar';
import Myself from './components/Myself';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';


const App = () => {
  return(
    <ThemeProvider>
      <div>
        <Navbar/>
        <Myself/>
        <MySkills/>
        <MyProjects/>
        <AboutMe/>
        <ContactMe/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
};
    

export default App;
