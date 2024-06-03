import PropTypes from "prop-types";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../JobsShowcase/JobShowCase.css";

import { useEffect, useState } from "react";
import JobPanel from "../JobPanel/JobPanel";
import Pagination from "../Pagination/Pagination";
import useAxiosInstance from "../../hooks/useAxiosInstance/useAxiosInstance";

const JobShowcase = () => {
    const axiosInstance = useAxiosInstance();
    const [totalPages, setTotalPages] = useState(0);
    const [jobCount, setJobCount] = useState(0);
    const [currentCategory, setCurrentCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [queryKey, setQueryKey] = useState(["All Jobs"]);
    const [data, setData] = useState(null)
    const [queryURL, setQueryURL] = useState(
        `/get-all-jobs/?page=${currentPage}`
    );
    useEffect(() => {
        axiosInstance
            .get(`/get-jobs-count/?category=${currentCategory}`)
            .then((data) => {
                setJobCount(data.data.jobCount);
                setTotalPages(Math.ceil(jobCount / 5));
                setQueryURL(`/get-all-jobs/?category=${currentCategory}&page=${currentPage}`)
            });
            axiosInstance.get(queryURL)
            .then((data)=> setData(data.data))
    }, [axiosInstance, jobCount, currentCategory, currentPage, queryKey, queryURL]);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    console.log(currentPage);

    return (
        <ContainerLayout>
            <div className="bg-gray-100 p-4 mt-4 rounded-md">
                {/* Tabs  */}
                <div>
                    <Tabs>
                        <TabList className="flex gap-2 items-center flex-wrap">
                            <Tab
                                onClick={() => {
                                    setQueryKey(["All Jobs"]);
                                    setCurrentPage(0);
                                    setCurrentCategory("");
                                }}
                            >
                                All Jobs
                            </Tab>
                            <Tab
                                onClick={() => {
                                    setQueryKey(["On Site"]);
                                    setCurrentPage(0);
                                    setCurrentCategory("On Site");
                                }}
                            >
                                On Site
                            </Tab>
                            <Tab
                                onClick={() => {
                                    setQueryKey(["Remote"]);
                                    setCurrentPage(0);
                                    setCurrentCategory("Remote");
                                }}
                            >
                                Remote
                            </Tab>
                            <Tab
                                onClick={() => {
                                    setQueryKey(["Hybrid"]);
                                    setCurrentPage(0);
                                    setCurrentCategory("Hybrid");
                                }}
                            >
                                Hybrid
                            </Tab>
                            <Tab
                                onClick={() => {
                                    setQueryKey(["Part-Time"]);
                                    setCurrentPage(0);
                                    setCurrentCategory("Part-Time");
                                }}
                            >
                                Part-Time
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <JobPanel data={data} />
                        </TabPanel>
                        <TabPanel>
                            <JobPanel data={data} />
                        </TabPanel>
                        <TabPanel>
                            <JobPanel data={data} />
                        </TabPanel>
                        <TabPanel>
                            <JobPanel data={data} />
                        </TabPanel>
                        <TabPanel>
                            <JobPanel data={data} />
                        </TabPanel>
                    </Tabs>
                </div>
                {jobCount ? (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                ) : (
                    ""
                )}
            </div>
        </ContainerLayout>
    );
};

JobShowcase.propTypes = {
    query: PropTypes.object,
};

export default JobShowcase;
