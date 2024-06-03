import axios from 'axios';

// Axios instance
const axiosInstance = axios.create({
    baseURL: "https://b8-a11-job-spring-server.onrender.com",
    withCredentials: true,
})

const useAxiosInstance = () => {
    return axiosInstance;
};

export default useAxiosInstance;