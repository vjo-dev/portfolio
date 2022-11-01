import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import AlwaysOnTop from './layout/AlwaysOnTop';
import styled from 'styled-components';

export default function App() {
    const darkMode = useSelector(state => state.theme.isDarkMode)

    return (
        <AppStyle className="App" darkMode={darkMode}>
            <Router>
                <AlwaysOnTop />
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/projects" element={<ProjectsPage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                </Routes>
                <Footer />
            </Router>
        </AppStyle>
    );
}

const AppStyle = styled.div`
    --blue-1: hsl(205, 100%, 46%);
    --blue-2: hsl(205, 100%, 80%);
    --green-1: hsl(105, 58%, 44%);
    --green-2: hsl(105, 58%, 84%);
    --bg-color: ${props => props.darkMode? "black" : "white"};
    --text-color: ${props => props.darkMode? "white" : "black"};
    --text-color-light: ${props => props.darkMode? "black" : "white"};
    --blue: ${props => props.darkMode? "var(--blue-2)" : "var(--blue-1)"};
    --light-blue: ${props => props.darkMode? "var(--blue-1)" : "var(--blue-2)"};
    --green: ${props => props.darkMode? "green" : "green"};
    --light-green: ${props => props.darkMode? "lightgreen" : "lightgreen"};
    --border-radius: 8px;

    background: var(--bg-color);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

	h1 {
		font-size: 5rem;
		font-weight: 600;
	}

	h2 {
		font-size: 3rem;
		font-weight: 500;
	}

    h3 {
        font-size: 2rem;
        font-weight: 400;
    }

    h4 {
        font-size: 1.6rem;
    }

    h5 {
        font-size: 1.2rem;
    }

@media only screen and (max-width: 800px){

    h1 {
        font-size: 3.5rem;
    }
    
    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.3rem;
    }

    h4 {
        font-size: 1rem;
    }

    h5 {
        font-size: 1rem;
    }

}
`;

