import { createContext, useEffect, useState } from "react";

export const UserContext= createContext()

export const UserProvider=({children})=>{
    const [user, setuser] = useState(null);
    const storedUser= JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
         if(storedUser){
        setuser(storedUser)
    }
    }, [])
    

    const login=(userData)=>{
        setuser(userData)
        localStorage.setItem("user",JSON.stringify(userData))
    }

    const logout=()=>{
            setuser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    }
    return (
        <UserContext.Provider value={{user,login,logout}}>
            {children}
        </UserContext.Provider>
    )
}