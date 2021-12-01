import styled from 'styled-components';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';


function OurObjetive() {
  return (
    <Container fluid style={{marginTop: "60px", backgroundImage: "url(/statics/img/imagenInicio1.jpg)", backgroundSize: "cover", backgroundPosition: "center center"}}>
      <Container className="mt-5" id="target" style={{paddingTop: "110px", backgroundColor: "transparent"}}>
        <Row className="text-center color_letter">
          <h1 className="display-2" style={{backgroundColor: "black"}}>Nuestro Objetivo</h1>
        </Row> 
        <Row>
          <Col>
            <Card className="text-center border-0 text-white mb-5" style={{backgroundColor: "rgba(0,0,0,0.4)"}}>
              <Card.Body >
                <Card.Title></Card.Title>
                <Card.Text>
                  En RODY el transporte lo convierte en logística aplicada hacia sus clientes en todos los ambitos de traslado de mercacias, acarreos y personas convirtiendo a RODY en una aplicacion totalmente completa, cubriendo todos los ambitos de transporte lo cual nos lleva a conseguir una mayor competitividad dentro de este sector o sectores. Pero además, estos son algunos de nuestros objetivos específicos que conllevan la creacion y nacimiento de esta app:
                </Card.Text>
                <ListGroup variant="flush"className="text-end mt-5 border-0">
                  <ListGroup.Item className="text-white" style={{border: "0", backgroundColor: "transparent"}}>Mayor competitividad.</ListGroup.Item>
                  <ListGroup.Item className="text-white" style={{border: "0", backgroundColor: "transparent"}}>Disminuir los costos de logística.</ListGroup.Item>
                  <ListGroup.Item className="text-white" style={{border: "0", backgroundColor: "transparent"}}>Reducir errores y rapidez de las soluciones en trasnporte.</ListGroup.Item>
                  <ListGroup.Item className="text-white" style={{border: "0", backgroundColor: "transparent"}}>Contar con personas competitivas y profesionales.</ListGroup.Item>
                  <ListGroup.Item className="text-white" style={{border: "0", backgroundColor: "transparent"}}>Incrementar el rendimiento de nuestros colaboradores.</ListGroup.Item>
                  <ListGroup.Item className="text-white" style={{border: "0", backgroundColor: "transparent"}}>Aumentar la productividad del sector transporte.</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}


export default OurObjetive;