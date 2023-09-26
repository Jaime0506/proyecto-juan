import { supabase } from "../../supabase/config"
import { checking, login, logout } from "./authSlice"

export const onLogin = (formValues) => {
    return async(dispatch) => {
        dispatch(checking())

        const { data, error } = await supabase.auth.signInWithPassword({...formValues})

        if (data) {
            const { user } = data
            dispatch(login(user))
            console.log("Nos logeamos")
        }

        if (error) {
            console.log(error)
            dispatch(logout())
        }
    }
}

export const onLogout = () => {
    return async(dispatch) => {
        dispatch(checking())

        await supabase.auth.signOut()

        dispatch(logout())
    }
}

export const onCheckinAuth = () => {
    return async(dispatch) => {
        supabase.auth.onAuthStateChange((event, session) => {
            console.log(event)

            dispatch(checking())

            if (!session?.user) {
                dispatch(logout());

                return;
            }

            dispatch(login(session.user));
        })
    }
}

export const onRegister = (formValues) => {
    return async(dispatch) => {
        dispatch(checking())

        const { data, error } = await supabase.auth.signUp({...formValues});

        if (data) {
            const { user } = data
            dispatch(login(user))
        }

        if (error) {
            dispatch(logout)
            console.log(error)
        }
    }
}