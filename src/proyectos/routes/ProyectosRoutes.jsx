import { Link, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Sistemas } from "../pages/Sistemas";
import { Dibujo } from "../pages/Dibujo";

export const ProyectosRoutes = () => {
    // + /proyectos/
    return (
        <>
            <ul>
                <li>
                    <Link to="/proyectos/">Inicio</Link>
                </li>
                <li>
                    <Link to="/proyectos/sistemas">Sistemas</Link>
                </li>
                <li>
                    <Link to="/proyectos/dibujo">dibujo</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/sistemas" element={<Sistemas />} />
                <Route path="/dibujo" element={<Dibujo />} />
            </Routes>
        </>
    );
};

// inicio / Sistemas y computacion / dibujo tecnico / metalisteria / mecanica automotrix / mecanica indistrial / electricidad / electronica / proyectos de grado
