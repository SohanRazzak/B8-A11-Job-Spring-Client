import JobShowcase from "../../components/JobsShowcase/JobShowcase";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";

const AllJobs = () => {
    return (
        <div>
            <PageTitle title="See Available Jobs" />
            <ContainerLayout>
                <div className="h-12 bg-gray-100 -mb-5"></div>
            </ContainerLayout>
            <JobShowcase />
        </div>
    );
};

export default AllJobs;
