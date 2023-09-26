import { useDispatch, useSelector } from "react-redux"
import { onCheckinAuth, onLogin, onLogout, onRegister } from "../store/auth/thunks"

export const useAuthStore = () => {
    const { status } = useSelector(store => store.auth)
    const dispatch = useDispatch()

    const handleOnLogin = (formsValue) => {
        dispatch(onLogin(formsValue))
    }

    const handleOnLogout = () => {
        dispatch(onLogout())
    }

    const handleOnCheckinAuth = () => {
        dispatch(onCheckinAuth())
    }

    const handleOnRegister = (formValues) => {
        dispatch(onRegister(formValues))
    }

    return {
        status,
        handleOnLogin,
        handleOnLogout,
        handleOnCheckinAuth,
        handleOnRegister
    }
}