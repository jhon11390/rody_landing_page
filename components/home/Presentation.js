import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';


const GoInfo = styled.a`
  &:hover {
    color: white;
  };
`

function PresentationRody() {
  return (
    <Container id="start" style={{marginTop: "160px"}}>
      <Row className="row"> 
        <Col md="6"> 
          <h1 className="color_letter display-4" style={{fontWeight: "bold"}}>RODY la aplicacion de transporte completa a tus necesidades...</h1>
          <p className="mb-5 mt-" style={{fontSize: "35px"}}>Es la alternativa de transporte a tu alcance, para mercancias, acarreos, transporte de personas. <br /> A un click de distancia.</p>
          <Button id="focusRody" variant="primary" size="lg" style={{backgroundColor: "rgb(193, 28, 62)", border: "rgb(193, 28, 62)", paddingRight: "40px", paddingLeft: "40px"}}><GoInfo href="#information">Mas informacion</GoInfo></Button>
        </Col>
        <Col md="6"> 
          <img src="/statics/img/initio_image.png" width="100%"/>
        </Col>
      </Row>
    </Container>
  )
}


export default PresentationRody;