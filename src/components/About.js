import { Container, Row, Col, Image } from "react-bootstrap";
function About() {
    return (
    <Container>
        <Row className="border">
            <Col>
                <h1 style={{textAlign:"left"}}>Little Lemon</h1>
                <p style={{textAlign:"left"}}>History</p>
            </Col>
            <Col>
                <Image src='.' alt='img' />
            </Col>
        </Row>
    </Container>
    )
}
export default About;