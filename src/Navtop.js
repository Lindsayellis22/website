import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Navtop.css';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'


function Navtop(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" className='navigation'>
                <Container className='nav-text'>
                <Navbar.Brand img src="./logo.jpeg" href="#home" alt='logo'></Navbar.Brand>
                <Nav className='nav-ul'>
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li><Link to='/about' className='link'>About</Link></li>
                    <li><NavDropdown id='dropdown' title="Books">
        <NavDropdown.Item><Link className='book1-link' to='history-major-league-baseball'>History of Majour League Baseball Records</Link></NavDropdown.Item>
        <NavDropdown.Item>Another action</NavDropdown.Item>
        <NavDropdown.Item>Something else here</NavDropdown.Item>
      </NavDropdown></li>
                    <li><Link to='/contact' className='link'>Contact</Link></li>
                </Nav>
                </Container>
            </Navbar>  
        </div>
    );
}

export default Navtop;