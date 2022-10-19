import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import styled from 'styled-components';

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
                <div className="logo-section"><img src={menu.logo} alt="brand-logo"/></div>

                {/* DESKTOP MENU, visible on large screen*/}
                <div className="menu-items">
                    {menu.items.map((item, index) => (<a key={index} className="menu-item" href={item.link}>{item.name}</a>))}
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
    display: space-between;
    .mobile_menu {
        display: none;
    }
    .navbar {
        height: 100px;
        .mobile_menu-buttons {
            display: none;
        }

        .logo-section {
            height: 100%;
            padding: 0.5rem;
        }

        .menu-items {
            display: flex;
            margin-right: 1rem;
            gap: 1rem;
        }
    }

    @media only screen and (max-width: 768px) {
        .mobile_menu {
            display: flex;
            flex-direction: column;
        }
        .navbar {
            .menu-items {
                display: none;
            }
            .mobile_menu-buttons {
                display: block;
            }
        }

    }
`;
