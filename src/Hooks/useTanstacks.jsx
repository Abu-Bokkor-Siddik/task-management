import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { AuthContext } from "../auth/AuthProvider"
import axios from "axios"

const useTanstacks = () => {
    const {user}=useContext(AuthContext)
    const {data,refetch}=useQuery({
        queryKey:['all task',user?.email],
        queryFn:async()=>{
            const data = await axios.get(`https://dashboards-server.vercel.app/tasks?email=${user?.email}`)
            return data?.data
        }
    })
  return (
    {data,refetch}
  )
}

export default useTanstacks
