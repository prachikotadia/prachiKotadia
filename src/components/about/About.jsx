import React, { useEffect } from 'react';
import './About.css';
import ProfileImage from '../../assets/profile.jpg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';
import './lang.css';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    };

    useEffect(() => {
        const addGoogleTranslateScript = () => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        };

        addGoogleTranslateScript();

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hi,es,gu', // Include other languages as needed
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        };
    }, []);

    return (
        <section className="about container section" id="about">
            <div id="google_translate_element"></div>
            <h2 className="section__title">About Me</h2>
            <div className="about__container grid">
                <img src={ProfileImage} alt="Profile" className='about__img' />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Prachi, a graduate student currently pursuing my Master’s degree in Computer Science at the Illinois Institute of Technology, Chicago.<br /><br />
                            My journey in software engineering has been an exciting mix of challenges and accomplishments, and I’m passionate about continuing to grow in this dynamic field. Currently, I’m expanding my portfolio with diverse projects that showcase my skills and creativity, while also striving to excel as a collaborative team player in my current role.<br /><br />
                        </p>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>
            </div>
            <AboutBox />
        </section>
    );
};

export default About;
