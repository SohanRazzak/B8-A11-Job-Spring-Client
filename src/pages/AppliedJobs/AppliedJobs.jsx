import { Button, Spinner } from "keep-react";
import PageTitle from "../../components/PageTitle/PageTitle";
import useAuth from "../../hooks/useAuth/useAuth";
import useJobFinder from "../../hooks/useJobFinder/useJobFinder";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";
import JobCard from "../../components/JobCard/JobCard";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
    const { user } = useAuth();
    const uid = user?.uid;
    const myJobs = useJobFinder(["Applied Jobs", uid], `/get-applied-jobs/${uid}`);
    const { data, isLoading } = myJobs;
    if (isLoading || data == undefined) {
        return (
            <div className="h-[400px] grid place-items-center">
                <Spinner color="info" size="xl" />
            </div>
        );
    }
    return (
        <div>
            <PageTitle title="Applied Jobs" />
            <ContainerLayout>
            <div className="bg-gray-100 p-4 mt-4 rounded-md pt-12">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
                        {data.length > 0 ? (
                            data.map((job) => {
                                return <JobCard job={job} key={job._id} />;
                            })
                        ) : (
                            <div className="h-44 flex flex-col gap-5 items-center justify-center col-span-full">
                                <span className="text-3xl font-semibold text-gray-500 font-openSans">
                                    No Job Found
                                </span>
                                <Link to='/'><Button
                                size="sm"
                                type="primary"
                                color="success"
                                className="mt-3"
                                >Go Back</Button></Link>
                            </div>
                        )}
                    </div>
                </div>
            </ContainerLayout>
        </div>
    );
};

export default AppliedJobs;