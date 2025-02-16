import React from 'react';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';


const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/prachikotadia' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>


            <a href='https://www.linkedin.com/in/prachi-kotadia/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

        </div>
    );
};

export default HeaderSocials;
