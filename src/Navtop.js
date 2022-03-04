import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Navtop.css';

const customClass = "myCustomNavLink";

function Navtop(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" className='navigation'>
                <Container className='nav-text'>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home" bsPrefix={customClass}>Home</Nav.Link>
                    <Nav.Link href="#about" bsPrefix={customClass}>About</Nav.Link>
                    <Nav.Link href="#books" bsPrefix={customClass}>Books</Nav.Link>
                    <Nav.Link href="#contact" bsPrefix={customClass}>Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>  
        </div>
    );
}

export default Navtop;