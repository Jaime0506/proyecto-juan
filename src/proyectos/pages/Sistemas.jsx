import imagen1 from "../../img/sistemas/1.webp"
import imagen2 from "../../img/sistemas/2.webp"
import imagen3 from "../../img/sistemas/3.webp"
import imagen4 from "../../img/sistemas/12084830_20943991.webp"
import imagen5 from "../../img/sistemas/31745931_7855558.webp"

import imagen6 from "../../img/sistemas/IMG (1).webp"
import imagen7 from "../../img/sistemas/IMG (2).webp"
import imagen8 from "../../img/sistemas/IMG (3).webp"
import imagen9 from "../../img/sistemas/IMG (4).webp"
import imagen10 from "../../img/sistemas/IMG (5).webp"
import imagen11 from "../../img/sistemas/IMG (6).webp"
import imagen12 from "../../img/sistemas/IMG (7).webp"
import imagen13 from "../../img/sistemas/IMG (8).webp"
import imagen14 from "../../img/sistemas/IMG (9).webp"
import imagen15 from "../../img/sistemas/IMG (10).webp"

import profe from "../../img/sistemas/profe.webp"

export const Sistemas = () => {
  return (
    <div className="container mt-3 justify-content-center" > 
    {/* <!--CONTENEDOR CON EL CUERPO DE LA PÁGINA --> */}
      <div className="shadow shadow-lg" id="contenedorText">
        <h1 className="text-center shadow">SISTEMAS Y COMPUTACIÓN</h1>
        {/* <!----> */}

        {/* <!--CONTENEDOR CON EL CAROUSEL DE IMAGENES--> */}
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* <!--CONTENEDOR CON CADA IMAGEN DEL CAROUSEL--> */}
            <div className="carousel-item active">
              <img id="img1" src={imagen1} className="d-block" alt="..." width="100%" />
              {/* <!--LA ETIQUETA <IMG> PERMITE INSERTAR UNA IMAGEN--> */}
            </div>
            <div className="carousel-item">
              <img id="img1" src={imagen2} className="d-block" alt="..." width="100%" />
            </div>
            <div className="carousel-item">
              <img id="img1" src={imagen3} className="d-block" alt=".." width="100%" />
            </div>

          </div>
          {/* <!--BOTONES PARA CONTROLAR EL CAROUSEL--> */}
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

        {/* <!--CONTENEDOR CON INFORMACIÓN DE LA ESPECIALIDAD--> */}
        <div className="container-fluid mt-3" id="contenedorText">
          <h2>INTRODUCCIÓN</h2>

          {/* <!--CONTENEDOR PARA MINIATURAS--> */}
          <div className="thumbnail">
            <img src={imagen4} alt="Miniatura" width="200" height="200" />
            {/* <!--IMAGEN MINIATURA--> */}
          </div>

          <p>
            {/* <!--LA ETIQUETA <P> PERMITE INSERTAR UN PARRAFO--> */}
            El papel que ha de jugar la especialidad de Sistemas y Computación en las diversas etapas del
            educando,
            consiste en propiciar la
            adquisición de los conocimientos, destrezas, habilidades y actitudes básicas, inherentes a la
            tecnología; su significado no solo
            radica en los usos que de ella hacen los seres humanos, sino también, en como condicionan y
            modifican el
            medio ambiente, el
            modus vivendi, las costumbres y tradiciones de las sociedades, permitiendo que el estudiante tenga
            herramientas para ser un
            usuario ilustrado, donde el desarrollo de elementos tecnológicos basados en la informática,
            establezca
            una nueva etapa cultural a
            partir de la cual la tecnología tiene una gran influencia en diversos aspectos de la vida.
          </p>
          <p>
            En el transcurrir del proceso formativo de la Especialidad de Sistemas y computación, se fortalecen
            las
            habilidades y se desarrollan
            competencias en la parte ofimática, el diseño y creación de pequeñas aplicaciones, el entorno Web y
            el
            mantenimiento y reparación
            de computadores; herramientas que hacen un gran aporte en la nueva etapa que inician los bachilleres
            al
            finalizar la etapa de la
            media técnica.
          </p>

          <h2>JUSTIFICACIÓN</h2>


          <div className="thumbnail1">
            <img src={imagen5} alt="Miniatura" width="200" height="200" />
          </div>

          <p>
            La informática se refiere al conjunto de conocimientos científicos y tecnológicos que hacen posible
            el
            acceso y búsqueda de
            información, el manejo y procesamiento de la misma, la construcción de sistemas de información y el
            mantenimientos de equipos
            computacionales; hace parte de un campo más amplio denominado Tecnologías de la Información y la
            Comunicación (TIC), entre
            cuyas manifestaciones cotidianas encontramos el teléfono digital, la radio, la televisión, los
            computadores, las redes y la Internet.
            Esta área constituye uno de los sistemas tecnológicos de mayor incidencia en la transformación de la
            cultura contemporánea debido
            a que atraviesa la mayor parte de las actividades humanas.
          </p>

          <p>
            Para la educación en tecnología, la informática se configura como herramienta clave para el
            desarrollo
            de proyectos y actividades,
            tales como procesos de búsqueda de información, simulación, diseño asistido, manufactura,
            representación
            gráfica, comunicación
            de ideas y trabajo colaborativo.
          </p>

          <p> La Especialidad de Sistemas y computación tiene las siguientes características: </p>
          <ul>
            <li>
              <p>
                Se orientan los estudiantes a utilizar en forma responsable y adecuada el computador como una
                herramienta tecnológica para la
                construcción del conocimiento y desarrollo del pensamiento lógico.
              </p>

            </li>

            <li>
              <p>
                Facilita la integración con las demás áreas del currículo.
              </p>

            </li>

            <li>
              <p>
                Desarrolla habilidades en el uso de las herramientas informáticas que permiten mejorar el
                aprendizaje y enfrentar los retos del
                mundo actual y del futuro.
              </p>

            </li>

            <li>
              <p>
                Inicia a los estudiantes en la adquisición de competencias en el uso responsable de las
                tecnologías
                de la información y la
                comunicación (TIC).
              </p>

            </li>

            <li>
              <p>
                Inicia a los estudiantes en lenguajes de programación secuencial y Orientada a Objeto
              </p>

            </li>

            <li>
              <p>
                Constituye una buena alternativa para atender la necesidad de desarrollar en los estudiantes
                habilidades de pensamiento de orden
                superior.
              </p>

            </li>
          </ul>



          <h2>
            OBJETIVOS Y METAS DE APRENDIZAJE
          </h2>
          {/* <!--CONTENEDOR CON ACORDION DE LOS OBJETIVOS--> */}
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              {/* <!--ACORDION CON LOS OBJETIVOS GENERALES--> */}
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
                    {/* <!--LISTA NO ORDENADA CON LOS OBJETIVOS--> */}
                    <li>Desarrollar las competencias del pensamiento tecnológico, técnica, laboral y
                      comunicativa para
                      fomentar la tecnología, la
                      creatividad y el trabajo cooperativo, la autogestión, la gestión y la proyección
                      social, en el marco
                      de una educación para la
                      diversidad.
                    </li>

                    <li>Lograr un conocimiento profundo de las tecnologías y herramientas fundamentales
                      de
                      la computación de
                      manera que aprenda a
                      usar a la computadora como herramienta de trabajo, conociendo su precisión,
                      capacidad y
                      limitaciones.
                    </li>

                    <li>
                      La formación integral de Bachilleres técnicos con sentido humanístico,
                      analíticos,
                      creativos, y
                      emprendedores, capaces de utilizar
                      las tecnologías de la información para dar solución a problemas de la
                      especialidad
                      de sistemas y
                      computación de los sectores
                      industrial y de servicios con el fin de mejorar su calidad y productividad.
                    </li>
                  </ul>

                </div>
              </div>
            </div>
            {/* <!--CONTENEDOR CON LOS OBJETIVOS ESPECIFICOS--> */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                {/* <!--ACORDION CON LOS OBJETIVOS ESPECIFICOS--> */}
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Objetivos Específicos
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul>
                    <li>
                      Enseñar y entrenar al alumno en programación y procesamiento de distintos
                      problemas
                      de tipo
                      técnico-científico, a fin de que dichos
                      conocimientos le resulten de utilidad ya sea en el desarrollo de una carrera
                      universitaria como así
                      también en su actividad
                      profesional y laboral.
                    </li>

                    <li>
                      Desarrollar las capacidades para el razonamiento lógico, mediante el dominio de
                      los
                      sistemas
                      numéricos, estructuras de
                      programación, manejo de variables, así como para su utilización en la
                      interpretación
                      y solución de
                      los problemas de la ciencia, de la
                      tecnología y los de la vida cotidiana;
                    </li>

                    <li>
                      La comprensión de la dimensión práctica de los conocimientos teóricos, así como
                      la
                      dimensión teórica
                      del conocimiento práctico y la
                      capacidad para utilizarla en la solución de problemas;
                    </li>

                    <li>
                      La iniciación en los campos más avanzados de la tecnología moderna y el
                      entrenamiento en
                      disciplinas, procesos y técnicas que le
                      permitan el ejercicio de una función socialmente útil;
                    </li>

                    <li>
                      La valoración de la salud y de los hábitos relacionados con ella;
                    </li>

                    <li>
                      La capacitación básica inicial para el trabajo;
                    </li>

                    <li>
                      Prepararse para la vinculación al sector productivo y a las posibilidades de
                      formación que éste
                      ofrece.
                    </li>

                    <li>
                      Formar a los estudiantes en las ciencias de la computación con una sólida base
                      teórica y pericia
                      práctica para la resolución de
                      problemas.

                    </li>

                    <li>
                      Formar estudiantes que puedan incrustarse en los diversos sectores de la vida
                      nacional:
                      investigación, enseñanza, industria.
                    </li>

                    <li>
                      Formar bachilleres técnicos que aporten al desarrollo nacional con un fuerte
                      sentido
                      de
                      responsabilidad y compromiso con la
                      sociedad.
                    </li>

                    <li>
                      Formar bachilleres técnicos con sentido humanístico, comprometidas con su
                      entorno
                      social y
                      profesional.
                    </li>

                    <li>
                      Formar bachilleres técnicos capaces de desarrollar, implementar y manejar
                      software
                      comercial y de
                      aplicación específica de
                      acuerdo a normas internacionales
                    </li>

                    <li>
                      Formar bachilleres técnicos capaces de seleccionar, instalar, operar y dar
                      mantenimiento a sistemas
                      y redes de cómputo bajo
                      normas internacionales.
                    </li>
                  </ul>


                </div>
              </div>
            </div>
          </div>

          {/* <!--creacion de la galeria--> */}

          <span className="linea mt-3"></span>

          <section className="galeria">

            <img src={imagen6} alt="" />
            <img src={imagen7} alt="" />
            <img src={imagen8} alt="" />
            <img src={imagen9} alt="" />
            <img src={imagen10} alt="" />
            <img src={imagen11} alt="" />
            <img src={imagen12} alt="" />
            <img src={imagen13} alt="" />
            <img src={imagen14} alt="" />
            <img src={imagen15} alt="" />


            {/* <article className="light-box" id="image1">
              <a href="#image10" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                style={{ color: "#7fba00"}}></i></a>
              <img src={imagen6} alt="" />
              <a href="#image2" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                style={{color: "#7fba00"}}></i></a>
              <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                style={{color: "#ff0000"}}></i></a>
            </article> */}

            {/* 

            <article className="light-box" id="image2">
              <a href="#image1" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                style="color: #7fba00;"></i></a>
              <img src="img/IMG (2).jpg" alt="" />
              <a href="#image3" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                style="color: #7fba00;"></i></a>
              <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                style="color: #ff0000;"></i></a>
            </article>

            <article className="light-box" id="image3">
              <a href="#image2" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                style="color: #7fba00;"></i></a>
              <img src="img/IMG (3).jpg" alt="" />
              <a href="#image4" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                style="color: #7fba00;"></i></a>
              <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                style="color: #ff0000;"></i></a>
            </article>

            <article className="light-box" id="image4">
              <a href="#image3" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                style="color: #7fba00;"></i></a>
              <img src="img/IMG (4).jpg" alt="" />
              <a href="#image5" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                style="color: #7fba00;"></i></a>
              <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                style="color: #ff0000;"></i></a>
            </article>

            <article className="light-box" id="image5">
              <a href="#image4" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                style="color: #7fba00;"></i></a>
              <img src="img/IMG (5).jpg" alt="" />
              <a href="#image6" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                style="color: #7fba00;"></i></a>
              <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                style="color: #ff0000;"></i></a>
            </article>
            <article className="light-box" id="image6">
              <a href="#image5" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                style="color: #7fba00;"></i></a>
              <img src="img/IMG (6).jpg" alt="" />
              <a href="#image7" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                style="color: #7fba00;"></i></a>
              <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                style="color: #ff0000;"></i></a>
            </article>

            <article className="light-box" id="image7">
              <a href="#image6" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                style="color: #7fba00;"></i></a>
              <img src="img/IMG (7).jpg" alt="" />
              <a href="#image8" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                style="color: #7fba00;"></i></a>
              <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                style="color: #ff0000;"></i></a>
            </article>

            <article className="light-box" id="image8">
              <a href="#image7" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                style="color: #7fba00;"></i></a>
              <img src="img/IMG (8).jpg" alt="" />
              <a href="#image9" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                style="color: #7fba00;"></i></a>
              <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                style="color: #ff0000;"></i></a>
            </article>

            <article className="light-box" id="image9">
              <a href="#image8" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                style="color: #7fba00;"></i></a>
              <img src="img/IMG (9).jpg" alt="" />
              <a href="#image10" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                style="color: #7fba00;"></i></a>
              <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                style="color: #ff0000;"></i></a>
            </article>

            <article className="light-box" id="image10">
              <a href="#image9" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                style="color: #7fba00;"></i></a>
              <img src="img/IMG (10).jpg" alt="" />
              <a href="#image1" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                style="color: #7fba00;"></i></a>
              <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                style="color: #ff0000;"></i></a>
            </article> */}
          </section>
          <span className="linea mb-3"></span>

          {/* <!--APARTADO PARA EL DOCENTE DE LA ESPECIALIDAD--> */}
          <h2 className="text-center">DOCENTES DE LA ESPECIALIDAD</h2>
          <div className="d-flex justify-content-center align-items-center m-3">
            <div className="card shadow m-3 " style={{ width: "30rem" }}>
              <img src={profe} className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title text-center">ING. JOSÉ INAY GUARNIZO ROJAS</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* <!--LA ETIQUETA <FOOTER> PERMITE CREAR UN PIE DE PAGINA--> */}
      <footer className="bg-light text-center text-white shadow">
        <div className="container p-4 pb-0">

          <section className="mb-4">

            <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com/IETIndustrial/?locale=es_LA" role="button">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/IETFELIXTIBERIO" role="button"><i className="fab fa-twitter"></i></a>


            <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#dd4b39" }}
              href="https://q.plataformaintegra.net/ietfelixtiberio/" role="button"><i
                className="fab fa-google"></i></a>


            <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#ac2bac" }} href="https://www.instagram.co m/explore/locations/1018030579/institucion-educativa-tecnica-felix-tiberio-guzman/"
              role="button"><i className="fab fa-instagram"></i></a>
          </section>

        </div>



        <div className="text-center p-3" style={{ backgroundColor: "rgb(15, 15, 15)" }}>
          © 2023 Copyright:
          <a className="text-white" href="http://www.ftg.edu.co "> INSTITUCIÓN F.T.G</a>
        </div>

      </footer>

    </div>
  )
}
