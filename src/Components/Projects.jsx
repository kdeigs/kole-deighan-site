import React, { Component } from 'react';

class Projects extends Component{
    render(){
        return(
            <div>
                <nav>
                    <a href='/' className='back'>{'<-'}Back</a>
                </nav>
                <h1 className='gray'>Projects</h1>
                <div className='projectList'>
                    <div className='projectItem'>
                        <h3>Blackjack/Simon Says</h3>
                        <img src='./images/BlackjackSimonSays.png' alt='Blackjack and Simon Says Application' className='projectPageImage'/>
                        <h4 className='projectText'>A Basic Front-end Application using HTML, CSS, and Javascript to recreate a game of blackjack and Simon Says.</h4>
                        <a href='https://kdeigs.github.io/blackjack-app/' target='_blank' rel='noreferrer'>Link to Project</a>
                    </div>

                    <div className='projectItem'>
                        <h3>Cute Animals</h3>
                        <img src='./images/CuteAnimals.png' alt='Cute Animals Project Homepage' className='projectPageImage'/>
                        <h4 className='projectText'>An Express-based server with full CRUD functionality that serves images of cute animals using EJS.</h4>
                        <a href='https://github.com/kdeigs/cute-animals-project' targer='_blank' rel='noreferrer'>Link to Project</a>
                    </div>

                    <div className='projectItem'>
                        <h3>NotSpotify</h3>
                        <img src='./images/NotSpotify.png' alt='NotSpotify Application' className='projectPageImage'/>
                        <h4 className='projectText'>A Full Stack Application using the MERN Stack that allows users to add artists to their favorites from a curated list of artists using the spotify API.</h4>
                        <a href='https://github.com/kevinsherrell/notSpotify' target='_blank' rel='noreferrer'>Link to Project</a>
                    </div>

                    <div className='projectItem'>
                        <h3>Healthshare</h3>
                        <img src='./images/Healthshare_Figma.png' alt='Healthshare Website Mockup' className='projectPageImage'/>
                        <h4 className='projectText'>A React Application website for the Healthshare corporation. Project Link not attatched as this is a current project I am working with the owner on.</h4>
                    </div>

                    <div className='projectItem'>
                        <h3>Message From a Vine</h3>
                        <img src='./images/Message_Figma.png' alt='Message From a Vine Mockup' className='projectPageImage'/>
                        <h4 className='projectText'>Another MERN stack application for the Message from a Vine Co. Currently Working with the owner to finish the project and as such it is not linked</h4>
                    </div>

                    <div className='projectItem'>
                        <h3>Level 20 Fitness</h3>
                        <img src='./images/Level20Fitness.png' alt='Message From a Vine Mockup' className='projectPageImage'/>
                        <h4 className='projectText'>A project built in React Native with a Flask Python backend that gamifies fitness using the levelling system from dungeons and dragons</h4>
                        <a href='https://github.com/kdeigs/level20Fitness' target='_blank' rel='noreferrer'>Link to Project</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Projects;