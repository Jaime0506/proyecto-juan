import profe from "../../img/automotriz/profe_11zon.webp"
import imagen1 from '../../img/automotriz/automotriz_11zon.webp'
import imagen2 from '../../img/automotriz/automotriz1_11zon.webp'
import imagen3 from '../../img/automotriz/IMG (1)_11zon.webp'
import imagen4 from '../../img/automotriz/IMG (2)_11zon.webp'
import imagen5 from '../../img/automotriz/IMG (3)_11zon.webp'
import imagen6 from '../../img/automotriz/IMG (4)_11zon.webp'
import imagen7 from '../../img/automotriz/IMG (5)_11zon.webp'
import imagen8 from '../../img/automotriz/IMG (6)_11zon.webp'
import imagen9 from '../../img/automotriz/IMG (7)_11zon.webp'
import imagen10 from '../../img/automotriz/IMG (8)_11zon.webp'
import imagen11 from '../../img/automotriz/IMG (9)_11zon.webp'
import imagen12 from '../../img/automotriz/IMG (10)_11zon.webp'
import imagen13 from '../../img/automotriz/IMG (11)_11zon.webp'
import imagen14 from '../../img/automotriz/IMG (12)_11zon.webp'
import imagen15 from '../../img/automotriz/IMG (13)_11zon.webp'
import imagen16 from '../../img/automotriz/IMG (14)_11zon.webp'
import imagen17 from '../../img/automotriz/IMG (15)_11zon.webp'
import imagen18 from '../../img/automotriz/IMG (16)_11zon.webp'
import imagen19 from '../../img/automotriz/IMG (17)_11zon.webp'
import imagen20 from '../../img/automotriz/IMG (18)_11zon.webp'
import imagen21 from '../../img/automotriz/IMG (19)_11zon.webp'
import imagen22 from '../../img/automotriz/IMG (21)_11zon.webp'
import imagen23 from '../../img/automotriz/IMG (22)_11zon.webp'
import imagen24 from '../../img/automotriz/IMG (23)_11zon.webp'
import imagen25 from '../../img/automotriz/IMG (24)_11zon.webp'


