import { LOGIN_SUCCESS, GET_ERROR } from "./type";
import axios from 'axios';


const config = {
    headers: {
        "Content-type": "application/json",
    }
}

export const login = async (email, password)=>{
    const body = JSON.stringify({email, password})
    console.log(body)
    try{
        const res = await axios.post(`http://localhost:8080/auth/api/login`, body, config)
        if(res.data.success === true){
            const result = {
                type: LOGIN_SUCCESS,
                payload: res.data.data
            }
            return result
        }
        else{
            return {
                type: GET_ERROR,
                payload: res.data.message
            }
        }
        
    } catch(e){
        return {
            type: GET_ERROR,
            payload: e
        }
    }
}