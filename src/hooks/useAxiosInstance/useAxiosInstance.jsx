import axios from 'axios';

// Axios instance
const axiosInstance = axios.create({
    baseURL: "https://job-spring.web.app",
    withCredentials: true,
})

const useAxiosInstance = () => {
    return axiosInstance;
};

export default useAxiosInstance;