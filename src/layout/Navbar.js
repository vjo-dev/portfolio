import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { List, X } from 'react-bootstrap-icons';

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
                <div className="mobile-menu-buttons">
                    {!isExpanded && <List onClick={handleExpand} />}
                    {isExpanded && <X onClick={handleExpand} />}
                </div>
            </div>

            {/* MOBILE MENU and CLOSE BUTTON, visible on small screen when mobile menu is visible*/}
            {isExpanded && <div className="mobile-menu-items">
                        {menu.items.map((item, index) => (<NavLink end key={index} className="mobile-menu-item" to={item.link}>{item.name}</NavLink>))}
                    </div>}
        </NavbarStyle>
    );
}

const NavbarStyle = styled.div`
    width: 100%;
    .navbar {
        display: flex;
        justify-content: space-between;
        padding: 0.4rem;
        align-items: center;
        width: 100%;
        height: 10vh;
    }

    .mobile-menu-buttons {
        display: none;
    }

    .mobile-menu-items {
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
        padding: 0.4rem 1rem;
        border-radius: var(--border-radius);

        :hover {
            color: var(--blue-2);
        }
    }

    .active {
        color: var(--blue-1);
        font-weight: bold;
    }

@media only screen and (max-width: 800px){
    .menu-items {
        display: none;
    }

    .mobile-menu-buttons {
        display: flex;
        width: 35px;
        svg {
            width: 100%;
            height: auto;
            }
    }

    .mobile-menu-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        margin-bottom: 1rem;
    }

    .mobile-menu-item {
        all: unset;
        font-size: 1.3rem;
        cursor: pointer;
        padding: 0.4rem 1rem;
        margin-right: 1rem;
    }

    .active {
        color: var(--blue-1);
        font-weight: bold;
    }
}
`;
