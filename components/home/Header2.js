import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'

function HeaderOption2() {
  const [scrollView, setScrollView] = useState("light");
  const [imgLogo, setImgLogo] = useState("logo_rody")
  
  useEffect(() => {
    window.addEventListener("scroll", function() {
      const scrollPX = window.scrollY
      const navRody = document.querySelector('.navRodyColor')
      if(scrollPX === 0) {
        navRody.style.backgroundColor = "white"
        navRody.style.transition = "all 1s"
        setScrollView("light")
      } else {
        navRody.style.backgroundColor = "rgb(33, 37, 41)"
        setScrollView("dark")
      }
    })  
  })

  
  return (
    <Container fluid style={{paddingLeft: "0", paddingRight: "0", position: "fixed", top: "0", zIndex: "10"}}>
      <Navbar id="startRody" collapseOnSelect expand="lg" variant={scrollView} className="navRodyColor"  >
        <Container className="mt-2 mb-2">
        <Navbar.Brand href="/">
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
            <Nav.Link href="#serviceWorker" style={{fontSize: "20px"}}>Solicita un Servicio</Nav.Link>
            <Nav.Link href="#target" style={{fontSize: "20px"}}>Nuestro Objetivo</Nav.Link>
            <NavDropdown title="Nuestros Servicios" id="collasible-nav-dropdown" style={{fontSize: "20px"}}>
              <NavDropdown.Item href="#services">Acarreos</NavDropdown.Item>
              <NavDropdown.Item href="#services">Envios</NavDropdown.Item>
              <NavDropdown.Item href="#services">Transporte</NavDropdown.Item>
              <NavDropdown.Item href="#services">Transporte Especial</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/workToRody" style={{fontSize: "20px"}}>Trabaja con Nosotros</Nav.Link>
            <Nav.Link eventKey={2} href="https://rodyapp.com/" style={{fontSize: "20px"}}>
              Inicia Sesion
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}

export default HeaderOption2