import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Navtop.css';


function Navtop(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" className='navigation'>
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>  
        </div>
    );
}

export default Navtop;