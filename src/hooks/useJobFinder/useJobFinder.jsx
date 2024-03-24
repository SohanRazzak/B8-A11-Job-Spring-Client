import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import useAxiosInstance from "../useAxiosInstance/useAxiosInstance";

const useJobFinder = (queryKey, url="/get-all-jobs") => {
    const axiosInstance = useAxiosInstance()
    const query = useQuery({
        queryKey: queryKey,
        queryFn: async () => {
            const result = await axiosInstance.get(`${url}`)
            return result.data;
        }
    });
    return query;
};

useJobFinder.propTypes = {
    queryKey: PropTypes.array,
    url: PropTypes.string
};

export default useJobFinder;
