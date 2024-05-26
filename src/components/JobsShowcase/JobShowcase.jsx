import PropTypes from "prop-types";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../JobsShowcase/JobShowCase.css";

import { useState } from "react";
import JobPanel from "../JobPanel/JobPanel";

const JobShowcase = () => {
    const [queryKey, setQueryKey] = useState(["All Jobs"]);
    const [queryURL, setQueryURL] = useState("/get-all-jobs");
    
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
                                    setQueryURL("/get-all-jobs");
                                }}
                            >
                                All Jobs
                            </Tab>
                            <Tab
                                onClick={() => {
                                    setQueryKey(["On Site"]);
                                    setQueryURL(
                                        "/get-all-jobs/?category=On Site"
                                    );
                                }}
                            >
                                On Site
                            </Tab>
                            <Tab
                                onClick={() => {
                                    setQueryKey(["Remote"]);
                                    setQueryURL(
                                        "/get-all-jobs/?category=Remote"
                                    );
                                }}
                            >
                                Remote
                            </Tab>
                            <Tab
                                onClick={() => {
                                    setQueryKey(["Hybrid"]);
                                    setQueryURL(
                                        "/get-all-jobs/?category=Hybrid"
                                    );
                                }}
                            >
                                Hybrid
                            </Tab>
                            <Tab
                                onClick={() => {
                                    setQueryKey(["Part-Time"]);
                                    setQueryURL(
                                        "/get-all-jobs/?category=Part-Time"
                                    );
                                }}
                            >
                                Part-Time
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <JobPanel queryKey={queryKey} queryURL={queryURL}/>
                        </TabPanel>
                        <TabPanel>
                            <JobPanel queryKey={queryKey} queryURL={queryURL}/>
                        </TabPanel>
                        <TabPanel>
                            <JobPanel queryKey={queryKey} queryURL={queryURL}/>
                        </TabPanel>
                        <TabPanel>
                            <JobPanel queryKey={queryKey} queryURL={queryURL}/>
                        </TabPanel>
                        <TabPanel>
                            <JobPanel queryKey={queryKey} queryURL={queryURL}/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </ContainerLayout>
    );
};

JobShowcase.propTypes = {
    query: PropTypes.object,
};

export default JobShowcase;
