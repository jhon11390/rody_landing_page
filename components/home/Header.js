
function NavbarRody() {

  return (
    <header className="container">
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand mt-3" href="#"> 
            <img src="/statics/img/logo_rody_bln.png" alt="logo_rody" width="150" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{backgroundColor: "rgb(33, 37, 41)"}}>
            <div className="offcanvas-header">
              <h5 className="offcanvas-title mt-1" id="offcanvasNavbarLabel">
                <a className="navbar-brand" href="#">
                  <img src="/statics/img/logo_rody_bln.png" alt="logo_rody" width="150" />
                </a>
              </h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" style={{backgroundColor: "gray"}}></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" >Inicio</a>
                </li>
                <li className="nav-item" >
                  <a className="nav-link" href="#diference" >Lo que nos hace diferentes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#target">Nuestro Objetivo</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#information">Registrate</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">Siguenos</a>
                </li>
                <li className="nav-item dropdown mb-3">
                  <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Nuestros Servicios
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a className="dropdown-item" href="#services">Acarreos</a></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="#services">Envios</a></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                      <li><a className="dropdown-item" href="#services">Transporte</a></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="#services">Transporte Especial</a></li>
                  </ul>
                </li>
              </ul>
              
            </div>
            <p style={{color: "white"}} className="text-center"><small>© Todos los derechos reservados. Rody 2021.</small></p>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavbarRody