import axios from "axios";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


// Creating axois instance
const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})

const useInterceptor = () => {
    const { logOutUser } = useContext(AuthContext)
    useEffect(()=>{
        axiosSecure.response.use((res)=>{
            return res;
        },
        (error)=>{
            if(error.response.status == "401" || error.response.status == "403"){
                logOutUser()
                .then(()=> Navigate('/login'))
                .catch((error)=> console.log(error))
            }
        })
    })
    return axiosSecure;
};

export default useInterceptor;