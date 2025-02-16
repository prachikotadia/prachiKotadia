import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

// Importing PDFs from the assets folder
import Paper1 from '../../assets/Final_Term_Paper_SPM.pdf';
import Paper2 from '../../assets/Final_Term_Paper_SPM.pdf';
import Paper3 from '../../assets/Final_Term_Paper_SPM.pdf';

const data = [
    {
        id: 1,
        image: Image1,
        title: "Research Paper 1",
        description: "An in-depth analysis of modern web development practices.",
        pdfLink: Paper1
    },
    {
        id: 2,
        image: Image2,
        title: "Research Paper 2",
        description: "Exploring the intricacies of responsive design in mobile apps.",
        pdfLink: Paper2
    },
    {
        id: 3,
        image: Image3,
        title: "Research Paper 3",
        description: "A study on the impact of UX/UI design on user retention.",
        pdfLink: Paper3
    },
];

const ResearchPapers = () => {
    return (
        <section className="research container section" id="research">
            <h2 className="section__title">Research Papers</h2>

            <div className="research__container grid">
                {data.map(({ id, image, title, description, pdfLink }) => {
                    return (
                        <div className="research__card" key={id}>
                            <img src={image} alt='' className='research__img' width="80" />

                            <h3 className="research__title">{title}</h3>
                            <p className="research__description">{description}</p>
                            <a href={pdfLink} className="research__button" target="_blank" rel="noopener noreferrer">
                                View PDF
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default ResearchPapers;
