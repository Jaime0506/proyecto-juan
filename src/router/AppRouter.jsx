import { Navigate, Route, Routes } from "react-router-dom";
import { ProyectosRoutes } from "../proyectos/routes/ProyectosRoutes";
import { AuthRoutes } from "../proyectos/routes/AuthRoutes";
import { useAuthStore } from "../hooks/useAuthStore";
import { Checking } from "../proyectos/components/Checking";
import { useEffect } from "react";
import { Admin } from "../proyectos/pages";

export const AppRouter = () => {

    const { status, id, handleOnCheckinAuth } = useAuthStore()

    useEffect(() => {
        handleOnCheckinAuth()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (status == "checking") return <Checking />

    return (
        <Routes>
            {(status === "authenticated" && id == import.meta.env.VITE_ID_ADMIN) ? (
                <Route path="/admin" element={<Admin />} />
            ) : null}
            <Route path="/proyectos/*" element={<ProyectosRoutes />} />
            <Route path="/*" element={<Navigate to="proyectos" />} />

            {/* La ruta existe si no se encuentra authenticado de lo contrario no lo deja entrar */}
            {status == "not-authenticated" && <Route path="/auth/*" element={<AuthRoutes />} />}
        </Routes>
    );
};