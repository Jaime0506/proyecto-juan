import { Route, Routes } from "react-router-dom";
import { Inicio, Sistemas, Dibujo, Electricidad, Electronica, MecanicaAuto, MecanicaIndus, Metalisteria, ProyectosGrado } from "../pages";

import { Navbar } from "../components/Navbar";

export const ProyectosRoutes = () => {
    // + /proyectos/
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/*" element={<Inicio />} />
                <Route path="/sistemas" element={<Sistemas />} />
                <Route path="/dibujo" element={<Dibujo />} />
                <Route path="/metalisteria" element={<Metalisteria />} />
                <Route path="/mecanica_auto" element={<MecanicaAuto />} />
                <Route path="/mecanica_indus" element={<MecanicaIndus />} />
                <Route path="/electricidad" element={<Electricidad />} />
                <Route path="/electronica" element={<Electronica />} />
                <Route path="/grado" element={<ProyectosGrado />} />
            </Routes>
        </>
    );
};

// inicio / Sistemas y computacion / dibujo tecnico / metalisteria / mecanica automotrix / mecanica indistrial / electricidad / electronica / proyectos de grado
