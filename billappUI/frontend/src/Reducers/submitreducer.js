import {SUBMIT_OK, ADD_CUSTOMERS} from '../Actions/type'

const intialState = {
    boolVal:"",
    cutomersData:["", "", "", "", "", ""] // Name, AreaName, BF, Lunch, Dinner
}

const reducer = (state = intialState, action)=>{
    switch(action.type){
        case SUBMIT_OK:
            return{
                ...state,
                boolVal:action.bool
            }
        case ADD_CUSTOMERS:
            return{
                ...state,
                cutomersData:action.payload
            }
            default: return state
    }
}

export default reducer 