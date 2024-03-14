import axios from "axios";
import { useEffect } from "react";


// Creating axois instance
const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})

const useInterceptor = () => {

    useEffect(()=>{
        axiosSecure.interceptors.response.use((res)=>{
            return res;
        },
        (error)=>{
            if(error.response.status == 401 || error.response.status == 403){
                console.log("Logout Hobe");
            }
        })
    },[])
    return axiosSecure;
};

export default useInterceptor;