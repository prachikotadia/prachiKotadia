import React, { useState } from 'react';
import './Certificate.css';

// Import PDF files
const webDevPdf = require('./resume.pdf');
const jsEssentialsPdf = require('./resume.pdf');
const reactJsPdf = require('./resume.pdf');
const dataStructuresPdf = require('./resume.pdf');



const Certificate = () => {
    const [modalData, setModalData] = useState(null);

    // Example certificate data with individual PDFs
    const certificates = [
        {
            title: "Web Development Bootcamp",
            institution: "Code Academy",
            year: "2023",
            image: "https://via.placeholder.com/300x200?text=Web+Development",
            pdf: webDevPdf,
        },
        {
            title: "JavaScript Essentials",
            institution: "Udacity",
            year: "2022",
            image: "https://via.placeholder.com/300x200?text=JavaScript+Essentials",
            pdf: jsEssentialsPdf,
        },
        {
            title: "React JS Fundamentals",
            institution: "Coursera",
            year: "2023",
            image: "https://via.placeholder.com/300x200?text=React+JS+Fundamentals",
            pdf: reactJsPdf,
        },
        {
            title: "Data Structures and Algorithms",
            institution: "edX",
            year: "2023",
            image: "https://via.placeholder.com/300x200?text=Data+Structures+and+Algorithms",
            pdf: dataStructuresPdf,
        },
   
    ];

    const closeModal = () => {
        setModalData(null);
    };

    return (
        <div className="certificate-section">
            <h2>Certificates</h2>
            <div className="certificate-grid">
                {certificates.map((cert, index) => (
                    <div key={index} className="certificate-card">
                        <h3>{cert.title}</h3>
                        <p>{cert.institution}</p>
                        <p>{cert.year}</p>
                        {cert.pdf && (
                            <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
                                <button className="view-button">
                                    View Certificate
                                </button>
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {modalData && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close" onClick={closeModal}>&times;</button>
                        <h3>{modalData.title}</h3>
                        <p>{modalData.institution}</p>
                        <p>{modalData.year}</p>
                        <img src={modalData.image} alt="Certificate" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificate;
