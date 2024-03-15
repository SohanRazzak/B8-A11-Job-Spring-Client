import { Card, Label, TextInput } from "keep-react";
import PageTitle from "../../components/PageTitle/PageTitle";
import EditorComponent from "../../components/EditorComponent/EditorComponent";
import { useState } from "react";

const AddJob = () => {
    const [editorText, setEditorText] = useState("");

    // Adding a new Job
    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const newJob = {
            jobTitle: form.jobTitle.value,
            company: form.company.value,
            companyLogo: form.companyLogo.value,
            companyThumb: form.companyThumb.value,
            jobDescription: editorText,
            jobType: form.jobType.value,
            salaryRange: [parseInt(form.salaryMin.value), parseInt(form.salaryMax.value)],

        }
        console.log(newJob);
    };
    return (
        <>
            <PageTitle title="Add a new Job" background="import background" />
            <div className="max-w-6xl mx-auto my-5 py-8 rounded-md bg-gray-50">
                <span className="text-lg font-medium text-gray-800 mt-4 flex justify-center my-5 mx-2">
                    Please fill out the form below to list a new job
                </span>
                <Card className="rounded-md p-3 mx-3">
                    <form onSubmit={handleAddJob} className="grid mt-2 lg:grid-cols-2 gap-4">
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
                            <Label htmlFor="companyLogo" value="Company Logo URL" />
                            <TextInput
                                id="companyLogo"
                                name="companyLogo"
                                placeholder="Enter a valid logo URL"
                                required
                            />
                        </div>
                        {/* Company Thumnail  */}
                        <div className="mb-2">
                            <Label htmlFor="companyThumb" value="Company Thumbnail URL" />
                            <TextInput
                                id="companyThumb"
                                name="companyThumb"
                                placeholder="Enter a valid logo URL"
                                required
                            />
                        </div>
                        
                        {/* Job Description  */}
                        <span className="-mb-[14px] font-semibold text-gray-700 text-sm">Job Description</span>
                        <EditorComponent className="lg:col-span-2 " controllState={[editorText, setEditorText]}/>

                        {/* Job Type  */}
                        <div className="mb-2">
                        <span className="-mb-[14px] font-semibold text-gray-700 text-sm">Job Category</span>
                            <select name="jobType" className="p-[10px] border border-gray-400 border-opacity-70 rounded-md w-full">
                                <option value="onSite">On Site</option>
                                <option value="remote">Remote</option>
                                <option value="hybrid">Hybrid</option>
                                <option value="partTime">Part Time</option>
                            </select>
                        </div>
                        {/* Salary Range  */}
                        <div className="mb-2 flex items-center justify-center gap-3">
                            <div className="flex-grow">
                            <Label htmlFor="salaryMin" value="Minimum Salary (USD)" />
                            <TextInput
                                id="salaryMin"
                                name="salaryMin"
                                type="number"
                                placeholder="Enter Minimum Salary"
                                required
                            />
                            </div>
                            <span className="mt-5 font-semibold text-gray-700 text-sm">to</span>
                            <div className="flex-grow">
                            <Label htmlFor="salaryMax" value="Maximum Salary (USD)" />
                            <TextInput
                                id="salaryMax"
                                name="salaryMax"
                                type="number"
                                placeholder="Enter Maximum Salary"
                                required
                            />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-2 flex justify-center lg:col-span-2">
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
