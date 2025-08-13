import { createContext, useState } from "react"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "Asif"
    })
    const authInfo = {
        user,
        setUser
    }

      return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
