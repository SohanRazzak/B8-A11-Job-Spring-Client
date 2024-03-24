import { Spinner } from "keep-react";
import JobCard from "../../components/JobCard/JobCard";
import PageTitle from "../../components/PageTitle/PageTitle";
import useAuth from "../../hooks/useAuth/useAuth";
import useJobFinder from "../../hooks/useJobFinder/useJobFinder";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";

const MyJobs = () => {
    const { user } = useAuth();
    const uid = user?.uid;
    const myJobs = useJobFinder(["My Jobs", uid], `/my-jobs/${uid}`);
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
            <PageTitle title="My Jobs Jobs" />
            <ContainerLayout>
                <div className="bg-gray-100 p-4 mt-4 rounded-md pt-12">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
                        {data.map((job) => {
                            return <JobCard job={job} key={job._id} />;
                        })}
                    </div>
                </div>
            </ContainerLayout>
        </div>
    );
};

export default MyJobs;
