import { BASE_URL } from "../config";
import axios from "axios";

export const login= async (LoginRequest)=>{
    try {
        const response = await axios.post(BASE_URL+"login",LoginRequest);
        return response;
    }catch (err) {
        return err;
    }
}

export const registerUser= async (UserDTO)=>{
    try {
        const response = await axios.post(BASE_URL+"user/create",UserDTO);
        return response;
    }catch (err) {
        return null;
    }
}