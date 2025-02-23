import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function Home() {
    return (
    <Container>
        <Row className='p-3 border'>
            <Col lg={6} >
                <h3>Little Lemon</h3>
                <p>We are a family owned <br />
                Mediterranean restaurant, <br />
                focused on traditional recipes<br />
                served with a modern twist.</p>
                <Button variant='warning'>Reservation</Button>
            </Col>
            <Col lg={6} className='p-3'>
                <Image
                    style={{ maxWidth: "100%", maxHeight: "300px", height: "auto", width: "auto" }} // Limit size
                    src={require("../assets/img/restaurant_food_B.jpg")}
                    alt="Restaurant Food"
                />
            </Col>
        </Row>

        <Row className='p-3 border'>
            <Col>
                <h3>Special offer!</h3>
                <p>10% Off this week</p>
                <Button variant="warning" style={{textAlign:"right"}}>Book now</Button>
            </Col>
        </Row>

        <Row>
            <Col xs={12} md={4}>
                <div className="p-3 border bg-light">
                    <h5>Our new menu</h5>
                    <Image 
                        style={{ maxWidth: "100%", maxHeight: "300px", height: "auto", width: "auto" }} // Limit size
                        src={require("../assets/img/Grill.jpg")} 
                    />
                    <p> Our menu consists of 12-15 seasonal items based on Italian, Greek, and
                    Turkish culture.</p>
                </div>
            </Col>
            <Col xs={12} md={4}>
                <div className="p-3 border bg-light">
                    <h5>Book a table</h5>
                    <Image 
                        style={{ maxWidth: "100%", maxHeight: "300px", height: "auto", width: "auto" }} // Limit size
                        src={require("../assets/img/salad.jpg")} 
                    />
                    <p>Content for the second column goes here.</p>
                </div>
            </Col>
            <Col xs={12} md={4}>
                <div className="p-3 border bg-light">
                    <h5>Opening hours</h5>
                    <Image 
                        style={{ maxWidth: "100%", maxHeight: "300px", height: "auto", width: "auto" }} // Limit size
                        src={require("../assets/img/head_chef.jpg")} 
                    />
                    <p>The Little Lemon Restaurant is open 7 days a week, except for public
                    holidays.</p>
                </div>
            </Col>
        </Row>
    </Container>
);
};

export default Home;
