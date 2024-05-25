import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";
import JobShowcase from '../JobsShowcase/JobShowcase';

const HomePageJobs = () => {
    return (
        <div>
            <ContainerLayout>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-lime-600 font-semibold">All New Jobs!</h2>
            <JobShowcase/>
            </ContainerLayout>
        </div>
    );
};

export default HomePageJobs;