import { useState } from 'react'
import LoginImage from '../../img/login/login.webp'
import { useAuthStore } from '../../hooks/useAuthStore'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    const { handleOnLogin } = useAuthStore()
    const [formsValue, setFormsValue] = useState({
        email: "",
        password: ""
    })

    const onSubmit = (e) => {
        e.preventDefault()
        handleOnLogin(formsValue)
    }

    const onInputChange = ({ target }) => {
        setFormsValue({
            ...formsValue,
            [target.name]: target.value
        })
    }

    return (
        <div className="bg-transparent d-flex vh-100 justify-content-center align-items-center">

            <form className="container text-center p-2 bg-white rounded-2 p-5 shadow-lg p-3 mb-5 bg-body rounded p-3 mb-5 rounded mt-5" style={{ width: "auto" }} onSubmit={onSubmit}>

                <h5 className="text-success mb-4 fs-4">INICIA SESIÓN</h5>
                {/* <!--La etiqueta <h5> permite insertar --> */}

                {/* <!-- Contenedor con la imagen del Login --> */}
                <div className="container text-center mb-2">
                    <img src={LoginImage} alt="" width="150px" style={{ width: "150px" }} />
                    {/* <!-- La etiueta <img> permite insertar una imagen--> */}
                </div>

                <input
                    className="form-control mb-3"
                    type="email"
                    placeholder="Correo electronico"
                    id="email"
                    name='email'
                    value={formsValue.email}
                    onChange={onInputChange}
                />
                {/* <!-- Campo  para el correo electronico --> */}

                <input
                    className="form-control"
                    type="password"
                    placeholder="Contraseña"
                    id="password"
                    name='password'
                    value={formsValue.password}
                    onChange={onInputChange}
                />

                {/* <!-- Campo  para la contraseña --> */}
                {/* <!-- botón para inicar sesión--> */}
                <blockquote className="mt-3" style={{fontSize: "16px"}}>
                    No tienes una cuenta?
                    <Link to="auth/register" >Registrate</Link>
                </blockquote>
                <button className="btn btn-outline-success mt-3" type="submit" style={{ width: "100%" }} id="btn">INICIAR SESION</button>
            </form>
        </div>
    )
}
