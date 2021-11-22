import styled from 'styled-components';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';

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

function Information() {
  return (
    <Container className="mt-5" id="information" style={{paddingTop: "110px"}}>
      <Row className="text-end color_letter">
        <Col>
          <h1 className="color_letter display-2">Registrate</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md="6" style={{position: "relative"}}>
          <Image src="/statics/img/image_info.png" fluid />
        </Col>
        <Col md="6">
          <h1>Registrate y mantente actualizado</h1>
          <p>Registrate y se parte de esta nueva familia que esta naciendo...</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tus Nombres" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tus apellidos" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>
            <Button variant="primary" type="submit" size="lg" style={{backgroundColor: "rgb(193, 28, 62)", border: "rgb(193, 28, 62)", paddingRight: "40px", paddingLeft: "40px"}}>
              Suscribirme
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}


export default Information