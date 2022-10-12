import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import AlwaysOnTop from './layout/AlwaysOnTop';

export default function App() {
return (
    <div className="App">
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
    </div>
);
}
