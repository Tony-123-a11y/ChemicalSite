export const setToken=(token)=>{
   return localStorage.setItem('token',token)
}
export const getToken=()=>{
    localStorage.getItem('token')
}