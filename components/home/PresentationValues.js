
function PresentationValues() {
  return (
    <section className="container mt-5" id="diference" style={{paddingTop: "110px"}}>
      <div className="row">
        <div className="col text-end">
            <h1 className="color_letter display-2">Lo que nos hace <br /> diferentes</h1>
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-12 col-sm-4">
          <div className="card border-0" style={{width: "100%"}}>
            <img src="/statics/img/diference1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title color_letter">Personal profesional y legal</h5>
              <p className="card-text">Personas totalmente idetificadas y con controles de seguridad para su ingreso a la app.</p>
              
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="card border-0" style={{width: "100%"}}>
            <img src="/statics/img/diference2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title color_letter">Seguimiento completo de tus trasnportes</h5>
              <p className="card-text">No perderas ni un momento el seguimiento de tus objetos enviados, ya que la app siempre estara atenta a darte la ubicacion exacta de tu servicio.</p>
              
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="card border-0" style={{width: "100%"}}>
            <img src="/statics/img/diference3.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title color_letter">Todo en uno</h5>
              <p className="card-text">La unica app que tiene todos los servicios en uno. -acarreos, -envios, -trasnporte de personas tanto basico como VIP </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PresentationValues