import styled from 'styled-components';

const ContainerCarrousel = styled.div`
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    background: linear-gradient(to right, transparent, black);
  }
`

function Carrousel() {
  return (
    <div className= "container mt-5 d-none d-sm-none d-md-block d-lg-block">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active d-none" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className="d-none"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className="d-none"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4" className="d-none"></button>
        </div>
        <ContainerCarrousel className="carousel-inner" style={{position: "relative"}}>
          <div className="carousel-item active">
            <img src="/statics/img/acarreos.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-end" style={{zIndex: "5"}}>
              <h2>Acarreos</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/statics/img/envios2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-end" style={{zIndex: "5"}}>
              <h2>Envios</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/statics/img/transporte.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-end" style={{zIndex: "5"}}>
              <h2>Transporte</h2>
            </div>
          </div>
          <div className="carousel-item"> 
            <img src="/statics/img/transporte2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-end" style={{zIndex: "5"}}>
              <h2>Transporte Especial</h2>
            </div>
          </div>
        </ContainerCarrousel>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carrousel