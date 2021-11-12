import styled from 'styled-components';

const InitionMain = styled.section`
  margin-top: 160px;
`

const ContainerImg = styled.div`
  position: relative;
`

const ButtonInfo = styled.button`
  color: white;
  background-color: rgb(193, 28, 62);
  border: rgb(193, 28, 62);
  padding-left: 40px;
  padding-right: 40px;
  &:hover, a:hover {
    background-color: black;
    color: white;
  };

`

const FigureAfter = styled.div`
  width: 350px;
  height: 350px;
  background-color: black;
  position: absolute;
  z-index: -10;
  border-radius: 50%;
  left: 25%;
`
const FigureBefore = styled.div`
  width: 170px;
  height: 170px;
  background-color: rgb(193, 28, 62);
  position: absolute;
  z-index: -10;
  border-radius: 50%;
  left: 20%;
  top: -10%;
`

function PresentationRody() {
  return (
    <InitionMain className="container" id="start">
      <div className="row"> 
        <div className="col-12 col-md-6"> 
          <h1 className="color_letter display-4">RODY la aplicacion de transporte completa a tus necesidades...</h1>
          <p className="mb-5 mt-" style={{fontSize: "35px"}}>Es la alternativa de transporte a tu alcance, para mercancias, acarreos, transporte de personas. <br /> A un click de distancia.</p>
          <ButtonInfo type="button" className="btn btn-primary btn-lg" ><a href="#information">Mas informacion</a></ButtonInfo>
        </div>
        <ContainerImg className="col-12 col-md-6">
          <img src="/statics/img/initio_image.png" width="100%"/>
        </ContainerImg>
      </div>

    </InitionMain>
  )
}


export default PresentationRody