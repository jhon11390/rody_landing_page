import { Container, Row, Col} from 'react-bootstrap';


function Footer(params) {
  return (
    <Container fluid className="mt-5" id="footer" style={{backgroundColor: "rgb(33, 37, 41)"}}>
      <style type="text/css">
        {`
          #facebook:hover {
            transform: scale(1.9);
          }

          #tiktok:hover {
            transform: scale(1.9);
          }

          #instagram:hover {
            transform: scale(1.9);
          }

          #youtube:hover {
            transform: scale(1.9);
          }

        `}
      </style>
      <Container className="text-white">
        <Row>
          <Col className="mt-5">
            <img src="/statics/img/logo_rody_bln.png"  alt="logo Rody" width="200"/>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="8">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p>
          </Col>
          <Col>
            <Row>
              <Col className="text-center">
                <h4>Siguenos en:</h4>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col style={{display: "flex", justifyContent: "space-around"}}>
                <a href="https://www.facebook.com/profile.php?id=100073958156555" target="_blank"><img src="/statics/img/facebook.png" alt="..." width="30" height= "30" className="d-block" id="facebook" style={{filter: "invert(100%)"}} /></a>
                <img src="/statics/img/tiktok.svg" alt="..." width="30" height= "30" className="d-block" id="tiktok" style={{filter: "invert(100%)"}}/>
                <img src="/statics/img/instagram.png" alt="..." width="30" height= "30" className="d-block" id="instagram" style={{filter: "invert(100%)"}}/>
                <img src="/statics/img/youtube.svg" alt="..." width="30" height= "30" className="d-block" id="youtube" style={{filter: "invert(100%)"}}/>
              </Col>
            </Row>
          </Col>
          
        </Row>
        <Row className="text-center mt-5">
          <Col>
            <p><small>© Todos los derechos reservados. Rody 2021.</small></p>
          </Col>
        </Row>
      </Container>
      
    </Container>
  )
}

export default Footer