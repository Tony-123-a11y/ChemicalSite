import apiClient from "./interceptor";

export const registerUser=(data)=>{
    return apiClient.post('/users/register',data)
}

export const loginUser=(data)=>{
    return apiClient.post('/users/login',data)
}