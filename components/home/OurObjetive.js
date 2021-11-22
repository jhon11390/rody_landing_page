import styled from 'styled-components';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';


function OurObjetive() {
  return (
    <Container className="mt-5" id="target" style={{paddingTop: "110px"}}>
      <Row className="text-end color_letter">
        <h1 className="display-2">Nuestro Objetivo</h1>
      </Row> 
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                En RODY el transporte lo convierte en logística aplicada hacia sus clientes en todos los ambitos de traslado de mercacias, acarreos y personas convirtiendo a RODY en una aplicacion totalmente completa, cubriendo todos los ambitos de transporte lo cual nos lleva a conseguir una mayor competitividad dentro de este sector o sectores. Pero además, estos son algunos de nuestros objetivos específicos que conllevan la creacion y nacimiento de esta app:
              </Card.Text>
              <ListGroup variant="flush"className="text-end mt-5">
                <ListGroup.Item>Mayor competitividad.</ListGroup.Item>
                <ListGroup.Item>Disminuir los costos de logística.</ListGroup.Item>
                <ListGroup.Item>Reducir errores y rapidez de las soluciones en trasnporte.</ListGroup.Item>
                <ListGroup.Item>Contar con personas competitivas y profesionales.</ListGroup.Item>
                <ListGroup.Item>Incrementar el rendimiento de nuestros colaboradores.</ListGroup.Item>
                <ListGroup.Item>Aumentar la productividad del sector transporte.</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}


export default OurObjetive;