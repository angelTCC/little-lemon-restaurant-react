import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    return (
    <Container>
        <Row>
        <Col xs={12} md={4}>
            <div className="p-3 border bg-light">
            <h4>Column 1</h4>
            <p>Content for the first column goes here.</p>
            </div>
        </Col>
        <Col xs={12} md={4}>
            <div className="p-3 border bg-light">
            <h4>Column 2</h4>
            <p>Content for the second column goes here.</p>
            </div>
        </Col>
        <Col xs={12} md={4}>
            <div className="p-3 border bg-light">
            <h4>Column 3</h4>
            <p>Content for the third column goes here.</p>
            </div>
        </Col>
        </Row>
    </Container>
);
};

export default Home;
