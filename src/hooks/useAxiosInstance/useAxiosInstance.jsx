import axios from 'axios';

// Axios instance
const axiosInstance = axios.create({
    baseURL: "https://technocare-server.onrender.com",
    withCredentials: true,
})

const useAxiosInstance = () => {
    return axiosInstance;
};

export default useAxiosInstance;