import { useEffect } from 'react'
import { useFormsStore } from '../../hooks/useFormsStore'

import img1 from '../../img/proyectos_grado/IMG_1983.webp'
import img2 from '../../img/proyectos_grado/IMG_1997.webp'
import img3 from '../../img/proyectos_grado/IMG_1998.webp'
import img4 from '../../img/proyectos_grado/IMG_2001.webp'
import img5 from '../../img/proyectos_grado/IMG_2021.webp'
import img6 from '../../img/proyectos_grado/IMG_2030.webp'
import img7 from '../../img/proyectos_grado/IMG_2034.webp'
import img8 from '../../img/proyectos_grado/IMG_2077.webp'
import img9 from '../../img/proyectos_grado/IMG_2082.webp'
import img10 from '../../img/proyectos_grado/IMG_2134.webp'
import img11 from '../../img/proyectos_grado/IMG_2139.webp'

export const ProyectosGrado = () => {

  const { data = [], handleOnLoadingForms } = useFormsStore()

  useEffect(() => {
    handleOnLoadingForms()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container mt-3 justify-content-center">
      {/* <!-- Encabezado del sitio web --> */}
      <h1 className="bg-success text-center shadow">PROYECTOS DE GRADO</h1>

      {/* <!-- Contendor con un carrusel de imagenes --> */}
      <div id="carouselExampleControls" className="carousel slide shadow" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* <!-- Contenedor con una imagen del carrusel --> */}
          <div className="carousel-item active">
            <img id="img1" src={img1} className="d-block" alt="..."
              width="100%" />
            {/* <!-- <img> permite agregar imagenes --> */}
          </div>
          <div className="carousel-item">
            <img id="img1" src={img2} className="d-block" alt="..."
              width="100%" />
          </div>
          <div className="carousel-item">
            <img id="img1" src={img3} className="d-block" alt=".."
              width="100%" />
          </div>
          <div className="carousel-item">
            <img id="img1" src={img4} className="d-block" alt=".."
              width="100%" />
          </div>
          <div className="carousel-item">
            <img id="img1" src={img5} className="d-block" alt=".."
              width="100%" />
          </div>
          <div className="carousel-item">
            <img id="img1" src={img6} className="d-block" alt=".."
              width="100%" />
          </div>
          <div className="carousel-item">
            <img id="img1" src={img7} className="d-block" alt=".."
              width="100%" />
          </div>
          <div className="carousel-item">
            <img id="img1" src={img8} className="d-block" alt=".." width="100%"
              height="50%" />
          </div>
          <div className="carousel-item">
            <img id="img1" src={img9} className="d-block" alt=".." width="100%"
              height="50%" />
          </div>
          <div className="carousel-item">
            <img id="img1" src={img10} className="d-block" alt=".." width="100%"
              height="50%" />
          </div>
          <div className="carousel-item">
            <img id="img1" src={img11} className="d-block" alt=".." width="100%"
              height="50%" />
          </div>

        </div>

        {/* <!-- Botones para controlar el carrusel --> */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* <!-- Contenedor con el texto de la página --> */}
      <div className="container-fluid mt-3 mb-3 shadow" id="contenedorText">


        <h2>
          {/* <!-- <h2> permite insertar texto en un tamaño superior a los parrafos--> */}
          ¿QUE SON LOS PROYECTOS DE GRADO DE NUESTRA INSTITUCIÓN?
        </h2>


        <p>
          Los proyectos de grado realizados en la institución son un requisito que deben cumplir los
          estudiantes de la media técnica (Decimo y once) para poder graduarse como bachilleres técnicos;
          Dichos proyectos deben reflejar los conocimientos adquiridos a lo largo de su formación academica y
          técnica dentro de la especialidad a la que pertenecen, ademas de aportar a su comunidad en busca de
          mejorar procesos deficientes dentro o cercanos a la institución.
        </p>

        <p>
          <b> En la siguiente tabla podra encontrar los información acerca de los proyectos de grado
            realizados en la institucióna a partir del año 2023, que solicitaron mostrarse en en este sitio
            web: </b>
        </p>
      </div>

      {/* <!-- Contenedor con la tabla que muestra los proyectos de grado --> */}
      <div className="table-responsive">

        {/* <!--la etiqueta <table> crea la estructura basica de una tabla--> */}

        {data.length > 0 && (
          <table className="table table-bordered table-hover align-middle">
            <thead>
              <tr>
                <th scope="col">TITULO</th>
                <th scope="col">JEFE DEL PROYECTO</th>
                <th scope="col">ESPECIALIDAD</th>
                <th scope="col">RESUMEN</th>
                <th scope="col">FECHA</th>
                <th scope="col">MANAGER</th>
                <th scope="col">ROL</th>
              </tr>
            </thead>

            <tbody id="tableUsers">
              {data.map((form, index) => (
                <tr key={index}>
                  <td>{form.title}</td>
                  <td>{form.author}</td>
                  <td>{form.especialidades.nombre}</td>
                  <td>{form.resume}</td>
                  <td>{form.date}</td>
                  <td>{form.manager}</td>
                  <td>{form.rol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>

      {/* <!-- Contenedor con texto --> */}
      <div className="container w-100 bg-white text-center shadow">
        <p id="Green">
          {/* <!-- Parrafo --> */}
          *Si deseas ver mas información acerca de los proyectos de grado que se realizan en la
          institución, no dudes en visitarnos*
        </p>
      </div>

      {/* <!-- Contenedor con botón --> */}
      <div className="container w-100 text-center mb-3">
        <button className="btn btn-success" id="btn">¡QUIERO SUBIR MI PROYECTO!</button>
      </div>

      {/* <!-- La etiqueta <footer> sirve para crear un pie de página--> */}
      <footer className="bg-light text-center text-white shadow">
        {/* <!-- Contenedor que organiza los iconos --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Seccion con las redes sociales del colegio --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com/IETIndustrial/?locale=es_LA" role="button"><i
                className="fab fa-facebook-f"></i></a>

            {/* <!-- Twitter --> */}
            <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/IETFELIXTIBERIO" role="button"><i className="fab fa-twitter"></i></a>

            {/* <!-- Google --> */}
            <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#dd4b39" }}
              href="https://q.plataformaintegra.net/ietfelixtiberio/" role="button"><i
                className="fab fa-google"></i></a>

            {/* <!-- Instagram --> */}
            <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#ac2bac" }} href="https://www.instagram.co
                            
                            
                            m/explore/locations/1018030579/institucion-educativa-tecnica-felix-tiberio-guzman/"
              role="button"><i className="fab fa-instagram"></i></a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>

        {/* <!-- Copyright --> */}
        <div className="text-center p-3" style={{ backgroundColor: "rgb(15, 15, 15)" }}>
          © 2023 Copyright:
          <a className="text-white" href="http://www.ftg.edu.co ">INSTITUCIÓN F.T.G</a>
        </div>

      </footer>
    </div>
  )
}
