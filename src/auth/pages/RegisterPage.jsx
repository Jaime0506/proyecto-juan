import { useState } from 'react'
import logoRegister from '../../img/register/logoRegister.webp'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../hooks/useAuthStore'

export const RegisterPage = () => {
    const { handleOnRegister } = useAuthStore()
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    })

    const onSubmit = (e) => {
        e.preventDefault()
        handleOnRegister(formValues)
    }

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    return (
        <div className="bg-transparent d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={onSubmit} className="container text-center p-2 bg-white rounded-2 p-5 shadow-lg p-3 mb-5 bg-body rounded p-3 mb-5 rounded mt-5"
                style={{ width: "auto" }}>
                <div className="">
                    <h5 className="text-success mb-3 fs-4 text-center">REGISTRATE</h5>
                    <div>
                        <img className="mb-2" src={logoRegister} alt="" />
                    </div>
                </div>
                <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="Correo electronico"
                    name='email'
                    onChange={onInputChange}
                    value={formValues.email}
                />

                <br></br>

                <input
                    className="form-control"
                    type="password"
                    id="password"
                    placeholder="Contraseña"
                    name='password'
                    onChange={onInputChange}
                    value={formValues.password}
                />

                <blockquote className="mt-3" style={{ fontSize: "16px" }}>Tienes una cuenta ya?
                    <Link to="/auth/login" >Inicia sesión</Link>
                </blockquote>
                <div className="container mt-3">
                    <button className="btn btn-outline-success" type="submit" style={{ width: "100%" }} id="btn">REGISTRARME</button>
                </div>
            </form>
        </div>
    )
}
