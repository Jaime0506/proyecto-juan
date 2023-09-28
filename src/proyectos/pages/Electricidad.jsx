import Profe1 from "../../img/electricidad/IMG prof(1)_11zon.webp";
import Profe2 from "../../img/electricidad/IMG prof(2)_11zon.webp";
import imagen1 from "../../img/electricidad/IMG (1)_11zon.webp";
import imagen2 from "../../img/electricidad/IMG (2)_11zon.webp";
import imagen3 from "../../img/electricidad/IMG (3)_11zon.webp";
import imagen4 from "../../img/electricidad/IMG (4)_11zon.webp";
import imagen5 from "../../img/electricidad/IMG (5)_11zon.webp";
import imagen6 from "../../img/electricidad/IMG (6)_11zon.webp";
import imagen7 from "../../img/electricidad/IMG (7)_11zon.webp";
import imagen8 from "../../img/electricidad/IMG (8)_11zon.webp";
import imagen9 from "../../img/electricidad/IMG (9)_11zon.webp";
import imagen10 from "../../img/electricidad/IMG (10)_11zon.webp"
import imagen11 from "../../img/electricidad/IMG (11)_11zon.webp";
import imagen12 from "../../img/electricidad/IMG (12)_11zon.webp";
import imagen13 from "../../img/electricidad/IMG (13)_11zon.webp";
import imagen14 from "../../img/electricidad/IMG (14)_11zon.webp";
import imagen15 from "../../img/electricidad/IMG (15)_11zon.webp";
import imagen16 from "../../img/electricidad/IMG (16)_11zon.webp";
import imagen17 from "../../img/electricidad/IMG (17)_11zon.webp";
import imagen18 from "../../img/electricidad/introduccion_11zon.webp";
import imagen19 from "../../img/electricidad/introduccion2_11zon.webp";

