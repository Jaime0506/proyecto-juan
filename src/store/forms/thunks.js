import { supabase } from "../../supabase/config";
import { loadingForms } from "./formsSlice";

export const onLoadingForms = () => {
    return async (dispatch) => {
        const { data, error } = await supabase.from("forms").select(`
        title,
            author,
            especialidades (
            nombre
            ),
            resume,
            date,
            manager,
            rol
        `).eq("state", true)

        if (data.length > 0) {
            dispatch(loadingForms(data))
        }

        if (error) {
            console.log(error);
        }
    }
}