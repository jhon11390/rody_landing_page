import styled, { css } from 'styled-components';
import { Container, Row, Col, Image } from 'react-bootstrap';


function Sentences() {
  return (
    <Container fluid id="imgInfoSection" className="mt-5" style={{paddingLeft: "0px", position: "relative"}}>
      <Row>
        <Col>
          <Image src="/statics/img/envios.jpg" fluid />
        </Col>
      </Row>
    </Container>
  )
}

export default Sentences;