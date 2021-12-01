import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';


const GoInfo = styled.a`
  &:hover {
    color: white;
  };
`

function PresentationRody() {
  return (
    <Container fluid style={{marginTop: "60px", backgroundImage: "url(/statics/img/banner2.jpg)", backgroundSize: "cover", backgroundPosition: "center center"}}>
      <Container id="start" >
        <Row className="row pt-5 pb-5"> 
          <Col md="7"> 
            <h1 className="color_letter display-6 mb-5" style={{fontWeight: "bold",  backgroundColor: "rgba(0,0,0,1)"}}>RODY la  aplicacion de transporte completa a tus necesidades...</h1>
            <p className="mb-5 text-white" style={{fontSize: "30px", backgroundColor: "rgba(0,0,0,0.4)"}}>Es la alternativa de transporte a tu alcance, para mercancias, acarreos, transporte   de personas. <br /> A un click de distancia.</p>
            <Button id="focusRody" variant="primary" size="lg" style={{backgroundColor: "rgb(193, 28,   62)", border: "rgb(193, 28, 62)", paddingRight: "40px", paddingLeft: "40px"}}><GoInfo   href="#information">Mas informacion</GoInfo></Button>
          </Col>
          <Col md="5"> 

          </Col>
        </Row>
      </Container>
    </Container>  
    
  )
}


export default PresentationRody;