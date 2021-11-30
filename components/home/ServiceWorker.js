import styled from 'styled-components';
import { Container, Row, Col, Image, Form, Button, Card } from 'react-bootstrap';

const ButtonInfo2 = styled.button`
color: white;
background-color: rgb(193, 28, 62);
border: rgb(193, 28, 62);
padding-left: 40px;
padding-right: 40px;
&:hover {
  background-color: black;
  color: white;
};
`

function ServiceWorker() {
  return (
    <Container className="mt-5" id="serviceWorker" style={{paddingTop: "110px"}}>
      <Row className="text-end color_letter">
        <Col>
          <h1 className="color_letter display-2">Solicita un servicio</h1>
        </Col>
      </Row>
      <Row className="mt-5 text-center">
        <Col md="6" lg="3">
          <Card className="border-0">
            <Card.Img variant="top" src="/statics/img/card_carriage.jpg" />
            <Card.Body>
              <Card.Title>Acarreo o Mudanza</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary" style={{backgroundColor: "rgb(193, 28, 62)", border: "rgb(193, 28, 62)", paddingRight: "40px", paddingLeft: "40px"}}><a href="https://rodyapp.com/partner_services?type=carriage">Solicitar Servicio</a></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card className="border-0">
            <Card.Img variant="top" src="/statics/img/card_delivery.jpg" />
            <Card.Body>
              <Card.Title>Domicilio</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary" style={{backgroundColor: "rgb(193, 28, 62)", border: "rgb(193, 28, 62)", paddingRight: "40px", paddingLeft: "40px"}}><a href="https://rodyapp.com/partner_services?type=delivery">Solicitar Servicio</a></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card className="border-0">
            <Card.Img variant="top" src="/statics/img/card_transport.jpg" />
            <Card.Body>
              <Card.Title>Transporte</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary" style={{backgroundColor: "rgb(193, 28, 62)", border: "rgb(193, 28, 62)", paddingRight: "40px", paddingLeft: "40px"}}><a href="https://rodyapp.com/partner_services?type=transport">Solicitar Servicio</a></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card className="border-0">
            <Card.Img variant="top" src="/statics/img/card_special.jpg" />
            <Card.Body>
              <Card.Title>Transporte VIP</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary" style={{backgroundColor: "rgb(193, 28, 62)", border: "rgb(193, 28, 62)", paddingRight: "40px", paddingLeft: "40px"}}><a href="https://rodyapp.com/partner_services?type=special">Solicitar Servicio</a></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}


export default ServiceWorker