import { useParams } from "react-router-dom";
import useJobFinder from "../../hooks/useJobFinder/useJobFinder";
import { Spinner } from "keep-react";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import "../JobDetails/JobDetails.css"

const JobDetails = () => {
    const { _id } = useParams();
    const job = useJobFinder(["job,", _id], `/job-details/${_id}`);
    const [jobDetails, setJobDetails] = useState("");
    
    const { data, isLoading } = job;
    
    useEffect(()=>{
        setJobDetails(data?.jobDescription)
    },[data?.jobDescription])

    if (isLoading || data == undefined) {
        return (
            <div className="h-[calc(100vh-200px)] grid place-items-center">
                <Spinner color="info" size="xl" />
            </div>
        );
    }
    const { companyThumb, jobTitle } = data;
    

    return (
        <div className="bg-gray-100 pb-8">
            {/* heading banner */}
            <figure className="relative border-b-gray-500 border-b-4">
                <img src={companyThumb} alt="" className="h-64 w-full" />
                <div className="w-full absolute bottom-0 bg-lime-500 bg-opacity-25 py-5">
                    <ContainerLayout>
                        <span className="text-3xl md:text-4xl font-openSans font-bold text-white px-3 bg-customPrimary bg-opacity-75 rounded-lg ml-3">{jobTitle}</span>
                    </ContainerLayout>
                </div>
            </figure>
            <ContainerLayout>
                <div className="md:grid grid-cols-12 gap-3">
                    <div className="md:col-span-8 bg-white p-4 md:p-8 rounded-b-md">
                        <Markdown>{jobDetails}</Markdown>
                    </div>
                    <div className="md:col-span-4">Sidebar</div>
                </div>
            </ContainerLayout>
        </div>
    );
};

export default JobDetails;
