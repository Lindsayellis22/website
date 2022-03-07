import React from 'react';
import Card from 'react-bootstrap/Card';
import './History.css';
import Footer from './Footer.js';
function History(props) {
    return (
        <div>
            <h1>History of Major League Baseball Records 1876-2021 Paperback – December 5, 2021</h1>
            <Card className='book1'>
                <Card.Img variant="top" src="./book1.jpg" />
                {/* <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body> */}
                <Card.Footer>
                <button>Purchase</button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default History;