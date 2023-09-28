import pelufoImg from '../../img/metalisteria/PELUFO_11zon.webp'
import imagen1 from "../../img/metalisteria/2002.i515.001_modern_students_flat_icons-13_11zon.webp"
import imagen2 from "../../img/metalisteria/15094_11zon.webp/"
import imagen3 from "../../img/metalisteria/IMG_2020_11zon.webp"
import imagen4 from "../../img/metalisteria/IMG_2021_11zon.webp"
import imagen5 from "../../img/metalisteria/IMG_2022_11zon.webp"
import imagen6 from "../../img/metalisteria/IMG_2025_11zon.webp"
import imagen7 from "../../img/metalisteria/IMG_2026_11zon.webp"
import imagen8 from "../../img/metalisteria/IMG_2027_11zon.webp"
import imagen9 from "../../img/metalisteria/IMG_2029_11zon.webp"
import imagen10 from "../../img/metalisteria/IMG_2030_11zon.webp"
import imagen11 from "../../img/metalisteria/IMG_2031_11zon.webp"
import imagen12 from "../../img/metalisteria/IMG_9361_11zon.webp"
import imagen13 from '../../img/metalisteria/IMG_9362_11zon.webp'
import imagen14 from '../../img/metalisteria/IMG_9363_11zon.webp'
import imagen15 from '../../img/metalisteria/IMG_9364_11zon.webp'
import imagen16 from '../../img/metalisteria/IMG_9365_11zon.webp'

