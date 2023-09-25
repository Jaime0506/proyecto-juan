import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#51f948" }} id="nav">
            <div className="container-fluid">
                {/* <!--CONTENEDOR CON LAS OPCIONES DE NAVEGACION--> */}
                {/* <!--BOTON PARA LA NAVEGACION EN DISPOSITIVOS MOVILES--> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <!--CONTENEDOR CON LOS ENLACES A LAS DEMAS PAGINAS--> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* <!--LISTA NO ORDENADA--> */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/proyectos" >Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/proyectos/sistemas" >Sistemas y Computación</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/proyectos/dibujo" >Dibujo Técnico</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/proyectos/metalisteria" >Metalistería</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/proyectos/mecanica_auto" >Mecánica Automotríz</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/proyectos/mecanica_indus" >Mecánica Industrial</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/proyectos/electricidad" >Electricidad</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/proyectos/electronica" >Electrónica</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/proyectos/grado" >Proyectos de Grado</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
