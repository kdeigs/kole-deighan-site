import React, { Component } from 'react';
import './main.scss';



class App extends Component {
  render(){
    return(
      <div className='main'>
        <div className='background-image'>
          <img src='./images/chicago_skyline.jpg' alt='Background of the Chicago Skyline' className='landingImage'/>
        </div>
        <img src='./images/Koles_logo.png' alt='Kole Deighan Logo' className='logo'/>
        <div className='hiring'>
          <h1>Looking for a New Full-Stack Developer?</h1>
          <a href='/' className='button'>Let's Talk</a>
        </div>
        <div className='aboutMe'>
          <img src='./images/DeighanCropped.jpg' alt='Headshot of Kole Deighan' className='headshot'></img>
          <h2>Hi!</h2>
          <h4 className='about'>My name is Kole Deighan and I am a full-stack developer who is new to the field and is looking to break into the industry!</h4>
          <br />
          <br />
          <a href='/' className='button'>About Me</a>
        </div>
        <div className='projects'>
          <h3>Current Freelance Projects</h3>
          <div className='projectImages'>
            <img src='images/Healthshare_Figma.png' alt='Healthshare Prototype' className = 'projectImage'/>
            <img src='images/Message_Figma.png' alt='Healthshare Prototype' className = 'projectImage'/>
          </div>
          <a href='/' className='button' id='projectsButton'>Projects</a>
        </div>
        <div className='contactMe'>
          <div className = 'contactMeText'>
            <h2>Currently Open to Freelance!</h2>
            <h4>If you have a project you belive I could help on, please feel free to reach out!</h4>
          </div>
          <a href='/' className='button' id='contactMeButton'>Contact Me</a>
        </div>
        <footer>
          <p>Email: kbdeigs@gmail.com</p>
          <p>Phone: (773) 451-6363</p>
          <div className='icons'>
            <a href='https://www.linkedin.com/in/kole-deighan-553bb0194/'><img src='images/linkedIn.png' className='icon' alt='linkedIn Icon' /></a>
            <a href='https://github.com/kdeigs'><img src='images/Github.png' className='icon' alt='linkedIn Icon' /></a>
            <a href='https://twitter.com/Kole_Deighan'><img src='images/Twitter.png' className='icon' alt='linkedIn Icon' /></a>
            <a href='https://www.facebook.com/kole.deighan.9'><img src='images/Facebook.png' className='icon' alt='linkedIn Icon' /></a>
          </div>
        </footer>
      </div>
      
    )
  }
}

export default App;