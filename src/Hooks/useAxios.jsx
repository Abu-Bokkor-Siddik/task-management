import axios from "axios";

const axiosP = axios.create({
    baseURL: 'https://dashboards-server.vercel.app/',
    
  });
const useAxios = () => {
  return axiosP
}

export default useAxios