export const Electricidad = () => {
  return (
    <div className="container mt-3 justify-content-center">
      <h1 className="text-center shadow">ELECTRICIDAD</h1>
      <div
        id="carouselExampleControls"
        className="carousel slide shadow"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <!-- AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/1.jpg"--> */}
            <img
              id="img1"
              src={imagen16}
              className="d-block"
              alt="..."
              width="100%"
            />
          </div>
          <div className="carousel-item">
            {/* <!--AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/2.jpg"--> */}
            <img
              id="img1"
              src={imagen15}
              className="d-block"
              alt="..."
              width="100%"
            />
          </div>
          <div className="carousel-item">
            {/* <!--AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/3.jpg"--> */}
            <img
              id="img1"
              src={imagen17}
              className="d-block"
              alt=".."
              width="100%"
            />
          </div>

          {/* <!--BOTONES DEL CARRUSEL PARA QUE SE DESPALCE ASI LA SIGUIENTE IMAGEN O ASI LA ANTERIOR IMAGEN--> */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      <div
        className="container-fluid justify-content-center"
        id="contenedorText"
      >
        {/* <!--INFORMACION DEL TALLER DE MECANICA INDUSTRIAL--> */}

        {/* <!-- INTRODUCIÓN DEL AREA--> */}
        <h2>INTRODUCCIÓN</h2>
        <div className="thumbnail">
          <img
            src={imagen18}
            alt="Miniatura"
            width="260"
            height="240"
          />
        </div>
        <p>
          El desarrollo de la infraestructura tecnológica del país y la sociedad
          contemporánea, en lo relacionado con generación, transmisión y usos
          varios de la electricidad, está creando una serie de necesidades de
          carácter técnico que amerita preparar individuos con capacidades y
          habilidades optimas en el área, y que, en dado caso, actúen con
          propiedad en la solución y manejo de situaciones relacionadas con el
          área eléctrica. El programa académico del taller de electricidad,
          además de constituir el currículo educativo del área técnica, busca
          facilitar la comprensión del conocimiento y adiestramiento del
          estudiante en las diversas ramas de la electricidad como son: los
          electrodomésticos, la instalación de redes urbanas y rurales, el
          mantenimiento de los mismos, el montaje de motores y mandos
          eléctricos. Conocimientos con los cuales se esperan sean valiosos
          elementos para su vida futura. Además, el estudio de esta asignatura
          permite formar ciudadanos que reconozcan y resuelvan conflictos de su
          comunidad, por ello la función por excelencia de la institución es
          facilitar la comprensión de las diversas situaciones que se generan en
          distintos contextos socio culturales propios de la cotidianidad o a lo
          que se domina orden universal. En consecuencia, en la asignatura de
          electricidad, está orientada principalmente al desarrollo de las
          competencias laborales de emprendimiento, debido a que el objetivo de
          la asignatura es enseñar y mejorar la capacidad de integración de
          individuo a ambientes académicos y laborales.{" "}
        </p>
        {/* <!--JUSTIFICACION DEL AREA--> */}
        <h2>JUSTIFICACIÓN</h2>
        <div className="thumbnail1">
          <img
            src={imagen19}
            alt="Miniatura"
            width="260"
            height="240"
          />
        </div>
        <p>
          La especialidad de electricidad se creó para brindar al sector
          eléctrico la posibilidad de incorporar personal con altas calidades
          laborales y profesionales que contribuyan al desarrollo económico,
          social y tecnológico de su entorno y del país, así mismo ofrecer a los
          estudiantes en las tecnologías de producción eléctrica industrial. En
          las diferentes regiones del país se cuenta con potencial productivo en
          aéreas de las instalaciones eléctricas domiciliarias su
          fortalecimiento y crecimiento socio-económico tanto a nivel regional
          como nacional, dependen en gran medida de un recurso humano
          cualificado y calificado, capaz de responder integralmente a la
          dinámica del sector. La malla curricular está orientado hacia la
          adquisición por parte del estudiante, de las competencias necesarias
          requeridas por el sector Eléctrico, las cuales deben fomentar su
          capacidad creativa para resolver problemas, su carácter innovador para
          crear empresa, pero sobre todo; contribuir en la ejecución de las
          instalaciones eléctricas residenciales aplicando la normatividad
          vigente, que lo acreditan y lo hacen pertinente y coherente con su
          misión, innovando permanentemente de acuerdo con las tendencias y
          cambios tecnológicos y las necesidades del sector empresarial y de los
          trabajadores, impactando positivamente la productividad, la
          competitividad, la equidad y el desarrollo del país.
        </p>

        {/* <!--OBJETIVOS DEL AREA: OBJETIVO GENERAL Y ESPECIFICOS--> */}
        <h2>OBJETIVOS Y METAS DE APRENDIZAJE</h2>
        {/* <!-- se crea un acordion plegable para los objetivos --> */}
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Objetivos Generales
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <p>
                      Desarrollar habilidades y destrezas con las cuales el
                      educando, este en capacidad de reconocer, interpretar y
                      manejar los diversos temas que se implementan en la
                      programación académica, de la asignatura durante los
                      diferentes grados del bachillerato definidas por equipo
                      docente quienes se encargaran de ir realizando el
                      seguimiento y la evaluación permanente de los planes y
                      acciones para saber si lo que se ha hecho permite alcanzar
                      las metas y los resultados propuestos, y los ajustes que
                      se deben introducir.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Objetivos Especificos
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <p>
                      Realizar la Planificación estratégica a mediano y largo
                      plazo de las diversas actividades académica, para así,
                      garantizar los procesos de Apoyo a la gestión educativa,
                      administración de la planta física y de los recursos, para
                      lograr un buen funciona- miento del taller y una adecuada
                      prestación de los servicios.
                    </p>
                  </li>
                  <li>
                    <p>
                      Crear habilidades y destrezas necesarias para realizar
                      actividades vinculadas a la electricidad.
                    </p>
                  </li>
                  <li>
                    <p>
                      Desarrollar conceptos teóricos básicos respectivos con la
                      aplicación de la electricidad.
                    </p>
                  </li>
                  <li>
                    <p>
                      Comprender los conocimientos eléctricos que se relacionan
                      con las diversas clases de motores eléctricos empleados en
                      el hogar y la industria.
                    </p>
                  </li>
                  <li>
                    <p>
                      Reconocer las reglas básicas de seguridad al momento de
                      trabajar con electricidad.
                    </p>
                  </li>
                  <li>
                    <p>
                      Transformar y mejorar la Calidad Educativa planeando las
                      herramientas esenciales para liderar, articular y
                      coordinar todas las acciones institucionales
                    </p>
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

          <img src={imagen1} alt="" />

          <img src={imagen2} alt="" />

          <img src={imagen3} alt="" />

          <img src={imagen4} alt="" />

          <img src={imagen5} alt="" />

          <img src={imagen6} alt="" />

          <img src={imagen7} alt="" />

          <img src={imagen8} alt="" />

          <img src={imagen9} alt="" />

          <img src={imagen10} alt="" />

          {/* <!-- se agregan las flechas para pasar de una imagen a otra y la X para salir --> */}
          {/* 
                    <article className="light-box" id="image1">
                        <a href="#image20" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="ELECTRICIDAD/IMG (1).jpg" alt="">
                        <a href="#image2" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image2">
                        <a href="#image1" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="ELECTRICIDAD/IMG (2).jpg" alt="">
                        <a href="#image3" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image3">
                        <a href="#image2" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="ELECTRICIDAD/IMG (3).jpg" alt="">
                        <a href="#image4" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image4">
                        <a href="#image3" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="ELECTRICIDAD/IMG (4).jpg" alt="">
                        <a href="#image5" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image5">
                        <a href="#image4" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="ELECTRICIDAD/IMG (5).jpg" alt="">
                        <a href="#image6" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>
                    <article className="light-box" id="image6">
                        <a href="#image5" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="ELECTRICIDAD/IMG (6).jpg" alt="">
                        <a href="#image7" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image7">
                        <a href="#image6" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="ELECTRICIDAD/IMG (7).jpg" alt="">
                        <a href="#image8" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image8">
                        <a href="#image7" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="ELECTRICIDAD/IMG (8).jpg" alt="">
                        <a href="#image9" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image9">
                        <a href="#image8" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="ELECTRICIDAD/IMG (9).jpg" alt="">
                        <a href="#image10" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image10">
                        <a href="#image9" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="ELECTRICIDAD/IMG (10).jpg" alt="">
                        <a href="#image11" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image11">
                        <a href="#image10" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="ELECTRICIDAD/IMG (11).jpg" alt="">
                        <a href="#image12" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article>

                    <article className="light-box" id="image12">
                        <a href="#image11" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <img src="ELECTRICIDAD/IMG (12).jpg" alt="">
                        <a href="#image13" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                                style="color: #7fba00;"></i></a>
                        <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                                style="color: #ff0000;"></i></a>
                    </article> */}
        </section>
        <span className="linea"></span>

        {/* <!--IMAGEN DEL DOCENTE QUE DICTA EL AREA--> */}
        <h2 className="text-center mt-3
        ">DOCENTES DE LA ESPECIALIDAD</h2>

        <div
          className="container d-flex row justify-content-center"
          id="profes"
        >
          <div
            className="card m-3 shadow "
            style={{ width: "30rem" }}
            id="foto"
          >
            <img
              src={Profe1}
              className="card-img-top "
              alt="..."
            />
            {/* <!--SE CREA UNA TARJETA PARA MOSTRAR LA INFORMACIÓN DEL PROFESORY SU IMAGEN--> */}
            <div className="card-body">
              <h5 className="card-title text-center">
                ING. LUIS GERMÁN RODRIGUEZ
              </h5>
            </div>
          </div>

          <div className="card m-3 shadow" style={{ width: "30rem" }} id="foto">
            <img
              src={Profe2}
              className="card-img-top"
              alt="..."
            />
            {/* <!--SE CREA UNA TARJETA PARA MOSTRAR LA INFORMACIÓN DEL PROFESORY SU IMAGEN--> */}
            <div className="card-body">
              <h5 className="card-title text-center">
                ING. FRANCISCO ARIEL ROJAS CESPEDES
              </h5>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-light text-center text-white">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0" id="face">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com/IETIndustrial/?locale=es_LA"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/IETFELIXTIBERIO"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="https://q.plataformaintegra.net/ietfelixtiberio/"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#df3adf" }}
              href="https://www.instagram.com/valqmn/"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgb(15, 15, 15)" }}
          id="copy"
        >
          © 2023 Copyright:
          <a className="text-white" href="http://www.ftg.edu.co ">
            INSTITUCIÓN F.T.G
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
};
