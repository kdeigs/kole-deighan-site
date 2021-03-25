import React, { Component } from 'react';
import './main.scss';
import Landing from './Components/Landing';
import AboutMeHome from './Components/AboutMeHome';
import ProjectsHome from './Components/ProjectsHome';
import ContactMe from './Components/ContactMe';
import Footer from  './Components/Footer';



class App extends Component {
  render(){
    return(
      <div className='main'>
        <Landing />
        <AboutMeHome />
        <ProjectsHome />
        <ContactMe />
        <Footer />
      </div>
      
    )
  }
}

export default App;