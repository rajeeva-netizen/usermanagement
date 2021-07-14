import {SUBMIT_OK} from '../Actions/type'

const intialState = {
    boolVal:""
}

const reducer = (state = intialState, action)=>{
    switch(action.type){
        case SUBMIT_OK:
            return{
                ...state,
                boolVal:action.bool
            }
            default: return state
    }
}

export default reducer 