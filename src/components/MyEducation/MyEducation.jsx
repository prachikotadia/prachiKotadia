import React, { useState } from 'react';
import './MyEducation.css';
import charusat from './charusat.jpg'
import chicago from './chicago.png'

const MyEducation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const educationData = [
    {
      name: 'Illinois Institute of Technology',
      degree: 'Master’s degree in Computer Science',
      graduation: 'Expected Graduation: May 2025',
      url: 'https://www.iit.edu',
      backgroundImage: chicago, 
    },
    {
      name: 'Charotar University of Science and Technology',
      degree: 'Bachelor of Technology in Electronics and Communication Engineering',
      graduation: 'Graduation: May 2023',
      url: 'https://www.charusat.ac.in',
      backgroundImage: charusat, 
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % educationData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + educationData.length) % educationData.length);
  };

  return (
    <section className="education">
      <h2>My Education</h2>
      <div className="slider">
        <ul
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {educationData.map((edu, index) => (
            <li
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              onClick={() => window.open(edu.url, '_blank')}
              style={{ backgroundImage: `url(${edu.backgroundImage})` }} // Set the background image
            >
              <div className="slide-content">
                <h3>{edu.name}</h3>
                <p>{edu.degree}</p>
                <p>{edu.graduation}</p>
                <span className="info-text">Click here</span>
              </div>
            </li>
          ))}
        </ul>
        <button
          className={`arrow left ${currentSlide === 0 ? 'disabled' : ''}`}
          onClick={prevSlide}
        >
          &#8249;
        </button>
        <button
          className={`arrow right ${currentSlide === educationData.length - 1 ? 'disabled' : ''}`}
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>
      <div className="dots">
        {educationData.map((_, index) => (
          <button
            key={index}
            className={currentSlide === index ? 'active' : ''}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default MyEducation;
