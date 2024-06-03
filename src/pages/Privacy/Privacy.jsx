import { useEffect } from "react";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
    useEffect(() => {
        scrollTo(0, 0);
    }, []);
    return (
        <ContainerLayout>
            <Helmet>
                <title>
                    Job Spring - Privacy Policy
                </title>
            </Helmet>
            <div className="bg-gray-100 p-5 md:p-8 rounded-b-md">
                <h1 className="text-2xl font-semibold text-gray-700 font-openSans mb-2">
                    Privacy Policy
                </h1>
                <p className="font-medium">Effective date: 5th May 2024</p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">
                    1. Introduction
                </h2>
                <p>
                    Welcome to Job Spring. We are committed to protecting your
                    personal information and your right to privacy. If you have
                    any questions or concerns about our policy, or our practices
                    with regards to your personal information, please contact us
                    at
                    <a
                        href="mailto:support@job-spring.com"
                        className="text-rose-600 font-medium text-lg"
                    >
                        {" "}
                        our mail
                    </a>
                    .
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">
                    2. Information We Collect
                </h2>
                <p>
                    We collect personal information that you voluntarily provide
                    to us when registering on the website, expressing an
                    interest in obtaining information about us or our products
                    and services, when participating in activities on the
                    website, or otherwise contacting us.
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">
                    3. How We Use Your Information
                </h2>
                <p>
                    We use the information we collect or receive:
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            To facilitate account creation and logon process.
                        </li>
                        <li>To send administrative information to you.</li>
                        <li>To fulfill and manage your orders.</li>
                        <li>To post testimonials.</li>
                        <li>
                            To send you marketing and promotional
                            communications.
                        </li>
                        <li>To deliver targeted advertising to you.</li>
                    </ul>
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">
                    4. Sharing Your Information
                </h2>
                <p>
                    We only share information with your consent, to comply with
                    laws, to provide you with services, to protect your rights,
                    or to fulfill business obligations.
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">
                    5. Security of Your Information
                </h2>
                <p>
                    We aim to protect your personal information through a system
                    of organizational and technical security measures.
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">
                    6. Your Privacy Rights
                </h2>
                <p>
                    You may review, change, or terminate your account at any
                    time.
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">
                    7. Updates to This Policy
                </h2>
                <p>
                    We may update this privacy policy from time to time. The
                    updated version will be indicated by an updated{" "}
                    {'"Revised"'} date and the updated version will be effective
                    as soon as it is accessible.
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">
                    8. Contact Us
                </h2>
                <p>
                    If you have questions or comments about this policy, you may
                    contact us at
                    <a
                        href="mailto:support@job-spring.com"
                        className="text-rose-600 font-medium text-lg"
                    >
                        {" "}
                        our mail
                    </a>
                    ..
                </p>
            </div>
        </ContainerLayout>
    );
};

export default Privacy;
