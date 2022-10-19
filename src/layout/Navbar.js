import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const menu = {
    "logo": logo,
    "items": [
        {"name": "Home", "link": "/"},
        {"name": "Projects", "link": "/projects"},
        {"name": "About", "link": "/about"},
    ],
}

export default function Navbar() {
    const [isExpanded, setExpanded] = useState(false)

    const handleExpand = () => {setExpanded(!isExpanded)}

    return(
        <NavbarStyle>
            <div className="navbar">
                {/* LOGO SECTION */}
                <div className="logo-section">
                    <img src={menu.logo} alt="brand-logo"/>
                    <span>vjo dev</span>
                </div>

                {/* DESKTOP MENU, visible on large screen*/}
                <div className="menu-items">
                    {menu.items.map((item, index) => (<NavLink end key={index} className="menu-item" to={item.link}>{item.name}</NavLink>))}
                </div>

                {/* MOBILE MENU OPEN BUTTON, visible on small screen when mobile menu is not visible*/}
                <div className="mobile_menu-buttons">
                    {!isExpanded && <button onClick={handleExpand}>Open</button>}
                    {isExpanded && <button onClick={handleExpand}>Close</button>}
                </div>
            </div>

            {/* MOBILE MENU and CLOSE BUTTON, visible on small screen when mobile menu is visible*/}
            {isExpanded && <div className="mobile_menu">
                        {menu.items.map((item, index) => (<a key={index} className="menu-item" href={item.link}>{item.name}</a>))}
                    </div>}
        </NavbarStyle>
    );
}

const NavbarStyle = styled.div`
    .navbar {
        display: flex;
        justify-content: space-between;
        padding: 0.4rem;
        align-items: center;
        width: 100%;
        height: 10vh;
    }

    .mobile_menu-buttons {
        display: none;
    }

    .logo-section {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-left: 1rem;
        height: 100%;
        img {
            height: 100%;
            width: auto;
        }
        span {
            font-size: 2rem;
        }
    }

    .menu-items {
        display: flex;
        margin-right: 1rem;
        gap: 1rem;
    }

    .menu-item {
        all: unset;
        font-size: 1.3rem;
        cursor: pointer;
        padding: 0.4rem 2rem;
        border-radius: var(--border-radius);
        
        :hover {
            background: var(--blue);
            color: var(--text-color-light);
        }
    }

    .active {
        background: var(--light-blue);
        color: var(--text-color);
    }
`;
