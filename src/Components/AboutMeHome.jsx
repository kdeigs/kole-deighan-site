import React, { Component } from 'react';

class AboutMeHome extends Component{
    render(){
        return(
            <div className='aboutMe'>
                <img src='./images/DeighanCropped.jpg' alt='Headshot of Kole Deighan' className='headshot'></img>
                <h2>Hi!</h2>
                <h4 className='about'>My name is Kole Deighan and I am a full-stack developer who is new to the field and is looking to break into the industry!</h4>
                <br />
                <br />
                <a href='/aboutMe' className='button'>About Me</a>
            </div>
        )
    }
}

export default AboutMeHome;