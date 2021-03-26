import React, { Component } from 'react';

import Landing from './Landing';
import AboutMeHome from './AboutMeHome';
import ProjectsHome from './ProjectsHome';
import ContactMe from './ContactMe';
import Footer from  './Footer';




class Home extends Component {
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

export default Home;