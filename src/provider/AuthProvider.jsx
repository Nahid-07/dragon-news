import { useState } from "react"
import { AuthContext } from "./Context"

const ContextApi = AuthContext

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "Asif"
    })
    const authInfo = {
        user,
        setUser
    }

      return (
    <ContextApi.Provider value={authInfo}>
        {children}
    </ContextApi.Provider>
  )
}
