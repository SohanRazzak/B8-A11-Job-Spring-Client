import { Card, Label, TextInput } from "keep-react";
import {
    Envelope,
    Lock,
    EyeSlash,
    Eye,
    GoogleLogo
} from "phosphor-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginAnimation from "../../animations/LoginAnimation/LoginAnimation";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
    const [showPass, setShowPass] = useState(false);
    const { logInUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Handle Sign In
    const handleSignIn = (e) => {
        e.preventDefault();

        // Getting Form Data
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // Sign In User
        logInUser(email, password)
        .then((res) => {
            if (res.user) {
                if (res.user) {
                    Swal.fire(
                        "Sign In Successful!",
                        "You will be redircted to you destination!",
                        "success"
                    );
                }
                else {
                    Swal.fire(
                        "Sign In Error!",
                        "Invalid Credentials, Please Check Again",
                        "error"
                    );
                }
                form.reset();
                location.state ? navigate(location.state) : navigate("/");
            }
        })
        .catch(err => {
            Swal.fire(
                "Sign In Error!",
                "Invalid Credentials, Please Check Again",
                "error"
            );
            console.log(err.code);
        })
    };

    // Handle Google Login
    const handleGoogleSingIn = ()=>{
        googleLogin()
        .then((res) => {
            if (res.user) {
                // Adding User to databse
                const user = {
                    fullName: res.user.displayName,
                    photo: res.user.photoURL,
                    email: res.user.email,
                    uid: res.user.uid
                };
                axios.put("https://technocare-server.onrender.com", user).then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire(
                            "Sign Up Successful!",
                            "You will be redircted to you destination!",
                            "success"
                        );
                    }
                });
                location.state ? navigate(location.state) : navigate("/");
            }
        });
    }
    return (
        <div className="max-w-6xl mx-auto my-5 py-8 rounded-md bg-gray-50 flex flex-col md:flex-row justify-center items-center gap-5">
            <Helmet>
                <title>
                    Job Spring - Sign In
                </title>
            </Helmet>
            {/* Sign Up Section */}
            <div className="md:w-1/2 flex justify-center">
                <Card className="overflow-hidden rounded-md p-6 xl:w-2/3">
                    <h2 className="text-2xl text-center font-semibold font-openSans text-gray-700">
                        Sign in now!
                    </h2>
                    <span className="flex items-center justify-center gap-2">Or, Don&#39;t have an account? <Link to="/sign_up" className="text-rose-500">Sign Up</Link></span>
                    <hr />
                    <form onSubmit={handleSignIn}>
                        {/* Email Field  */}
                        <div className="mb-2">
                            <Label htmlFor="email" value="Email Address" />
                            <TextInput
                                id="email"
                                name="email"
                                placeholder="example@gmail.com"
                                color="gray"
                                sizing="md"
                                addon={<Envelope size={20} color="#5E718D" />}
                                addonPosition="left"
                                required
                            />
                        </div>
                        {/* Password Field  */}
                        <div className="mb-2">
                            <Label htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                name="password"
                                placeholder="********"
                                color="gray"
                                sizing="md"
                                type={showPass ? "text" : "password"}
                                addon={<Lock size={20} color="#5E718D" />}
                                addonPosition="left"
                                icon={
                                    showPass ? (
                                        <Eye size={20} color="#5E718D" />
                                    ) : (
                                        <EyeSlash size={20} color="#5E718D" />
                                    )
                                }
                                iconPosition="right"
                                required
                            />
                            <span className="text-gray-600 text-sm flex items-center gap-2 my-1 ml-1">
                                <input
                                    type="checkbox"
                                    onChange={() => setShowPass(!showPass)}
                                />
                                Show Password
                            </span>
                        </div>
                        <div className="mt-2">
                            <input
                                type="submit"
                                value="Sign In"
                                className="bg-customPrimary text-white px-4 py-[10px] rounded-md active:scale-[0.95] active:border-customPrimary border-3 active:border-opacity-70"
                            />
                        </div>
                    </form>
                    <hr />
                    <button onClick={handleGoogleSingIn} className="mx-auto flex items-center justify-center gap-2 active:bg-customPrimary active:text-white px-4 py-[10px] rounded-md active:scale-[0.95] border-customPrimary border-2 text-customPrimary font-semibold active:border-opacity-70">
                        <GoogleLogo size={20}/>Sign In With Google 
                    </button>
                </Card>
            </div>
            {/* Right Side Animation */}
            <div className="md:w-1/2 hidden md:block">
                <LoginAnimation />
            </div>
        </div>
    );
};

export default SignIn;
