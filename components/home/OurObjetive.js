import styled from 'styled-components';

const CircleColor = styled.div`
  overflow: hidden;
  color: white;
  margin-bottom: 10%;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -100%;
    left: -10%;
    width: 600px;
    height: 400px;
    background-color: black;
    border-radius: 50%;
    z-index: -1;
    @media (max-width: 768px) { 
      height: 300px;
      left: -35%;
    };
    @media (max-width: 480px) { 
      height: 280px;
      left: -70%;
    };
  };
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -100%;
    left: 5%;
    width: 600px;
    height: 400px;
    background-color: rgb(193, 28, 62);
    border-radius: 50%;
    z-index: -1;
    @media (max-width: 768px) { 
      height: 300px;
      left: -10%;
    };
    @media (max-width: 480px) { 
      height: 280px;
      left: -30%;
    };
  };
`


function OurObjetive() {
  return (
    <section className="container mt-5" id="target" style={{paddingTop: "110px"}}>
      <div className="row">
        <CircleColor className="col" style={{height: "200px", position: "relative"}}>
          <h1 className="display-2">Nuestro Objetivo</h1>
        </CircleColor>
      </div> 
      <div className="row">
        <div className="col"> 
        </div>
        <div className="col-8">
          <p>
            En RODY  el transporte lo convierte en  logística aplicada  hacia sus clientes en todos los ambitos de traslado de mercacias, acarreos y personas convirtiendo a RODY en una aplicacion totalmente completa, cubriendo todos los ambitos de transporte lo cual nos lleva  a conseguir una mayor competitividad  dentro de este sector o sectores. Pero además, estos son algunos de nuestros objetivos específicos que conllevan la creacion y nacimiento de esta app:
          </p>
          <ul>
            <li>Mayor competitividad.</li>
            <li>Disminuir los costos de logística.</li>
            <li>Reducir errores y rapidez de las soluciones en trasnporte.</li>
            <li>Contar con personas competitivas y profesionales.</li>
            <li>Incrementar el rendimiento de nuestros colaboradores.</li>
            <li>Aumentar la productividad del sector transporte.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}


export default OurObjetive