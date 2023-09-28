import { useDispatch, useSelector } from "react-redux"
import { onLoadingForms } from "../store/forms/thunks"


export const useFormsStore = () => {
    const { data = []} = useSelector(store => store.forms)
    const dispatch = useDispatch()

    const handleOnLoadingForms = () => {
        dispatch(onLoadingForms())
    }

    return {
        data,
        handleOnLoadingForms,
    }
}
