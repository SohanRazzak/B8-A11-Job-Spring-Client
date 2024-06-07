import axios from "axios";
import { useEffect } from "react";
import useAuth from '../useAuth/useAuth';


// Creating axois instance
const axiosSecure = axios.create({
    baseURL: "https://b8-a11-job-spring-server.onrender.com",
    withCredentials: true
})

const useInterceptor = () => {
    const {logOutUser} = useAuth();
    

    useEffect(()=>{
        axiosSecure.interceptors.response.use((res)=>{
            return res;
        },
        (error)=>{
            if(error.response.status == 401 || error.response.status == 403){
                logOutUser
            }
        })
    },[logOutUser])
    return axiosSecure;
};

export default useInterceptor;