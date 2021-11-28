import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';


function OurServices() {
  return (
    <Container className="mt-5" id="services" style={{paddingTop: "110px"}}>
      <Row className="text-end color_letter mb-5">
        <h1 className="display-2">Nuestros servicios</h1>
      </Row> 
      <Row className="text-center"> 
        <Col md="6" lg="3" className="mb-3">
          <Card className="border-0" style={{width: "100%"}}>
            <Card.Img variant="top" src="/statics/img/servicioacarreo.jpg" />
            <div className="text-center mt-3">
              <img src="/statics/img/acarreo.png" width="30" height="30"/>
            </div>
            <Card.Body>
              <Card.Title className="color_letter mb-5">Acarreo</Card.Title>
              <Card.Text>Para que traslades tus muebles, electrodomesticos, con facilidad y seguridad</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="6" lg="3" className="mb-3">
          <Card className="border-0" style={{width: "100%"}}>
            <Card.Img variant="top" src="/statics/img/servicioenvios.jpg" />
            <div className="text-center mt-3">
              <img src="/statics/img/envios.png" width="30" height="30"/>
            </div>
            <Card.Body>
              <Card.Title className="color_letter mb-5">Envios</Card.Title>
              <Card.Text>Para trasnportar tus productos mas valiosos y delicados.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="6" lg="3" className="mb-3"> 
          <Card className="border-0" style={{width: "100%"}}>
            <Card.Img variant="top" src="/statics/img/serviciotransporte.jpg"/>
            <div className="text-center mt-3">
              <img src="/statics/img/transporte.png" width="30" height="30"/>
            </div>
            <Card.Body>
              <Card.Title className="color_letter mb-5">Transporte</Card.Title>
              <Card.Text>De manera rapida, agil, oportuna, segura, movilizamos a tu seres queridos.  </Card.Text>
            </Card.Body>
          </Card> 
        </Col>
        <Col md="6" lg="3" className="mb-3">
          <Card className="border-0" style={{width: "100%"}}>
            <Card.Img variant="top" src="/statics/img/autolujo.jpg"/>
            <div className="text-center mt-3">
              <img src="/statics/img/lujo.png" width="30" height="30"/>
            </div>
            <Card.Body>
              <Card.Title className="color_letter mb-5">Servicio Especial</Card.Title>
              <Card.Text>Un servicio mas VIP para trasladarte de un lugar a otro con mucha comodidad.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5"></Row>
    </Container>
  )
}

export default OurServices;