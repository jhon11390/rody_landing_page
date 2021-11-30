import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'

function HeaderWork() {
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
      <Navbar collapseOnSelect expand="lg" variant={scrollView} className="navRodyColor"  >
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
            
          </Nav>
          <Nav>
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

export default HeaderWork