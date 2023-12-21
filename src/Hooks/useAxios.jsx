import axios from "axios";

const axiosP = axios.create({
    baseURL: 'http://localhost:3006/',
    
  });
const useAxios = () => {
  return axiosP
}

export default useAxios
