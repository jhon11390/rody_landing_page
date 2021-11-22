import { Container, Row, Col, Card } from 'react-bootstrap';


function PresentationValues() {
  return (
    <Container className="mt-5" id="diference" style={{paddingTop: "110px"}}>
      <Row>
        <Col className="text-end">
            <h1 className="color_letter display-2">Lo que nos hace <br /> diferentes</h1>
        </Col>
      </Row>
      <Row className="mt-5 text-center">
        <Col sm="4">
          <Card className="border-0" style={{width: "100%"}}>
            <Card.Img variant="top" src="/statics/img/diference1.jpg" />
            <Card.Body>
              <Card.Title className="color_letter">Personal profesional y legal</Card.Title>
              <Card.Text>Personas totalmente idetificadas y con controles de seguridad para su ingreso a la app.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="border-0" style={{width: "100%"}}>
            <Card.Img variant="top" src="/statics/img/diference2.jpg" />
            <Card.Body>
              <Card.Title className="color_letter">Seguimiento completo de tus trasnportes</Card.Title>
              <Card.Text>No perderas ni un momento el seguimiento de tus objetos enviados, ya que la app siempre estara atenta a darte la ubicacion exacta de tu servicio.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="border-0" style={{width: "100%"}}>
            <Card.Img variant="top" src="/statics/img/diference3.jpg" />
            <Card.Body>
              <Card.Title className="color_letter">Todo en uno</Card.Title>
              <Card.Text>La unica app que tiene todos los servicios en uno. -acarreos, -envios, -trasnporte de personas tanto basico como VIP </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PresentationValues;