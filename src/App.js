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
    --bg-color: ${props => props.darkMode? "black" : "white"};
    --text-color: ${props => props.darkMode? "white" : "black"};
    --text-color-light: ${props => props.darkMode? "black" : "white"};
    --blue: ${props => props.darkMode? "lightblue" : "blue"};
    --light-blue: ${props => props.darkMode? "blue" : "lightblue"};
    --green: ${props => props.darkMode? "green" : "green"};
    --light-green: ${props => props.darkMode? "lightgreen" : "lightgreen"};
    --border-radius: 8px;

    background: var(--bg-color);
    color: var(--text-color);
`;

