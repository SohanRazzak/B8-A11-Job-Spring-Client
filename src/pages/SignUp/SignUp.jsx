import { Card, Label, TextInput } from "keep-react";
import {
    Envelope,
    Lock,
    EyeSlash,
    Eye,
    User,
    ImageSquare,
    GoogleLogo
} from "phosphor-react";
import { useContext, useState } from "react";
import SignUpAnimation from "../../animations/SignUpAnimation/SignUpAnimation";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const [showError, setShowError] = useState(false);
    const { createUser, googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    // Handle Sign Up
    const handleSignUp = (e) => {
        e.preventDefault();

        // Getting Form Data
        const form = e.target;
        const fullName = form.fullName.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // Password Validation
        const isValidPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z\d]).{6,}$/;
        if (isValidPass.test(password) === false) {
            return setShowError(true);
        } else {
            setShowError(false);
        }

        // Creating User And Storing (firebase, mongodb)
        createUser(email, password)
        .then((res) => {
            updateProfile(res.user, {displayName: fullName, photoURL: photo})
            if (res.user) {
                // Adding User to databse
                const uid = res.user.uid;
                const user = {
                    fullName,
                    photo,
                    email,
                    uid,
                };
                axios.post("http://localhost:5000/users", user).then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire(
                            "Sign Up Successful!",
                            "You will be redircted to you destination!",
                            "success"
                        );
                    }
                });

                form.reset();
                location.state ? navigate(location.state) : navigate("/");
            }
        });
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
                axios.put("http://localhost:5000/users", user).then((res) => {
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
            {/* Sign Up Section */}
            <div className="md:w-1/2 flex justify-center">
                <Card className="overflow-hidden rounded-md p-6 xl:w-2/3">
                    <h2 className="text-2xl text-center font-semibold font-openSans text-gray-700">
                        Create a new account!
                    </h2>
                    <span className="flex items-center justify-center gap-2">Or, Already have an account? <Link to="/sign_in" className="text-rose-500">Sign In</Link></span>
                    <hr />
                    <form onSubmit={handleSignUp}>
                        <div className="mb-2">
                            <Label htmlFor="fullName" value="Full Name" />
                            <TextInput
                                id="fullName"
                                name="fullName"
                                placeholder="John Doe"
                                color="gray"
                                sizing="md"
                                addon={<User size={20} color="#5E718D" />}
                                addonPosition="left"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="photo" value="Photo URL" />
                            <TextInput
                                id="photo"
                                name="photo"
                                placeholder="https://i.ibb.co/cghrSpc/john.jpg"
                                color="gray"
                                sizing="md"
                                addon={
                                    <ImageSquare size={20} color="#5E718D" />
                                }
                                addonPosition="left"
                                required
                            />
                        </div>
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
                        {showError && (
                            <ul className="space-y-1 text-sm list-disc list-inside text-rose-500">
                                <li>Password Must Be 6 Character Long,</li>
                                <li>Must Contain A Number</li>
                                <li>Capital and Small Letter</li>
                                <li>Special Character</li>
                            </ul>
                        )}
                        <div className="mt-2">
                            <input
                                type="submit"
                                value="Sign Up"
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
                <SignUpAnimation />
            </div>
        </div>
    );
};

export default SignUp;
