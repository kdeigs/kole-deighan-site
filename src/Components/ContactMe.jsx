import React, { Component } from 'react';

class ContactMe extends Component {
    render(){
        return(
            <div className='contactMe'>
                <div className = 'contactMeText'>
                    <h2>Currently Open to Freelance!</h2>
                    <h4>If you have a project you belive I could help on, please feel free to reach out!</h4>
                </div>
                <a href='/' className='button' id='contactMeButton'>Contact Me</a>
            </div>
        )
    }
}

export default ContactMe;