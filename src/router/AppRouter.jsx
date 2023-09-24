import { Navigate, Route, Routes } from "react-router-dom";
import { ProyectosRoutes } from "../proyectos/routes/ProyectosRoutes";

// const status = false;

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/proyectos/*" element={<ProyectosRoutes />} />
            <Route path="/*" element={<Navigate to="/proyectos" />} />
        </Routes>
    );
};