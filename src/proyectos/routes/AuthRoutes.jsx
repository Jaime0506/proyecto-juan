import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../../auth/pages"

export const AuthRoutes = () => {
  return (
    // auth + /
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/*" element={<Navigate to="register" />} />
    </Routes>
  )
}
