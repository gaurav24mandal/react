import { createContext, useContext, useState } from "react";

  export const LoginContext = createContext();

  export  function LoginContextWrapper({ children }) {
    const [username, setUsername] = useState("")
    const  [isLogin , setIsLogin] = useState(false)
    return (
        <LoginContext.Provider value={{ username, setUsername, isLogin,setIsLogin }}>
            {children}
        </LoginContext.Provider>
    )
}



export default function useLogin(){

    return useContext(LoginContext)
}