export const Metalisteria = () => {
  return (
    <div className="container mt-3">
      
      <div className="shadow shadow-lg" id="contenedorText">
            <h1 className="text-center shadow">METALISTERIA</h1> 

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <!-- AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/1.jpg"--> */}
            <img id="img1" src={imagen13} className="d-block" alt="..." width="100%" />
          </div>
          <div className="carousel-item">
            {/* <!--AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/2.jpg"--> */}
            <img id="img1" src={imagen14} className="d-block" alt="..." width="100%" />
          </div>
          <div className="carousel-item">
            {/* <!--AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/52.jpg"--> */}
            <img id="img1" src={imagen15} className="d-block" alt="..." width="100%" />
          </div>
          <div className="carousel-item">
            {/* <!--AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/6.jpg"--> */}
            <img id="img1" src={imagen16} className="d-block" alt=".." width="100%" />
          </div>

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
        <div className="container-fluid shadow" id="contenedorText">
          <h2>INTRODUCCIÓN</h2>

          <div className="thumbnail m-2">
            <img src={imagen2} alt="Miniatura" width="250" height="200" />
            {/* <!--IMAGEN MINIATURA--> */}
          </div>


          <p>
            La industria de la construcción en nuestra región pasa por un momento de crecimiento debido a los
            proyectos que están desarrollando, se requieren de diferentes perfiles y de mano de obra calificada
            para que puedan suplir las necesidades que requieren para llevar a cabo todos los proyectos a la
            realización y el crecimiento de nuestra región. Por medio de las instituciones educativas técnicas
            industriales se dan unas componentes técnicas a los estudiantes de la Institución Félix tiberio
            Guzmán en su formación educación básica y media. Los estudiantes graduados de nuestra institución
            son certificados con actitud profesional a nivel técnico en metalistería para que se desempeñe en el
            mercado laboral.
          </p>

          <p>
            La especialidad de Metalistería desarrolla características en cuanto a creación, planeación, diseño,
            reacondicionamiento, reparación, y establece criterios de diseño, elaboración de estructuras fijas y
            estructuras móviles como máquinas para el continuo desarrollo de procesos a diferentes campos de la
            industria, integrando y siendo creativos y competentes para la industria de la región.
          </p>

          <p>
            Los procesos industriales desarrollados en la especialidad de metalistería, que se enseñan son
            procesos básicos de medición longitudinal y angular, el manejo de herramientas manuales, hasta el
            manejo de máquinas de corte y desbaste. La especialidad se enfoca en la enseñanza del manejo del
            proceso Smaw, Gmaw y OFG.
            Finalmente y siendo muy importante se tiene encuentra desde el inicio de la primera clase la
            seguridad en el trabajo y el manejo seguro de máquinas y herramientas industriales y la parte de la
            salud ocupacional.

          </p>

          <h2>JUSTIFICACIÓN</h2>

          <div className="thumbnail1 m-2">
            <img src={imagen1} alt="Miniatura" width="200" height="200" />
          </div>

          <p>

            La metalistería como parte importante de la metalmecánica tiene su campo de aplicación en muy
            diversas facetas del desarrollo industrial del país.
            La ornamentación y carpintería metálica se fundamenta en el plano de construcción, y la soldadura en
            el trabajo de la industria pesada.
            La formación de un personal capacitado en la especialidad requiere de conocimientos tecnológicos,
            teórico y prácticos que junto a una formación humanista le permite participar activamente en el
            desarrollo de su comunidad.

          </p>

          <h2>OBJETIVOS Y METAS DE APRENDIZAJE</h2>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Objetivos Generales
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul>
                    <li>
                      Desarrollar competencias Comunicativas, Competencias aplicadas a la solución de
                      problemas, competencias ciudadanas.
                    </li>
                    <li>
                      Reconocer materiales, herramientas y equipos de la especialidad, adecuados para
                      el trabajo y aplicación de las competencias en proceso de medición, corte y
                      soldadura en la producción.
                    </li>
                    <li>
                      Crear e influir hábitos de trabajo con seguridad, creatividad e investigación.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Objetivos Especificos 2
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul>
                    <li>
                      Realizar soldaduras de productos metálicos por arco eléctrico con electrodo
                      revestido según procedimientos de fabricación.
                    </li>
                    <li>
                      Alistar equipos, máquinas, herramientas, materiales, insumos y área de trabajo para
                      ejecutar soldaduras en platina con el proceso SMAW teniendo en cuenta técnicas,
                      normas ambientales, de higiene y seguridad industrial y programación establecida
                    </li>
                    <li>
                      Verificar el buen estado de acometidas eléctricas y puestos de trabajo.
                    </li>
                    <li>
                      Aplicar las normas de higiene y seguridad industrial durante la ejecución de las
                      uniones con el proceso SMAW, previendo la ocurrencia de incidentes, accidentes y
                      enfermedades profesionales de acuerdo con los procedimientos establecidos.
                    </li>
                    <li>
                      Realizar ajustes a las variables de soldadura acorde con las condiciones específicas
                      de la suelda que se realiza.
                    </li>
                    <li>
                      Maniobrar el equipamiento, accesorios, consumibles y puesto de trabajo de manera que
                      me permitan cumplir con las especificaciones técnicas, garantizando la calidad de la
                      suelda de acuerdo con los manuales técnicos.
                    </li>
                    <li>
                      Preparar máquinas y herramientas de corte rectificado (abrasivos) teniendo en cuenta
                      normas de seguridad y manuales de manejo.
                    </li>
                    <li>
                      Aplicar conocimientos de física y matemáticas en la construcción de estructuras
                      metálicas.
                    </li>
                    <li>
                      Identificar el equipo básico para los procesos de soldadura SWAW, OFW GMAW.
                    </li>
                    <li>
                      Identificar cada electrodo para las aplicaciones de las diferentes prácticas.
                    </li>
                    <li>
                      Identificar y aplico las diferentes posiciones de soldeo
                    </li>
                    <li>
                      Identificar los diferentes metales y perfiles metálicos utilizados en la
                      especialidad.
                    </li>
                    <li>
                      Expresar mi pensamiento a través de textos y mediante la elaboración de síntesis,
                      reportes, e informes que exige la vida laboral y social.
                    </li>
                    <li>
                      Proteger mi integridad física, la de otros trabajadores y la de terceros, aplicando
                      la normatividad vigente en materia de seguridad e higiene.
                    </li>
                    <li>
                      Ejecutar acciones tendientes a preservar el medio ambiente, previniendo y
                      revertiendo daños por los efectos que pueda ocasionar las acciones humánanos,
                      especialmente en los procesos de producción
                    </li>
                    <li>
                      Pensar con capacidad crítica, constructiva y respetuosa de las ideas propias y las
                      de los demás; con sus observaciones construye y aporta a la solución de los
                      problemas de su entorno.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!--creacion de la galeria--> */}
          <span className="linea"></span>
          <section className="galeria">
            {/* <!-- se agregan las imgenes a la galeria y se vinculan entre --> */}
            <img src={imagen3} alt="" />
            <img src={imagen4} alt="" />
            <img src={imagen5} alt="" />
            <img src={imagen6} alt="" />
            <img src={imagen7} alt="" />
            <img src={imagen8} alt="" />
            <img src={imagen9} alt="" />
            <img src={imagen10} alt="" />
            <img src={imagen11} alt="" />
            <img src={imagen12} alt="" />

            {/* <!-- se agregan las flechas para pasar de una imagen a otra y la X para salir --> */}

            {/* <article className="light-box" id="image1">
                        <a href="#image9" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="img/IMG_2020.jpg" alt="">
                        <a href="#image2" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image2">
                        <a href="#image1" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="img/IMG_2021.jpg" alt="">
                        <a href="#image3" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image3">
                        <a href="#image2" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="img/IMG_2022.jpg" alt="">
                        <a href="#image4" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image4">
                        <a href="#image3" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="img/IMG_2025.jpg" alt="">
                        <a href="#image5" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image5">
                        <a href="#image4" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="img/IMG_2026.jpg" alt="">
                        <a href="#image6" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>
                    <article className="light-box" id="image6">
                        <a href="#image5" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="img/IMG_2027.jpg" alt="">
                        <a href="#image7" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image7">
                        <a href="#image6" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="img/IMG_2029.jpg" alt="">
                        <a href="#image8" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image8">
                        <a href="#image7" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="img/IMG_2030.jpg" alt="">
                        <a href="#image9" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image9">
                        <a href="#image8" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="img/IMG_2031.jpg" alt="">
                        <a href="#image10" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article> */}

          </section>
          <span className="linea"></span>

          <h2 className="text-center mt-2">DOCENTES DE LA ESPECIALIDAD</h2>

          <div className="container d-flex row justify-content-center " id="profes">
            <div className="card shadow m-3" style={{ width: "30rem" }} id="foto">
              <img src={pelufoImg} className="card-img-top" alt="..." />
              {/* <!--SE CREA UNA TARJETA PARA MOSTRAR LA INFORMACIÓN DEL PROFESORY SU IMAGEN--> */}
              <div className="card-body">
                <h5 className="card-title text-center">ING. RAFAEL PELUFO FERRER</h5>
              </div>
            </div>
            <div className="card shadow m-3" style={{ width: "30rem" }} id="foto">
              <img src={pelufoImg} className="card-img-top" alt="..." />
              {/* <!--SE CREA UNA TARJETA PARA MOSTRAR LA INFORMACIÓN DEL PROFESORY SU IMAGEN--> */}
              <div className="card-body">
                <h5 className="card-title text-center">ING. ARLEX OTAVO MENDEZ</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    

        <footer className="bg-light text-center text-white shadow">
          {/* <!-- Grid container --> */}
          <div className="container p-4 pb-0" id="face">
            {/* <!-- Section: Social media --> */}
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
              <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#df3adf" }}
                href="https://www.instagram.com/valqmn/" role="button"><i className="fab fa-instagram"></i></a>
            </section>
            {/* <!-- Section: Social media --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div className="text-center p-3" style={{ backgroundColor: "rgb(15, 15, 15)" }} id="copy">
            © 2023 Copyright:
            <a className="text-white" href="http://www.ftg.edu.co ">INSTITUCIÓN F.T.G</a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
      </div>
    </div>
  )
}
