import styled from 'styled-components';

const ButtonInfo2 = styled.button`
color: white;
background-color: rgb(193, 28, 62);
border: rgb(193, 28, 62);
padding-left: 40px;
padding-right: 40px;
&:hover {
  background-color: black;
  color: white;
};
`

function Information() {
  return (
    <section className="container mt-5" id="information" style={{paddingTop: "110px"}}>
      <div className="row">
        <div className="row">
          <h1 className="color_letter display-2">Registrate</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-md-6" style={{position: "relative"}}>
          <img src="/statics/img/image_info.png" width="100%"/>
        </div>
        <div className="col-12 col-md-6">
          <h1>Registrate</h1>
          <p>Registrate y se parte de esta nueva familia que esta naciendo...</p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombres</label>
              <input type="text" className="form-control" id="name"  />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Apellidos</label>
              <input type="text" className="form-control" id="lastName"  />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email"  />
            </div>
            <ButtonInfo2 className="btn btn-primary">Subscribirme</ButtonInfo2>
          </form>
        </div>
      </div>
    </section>
  )
}


export default Information