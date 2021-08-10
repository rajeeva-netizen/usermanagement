import { SUBMIT_OK, ADD_CUSTOMERS } from "./type"
import axios from "axios"
export const submit=(bool)=>{
    console.log(bool)
    return (dispatch)=>{
        dispatch({
            type:SUBMIT_OK,
            bool
        })
    }
}

export const sendData=(val)=>{
    console.log(val)
    return (dispatch)=>{
        axios.post('http://localhost:4000/newcustomer', val)
        .then((res)=>{
            dispatch({
                type:ADD_CUSTOMERS,
                 val
            })
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
}