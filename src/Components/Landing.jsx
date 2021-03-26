import React, { Component } from 'react';

class Landing extends Component {
    render(){
        return(
            <div className='landing'>
                <div className='background-image'>
                    <img src='./images/chicago_skyline.jpg' alt='Background of the Chicago Skyline' className='landingImage'/>
                </div>
                <img src='./images/Koles_logo.png' alt='Kole Deighan Logo' className='logo'/>
                <div className='hiring'>
                    <h1>Looking for a New Full-Stack Developer?</h1>
                    <a href='/' className='button' id='letsTalk'>Let's Talk</a>
                </div>
            </div>
        )
    }
}

export default Landing;