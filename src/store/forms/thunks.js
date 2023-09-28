import { supabase } from "../../supabase/config";
import { loadingForms, updateForms } from "./formsSlice";

export const onLoadingForms = () => {
    return async (dispatch) => {
        const { data, error } = await supabase.from("forms").select(`
            id,
            title,
            grados (
                nombre
            ),
            especialidades (
                nombre
            ),
            userid,
            resume,
            author,
            date,
            rol,
            manager,
            state
        `)

        if (data?.length > 0) {
            dispatch(loadingForms(data))
        }

        if (error) {
            console.log(error);
        }
    }
}

export const onUpdateForms = (form) => {
    return async (dispatch) => {
        console.log(form)

        const newState = !form.state
        console.log(newState)

        const { error } = await supabase
            .from("forms")
            .update({
                state: newState
            })
            .eq("id", form.id)
        
        if (error) {
            console.log(error)
            return
        }

        dispatch(updateForms(form))

    }
}