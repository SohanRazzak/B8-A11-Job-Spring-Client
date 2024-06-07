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
    const [jobs, setJobs] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axiosInstance.get(`/get-all-jobs/?category=${currentCategory}&page=${currentPage}`)
        .then(data=> {setJobs(data.data); setIsLoading(false)})
        axiosInstance
            .get(`/get-jobs-count/?category=${currentCategory}`)
            .then((data) => {
                setJobCount(data.data.jobCount);
                setTotalPages(Math.ceil(jobCount / 10));
            });
    }, [axiosInstance, jobCount, currentCategory, currentPage]);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <ContainerLayout>
            <div className="bg-gray-100 p-4 mt-4 rounded-md">
                {/* Tabs  */}
                <div>
                    <Tabs>
                        <TabList className="flex gap-2 items-center flex-wrap">
                            <Tab
                                onClick={() => {
                                    setCurrentPage(0);
                                    setCurrentCategory("");
                                    setIsLoading(true)
                                    
                                }}
                            >
                                All Jobs
                            </Tab>
                            <Tab
                                onClick={() => {
                                    setCurrentPage(0);
                                    setCurrentCategory("On Site");
                                    setIsLoading(true)
                                }}
                            >
                                On Site
                            </Tab>
                            <Tab
                                onClick={() => {
                                    setCurrentPage(0);
                                    setCurrentCategory("Remote");
                                    setIsLoading(true)
                                }}
                            >
                                Remote
                            </Tab>
                            <Tab
                                onClick={() => {
                                    setCurrentPage(0);
                                    setCurrentCategory("Hybrid");
                                    setIsLoading(true)
                                }}
                            >
                                Hybrid
                            </Tab>
                            <Tab
                                onClick={() => {
                                    setCurrentPage(0);
                                    setCurrentCategory("Part-Time");
                                    setIsLoading(true)
                                }}
                            >
                                Part-Time
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <JobPanel jobs={jobs} isLoading={isLoading}/>
                        </TabPanel>
                        <TabPanel>
                            <JobPanel jobs={jobs} isLoading={isLoading}/>
                        </TabPanel>
                        <TabPanel>
                            <JobPanel jobs={jobs} isLoading={isLoading}/>
                        </TabPanel>
                        <TabPanel>
                            <JobPanel jobs={jobs} isLoading={isLoading}/>
                        </TabPanel>
                        <TabPanel>
                            <JobPanel jobs={jobs} isLoading={isLoading}/>
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
