import React, { useState } from "react";
import "./Sidebar.css";

import {
    RiHome2Line,
    RiUser3Line,
    RiBookLine,
    RiDraftLine,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
} from "react-icons/ri";

const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);
    const [hoveredItem, setHoveredItem] = useState("");

    const handleMouseEnter = (itemName) => {
        setHoveredItem(itemName);
    };

    const handleMouseLeave = () => {
        setHoveredItem("");
    };

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item" 
                                onMouseEnter={() => handleMouseEnter("Home")} 
                                onMouseLeave={handleMouseLeave}>
                                <a href="#home" className="nav__link">
                                    <RiHome2Line />
                                    {hoveredItem === "Home" && <span className="tooltip">Home</span>}
                                </a>
                            </li>

                            <li className="nav__item" 
                                onMouseEnter={() => handleMouseEnter("About Me")} 
                                onMouseLeave={handleMouseLeave}>
                                <a href="#about" className="nav__link">
                                    <RiUser3Line />
                                    {hoveredItem === "About Me" && <span className="tooltip">About Me</span>}
                                </a>
                            </li>

                            <li className="nav__item" 
                                onMouseEnter={() => handleMouseEnter("Research Paper")} 
                                onMouseLeave={handleMouseLeave}>
                                <a href="#research" className="nav__link">
                                    <RiBookLine />
                                    {hoveredItem === "Research Paper" && <span className="tooltip">Research Paper</span>}
                                </a>
                            </li>

                      


                            <li className="nav__item" 
                                onMouseEnter={() => handleMouseEnter("Blog")} 
                                onMouseLeave={handleMouseLeave}>
                                <a href="#blog" className="nav__link">
                                    <RiDraftLine />
                                    {hoveredItem === "Blog" && <span className="tooltip">Blog</span>}
                                </a>
                            </li>


                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button onClick={() => { props.switchTheme(); showMenu(!toggle) }} className="nav__link footer__button">
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                        {hoveredItem === "Theme" && <span className="tooltip">Theme</span>}
                    </button>
                </div>
            </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
                <RiMenu2Line />
            </div>
        </>
    );
};

export default Sidebar;
