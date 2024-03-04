import { Card, Label, TextInput } from "keep-react";
import { Envelope, Lock, EyeSlash, Eye, User, ImageSquare } from "phosphor-react";
import { useContext, useState } from "react";
import SignUpAnimation from "../../animations/SignUpAnimation/SignUpAnimation";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const [showError, setShowError] = useState(false);
    const {createUser} = useContext(AuthContext)

    // Handle Sign Up
    const handleSignUp = (e)=>{
        e.preventDefault();

        // Getting Form Data
        const form = e.target;
        // const fullName = form.fullName.value;
        // const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        // Password Validation
        const isValidPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z\d]).{6,}$/;
        if(isValidPass.test(password) === false){
            return setShowError(true)
        }
        else{
            setShowError(false)
        }

        // Creating User And Storing (firebase, mongodb)
        createUser(email, password)
        .then(res => {
            console.log(res.user);
            form.reset();
        })
    }
    return (
        <div className="max-w-6xl mx-auto my-5 py-8 rounded-md bg-gray-50 flex flex-col md:flex-row justify-center items-center gap-5">
            {/* Sign Up Section */}
            <div className="md:w-1/2 flex justify-center">
                <Card className="overflow-hidden rounded-md p-6 xl:w-2/3">
                    <h2 className="text-2xl text-center font-semibold font-openSans text-gray-700">
                        Create a new account!
                    </h2>
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
                                addon={<ImageSquare size={20} color="#5E718D" />}
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
                        {
                            showError && (
                                <ul className="space-y-1 text-sm list-disc list-inside text-rose-500">
                                    <li>Password Must Be 6 Character Long,</li>
                                    <li>Must Contain A Number</li>
                                    <li>Capital and Small Letter</li>
                                    <li>Special Character</li>
                                </ul>
                            )
                        }
                        <div className="mt-2">
                            <input type="submit" value="Sign Up" className="bg-customPrimary text-white px-4 py-[10px] rounded-md active:scale-[0.95] active:border-customPrimary border-3 active:border-opacity-70"/>
                        </div>
                    </form>
                    <hr />
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
