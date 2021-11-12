import styled from 'styled-components';

const CircleColorServices = styled.div`
  overflow: hidden;
  color: white;
  margin-bottom: 10%;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -100%;
    right: -10%;
    width: 600px;
    height: 400px;
    background-color: black;
    border-radius: 50%;
    z-index: -1;
    @media (max-width: 768px) { 
      height: 300px;
      right: -35%;
    };
    @media (max-width: 480px) { 
      height: 280px;
      right: -70%;
    };
  };
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -100%;
    right: 5%;
    width: 600px;
    height: 400px;
    background-color: rgb(193, 28, 62);
    border-radius: 50%;
    z-index: -1;
    @media (max-width: 768px) { 
      height: 300px;
      right: -10%;
    };
    @media (max-width: 480px) { 
      height: 280px;
      right: -30%;
    };
  };
`

function OurServices() {
  return (
    <section className="container mt-5" id="services" style={{paddingTop: "110px"}}>
      <div className="row">
        <CircleColorServices className="col text-end" style={{height: "200px", position: "relative"}}>
            <h1 className="display-2">Nuestros servicios</h1>
        </CircleColorServices>
      </div>
      <div className="row text-center"> 
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card border-0" style={{width: "100%"}}>
            <img src="/statics/img/card_carriage.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title color_letter">Acarreo</h5>
              <p className="card-text">Para que traslades tus muebles, electrodomesticos, con facilidad y seguridad</p>
              
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card border-0" style={{width: "100%"}}>
            <img src="/statics/img/card_delivery.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title color_letter">Envios</h5>
              <p className="card-text">Para trasnportar tus productos mas valiosos y delicados.</p>
              
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3"> 
          <div className="card border-0" style={{width: "100%"}}>
            <img src="/statics/img/card_transport.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title color_letter">Transporte</h5>
              <p className="card-text">De manera rapida, agil, oportuna, segura, movilizamos a tu seres queridos.  </p>
              
            </div>
          </div> 
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card border-0" style={{width: "100%"}}>
            <img src="/statics/img/card_special.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title color_letter">Servicio Especial</h5>
              <p className="card-text">Un servicio mas VIP para trasladarte de un lugar a otro con mucha comodidad.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices