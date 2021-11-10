import styled from 'styled-components';


const InitionMain = styled.section`
  margin-top: 140px;
`

const ContainerImg = styled.div`
  position: relative;
`

const RodyFree = styled.img`
  position: absolute;
  top: 30%;
  left: 40%;
  transform: rotate(-18deg);
`

function PresentationRody() {
  return (
    <InitionMain className="container">
      <div className="row">
        <div className="col">
          <h1>Bienvenido a RODY</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
          <button type="button" className="btn btn-primary">Mas informacion</button>
        </div>
        <ContainerImg className="col">
          <img src="/statics/img/delevery.png" width="100%"/>
          <RodyFree src="/statics/img/rody_logo.png" width="50%"/>
        </ContainerImg>
      </div>
    </InitionMain>
  )
}


export default PresentationRody