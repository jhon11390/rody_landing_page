import { Container, Row, Col, Card } from 'react-bootstrap';
import CarouselValues from './subComponents/CarrouselValues';


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
            <CarouselValues 
              image1= "/statics/img/diference1.jpg"
              image2= "/statics/img/diference1.2.jpg"
              image3= "/statics/img/diference1.3.jpg"
            />
            <div className="text-center mt-3">
              <img src="/statics/img/personal.png" width="30" />
            </div>
            <Card.Body>
              <Card.Title className="color_letter">Personal profesional y legal</Card.Title>
              <Card.Text>Control de seguridad para prestar servicio en la aplicación. Personal identificado.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="border-0" style={{width: "100%"}}>
            <CarouselValues 
              image1= "/statics/img/diference2.jpg"
              image2= "/statics/img/diference2.2.jpg"
              image3= "/statics/img/diference2.3.jpg"
            />
            <div className="text-center mt-3">
              <img src="/statics/img/maps.png" width="30" />
            </div>
            <Card.Body>
              <Card.Title className="color_letter">Seguimiento completo de tus servicio.</Card.Title>
              <Card.Text>No perderas ni un momento el seguimiento de tus objetos enviados, ya que la app siempre estara atenta a darte la ubicacion exacta de tu servicio.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="border-0" style={{width: "100%"}}>
            <CarouselValues 
              image1= "/statics/img/diference3.jpg"
              image2= "/statics/img/diference3.2.jpg"
              image3= "/statics/img/diference3.3.jpg"
            />
            <div className="text-center mt-3">
              <img src="/statics/img/allinone.png" width="30" />
            </div>
            <Card.Body>
              <Card.Title className="color_letter">Todo en uno</Card.Title>
              <Card.Text>Transporte de personas servicio basico y VIP </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PresentationValues;