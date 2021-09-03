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

export const sendData=(name, company, address, info)=>{
    console.log(name, company, address, info)
    return (dispatch)=>{
        axios.post('https://digitechusers.herokuapp.com/newcustomer',{
            name, 
            company, 
            address, 
            info
        })
        .then((res)=>{
            dispatch({
                type:ADD_CUSTOMERS,
                payload:res.data
            })
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
}