import { useState } from "react"
import { AuthContext } from "./Context"

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
