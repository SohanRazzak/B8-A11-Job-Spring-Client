import { useParams } from "react-router-dom";
import useJobFinder from "../../hooks/useJobFinder/useJobFinder";
import { Spinner } from "keep-react";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import "../JobDetails/JobDetails.css";
import { BiBuildings } from "react-icons/bi";
import useAuth from "../../hooks/useAuth/useAuth";
import {
    TbClock,
    TbClockExclamation,
    TbSettingsSearch,
    TbTag,
    TbUsersGroup,
    TbZoomMoney,
} from "react-icons/tb";
import JobSubmit from "./JobSubmit";
import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "../../hooks/useAxiosInstance/useAxiosInstance";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    const { _id } = useParams();
    const job = useJobFinder(["job,", _id], `/job-details/${_id}`);
    const [jobDetails, setJobDetails] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const { user } = useAuth();
    const axiosInstance = useAxiosInstance();

    // getting applicant
    const applicantLoader = useQuery({
        queryKey: ["applications", _id],
        queryFn: async () => {
            const result = await axiosInstance.get(`/get-applications/${_id}`);
            return result.data;
        },
    });

    const { data, isLoading, refetch } = job;

    useEffect(() => {
        scrollTo(0, 0);
        setJobDetails(data?.jobDescription);
        setIsDisabled(applicantLoader.data?.some(sd=> sd.email == user.email) || data?.publisher === user.email || Date.now() > Date.parse(data?.deadline))
    }, [data?.jobDescription, applicantLoader?.data, data?.publisher, data?.deadline, user.email]);

    if (isLoading || data == undefined) {
        return (
            <div className="h-[calc(100vh-200px)] grid place-items-center">
                <Spinner color="info" size="xl" />
            </div>
        );
    }
    const {
        companyThumb,
        jobTitle,
        company,
        salary,
        deadline,
        publishedAt,
        jobIndustry,
        jobType,
        totalApplicant,
        publisher,
    } = data;

    const dateToString = (dateData) => {
        return new Date(dateData).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    };

    
    return (
        <div id="jobdetails" className="bg-gray-100 pb-8">
            <Helmet>
                <title>Job Spring - {jobTitle}</title>
            </Helmet>
            {/* heading banner */}
            <figure className="relative border-b-gray-500 border-b-4">
                <img
                    src={companyThumb}
                    alt=""
                    className="h-56 md:h-96 w-full object-cover"
                />
                <div className="w-full absolute bottom-0 bg-lime-500 bg-opacity-25 py-5">
                    <ContainerLayout>
                        <span className="text-xl md:text-3xl font-openSans font-bold text-white px-3 bg-customPrimary bg-opacity-75 rounded-lg ml-3">
                            {jobTitle}
                        </span>
                    </ContainerLayout>
                </div>
            </figure>
            <ContainerLayout>
                <div className="md:grid grid-cols-12 gap-3">
                    <div className="md:col-span-8 bg-white p-4 md:p-8 rounded-b-md">
                        <Markdown>{jobDetails}</Markdown>
                    </div>
                    <div className="md:col-span-4 bg-white p-5 md:p-10 text-lg space-y-2 text-gray-700 rounded-b-md">
                        <p className="mt-3 flex gap-2 items-center">
                            <BiBuildings /> Company: {company}
                        </p>
                        <p className="flex gap-2 items-center">
                            <TbZoomMoney />
                            Salary: {salary.min + " - " + salary.max + "$ " + salary.frequency}
                        </p>
                        <p className="flex gap-2 items-center">
                            <TbTag />
                            Job Type: {jobType}
                        </p>
                        <p className="flex gap-2 items-center">
                            <TbSettingsSearch />
                            Job Industry: {jobIndustry}
                        </p>
                        <p className="flex gap-2 items-center">
                            <TbClock /> Job Posted: {dateToString(publishedAt)}
                        </p>
                        <p className="flex gap-2 items-center">
                            <TbClockExclamation />
                            Deadline: {dateToString(deadline)}
                        </p>
                        <p className="flex gap-2 items-center">
                            <TbUsersGroup />
                            Applicant:{" "}
                            {totalApplicant > 1
                                ? totalApplicant + " persons"
                                : totalApplicant + " person"}
                        </p>
                        <JobSubmit
                            info={{publisher, totalApplicant, user, _id, refetch, isDisabled, setIsDisabled}}
                        ></JobSubmit>
                        {
                            isDisabled && <p className="!text-red-500 text-sm m-2">* You can not apply for the job you published, past deadline or already applied!</p>
                        }
                    </div>
                </div>
            </ContainerLayout>
        </div>
    );
};

export default JobDetails;
