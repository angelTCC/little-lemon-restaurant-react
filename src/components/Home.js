import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function Home() {
    return (
    <Container>
        <Row className='border'>
            <Col lg={6} >
                <h3>Little Lemon</h3>
                <p>We are a family owned <br />
                Mediterranean restaurant, <br />
                focused on traditional recipes<br />
                served with a modern twist.</p>
                <Button variant='warning'>Reservation</Button>
            </Col>
            <Col lg={6}>
                <Image src="." alt='image' />
            </Col>
        </Row>
        <Row>
            <Col md={8} className='border'>
                <h3 style={{textAlign:"left"}}>Special offer!</h3>
                <p>10% Off this week</p>
            </Col>
            <Col md={4} className="text-end">
                <Button variant="warning" style={{textAlign:"right"}}>Book now</Button>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={4}>
                <div className="p-3 border bg-light">
                    <h5>Our new menu</h5>
                    <Image src="holder.js/171x180" />
                    <p> Our menu consists of 12-15 seasonal items based on Italian, Greek, and
                    Turkish culture.</p>
                </div>
            </Col>
            <Col xs={12} md={4}>
                <div className="p-3 border bg-light">
                    <h5>Book a table</h5>
                    <Image src="."/>
                    <p>Content for the second column goes here.</p>
                </div>
            </Col>
            <Col xs={12} md={4}>
                <div className="p-3 border bg-light">
                    <h5>Opening hours</h5>
                    <Image src="."/>
                    <p>The Little Lemon Restaurant is open 7 days a week, except for public
                    holidays.</p>
                </div>
            </Col>
        </Row>
    </Container>
);
};

export default Home;
