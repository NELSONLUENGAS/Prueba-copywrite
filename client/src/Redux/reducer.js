import { GET_TEXT } from "./actions";

const initialState = {
    text: []
}
export const rootReducer = (state = initialState, {payload, type}) =>{
    switch(type){
        case GET_TEXT:
            return {
                ...state,
                text: payload
            }
        default:
            return {
                ...state
            }
    }
}