import { useParams } from "react-router-dom";
import useJobFinder from "../../hooks/useJobFinder/useJobFinder";
import {
    Card,
    DatePicker,
    Label,
    Spinner,
    TextInput,
    Textarea,
} from "keep-react";
import PageTitle from "../../components/PageTitle/PageTitle";
import useAuth from "../../hooks/useAuth/useAuth";
import { useState } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance/useAxiosInstance";
import Swal from "sweetalert2";

const UpdateJob = () => {
    const { _id } = useParams();
    const job = useJobFinder(["job,", _id], `/job-details/${_id}`);
    const [deadlineDate, setDeadlineDate] = useState(null);
    const [jobType, setJobType] = useState(null);
    const [salaryFreq, setSalaryFreq] = useState(null);
    const [jobDetails, setJobDetails] = useState("");
    const { user } = useAuth();
    const axiosInstance = useAxiosInstance()

    if (job.isLoading || job.data === undefined) {
        return (
            <div className="h-[360px] border-red-100 border rounded-md grid place-items-center">
                <Spinner color="info" size="xl" />
            </div>
        );
    }

    const {
        jobTitle,
        totalApplicant,
        company,
        companyLogo,
        companyThumb,
        jobIndustry,
        salary,
        jobDescription,
    } = job.data || {};

    // Updating the job
    const handleUpdateJob = (e) => {
        e.preventDefault();
        if(deadlineDate === null){
            return Swal.fire("Error", "Please Set a Deadline!", "error")
        }
        const form = e.target;
        const updatedJob = {
            jobTitle: form.jobTitle.value,
            company: form.company.value,
            companyLogo: form.companyLogo.value,
            companyThumb: form.companyThumb.value,
            jobDescription: jobDetails || jobDescription,
            jobType: jobType || job?.data?.jobType,
            jobIndustry: form.jobIndustry.value,
            salary: {
                min: parseInt(form.salaryMin.value),
                max: parseInt(form.salaryMax.value),
                frequency: salaryFreq || salary?.frequency,
            },
            publisher: user?.email,
            publishedAt: new Date(),
            deadline: deadlineDate,
            totalApplicant: totalApplicant,
        };
        
        console.log(updatedJob);
        
        // Updating to server
        axiosInstance.patch(`/update-my-job/${_id}`, updatedJob)
        .then(res => {
            if(res.data.modifiedCount){
                Swal.fire('Success!', 'This Job Is Updated Successfully!', 'success')
            }
        })
        .catch(err => console.log(err))
    };
    return (
        <>
            <PageTitle title="Update Job!" />
            <div className="max-w-6xl mx-auto my-5 py-8 rounded-md bg-gray-100">
                <span className="text-lg font-medium text-gray-800 mt-4 flex justify-center my-5 mx-2">
                    Please fill out the form below
                </span>
                <Card className="rounded-md p-3 mx-3">
                    <form
                        onSubmit={handleUpdateJob}
                        className="grid mt-2 lg:grid-cols-2 gap-4"
                    >
                        {/* Job Title  */}
                        <div className="mb-2">
                            <Label htmlFor="jobTitle" value="Job Title" />
                            <TextInput
                                id="jobTitle"
                                name="jobTitle"
                                value={jobTitle}
                                placeholder="i.e: Senior UI/UX Designer"
                                required
                            />
                        </div>
                        {/* Company Name  */}
                        <div className="mb-2">
                            <Label htmlFor="company" value="Company Name" />
                            <TextInput
                                id="company"
                                name="company"
                                value={company}
                                placeholder="i.e: Google"
                                required
                            />
                        </div>

                        {/* Company Logo  */}
                        <div className="mb-2">
                            <Label
                                htmlFor="companyLogo"
                                value="Company Logo URL"
                            />
                            <TextInput
                                id="companyLogo"
                                name="companyLogo"
                                value={companyLogo}
                                placeholder="Enter a valid logo URL"
                                required
                            />
                        </div>
                        {/* Company Thumnail  */}
                        <div className="mb-2">
                            <Label
                                htmlFor="companyThumb"
                                value="Company Thumbnail URL"
                            />
                            <TextInput
                                id="companyThumb"
                                name="companyThumb"
                                value={companyThumb}
                                placeholder="Enter a valid logo URL"
                                required
                            />
                        </div>

                        {/* Job Description  */}
                        <div className="mb-2 lg:col-span-2">
                            <Label htmlFor="jobDescription">
                                Job Description (Markdown format)
                            </Label>
                            <Textarea
                                id="jobDescription"
                                name="jobDescription"
                                placeholder="Write Job Description here."
                                className="h-44"
                                defaultValue={jobDescription}
                                onChange={(e) => setJobDetails(e.target.value)}
                                required
                            />
                        </div>

                        {/* Job Industry  */}
                        <div className="mb-2">
                            <Label htmlFor="jobIndustry" value="Job Industry" />
                            <TextInput
                                id="jobIndustry"
                                name="jobIndustry"
                                value={jobIndustry}
                                placeholder="Enter a job Industry i.e: Technogloy"
                                required
                            />
                        </div>

                        {/* Job Type  */}
                        <div className="mb-2">
                            <span className="-mb-[14px] font-semibold text-gray-700 text-sm">
                                Job Category
                            </span>
                            <select
                                name="jobType"
                                defaultValue={job?.data?.jobType}
                                onChange={(e) => setJobType(e.target.value)}
                                className="p-[10px] border border-gray-400 border-opacity-70 rounded-md w-full"
                            >
                                <option value="On Site">On Site</option>
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Part-Time">Part Time</option>
                            </select>
                        </div>
                        {/* Salary Range  */}
                        <div className="mb-2 flex items-end justify-center gap-3">
                            <div className="flex-grow">
                                <Label
                                    htmlFor="salaryMin"
                                    value="Minimum Salary (USD)"
                                />
                                <TextInput
                                    id="salaryMin"
                                    name="salaryMin"
                                    type="number"
                                    value={salary?.min}
                                    placeholder="Enter Minimum Salary"
                                    required
                                />
                            </div>
                            <div className="flex-grow">
                                <Label
                                    htmlFor="salaryMax"
                                    value="Maximum Salary (USD)"
                                />
                                <TextInput
                                    id="salaryMax"
                                    name="salaryMax"
                                    type="number"
                                    value={salary?.max}
                                    placeholder="Enter Maximum Salary"
                                    required
                                />
                            </div>
                            <div className="flex-grow">
                                <span className="-mb-[14px] font-semibold text-gray-700 text-sm">
                                    Frequency
                                </span>
                                <select
                                    name="salaryFreq"
                                    defaultValue={salary?.frequency}
                                    onChange={(e) =>
                                        setSalaryFreq(e.target.value)
                                    }
                                    className="p-[10px] border border-gray-400 border-opacity-70 rounded-md w-full"
                                >
                                    <option value="per Hour">Hourly</option>
                                    <option value="per Month">Monthly</option>
                                    <option value="per Quarter">
                                        Quarterly
                                    </option>
                                    <option value="per Twice a year">
                                        Twice a Year
                                    </option>
                                    <option value="per Annual">Annually</option>
                                </select>
                            </div>
                        </div>
                        {/* Deadline  */}
                        <div className="mb-2">
                            <span className="-mb-[14px] font-semibold text-gray-700 text-sm">
                                Deadline
                            </span>
                            <DatePicker
                                singleDate={setDeadlineDate}
                                placeholder="Date / Month / Year"
                            >
                                <DatePicker.SingleDate />
                            </DatePicker>
                        </div>

                        {/* Submit Button */}
                        <div className="my-2 flex justify-center lg:col-span-2">
                            <input
                                type="submit"
                                value="Update This Job"
                                className="bg-customPrimary text-white px-4 py-[10px] rounded-md active:scale-[0.95] active:border-customPrimary border-3 active:border-opacity-70"
                            />
                        </div>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default UpdateJob;
