import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'

function HeaderOption2() {
  const [scrollView, setScrollView] = useState("light");
  const [imgLogo, setImgLogo] = useState("logo_rody")
  
  useEffect(() => {
    window.addEventListener("scroll", function() {
      const scrollPX = window.scrollY
      if(scrollPX === 0) {
        setScrollView("light")
        setImgLogo("logo_rody")
      } else {
        setScrollView("dark")
        setImgLogo("logo_rody_bln")
      }
    })  
  })

  
  return (
    <Container fluid style={{paddingLeft: "0", paddingRight: "0", position: "fixed", top: "0", zIndex: "10"}}>
      <Navbar collapseOnSelect expand="lg" bg={scrollView} variant={scrollView}>
        <Container className="mt-2 mb-2">
        <Navbar.Brand href="#">
          <img
            src={`/statics/img/${imgLogo}.png`}
            width="150"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#diference" style={{fontSize: "20px"}}>Lo que nos hace diferentes</Nav.Link>
            <Nav.Link href="#target" style={{fontSize: "20px"}}>Nuestro Objetivo</Nav.Link>
            <NavDropdown title="Nuestros Servicios" id="collasible-nav-dropdown" style={{fontSize: "20px"}}>
              <NavDropdown.Item href="#services">Acarreos</NavDropdown.Item>
              <NavDropdown.Item href="#services">Envios</NavDropdown.Item>
              <NavDropdown.Item href="#services">Transporte</NavDropdown.Item>
              <NavDropdown.Item href="#services">Transporte Especial</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#footer" style={{fontSize: "20px"}}>Siguenos</Nav.Link>
            <Nav.Link eventKey={2} href="#information" style={{fontSize: "20px"}}>
              Registrate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}

export default HeaderOption2