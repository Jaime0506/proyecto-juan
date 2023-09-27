import second from 'first'



export const MecanicaIndus = () => {
  return (
    <div className="container mt-3">
      <h1>MECÁNICA INDUSTRIAL</h1>
      {/* <!--IMAGENES DEL CARRUSEL DE LA ESPECIALIDAD--> */}
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner">
                <div className="carousel-item active">
                    {/* <!-- AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/1.jpg"--> */}
                    <img id="img1" src="img.industrial/1.jpg" className="d-block" alt="..." width="100%" />
                </div>
                <div className="carousel-item">
                    {/* <!--AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/2.jpg"--> */}
                    <img id="img1" src="img.industrial/2.jpg" className="d-block" alt="..." width="100%" />
                </div>
                <div className="carousel-item">
                    {/* <!--AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/3.jpg"--> */}
                    <img id="img1" src="img.industrial/3.jpg" className="d-block" alt=".." width="100%" />
                </div>
                <div className="carousel-item">
                    {/* <!--AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/52.jpg"--> */}
                    <img id="img1" src="img.industrial/52.jpg" className="d-block" alt="..." width="100%" />
                </div>
                <div className="carousel-item">
                    {/* <!--AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/6.jpg"--> */}
                    <img id="img1" src="img.industrial/6.jpg" className="d-block" alt=".." width="100%" /> 
                </div>
                <div className="carousel-item">
                    {/* <!--AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/img.industrial/7.jpg"--> */}
                    <img id="img1" src="img.industrial/7.jpg" className="d-block" alt=".." width="100%" />
                </div>
                <div className="carousel-item">
                    {/* <!--AQUI SE AGRAGA LA IMAGEN PARA SU VISUALIZACIÓN EN EL src="img/8.jpg"--> */}
                    <img id="img1" src="img.industrial/8.jpg" className="d-block" alt=".." width="100%" />
                </div>

            </div>
            {/* <!--BOTONES DEL CARRUSEL PARA QUE SE DESPALCE ASI LA SIGUIENTE IMAGEN O ASI LA ANTERIOR IMAGEN--> */}
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
            {/* <!--INFORMACION DEL TALLER DE MECANICA INDUSTRIAL--> */}

            {/* <!-- INTRODUCIÓN DEL AREA--> */}
            <h2>INTRODUCCIÓN</h2>
            <div className="thumbnail">
                <img src="img.industrial/introduccion.jpg" alt="Miniatura" width="260" height="240" />
            </div>
            <p>
                La necesidad de llevar a la Nación por un proceso de industrialización a nivel global, estableció los
                Institutos Técnicos Industriales, como mecanismo para desarrollar la industria del país desde el fomento
                y la capacitación de mano de obra calificada a través de la educación formal básica, es decir, que los
                estudiantes bachilleres optaran título de certificado de actitud profesional a nivel técnico para
                desempeñarse en el mercado laboral. 
                La Mecánica Industrial planea, diseña, crea, modifica, repara, y establece diagnósticos de máquinas y
                piezas mecánicas para optimizar procesos industriales en todos los niveles de la industria, siendo capaz
                de satisfacer las necesidades locales y regionales en lo que se refiere a procesos de manufactura de
                piezas mecánicas y construcción de maquinaria para los diferentes campos de la producción nacional.
                El estudiante u aprendiz de la Mecánica Industrial de la Institución Educativa Técnica Félix Tiberio
                Guzmán, de Espinal Tolima, toma los conceptos de tipo teórico, técnico, y ético, en la construcción de
                su proyecto de vida, ampliando los horizontes de su saber, y de su desenvolvimiento en el mercado
                laboral, ejerciendo con calidad y precisión sus saberes de tipo técnico.
                Los procesos industriales desarrollados en el taller de Mecánica Industrial, refieren a la manipulación
                de máquinas herramientas de arranque de viruta y puesta a punto de materiales en la reparación y/o
                construcción de máquinas industriales. En su desarrollo se determinan tres grandes dimensiones del
                conocimiento: La Metrología (medición con aparatos de precisión), que determina la exactitud en los
                procesos de maquinado, seguidamente los procesos manuales de arranque de viruta o ejecución con
                herramientas de mano; de otro lado, la puesta a punto de la máquina con sus dispositivos de corte o
                cuchillas, los referidos a la acotación como los diales, las palancas de mando, controles de velocidad y
                de referencia, finalmente se consideran los términos de la seguridad industrial para los procesos de
                máquinas herramientas y en general los considerados en la industria manufacturera.
            </p>
            {/* <!--JUSTIFICACION DEL AREA--> */}
            <h2>JUSTIFICACIÓN</h2>
            <div className="thumbnail1">
                <img src="img.industrial/introduccion1.jpg" alt="Miniatura" width="260" height="240" />
            </div>
            <p>
                La razón de ser de la Mecánica Industrial en nuestro medio social y productivo consiste en satisfacer
                las necesidades de los medios de producción de la industria, como la operación y diseño de máquinas
                industriales, su reparación, mantenimiento, eficiencia y productividad de las mismas. 
                Desde el punto de vista humano el área se caracteriza por acoger procesos mediante los cuales el
                estudiante desarrolla armónicamente sus capacidades motrices, innovadoras, intelectuales y afectivas;
                sirviendo de medios para asumir valores, actitudes y comportamientos técnicos que le permiten
                relacionarse consigo mismo, con la sociedad, la cultura y la naturaleza, mediante su trabajo,
                permitiendo así explicar y transformar realidades múltiples en forma creativa, racional y segura para
                poder producir y administrar bienes y servicios, a fin de solucionar problemas y necesidades básicas de
                la comunidad y de él mismo. 
                De otro lado, la Ley General de Educación justifica de manera más amplia la educación media técnica como
                medio de realización personal y como aporte a las necesidades regionales de la mano de obra calificada y
                solución de problemas comunitarios en diferentes ámbitos de la industria y el agro.
            </p>

            {/* <!--OBJETIVOS DEL AREA: OBJETIVO GENERAL Y ESPECIFICOS--> */}
            <h2>
                OBJETIVOS Y METAS DE APRENDIZAJE
            </h2>
            {/* <!-- se crea un acordion plegable para los objetivos --> */}
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Objetivos Generales
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>

                                <li>
                                    <p>
                                        Interactuar tecnológicamente con materiales, herramientas y equipos de la
                                        especialidad, necesarios para la experimentación y aplicación de principios,
                                        métodos y logros de trabajo y producción.</p>
                                </li>
                                <li>
                                    <p>
                                        Determinar las operaciones del proceso, mecanizado de acuerdo al programa de
                                        producción.</p>
                                </li>
                                <li>
                                    <p>
                                        Ajustar la maquinaria y herramientas para asignar la calidad del mecanizado.</p>
                                </li>
                                <li>
                                    <p>
                                        Adquirir la habilidad para mecanizar la pieza de acuerdo con las características
                                        establecidas en el plano.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Objetivos Especificos
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li>
                                    <p>Mecanizar correctamente un ejercicio de banco.</p>
                                </li>
                                <li>
                                    <p>Organizar adecuadamente las etapas en el desarrollo de un proceso de mecanizado
                                        manual o a máquina.</p>
                                </li>
                                <li>
                                    <p>Manejar y dar lectura a los nonios de manera correcta en la realización de
                                        mediciones.</p>
                                </li>
                                <li>
                                    <p>Aprende a trazar y a conceder la importancia que implica este proceso en la
                                        mecanización.</p>
                                </li>
                                <li>
                                    <p>Elabora e interpreta planos en los procesos de maquinado (manual y a máquina).
                                    </p>
                                </li>
                                <li>
                                    <p>Maneja con destreza las herramientas de mano.</p>
                                </li>
                                <li>
                                    <p>Reconoce y emplea de manera correcta y eficiente los mandos, palancas o botones
                                        de referencia de las máquinas empleadas en el taller.</p>
                                </li>
                                <li>
                                    <p>Mecaniza con precisión las piezas mecánicas y lo hace de manera eficiente para
                                        producir con seguridad.
                                        Aplica las normas de seguridad en todos los procesos mecánicos, manuales y a
                                        máquina, lo mismo que su desplazamiento por las dependencias del taller.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!--FUNDAMENTO DEL AREA--> */}
            <h2>FUNDAMENTO EN LAS METAS DE APRENDIZAJE</h2>
            <p>
                La Educación diversificada en Colombia, crea la necesidad de sistematizar la orientación vocacional, con
                el objeto de ofrecer un servicio indispensable al alumno, dentro de su proceso educativo y de formación
                personal. La orientación vocacional se define como el proceso que permite al alumno conocer y
                desarrollar sus capacidades y superar sus limitaciones en función del rol que quiere y puede desempeñar
                en su vida laboral dentro de la sociedad y en beneficio de la misma. 
                De acuerdo a la postura anterior, este proceso propone lograr metas (meta no entendida como objetivo,
                sino como el horizonte que plantea formarse en la Mecánica Industrial) que lleven al alumno a: 
            </p>
            <ul>
                <li>
                    <p>Fomentar la actitud para evaluar las realizaciones personales.</p>
                </li>
                <li>
                    <p>Desarrollar la capacidad para tomar decisiones vocacionales, teniendo en cuenta sus aptitudes,
                        intereses, motivaciones y los factores internos implicados (cultura, aspectos económicos y
                        familiares).</p>
                </li>
                <li>
                    <p>Analizar las experiencias vocacionales en relación con sus necesidades inmediatas y a largo
                        plazo.</p>
                </li>
                <li>
                    <p>Definir sus planes ocupacionales mediante el conocimiento y las características y funciones de
                        las actividades que conforman el plan de estudios.</p>
                </li>
                <li>
                    <p>Identificar el papel que le corresponde en el desarrollo de su comunidad.</p>
                </li>
                <li>
                    <p>Valorar la importancia del trabajo para su realización personal y como miembro de la sociedad.
                    </p>
                </li>
            </ul>

            {/* <!--creacion de la galeria--> */}
            <span className="linea"></span>
            <section className="galeria">
                {/* <!-- se agregan las imgenes a la galeria y se vinculan entre --> */}
                <img src="img.industrial/IMG (1).jpg" alt="" /> 
                <img src="img.industrial/IMG (2).jpg" alt="" />
                <img src="img.industrial/IMG (3).jpg" alt="" />
                <img src="img.industrial/IMG (4).jpg" alt="" />
                <img src="img.industrial/IMG (5).jpg" alt="" />
                <img src="img.industrial/IMG (6).jpg" alt="" />
                <img src="img.industrial/IMG (7).jpg" alt="" />
                <img src="img.industrial/IMG (8).jpg" alt="" />
                <img src="img.industrial/IMG (9).jpg" alt="" />
                <img src="img.industrial/IMG (10).jpg" alt="" />
                <img src="img.industrial/IMG (11).jpg" alt="" />
                <img src="img.industrial/IMG (12).jpg" alt="" />
                <img src="img.industrial/IMG (13).jpg" alt="" />
                <img src="img.industrial/IMG (14).jpg" alt="" />
                <img src="img.industrial/IMG (15).jpg" alt="" />
                <img src="img.industrial/IMG (16).jpg" alt="" />
                <img src="img.industrial/IMG (17).jpg" alt="" />
                <img src="img.industrial/IMG (18).jpg" alt="" />
                {/* <!-- se agregan las flechas para pasar de una imagen a otra y la X para salir --> */}

                {/* <article className="light-box" id="image1">
                    <a href="#image20" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (1).jpg" alt="">
                    <a href="#image2" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image2">
                    <a href="#image1" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (2).jpg" alt="">
                    <a href="#image3" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image3">
                    <a href="#image2" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (3).jpg" alt="">
                    <a href="#image4" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image4">
                    <a href="#image3" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (4).jpg" alt="">
                    <a href="#image5" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image5">
                    <a href="#image4" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (5).jpg" alt="">
                    <a href="#image6" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>
                <article className="light-box" id="image6">
                    <a href="#image5" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (6).jpg" alt="">
                    <a href="#image7" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image7">
                    <a href="#image6" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (7).jpg" alt="">
                    <a href="#image8" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image8">
                    <a href="#image7" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (8).jpg" alt="">
                    <a href="#image9" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image9">
                    <a href="#image8" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (9).jpg" alt="">
                    <a href="#image10" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image10">
                    <a href="#image9" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (10).jpg" alt="">
                    <a href="#image11" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image11">
                    <a href="#image10" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (11).jpg" alt="">
                    <a href="#image12" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image12">
                    <a href="#image11" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (12).jpg" alt="">
                    <a href="#image13" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image13">
                    <a href="#image12" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (13).jpg" alt="">
                    <a href="#image14" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image14">
                    <a href="#image13" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (14).jpg" alt="">
                    <a href="#image15" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image15">
                    <a href="#image14" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (15).jpg" alt="">
                    <a href="#image16" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image16">
                    <a href="#image15" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (16).jpg" alt="">
                    <a href="#image17" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image17">
                    <a href="#image16" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (17).jpg" alt="">
                    <a href="#image18" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article>

                <article className="light-box" id="image18">
                    <a href="#image17" className="next"><i className="fa-solid fa-circle-chevron-left fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <img src="img.industrial/IMG (18).jpg" alt="">
                    <a href="#image19" className="next"><i className="fa-solid fa-circle-chevron-right fa-2xl"
                            style="color: #7fba00;"></i></a>
                    <a href="#galeria" className="close"><i className="fa-solid fa-circle-xmark fa-2xl"
                            style="color: #ff0000;"></i></a>
                </article> */}

            </section>
            <span className="linea"></span>

            {/* <!--IMAGEN DEL DOCENTE QUE DICTA EL AREA--> */}
            <h2 className="text-center">DOCENTES DE LA ESPECIALIDAD</h2>
            <div className="d-flex justify-content-center align-items-center m-3">
                <div className="card shadow" style={{width: "30rem"}} id="foto">
                    <img src="img.industrial/profe.jpg" className="card-img-top" alt="..." />
                    {/* <!--SE CREA UNA TARJETA PARA MOSTRAR LA INFORMACIÓN DEL PROFESORY SU IMAGEN--> */}
                    <div className="card-body">
                        <h5 className="card-title text-center">MS. WILLIAM ORTIZ SALGADO</h5>
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
                    <a className="btn text-white btn-floating m-1" style={{backgroundcolor: "#3b5998"}}
                        href="https://www.facebook.com/IETIndustrial/?locale=es_LA" role="button"><i
                            className="fab fa-facebook-f"></i></a>

                    {/* <!-- Twitter --> */}
                    <a className="btn text-white btn-floating m-1" style={{backgroundcolor: "#55acee"}}
                        href="https://twitter.com/IETFELIXTIBERIO" role="button"><i className="fab fa-twitter"></i></a>

                    {/* <!-- Google --> */}
                    <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#dd4b39"}}
                        href="https://q.plataformaintegra.net/ietfelixtiberio/" role="button"><i
                            className="fab fa-google"></i></a>

                    {/* <!-- Instagram --> */}
                    <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#df3adf"}}
                        href="https://www.instagram.com/valqmn/" role="button"><i className="fab fa-instagram"></i></a>
                </section>
                {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3" style={{backgroundColor: "rgb(15, 15, 15)"}} id="copy">
                © 2023 Copyright:
                <a className="text-white" href="http://www.ftg.edu.co ">INSTITUCIÓN F.T.G</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    </div>
  );
};
