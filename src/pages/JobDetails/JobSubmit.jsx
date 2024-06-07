import { Button } from "keep-react";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import useInterceptor from "../../hooks/useInterceptor/useInterceptor";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
Modal.setAppElement("#root");

const sendEmail = (data) => {
    emailjs
        .send(
            import.meta.env.VITE_EMAIL_KEY,
            import.meta.env.VITE_EMAIL_TEMPLATE,
            data,
            import.meta.env.VITE_EMAIL_API
        )
        .then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
};

const ModalComponent = ({ info }) => {
    const {
        applicantLoader,
        totalApplicant,
        publisher,
        jobTitle,
        company,
        deadline,
        user,
        _id,
        refetch,
    } = info;
    const [isDisabled, setIsDisabled] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const axiosSecure = useInterceptor();

    useEffect(() => {
        setIsDisabled(
            applicantLoader.data?.some((sd) => sd.email == user.email) ||
                publisher === user.email ||
                Date.now() > Date.parse(deadline)
        );
    }, [deadline, publisher, applicantLoader.data, user.email]);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const applierData = {
            fullName: form.get("fullName"),
            cvLink: form.get("cvLink"),
            mobile: form.get("mobile"),
            email: form.get("email"),
            uid: user?.uid,
            jobId: _id,
        };
        axiosSecure
            .post("/apply-job", applierData)
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire(
                        "Success!",
                        "This Job Is Added To Your Application List!",
                        "success"
                    );
                    axiosSecure.patch(`update-job-applicants/${_id}`, {
                        totalApplicant: totalApplicant + 1,
                    });
                    setIsDisabled(true);

                    // Sending mail using email js
                    const emailText = {
                        applicant_name: form.get("fullName"),
                        company_name: company,
                        job_title: jobTitle,
                    };
                    sendEmail(emailText);

                    e.target.reset();
                    refetch();
                    closeModal();
                }
            })
            .catch((err) => {
                console.log(err);
                Swal.fire("Error!", "Failed to apply", "error");
            });
    };

    return (
        <div id="root">
            <Button
                disabled={isDisabled}
                onClick={openModal}
                size="sm"
                type="primary"
                color="success"
                className="font-semibold wi !mt-5 
                disabled:border-2 border-customPrimary"
            >
                Apply Now
            </Button>
            {isDisabled && (
                <p className="!text-red-500 text-sm m-2">
                    * You can not apply for the job you published, past deadline
                    or already applied!
                </p>
            )}
            <Modal
                className="max-w-2xl mx-auto bg-white md:shadow-[rgba(0,0,10,0.2)_0px_0px_5px_2px] rounded px-8 pt-6 pb-8 flex flex-col my-5"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <form onSubmit={handleSubmit}>
                    <p className="mb-6 text-gray-700 p-4 text-xl font-medium">
                        # Please fill out the form below carefully!
                    </p>
                    <div className="-mx-3 md:flex mb-5">
                        <div className="md:w-full px-3 mb-5 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="full-name"
                            >
                                Full Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="full-name"
                                name="fullName"
                                type="text"
                                defaultValue={user?.displayName}
                                required
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-5">
                        <div className="md:w-full px-3 mb-5">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="grid-city"
                            >
                                CV / Portfolio Link
                            </label>
                            <div className="relative">
                                <input
                                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                    id="grid-city"
                                    type="text"
                                    name="cvLink"
                                    defaultValue="Please enter your CV or Portfolio Link"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex">
                        <div className="md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="grid-last-name"
                            >
                                Mobile No.
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-last-name"
                                type="number"
                                name="mobile"
                                placeholder="(123)456-789"
                                required
                            />
                        </div>
                        <div className="md:w-1/2 px-3 mb-5 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                htmlFor="grid-city-2"
                            >
                                Email Address
                            </label>
                            <input
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                id="grid-city-2"
                                type="text"
                                name="email"
                                defaultValue={user?.email}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex gap-6 mt-8">
                        <input
                            type="submit"
                            value="Apply Now"
                            className="bg-customPrimary text-white px-4 py-3 font-medium rounded-md active:scale-[0.95] active:border-customPrimary border-3 active:border-opacity-70"
                        />
                        <Button onClick={closeModal}>Close</Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

ModalComponent.propTypes = {
    info: PropTypes.object,
};

export default ModalComponent;
