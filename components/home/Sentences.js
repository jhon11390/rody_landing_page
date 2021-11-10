import styled, { css } from 'styled-components'


const ImgSection = styled.div`
  background-image: url('/statics/img/envios.jpg');
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 600px;
`

function Sentences(params) {
  return (
    <section>
      <div className="row">
        <ImgSection className="col">

        </ImgSection>
      </div>
    </section>
  )
}

export default Sentences