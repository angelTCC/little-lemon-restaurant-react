import { Container, Card, Col, Row } from "react-bootstrap";
import saladImage from "../assets/img/salad.jpg"; 

function Menu() {
    const menuItems = [
        {
            id:1,
            name:"Salad",
            description:"Delicious",
            price:"$10",
            img: saladImage
        }
    ]

    return (
        <Container className="p-3">
            <h3 style={{textAlign:"left"}}>Menu</h3>
            <Row>
                {menuItems.map((item) => (
                <Col key={item.id} md={3} className="mb-4">
                    <Card>
                    <Card.Img variant="top" src={item.img} alt={item.name} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text className="fw-bold">{item.price}</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    );
}
export default Menu;