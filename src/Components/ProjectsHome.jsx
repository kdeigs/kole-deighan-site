import React, { Component } from 'react';

class ProjectsHome extends Component {
    render(){
        return(
            <div className='projects'>
                <h3>Current Freelance Projects</h3>
                <div className='projectImages'>
                    <img src='images/Healthshare_Figma.png' alt='Healthshare Prototype' className = 'projectImage'/>
                    <img src='images/Message_Figma.png' alt='Healthshare Prototype' className = 'projectImage'/>
                </div>
                <a href='/projects' className='button' id='projectsButton'>Projects</a>
            </div>
        )
    }
}

export default ProjectsHome;