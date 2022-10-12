import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import logo from '../assets/images/logo512.png'
import { LinkContainer } from 'react-router-bootstrap'


export default function TopBar() {

    return(
        <Navbar collapseOnSelect expand="lg" className={'position-sticky ps-0 bg-white'} fixed={'top'}>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <Image
                            alt="logo_vorpe_vins_degustations"
                            src={logo}
                            height="60"
                            roundedCircle={true}
                            className="d-inline-block"
                        />{' '}
                        vjo dev
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="w-100 d-flex justify-content-end">
                            <LinkContainer to="/"><Nav.Link className="navlink">Home</Nav.Link></LinkContainer>
                            <LinkContainer to="/projects"><Nav.Link className="navlink">Projects</Nav.Link></LinkContainer>
                            <LinkContainer to="/about"><Nav.Link className="navlink">About</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
