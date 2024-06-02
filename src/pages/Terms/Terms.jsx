import { useEffect } from "react";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";

const Terms = () => {
    useEffect(() => {
        scrollTo(0, 0);
        
    }, []);
    return (
        <ContainerLayout>
            <div className="bg-gray-100 p-5 md:p-8 rounded-b-md">
                <h1 className="text-2xl font-semibold text-gray-700 font-openSans mb-2">
                    Terms and Conditions
                </h1>
                <p className="font-medium">Effective date: 5th May 2024</p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">1. Acceptance of Terms</h2>
                <p>
                    By accessing or using Job Spring, you agree to be bound by
                    these terms and conditions and our Privacy Policy.
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">2. User Accounts</h2>
                <p>
                    To access certain features of the website, you may be
                    required to create an account and provide certain
                    information about yourself as prompted by the account
                    registration form.
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">3. Use of the Site</h2>
                <p>
                    You agree not to use the site for any unlawful purpose or in
                    any way that might harm, damage, or disparage any other
                    party.
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">4. User Content</h2>
                <p>
                    You retain ownership of any content you post on the site,
                    but you grant us a license to use, display, and distribute
                    such content.
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">5. Termination</h2>
                <p>
                    We may terminate or suspend your account and bar access to
                    the site immediately, without prior notice or liability,
                    under our sole discretion, for any reason whatsoever and
                    without limitation, including but not limited to a breach of
                    the Terms.
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">6. Limitation of Liability</h2>
                <p>
                    In no event shall Job Spring, nor its directors, employees,
                    partners, agents, suppliers, or affiliates, be liable for
                    any indirect, incidental, special, consequential, or
                    punitive damages, including without limitation, loss of
                    profits, data, use, goodwill, or other intangible losses,
                    resulting from (i) your use or inability to use the site;
                    (ii) any unauthorized access to or use of our servers and/or
                    any personal information stored therein.
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">7. Governing Law</h2>
                <p>
                    These terms shall be governed and construed in accordance
                    with the laws of [Your Country], without regard to its
                    conflict of law provisions.
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">8. Changes to Terms</h2>
                <p>
                    We reserve the right, at our sole discretion, to modify or
                    replace these terms at any time. If a revision is material
                    we will provide at least 30 days notice prior to any new
                    terms taking effect. What constitutes a material change will
                    be determined at our sole discretion.
                </p>

                <h2 className="text-xl font-medium text-gray-700 mb-1 mt-4">9. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact
                    us at
                    <a
                        href="mailto:support@job-spring.com"
                        className="text-rose-600 font-medium text-lg"
                    >
                        {" "}
                        our mail
                    </a>
                    .
                </p>
            </div>
        </ContainerLayout>
    );
};

export default Terms;
