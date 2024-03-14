import { Link } from "react-router-dom";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";

const Footer = () => {
    return (
        <footer className="bg-white">
            <ContainerLayout>
            <div className="w-full p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-around">
                    <div className="mb-6 md:mb-0 l flex-grow">
                        <Link to="/">
                            <img
                                src="https://i.ibb.co/pzDmzxs/job-spring.png"
                                className="h-8 me-3 lg:ml-8"
                            />
                        </Link>
                    </div>
                    <div className="flex-grow grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Resources
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link
                                        to="/blogs"
                                        className="hover:underline"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="https://tailwindcss.com/"
                                        className="hover:underline"
                                    >
                                        Tailwind CSS
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Follow us
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link
                                        to="https://github.com/SohanRazzak"
                                        className="hover:underline "
                                    >
                                        Github
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="https://discord.gg/4eeurUVvTy"
                                        className="hover:underline"
                                    >
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                                Legal
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="/privacy_policy" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms_condition" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            </ContainerLayout>
            <hr className="my-2" />
                {/* Copyright Text  */}
                <div className="sm:flex sm:items-center sm:justify-center bg-gray-200 py-3 w-full">
                    <span className="text-sm text-gray-700">
                        © 2024{" "}
                        <Link
                            to="/"
                            className="hover:underline"
                        >
                            Job Spring™
                        </Link>
                        . All Rights Reserved.
                    </span>
                </div>
        </footer>
    );
};

export default Footer;
