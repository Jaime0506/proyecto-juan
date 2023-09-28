import { useDispatch, useSelector } from "react-redux"
import { onCheckinAuth, onLogin, onLogout, onRegister } from "../store/auth/thunks"

export const useAuthStore = () => {
    const { status, id, errorMessage } = useSelector(store => store.auth)
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
        id,
        errorMessage,
        
        handleOnLogin,
        handleOnLogout,
        handleOnCheckinAuth,
        handleOnRegister
    }
}