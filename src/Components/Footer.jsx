import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return(
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
        )
    }
}

export default Footer;