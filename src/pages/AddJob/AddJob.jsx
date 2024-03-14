import { Card, Label, TextInput } from "keep-react";
import PageTitle from "../../components/PageTitle/PageTitle";
import EditorComponent from "../../components/EditorComponent/EditorComponent";
import { useState } from "react";

const AddJob = () => {
    const [editorText, setEditorText] = useState("");
    console.log(editorText);
    // Adding a new Job
    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
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
                        <EditorComponent className="lg:col-span-2" controllState={[editorText, setEditorText]}/>
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
