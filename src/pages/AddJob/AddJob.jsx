import { Card, DatePicker, Label, TextInput } from "keep-react";
import PageTitle from "../../components/PageTitle/PageTitle";
import EditorComponent from "../../components/EditorComponent/EditorComponent";
import { useState } from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import useAxiosInstance from "../../hooks/useAxiosInstance/useAxiosInstance";
import Swal from "sweetalert2";

const AddJob = () => {
    const [editorText, setEditorText] = useState(null);
    const [deadlineDate, setDeadlineDate] = useState(null);
    const { user } = useAuth();
    const axiosInstance = useAxiosInstance();

    // Adding a new Job
    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        if(deadlineDate === null || editorText == null){
            return Swal.fire("Error", "Please Set a Deadline!", "error")
        }
        const newJob = {
            jobTitle: form.jobTitle.value,
            company: form.company.value,
            companyLogo: form.companyLogo.value,
            companyThumb: form.companyThumb.value,
            jobDescription: editorText,
            jobType: form.jobType.value,
            jobIndustry: form.jobIndustry.value,
            salary: {
                min: parseInt(form.salaryMin.value),
                max: parseInt(form.salaryMax.value),
                frequency: form.salaryFreq.value,
            },
            publisher: user?.email,
            publishedAt: new Date(),
            deadline: deadlineDate,
            totalApplicant: 0,
        };
        // Adding New Job to DB
        try {
            axiosInstance.post("/add-job", newJob)
            .then(res => {
                if(res.data.insertedId){
                    Swal.fire('Success!', 'This Job Is Added To Job List Successfully!', 'success')
                    form.reset();
                    setEditorText(null)
                }
            })
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <PageTitle title="Add a new Job!"/>
            <div className="max-w-6xl mx-auto my-5 py-8 rounded-md bg-gray-100">
                <span className="text-lg font-medium text-gray-800 mt-4 flex justify-center my-5 mx-2">
                    Please fill out the form below to list a new job
                </span>
                <Card className="rounded-md p-3 mx-3">
                    <form
                        onSubmit={handleAddJob}
                        className="grid mt-2 lg:grid-cols-2 gap-4"
                    >
                        {/* Job Title  */}
                        <div className="mb-2">
                            <Label htmlFor="jobTitle" value="Job Title" />
                            <TextInput
                                id="jobTitle"
                                name="jobTitle"
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
                                placeholder="Enter a valid logo URL"
                                required
                            />
                        </div>

                        {/* Job Description  */}
                        <div className="mb-2 lg:col-span-2">
                            <span className="-mb-[14px] font-semibold text-gray-700 text-sm">
                                Job Description
                            </span>
                            <EditorComponent
                                className="lg:col-span-2"
                                controllState={[editorText, setEditorText]}
                            />
                        </div>

                        {/* Job Industry  */}
                        <div className="mb-2">
                            <Label htmlFor="jobIndustry" value="Job Industry" />
                            <TextInput
                                id="jobIndustry"
                                name="jobIndustry"
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
                                className="p-[10px] border border-gray-400 border-opacity-70 rounded-md w-full"
                            >
                                <option value="per Hour">Hourly</option>
                                <option value="per Month">Monthly</option>
                                <option value="per Quarter">Quarterly</option>
                                <option value="per Twice a year">Twice a Year</option>
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
                                value="Add to Job List"
                                className="bg-customPrimary text-white px-4 py-[10px] rounded-md active:scale-[0.95] active:border-customPrimary border-3 active:border-opacity-70"
                            />
                        </div>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default AddJob;
