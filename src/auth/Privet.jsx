import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { Navigate } from "react-router-dom"

const Privet = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <h1 className="text-3xl text-center">Loading</h1>
    }
    if(user){
        return children
    }
  return <Navigate to="/login"></Navigate>
}

export default Privet
