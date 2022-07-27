import axios from 'axios';
export const GET_TEXT = "GET_TEXT";

export default function reverseText(text){
    return async function(dispatch){
        const { data } = await axios(`http://localhost:3001/generate?text=${text}`);
        return dispatch({
            type: GET_TEXT,
            payload: data
        })
    }
}
