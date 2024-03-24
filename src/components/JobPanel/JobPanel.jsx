import PropTypes from 'prop-types';
import JobCard from '../JobCard/JobCard';
import useJobFinder from '../../hooks/useJobFinder/useJobFinder';
import { Spinner } from 'keep-react';

const JobPanel = ({queryKey, queryURL}) => {
    const query = useJobFinder(queryKey, queryURL);
    const { data, isLoading } = query;
    if (isLoading || data == undefined) {
        return (
            <div className="h-[360px] grid place-items-center">
                <Spinner color="info" size="xl" />
            </div>
        );
    }
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
                            {data.length < 1 ? (
                                    <div className="h-36 flex items-center justify-center col-span-full">
                                        <span className="text-3xl font-semibold text-gray-500 font-openSans">
                                            No Job Found
                                        </span>
                                    </div>
                                ) : (
                                    data.map((job) => {
                                        return (
                                            <JobCard job={job} key={job._id} />
                                        );
                                    })
                                )}
                            </div>
    );
};

JobPanel.propTypes = {
    queryKey: PropTypes.array,
    queryURL: PropTypes.string
};

export default JobPanel;