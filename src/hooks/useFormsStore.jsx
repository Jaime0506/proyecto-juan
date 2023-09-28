import { useDispatch, useSelector } from "react-redux"
import { onLoadingForms, onUpdateForms } from "../store/forms/thunks"
import { clearForms } from "../store/forms/formsSlice"


export const useFormsStore = () => {
    const { data = [] } = useSelector(store => store.forms)
    const dispatch = useDispatch()

    const handleOnLoadingForms = (state) => {
        dispatch(onLoadingForms(state))
    }

    const handleOnUpdateForms = (form) => {
        dispatch(onUpdateForms(form))
    }

    const handleOnClearForms = () => {
        dispatch(clearForms())
    }

    return {
        data,
        handleOnLoadingForms,
        handleOnUpdateForms,
        handleOnClearForms
    }
}
