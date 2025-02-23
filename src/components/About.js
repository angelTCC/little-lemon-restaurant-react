import { Container, Row, Col, Image } from "react-bootstrap";
function About() {
    return (
    <Container>
        <Row className="border">
            <Col className="text-start" lg={6} >
                <h3>Little Lemon</h3>
                <p>
                Based in Chicago, Illinois, Little Lemon is a family owned
                Mediterranean restaurant, focused on traditional recipes served with a
                modern twist.
                </p>
                <p>
                The chefs draw inspiration from Italian, Greek, and Turkish culture
                and have a menu of 12-15 items that they rotate seasonally.
                </p>
        
                <p>
                The restaurant has a rustic and relaxed atmosphere with moderate
                prices, making it a popular place for a meal any time of the day.
                </p>
        
                <p>
                Little Lemon is owned by two Italian brothers, Mario and Adrian, who
                moved to the United States to pursue their shared dream of owning a
                restaurant.
                </p>
        
                <p>
                To craft the menu, Mario relies on family recipes and his experience
                as a chef in Italy.
                </p>
        
                <p>
                Adrian does all the marketing for the restaurant and led the effort to
                expand the menu beyond classic Italian to incorporate additional
                cuisines from the mediterranean region.
                </p>
            </Col>
            <Col lg={6}>
                <Image src={require("../assets/img/mario-and-adrian.jpg")} 
                alt='img' 
                style={{ maxWidth:"100%"}}
                />
            </Col>
        </Row>
    </Container>
    )
}
export default About;