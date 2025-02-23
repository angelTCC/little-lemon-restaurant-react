import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Reservation() {
    const handleSubmit = (e) => {
        alert("Reservation submitted successfully!");
    };

    return (
        <Container className="border p-4 mt-5 text-start">
            <Row className="mb-4">
                <Col>
                <h3>Reservations</h3>
                </Col>
            </Row>
            <Form onSubmit={handleSubmit}>

                {/* Date Field */}
                <Form.Group as={Row} className="mb-3" controlId="formDate">
                    <Form.Label column sm={3}>
                        Select Date:
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="date" name="date" required />
                    </Col>
                </Form.Group>

                {/* Number of Diners Field */}
                <Form.Group as={Row} className="mb-3" controlId="formDiners">
                    <Form.Label column sm={3}>
                        No of Diners:
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                        type="number"
                        name="diners"
                        min="1"
                        required
                        />
                    </Col>
                </Form.Group>

                {/* Occasion Field */}
                <Form.Group as={Row} className="mb-3" controlId="formOccasion">
                    <Form.Label column sm={3}>
                        Occasion:
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                        type="text"
                        name="occasion"
                        placeholder="e.g., Birthday, Anniversary"
                        required
                        />
                    </Col>
                </Form.Group>

                {/* Time Field */}
                <Form.Group as={Row} className="mb-3" controlId="formTime">
                    <Form.Label column sm={3}>
                        Select Time:
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="time" name="time" required />
                    </Col>
                </Form.Group>

                {/* Submit Button */}
                <Row className="mt-4">
                    <Col className="text-center">
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    </Col>
                </Row>

            </Form>
        </Container>
    );
}

export default Reservation;