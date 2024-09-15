import { 
    GET_ERROR,
    STATISTICS,
    ORDER_HISTORY,
    GET_RESTAURANT,
    GET_WISHLIST,
    GET_USER,
    GET_WISHLIST_DETAIL,
    ADD_SUCCESS,
    GET_RESTAURANTDEATAIL,
    CHANGE_RESTAURANT
} from "../action/type";
import axios from "axios";

const config = {
    headers: {
        "Content-type": "application/json",
    }
}

function configAuth(yourAuthToken){
    return {
        headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${yourAuthToken?yourAuthToken:null}`,
        }
    };
}

function configAuthFile(yourAuthToken){
    return {
        headers: {
            "Content-type": "multipart/form-data",
            'Authorization': `Bearer ${yourAuthToken?yourAuthToken:null}`,
        }
    };
}


export const statistics = async (rid, token)=>{
    try{
        const res = await axios.get(`http://127.0.0.1:8080/api/statistics/${rid}`, configAuth(token))
        if(res.data.success === true){
            const result = {
                type: STATISTICS,
                payload: res.data.data
            }
            return result
        }
        else{
            return {
                type: GET_ERROR,
                payload: "ERROR"
            }
        }
        
    } catch(e){
        return {
            type: GET_ERROR,
            payload: e
        }
    }
}

export const getHistoryOrder = async (token)=>{
    
    try{
        const res = await axios.get(`http://localhost:8080/api/current-order`, configAuth(token))
        if(res.data.success === true){
            const result = {
                type: ORDER_HISTORY,
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


export const getrestaurant = async (rid, token)=>{
    try{
        const res = await axios.get(`http://127.0.0.1:8080/api/restaurant-admin`, configAuth(token))
        
        if(res.data.success === true){
            console.log(res.data.data);
            const result = {
                type: GET_RESTAURANT,
                payload: res.data.data
            }
            return result
        }
        else{
            return {
                type: GET_ERROR,
                payload: "ERROR"
            }
        }
        
    } catch(e){
        return {
            type: GET_ERROR,
            payload: e
        }
    }
}

export const getwishlist = async (token)=>{
    try{
        const res = await axios.get(`http://127.0.0.1:8080/api/wishlist`, configAuth(token))
        
        if(res.data.success === true){
            console.log(res.data.data);
            const result = {
                type: GET_WISHLIST,
                payload: res.data.data
            }
            return result
        }
        else{
            return {
                type: GET_ERROR,
                payload: "ERROR"
            }
        }
        
    } catch(e){
        return {
            type: GET_ERROR,
            payload: e
        }
    }
}

export const getuser = async (token)=>{
    try{
        const res = await axios.get(`http://127.0.0.1:8080/api/user-admin`, configAuth(token))
        
        if(res.data.success === true){
            console.log(res.data.data);
            const result = {
                type: GET_USER,
                payload: res.data.data
            }
            return result
        }
        else{
            return {
                type: GET_ERROR,
                payload: "ERROR"
            }
        }
        
    } catch(e){
        return {
            type: GET_ERROR,
            payload: e
        }
    }
}

export const getwishlistDetail = async (wid, token)=>{
    try{
        const res = await axios.get(`http://127.0.0.1:8080/api/wishlist/${wid}`, configAuth(token))
        
        if(res.data.success === true){
            console.log(res.data.data);
            const result = {
                type: GET_WISHLIST_DETAIL,
                payload: res.data.data
            }
            return result
        }
        else{
            return {
                type: GET_ERROR,
                payload: "ERROR"
            }
        }
        
    } catch(e){
        return {
            type: GET_ERROR,
            payload: e
        }
    }
}

export const addwishlistDetail = async (uid, rid, token)=>{
    const body=JSON.stringify({uid, rid});
    try{
        const res = await axios.post(`http://127.0.0.1:8080/api/add-wishlist`, body,configAuth(token))
        
        if(res.data.success === true){
            const result = {
                type: ADD_SUCCESS,
                payload: res.data.data
            }
            return result
        }
        else{
            return {
                type: GET_ERROR,
                payload: "ERROR"
            }
        }
        
    } catch(e){
        return {
            type: GET_ERROR,
            payload: e
        }
    }
}

export const getrestaurantdetail = async (rid, token)=>{
    try{
        const res = await axios.get(`http://127.0.0.1:8080/api/restaurant/${rid}`, configAuth(token))
        
        if(res.data.success === true){
            console.log(res.data.data);
            const result = {
                type: GET_RESTAURANTDEATAIL,
                payload: res.data.data
            }
            return result
        }
        else{
            return {
                type: GET_ERROR,
                payload: "ERROR"
            }
        }
        
    } catch(e){
        return {
            type: GET_ERROR,
            payload: e
        }
    }
}

export const change_account = async(form, img, rid, token)=>{
    const {title, description, phone, address, time_open, time_close, like, is_hot} = form;
    console.log(form)
    const image = img;
    const formData = new FormData();
    if(image != null) formData.append("image", image);
    formData.append("address", address);
    if(description != null) formData.append("description", description);
    if(time_open != null) formData.append("time_open", time_open);
    if(time_close != null) formData.append("time_close", time_close);
    formData.append("title", title);
    if(phone != null) formData.append("phone", phone);
    formData.append("like", like);
    formData.append("is_hot", is_hot);

    try{
        const res = await axios.post(`http://127.0.0.1:8080/api/change-restaurant/${rid}`, formData, configAuthFile(token))
        return {
            type: CHANGE_RESTAURANT,
            payload: res.data.data
        }
    } catch(e){
        return {
            type: GET_ERROR,
            payload: e
        }
    }
}

export const updateStatusRes = async (rid, active, token)=>{
    console.log(active);
    try{
        const res = await axios.put(`http://127.0.0.1:8080/api/approve-restaurant/${rid}`, null ,{ params: {active: active}, ...configAuth(token)} )
        
        if(res.data.success === true){
            const result = {
                type: "OK",
                payload: res.data
            }
            return result
        }
        else{
            return {
                type: GET_ERROR,
                payload: "ERROR"
            }
        }
        
    } catch(e){
        return {
            type: GET_ERROR,
            payload: e
        }
    }
}
  