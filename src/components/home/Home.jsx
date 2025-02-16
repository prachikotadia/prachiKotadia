import React from 'react';
import './Home.css';
import profilePicture from '../../assets/profilePicture.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    const scrollToContact = () => {
        console.log('Scroll to Contact clicked');
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error('Contact section not found');
        }
    };

    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={profilePicture} alt="Profile" className='home__img' width='120' />
                <h1 className="home__name">Prachi Kotadia</h1>
                <span className="home__education"></span>

                <HeaderSocials />

                <button className="btn" onClick={scrollToContact}>Contact Me</button>

                <ScrollDown />
            </div>
        </section>
    );
};

export default Home;
