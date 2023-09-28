import { useEffect } from "react"
import { useAuthStore, useFormsStore } from "../../hooks"

export const Admin = () => {
    const { data, handleOnLoadingForms, handleOnUpdateForms } = useFormsStore()
    const { handleOnLogout } = useAuthStore()
    useEffect(() => {
        handleOnLoadingForms()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="container-fluid">

            {/* <!--CONTENEDOR QUE TIENE EL TEXTO DEL SITIO WEB --> */}
            <div className="container-fluid mb-3 mt-3 bg-white shadow" id="containerText">
                {/* <!--La etiquta <h1> define el tamaño del texto siendo "h1" el más grande --> */}
                <h1> INSTRUCCIONES: </h1>
                {/* <!--La etiqueta <p> contiene parrafos del sitio web--> */}
                <p>En la siguente tabla podrá ver las solicitudes que los estudiantes han enviado para que información acerca de sus proyectos de grado sea mostrada en el sitio web, antes de aprobar que dichos proyectos sean subidos, asegurese de que la información en las campos de cada fila tenga sentido y no contenga ningun tipo de información inncesaria u obscena como malas palabras o datos personales no solicitados.  </p>
                <p> Si considera que la solicitud cumple con todos los requisitos y desea aprobarla, haga <b>CLICK</b> </p>

                <p> <b>SI NO</b> desea autorizar que una solicitud sea subida no presione ningún botón.  </p>
                <h1> RECOMENDACIONES: </h1>

                <ul>
                    {/* <!--La etiqueta <ul> crea una lista desordenada, es decir sin enumeración--> */}
                    <li>
                        Antes de aprobar una solicitud, debe estar <b>100% SEGURO</b> de que esta cumple con los requisitos, pues no podrá cancelar dicha acción.
                    </li>
                    {/* <!--la tiqueta <li> agrega una viñeta a la lista --> */}

                    <li>
                        <b>NO</b> le brinde su correo y contraseña a nadie más, esto para garantizar el correcto funcionamiento del sitio web y asegurar la protección de los datos a los que se tiene acceso.
                    </li>

                    <li>
                        Si necesita ayuda, la página presenta errores, tiene dudas de como funciona o cometio sin intención algún error como los mencionados anteriormente, comuniquese al siguiente número: <b>3015693492</b>
                    </li>
                </ul>
            </div>

            {/* <!--Contenedor de la tabla con las solicitudes de los estudiantes--> */}
            <div className="table-responsive">
                {/* <!--la etiqueta <table> crea la estructura basica de una tabla--> */}
                <table className="table table-bordered table-hover table-sm align-middle">
                    {/* <!--La etiqueta <thead> sirve para crear los titulos o la cabeza de una tabla --> */}
                    <thead>
                        <tr>
                            {/* <!--La etiqueta <tr> permite agregar una fila a la tabla--> */}

                            <th scope="col">ID</th>
                            {/* <!-- <th> agrega un encabezado  --> */}
                            <th scope="col">TITULO</th>
                            <th scope="col">GRADO</th>
                            <th scope="col">ESPECIALIDAD</th>
                            <th scope="col">ID-USUARIO</th>
                            <th scope="col">RESUMEN</th>
                            <th scope="col">JEFE DEL PROYECTO</th>
                            <th scope="col">FECHA</th>
                            <th scope="col">ROL</th>
                            <th scope="col">MANAGER</th>
                            <th scope="col">ESTADO</th>
                            <th scope="col">OPCIONES</th>
                        </tr>
                    </thead>
                    {/* <!-- La etiqueta <tbody> crea el cuerpo de la tabla o contenido--> */}
                    <tbody id="tableBody">
                        { data.filter((form) => !form.state).map((form, index) => (
                            <tr key={index}>
                                <td>{form.id}</td>
                                <td>{form.title}</td>
                                <td>{form.grados.nombre}</td>
                                <td>{form.especialidades.nombre}</td>
                                <td>{form.userid}</td>
                                <td>{form.resume}</td>
                                <td>{form.author}</td>
                                <td>{form.date}</td>
                                <td>{form.rol}</td>
                                <td>{form.manager}</td>
                                <td>{form.state ? "APROBADO" : "POR APROBAR"}</td>
                                <td>
                                    <button className="btn btn-success toggle-button" onClick={() => handleOnUpdateForms(form)}>APROBAR</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* <!-- contendor con el boton para cerrar sesión --> */}
            <div className="container-fluid">
                <button type="button" id="btn" className="btn btn-success w-100" onClick={handleOnLogout}>CERRAR SESIÓN</button>
            </div>
        </div>
    )
}
