import { SUBMIT_OK } from "./type"

export const submit=(bool)=>{
    console.log(bool)
    return (dispatch)=>{
        dispatch({
            type:SUBMIT_OK,
            bool
        })
    }
}