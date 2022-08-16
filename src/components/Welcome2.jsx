// Exercice package react-bootstrap vidéo 51
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import car from "../assets/carpng.png"

const Welcome2 = () => {
    return(
        <Container fluid="md mt-4">
            {/* ROWS ET COLS */}
            <Row>
                <Col>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, accusamus, ratione molestiae provident quam consectetur ipsum sapiente harum quidem delectus voluptas quos eligendi! Rem quae nobis modi ducimus vel animi.</p>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, accusamus, ratione molestiae provident quam consectetur ipsum sapiente harum quidem delectus voluptas quos eligendi! Rem quae nobis modi ducimus vel animi.</p>
                </Col>

                <Col>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, accusamus, ratione molestiae provident quam consectetur ipsum sapiente harum quidem delectus voluptas quos eligendi! Rem quae nobis modi ducimus vel animi.</p>
                </Col>

                <Col>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, accusamus, ratione molestiae provident quam consectetur ipsum sapiente harum quidem delectus voluptas quos eligendi! Rem quae nobis modi ducimus vel animi.</p>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col lg="6">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, accusamus, ratione molestiae provident quam consectetur ipsum sapiente harum quidem delectus voluptas quos eligendi! Rem quae nobis modi ducimus vel animi.</p>
                </Col>

                <Col lg="6">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, accusamus, ratione molestiae provident quam consectetur ipsum sapiente harum quidem delectus voluptas quos eligendi! Rem quae nobis modi ducimus vel animi.</p>
                </Col>
            </Row>
            <hr />

            {/* CARDS */}
            <Row>
                <Col lg="6">
                    <Card>
                        <Card.Img variant="top" src={car}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="danger">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg="6">
                    <Card>
                        <Card.Img variant="top" src={car} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="success">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome2;