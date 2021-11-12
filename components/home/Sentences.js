import styled, { css } from 'styled-components'


const ImgSection = styled.div`
  background-image: url('/statics/img/envios.jpg');
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 600px;
  position: relative;
  &::after {
    content: 'La logistica de transporte nunca mas sera una carga...';
    display: flex;
    justify-content: end;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, black);
    color: white;
    font-size: 40px;
  }
`

function Sentences(params) {
  return (
    <section className="container-fluid mt-5">
      <div className="row">
        <ImgSection className="col">

        </ImgSection>
      </div>
    </section>
  )
}

export default Sentences