export const MecanicaAuto = () => {
  return (
    <div className="container mt-3">
          <h1 className="text-center shadow">MECÁNICA AUTOMOTRIZ</h1>
      {/*<!--IMAGENES DEL CARRUSEL DE LA ESPECIALIDAD-->*/}
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/*<!-- AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/1.jpg"-->*/}
            <img
              id="img1"
              src={imagen24}
              className="d-block"
              alt="..."
              width="100%"
            />
          </div>
          <div className="carousel-item">
            {/*<!--AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/2.jpg"-->*/}
            <img
              id="img1"
              src={imagen25}
              className="d-block"
              alt="..."
              width="100%"
            />
          </div>
          <div className="carousel-item">
            {/*<!--AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/3.jpg"-->*/}
            <img
              id="img1"
              src={imagen24}
              className="d-block"
              alt=".."
              width="100%"
            />
          </div>
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
      <div className="container-fluid pt-2 shadow" id="contenedorText">
        {/* <!--INFORMACION DEL TALLER DE MECANICA INDUSTRIAL--> */}

        {/* <!-- INTRODUCIÓN DEL AREA--> */}
        <h2>
          <b>INTRODUCCIÓN</b>
        </h2>
        <div className="thumbnail">
          <img
            src={imagen1}
            alt="Miniatura"
            width="300"
            height="240"
          />
        </div>
        <p>
          La necesidad de llevar a la Nación por un proceso de industrialización
          a nivel global, estableció los Institutos Técnicos Industriales, como
          mecanismo para desarrollar la industria del país desde el fomento y la
          capacitación de mano de obra calificada a través de la educación
          formal básica, es decir, que los estudiantes bachilleres optaran
          título de certificado de actitud profesional a nivel técnico para
          desempeñarse en el mercado laboral. “Da una idea somera, pero exacta
          de los diversos aspectos que componen el trabajo. Se trata, en última
          instancia, de hacer un planteamiento claro y ordenado del proyecto de
          área, de su importancia de sus implicaciones, así como de la manera en
          que se ha creído conveniente abordar el estudio de sus diferentes
          elementos” (EDUCERE, 2015) Se presenta un resumen del contenido de los
          diferentes capítulos que componen el plan de área. Este trabajo
          permite un mejor planeamiento del trabajo curricular, con lo que sin
          lugar a dudas se logrará el mejoramiento de la calidad educativa, sus
          componentes se relacionan facilitando el desarrollo de esta asignatura
          de manera participativa e integral. El presente plan, expone la
          temática para los diferentes grados en lo relacionado con la mecánica
          automotriz, las normas de seguridad industrial, las herramientas
          manuales y especiales usadas en el taller de mecánica automotriz y los
          componentes básicos del automóvil, estudiando de manera individual
          cada uno de los sistemas, tanto mecánicos como eléctricos. Esta
          temática se verá durante todo el proceso de enseñanza aprendizaje
          desde el grado sexto hasta grado undécimo. No solamente se imparte
          conocimientos teóricos, sino que también se complementa con parte
          práctica. Durante los grados sexto y séptimo se inicia con una
          exploración vocacional, ya sea como estrategia para la elección de la
          especialidad en grado octavo o en la educación media; la educación
          media forma estudiantes competentes a nivel personal, académico y
          laboral. El propósito principal es que los jóvenes consoliden o se
          apropien del conocimiento de la especialidad, el cual se trabaja
          durante los grados de octavo a undécimo.
        </p>
        {/* <!--JUSTIFICACION DEL AREA--> */}
        <h2>JUSTIFICACIÓN</h2>
        <div className="thumbnail1">
          <img
            src={imagen2}
            alt="Miniatura"
            width="260"
            height="240"
          />
        </div>
        <p>
          El diseño de un plan curricular en la especialidad de mecánica
          automotriz para la INSTITUCIÓN EDUCATIVA TÉCNICA "FÉLIX TIBERIO
          GUZMAN" de la ciudad de El Espinal (Tolima) está sustentado en la
          exigencia continua de la comunidad educativa de esta región, basada en
          la agricultura, por la preparación de personal técnico y humanamente
          calificado que supla las necesidades de mantenimiento, diagnóstico y
          reparación del gran parque automotor de maquinaria agrícola que existe
          en nuestra región. El plan de área es importante ya que es una guía
          tanto para el docente como para el alumno, puesto que lo puede
          consultar para saber cuáles son los requisitos y los conocimientos
          necesarios para poder obtener una formación en un área específica de
          conocimiento. Sin estos planes, tanto docentes cómo educandos, se
          encontrarán perdidos ante una gran masa de materia sin forma. La
          principal función de dicho plan es crear individuos que puedan
          comprender a la perfección los conocimientos necesarios para afrontar
          nuestro mundo actual. De la misma forma, la especialidad de mecánica
          automotriz se justifica en el hecho de que cada día se observa un
          incremento acelerado de vehículos automotores (motos, automóviles,
          tractores, autobuses, camiones, etc.), desplazándose en calles y
          carreteras de la ciudad, del departamento, del país y en todo el
          ámbito mundial. Incremento que exigen igual proporción, un mayor
          número de centros técnicos con personal altamente calificado, que
          llene las exigencias técnicas y humanas requeridas en el
          mantenimiento, diagnóstico y reparación de vehículos automotores, Es
          importante resaltar que el personal técnico especializado en el
          mantenimiento y reparación de motores de combustión interna de
          vehículos automotores, está igualmente capacitado y entrenado para
          realizar el mantenimiento y reparación de los motores de combustión
          interna de motocicletas, motobombas, guadañadoras, plantas eléctrica,
          etc., en general, de toda máquina que funcione con motor de combustión
          interna de gasolina o de ACPM. Este plan de área es pertinente puesto
          que da a conocer los ejes temáticos que se impartirán al personal
          estudiantil. Teniendo en cuenta el impacto socio-económico del
          automóvil en la sociedad y su constante evolución se hace necesario
          fomentar en los estudiantes el interés por el estudio y
          especialización en los diferentes sistemas que conforman este
          apasionante medio de transporte. Ello hace necesario realizar una
          serie de actividades tendientes a fomentar en los educados hábitos de
          estudio y trabajo acorde con las necesidades de la industria
          automotriz.
        </p>
        {/*<!--OBJETIVOS DEL AREA: OBJETIVO GENERAL Y ESPECIFICOS-->*/}
        <h2>OBJETIVOS Y METAS DE APRENDIZAJE</h2>
        {/*<!-- se crea un acordion plegable para los objetivos -->*/}
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
                      Contribuir a la formación integral de los graduados como
                      bachilleres técnicos automotrices, mediante el desarrollo
                      de contenidos que articulan lo humanístico, lo científico
                      y lo tecnológico, que facilita entregar sus conocimientos,
                      habilidades, destrezas y aptitudes en su formación
                      personal, técnica, profesional y comunitaria: dicho
                      conjunto de valores, saberes y objetivos forma parte del
                      gran sistema: hombre, trabajo, naturaleza y cultura;
                      respondiendo a las necesidades de su entorno social y
                      ambiental, tanto regional como nacional.
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
                      Despertar en el estudiante interés, actitudes, aptitudes y
                      comportamientos que promuevan el desarrollo científico,
                      tecnológico y técnico.
                    </p>
                  </li>
                  <li>
                    <p>
                      Crear en el estudiante actitudes y comportamientos que
                      desarrollen o despierten la iniciativa, el respeto, la
                      responsabilidad, la creatividad, la autoestima, la
                      eficiencia y el espíritu investigativo.
                    </p>
                  </li>
                  <li>
                    <p>
                      Preparar al estudiante para que durante su vida laboral y
                      productiva se desempeñe con eficiencia, seguridad,
                      responsabilidad y honestidad.
                    </p>
                  </li>
                  <li>
                    <p>
                      Proporcionar al estudiante los conocimientos y las
                      aptitudes para que identifique, diferencie y comprenda el
                      funcionamiento y construcción básica de los vehículos
                      automotores.
                    </p>
                  </li>
                  <li>
                    <p>
                      Crear en el estudiante habilidades, destrezas y aptitudes
                      en el manejo y mantenimiento seguro y responsable de
                      herramientas, equipos y máquinas y materiales de trabajo
                      en el taller mecánico.
                    </p>
                  </li>
                  <li>
                    <p>
                      Crear en el estudiante habilidades, destrezas, aptitudes y
                      capacidades para la ejecución eficiente, segura y
                      responsable de trabajos y operaciones mecánicas en el
                      diagnóstico, mantenimiento y reparación de los diversos
                      sistemas y elementos que conforman un motor de combustión
                      interna.
                    </p>
                  </li>
                  <li>
                    <p>
                      Desarrollar en el estudiante comportamientos y actitudes
                      que le permitan generar y mantener excelentes relaciones
                      humanas con los demás.
                    </p>
                  </li>
                  <li>
                    <p>
                      Promover en el estudiante valores que le faciliten la
                      convivencia y las relaciones interpersonales en comunidad.
                    </p>
                  </li>
                  <li>
                    <p>
                      Ofrecer las herramientas necesarias para que el estudiante
                      y el egresado tome posición de dialogo, tolerancia y de
                      negociador frente a conflictos que se le presenten.
                    </p>
                  </li>
                  <li>
                    <p>
                      Profundizar en el conocimiento de la mecánica automotriz,
                      teniendo en cuenta los intereses y capacidades del
                      educando.
                    </p>
                  </li>
                  <li>
                    <p>
                      Incorporar la investigación al proceso cognoscitivo, tanto
                      en el aula-taller como en la realidad nacional, en sus
                      aspectos natural, económico, político y social.
                    </p>
                  </li>
                  <li>
                    <p>
                      Desarrollar la capacidad para profundizar en el
                      conocimiento de la mecánica automotriz de acuerdo a las
                      potencialidades e intereses.
                    </p>
                  </li>
                  <li>
                    <p>
                      Vincular la especialidad a programas de desarrollo y
                      organización social y comunitaria, orientados a dar
                      solución a los problemas sociales del entorno.
                    </p>
                  </li>
                  <li>
                    <p>
                      Fomentar la conciencia y participación responsable del
                      educando en acciones que permitan dar a conocer su
                      especialidad.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*<!--creacion de la galeria-->*/}
        <span className="linea"></span>
        <section className="galeria">
          {/*<!-- se agregan las imgenes a la galeria y se vinculan entre -->*/}
          
            <img src={imagen3} alt="" />
        
        
            <img src={imagen4} alt="" />
          
          
            <img src={imagen5} alt="" />
          
          
            <img src={imagen6} alt="" />
          
          
            <img src={imagen7} alt="" />
        
          
            <img src={imagen8} alt="" />
        
          
            <img src={imagen8} alt="" />
          
          
            <img src={imagen9} alt="" />
    
          
            <img src={imagen10}alt="" />
        
          
            <img src={imagen11}alt="" />
          
          
            <img src={imagen12} alt="" />
          
          
            <img src={imagen13} alt="" />
          
          
            <img src={imagen14} alt="" />
          
         
            <img src={imagen15} alt="" />
          
         
            <img src={imagen16} alt="" />
          
         
            <img src={imagen17} alt="" />
         
            <img src={imagen18}alt="" />
        
        
            <img src={imagen19} alt="" />
          

          {/*<!-- se agregan las flechas para pasar de una imagen a otra y la X para salir -->*/}

          {/* <article className="light-box" id="image1">
                    <a href="#image20" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (1).jpg" alt="" />
                    <a href="#image2" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>


                <article className="light-box" id="image2">
                    <a href="#image1" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src={imagen3} alt="" />
                    <a href="#image3" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image3">
                    <a href="#image2" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (3).jpg" alt="" />
                    <a href="#image4" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image4">
                    <a href="#image3" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (4).jpg" alt="" />
                    <a href="#image5" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image5">
                    <a href="#image4" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (5).jpg" alt="" >
                    <a href="#image6" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>
                <article className="light-box" id="image6">
                    <a href="#image5" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (6).jpg" alt="">
                    <a href="#image7" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image7">
                    <a href="#image6" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (7).jpg" alt="">
                    <a href="#image8" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image8">
                    <a href="#image7" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (8).jpg" alt="">
                    <a href="#image9" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image9">
                    <a href="#image8" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (9).jpg" alt="">
                    <a href="#image10" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image10">
                    <a href="#image9" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (10).jpg" alt="">
                    <a href="#image11" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image11">
                    <a href="#image10" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (11).jpg" alt="">
                    <a href="#image12" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image12">
                    <a href="#image11" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (12).jpg" alt="">
                    <a href="#image13" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image13">
                    <a href="#image12" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (13).jpg" alt="">
                    <a href="#image14" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image14">
                    <a href="#image13" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (14).jpg" alt="">
                    <a href="#image15" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image15">
                    <a href="#image14" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (15).jpg" alt="">
                    <a href="#image16" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image16">
                    <a href="#image15" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (16).jpg" alt="">
                    <a href="#image17" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image17">
                    <a href="#image16" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (17).jpg" alt="">
                    <a href="#image18" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image18">
                    <a href="#image17" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (18).jpg" alt="">
                    <a href="#image19" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image19">
                    <a href="#image18" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (19).jpg" alt="">
                    <a href="#image20" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image20">
                    <a href="#image19" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.automotriz/IMG (21).jpg" alt="">
                    <a href="#image21" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article> */}
        </section>
        <span className="linea"></span>

        {/* <!--IMAGEN DEL DOCENTE QUE DICTA EL AREA--> */}
        <h2 className="text-center mt-2">DOCENTES DE LA ESPECIALIDAD</h2>
        <div className="d-flex justify-content-center align-items-center m-3">
          <div className="card shadow mb-4" style={{width: "30rem"}} id="foto">
            <img
              src={profe}
              className="card-img-top"
              alt="..."
            />
            {/* <!--SE CREA UNA TARJETA PARA MOSTRAR LA INFORMACIÓN DEL PROFESORY SU IMAGEN--> */}
            <div className="card-body">
              <h5 className="card-title text-center">
                FERNAN CAMILO GARCIA PERDOMO
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
              style={{backgroundColor: "#3b5998"}}
              href="https://www.facebook.com/IETIndustrial/?locale=es_LA"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#55acee"}}
              href="https://twitter.com/IETFELIXTIBERIO"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#dd4b39"}}
              href="https://q.plataformaintegra.net/ietfelixtiberio/"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{backgroundColor: "#df3adf"}}
              href="https://www.instagram.co
                            
                            
                        m/explore/locations/1018030579/institucion-educativa-tecnica-felix-tiberio-guzman/"
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
          style={{backgroundColor: "rgb(15, 15, 15)"}}
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
