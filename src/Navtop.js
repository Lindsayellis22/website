import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Navtop.css';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'

const customClass = "myCustomNavLink";

function Navtop(props) {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" className='navigation'>
                <Container className='nav-text'>
                <Navbar.Brand img src="./logo.jpeg" href="#home" alt='logo'></Navbar.Brand>
                <Nav varient="pills" onSelect={handleSelect}>
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li><Link to='/about' className='link'>About</Link></li>
                    <NavDropdown className='dropdown' title="Books" bsPrefix={customClass}>
        <NavDropdown.Item href='book1'><Link to='history-major-league-baseball'>History of Majour League Baseball Records</Link></NavDropdown.Item>
        <NavDropdown.Item>Another action</NavDropdown.Item>
        <NavDropdown.Item>Something else here</NavDropdown.Item>
      </NavDropdown>
                    <Nav.Link href="#contact" bsPrefix={customClass}>Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>  
        </div>
    );
}

export default Navtop;