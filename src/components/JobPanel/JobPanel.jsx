import PropTypes from "prop-types";
import JobCard from "../JobCard/JobCard";
import { Button, Spinner } from "keep-react";
import { Link } from "react-router-dom";

const JobPanel = ({ jobs, isLoading }) => {
    
    if (isLoading) {
        return (
            <div className="h-[400px] grid place-items-center">
                <Spinner color="info" size="xl" />
            </div>
        );
    }
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
            {jobs.length < 1 ? (
                <div className="h-44 flex flex-col gap-5 items-center justify-center col-span-full">
                    <span className="text-3xl font-semibold text-gray-500 font-openSans">
                        No Job Found
                    </span>
                    <Link to="/">
                        <Button
                            size="sm"
                            type="primary"
                            color="success"
                            className="mt-3"
                        >
                            Go Back
                        </Button>
                    </Link>
                </div>
            ) : (
                jobs?.map((job) => {
                    return <JobCard job={job} key={job._id} />;
                })
            )}
        </div>
    );
};

JobPanel.propTypes = {
    jobs: PropTypes.array,
    isLoading: PropTypes.bool
};

export default JobPanel;
