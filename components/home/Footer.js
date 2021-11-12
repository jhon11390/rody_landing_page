
function Footer(params) {
  return (
    <section className="container mt-5 mb-5" id="footer">
      <style type="text/css">
        {`
          #facebook:hover {
            transform: scale(1.9);
          }

          #tiktok:hover {
            transform: scale(1.9);
          }

          #instagram:hover {
            transform: scale(1.9);
          }

          #youtube:hover {
            transform: scale(1.9);
          }

        `}
      </style>
      <div className="row">
        <div className="col-12 col-sm-6 text-center">
          <p><small>© Todos los derechos reservados. Rody 2021.</small></p>
        </div>
        <div className="col-12 col-sm-6" style={{display: "flex", justifyContent: "space-between"}}>
          <img src="/statics/img/facebook.png" alt="..." width="30" height= "30" className="d-block" id="facebook"/>
          <img src="/statics/img/tiktok.svg" alt="..." width="30" height= "30" className="d-block" id="tiktok"/>
          <img src="/statics/img/instagram.png" alt="..." width="30" height= "30" className="d-block" id="instagram"/>
          <img src="/statics/img/youtube.svg" alt="..." width="30" height= "30" className="d-block" id="youtube"/>
        </div>
      </div>
    </section>
  )
}

export default Footer