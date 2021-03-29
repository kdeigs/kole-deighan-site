import React, { Component } from 'react';

import Footer from './Footer';

class AboutMe extends Component{
    render(){
        return(
            <div>
                <nav>
                    <a href='/' className='back'>{'<-'}Back</a>
                </nav>
                <div className='whoAmI aboutMeBlock'>
                    <h2>Who am I?</h2>
                    <img src='./images/DeighanCropped.jpg' alt='Kole Deighan Headshot' className='mobileImage'/>
                    <div className='aboutMeContent'>
                        <h4 className='aboutMeText'>Professionally I am a full-stack engineer from Chicago, but personally I like to think of myself as a lot more! I’ll stick to the professional stuff first. I’ve laid out a few of the most commonly asked questions, but if you have any others, please feel free to reach out!</h4>
                        <img src='./images/DeighanCropped.jpg' alt='Kole Deighan Headshot' className='aboutMeImage'/>
                    </div>
                </div>

                <div className='tldr aboutMeBlock'>
                    <h2>Don't Have a Lot of Time?</h2>
                    <h4>Here is my Resume and the TLDR. I am a full stack engineer who specializes in the MERN stack and Python, but also dabble in C, C++, and Java. I attended ASU for my first two years, but decided to take a gap semester and join the General Assembly Software Engineering Immersive Program where I am currently finishing up my certification. I have worked on several personal and freelance projects in the past as seen on my github and the projects page. If you have any questions, please feel free to reach out either by phone or email!</h4>
                    <h4>Email: <a href='mailto:kbdeigs@gmail.com' target='_blank' rel='noreferrer'>Kbdeigs@gmail.com</a></h4>
                    <h4>Phone: (773) 451-6363</h4>
                    <h4>Resume: <a href='./Kole_Deighan_Resume.pdf' download>Kole_Deighan_Resume.pdf</a></h4>
                </div>

                <div className='education aboutMeBlock'>
                    <h2>What is Your Education</h2>
                    <img src='./images/arizona.jpg' alt='arizona desert' className='mobileImage' />
                    <div className='aboutMeContent'>
                        <img src='./images/arizona.jpg' alt='arizona desert' className='aboutMeImage' />
                        <h4 className='aboutMeText'>Initially I attended Arizona State University, but with the advent of Covid, I realized that I was paying full-price but not recieving a full education. I decided to take a gap semester and join the General Assembly Programming Bootcamp in Chicago! I am in the process of transferring to the University of Illinois in Chicago to complete my computer science degree while actively pursuing experience in the field. I am currently considered a Junior in my program.</h4>
                    </div>
                </div>

                <div className='workExperience aboutMeBlock'>
                    <h2>What is Your Work Experience</h2>
                    <img src='./images/Office.jpg' alt='Office Space' className='mobileImage' />
                    <div className='aboutMeContent'>
                        <h4 className='aboutMeText'>Although I am young, I have quite a bit of work experience as I have been working since I was 16! My first job was in the customer service industry as a (senior) host where I learned the basics of the customer first mindset as well teamwork and leadership. I even helped to develop a new training method that is still implemented in the resturaunt group today. In college, I also worked as an office assistant for the Business School at ASU where I learned how to work in a professional setting as well as how to use the microsoft suite effectively.</h4>
                        <img src='./images/Office.jpg' alt='Office Space' className='aboutMeImage' />
                    </div>
                </div>

                <div className='programming aboutMeBlock'>
                    <h2>What about Programming Experience</h2>
                    <img src='./images/Code.jpg' alt='Code Snippit' className='mobileImage' />
                    <div className='aboutMeContent'>
                        <img src='./images/Code.jpg' alt='Code Snippit' className='aboutMeImage' />
                        <h4 className='aboutMeText'>Well for starters, I built this site from the ground up using React as a framework and SASS for styling. Besides my education, I have taken part in several freelance, open source, and personal projects as seen on my github and the projects page. My strengths include the MERN stack as well as Python and Flask for a backend. I also have experience with SQL databases like Postgres and SQLite. As for more classical languages, I have experience in Java, C, and C++ and am currently working to strengthen my knowledge of these through courses on edX.</h4>
                    </div>
                </div>

                <div className='other aboutMeBlock'>
                    <h2>What else do you do?</h2>
                    <img src='./images/MountainDrawing.jpg' alt='Office Space' className='mobileImage' />
                    <div className='aboutMeContent'>
                        <h4 className='aboutMeText'>Thank you so much for asking! I actually do quite a few things besides programming. I’m an avid gamer which is one of the reasons I am in programming One of my projects is even an inventory manager for Destiny 2. I also am a (very, very) amateur artist (the piece displayed here is one of my most recent projects). I take these skills I am currently learning from the art industry and apply them to UI/UX design to create beautiful interfaces for users.</h4>
                        <img src='./images/MountainDrawing.jpg' alt='Office Space' className='aboutMeImage' />
                    </div>
                </div>

                <div className='whereToFind aboutMeBlock'>
                    <h2>Where can I find you?</h2>
                    <div className='aboutMeContent'>
                        <h4 className='aboutMeText'>Quite a few places actually! Shown here are just a few links to my social medias where you can feel free to message me or see who I am! The best ways to reach me would most likely be email or facebook messenger as I check those daily. I also check my twitter a few times weekly.</h4>
                    </div>
                    <div className = 'socials'>
                        <a href='https://github.com/kdeigs' className = 'socialText' target='_blank' rel='noreferrer'><img src='./images/GithubDark.png' alt='github Logo' className='socialImg'/>Kdeigs</a>
                        <a href='https://www.linkedin.com/in/kole-deighan-553bb0194/' className = 'socialText' target='_blank' rel='noreferrer'><img src='./images/linkedIn.png' alt='LinkedIn Logo' className='socialImg'/>Kole Deighan</a>
                        <a href='https://twitter.com/Kole_Deighan' className = 'socialText' target='_blank' rel='noreferrer'><img src='./images/TwitterDark.png' alt='Twitter Logo' className='socialImg'/>Kole_Deighan</a>
                        <a href='https://www.facebook.com/kole.deighan.9' className = 'socialText' target='_blank' rel='noreferrer'><img src='./images/facebookDark.png' alt='Facebook Logo' className='socialImg'/>Kole Deighan</a>
                    </div>
                </div>

                <div className='aboutMeBlock'>
                    <h2>That was Fun!</h2>
                    <div className='aboutMeContent'>
                        <h4>I’m glad it was, I hope you enjoyed learning about me just a little bit. I would love to speak to you personally, so feel free to reach out to me! If you’re looking for a new developer or simply someone to build your website, I might just be the person for the job! Thank you for your time and I hope to hear from you soon!</h4>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default AboutMe;