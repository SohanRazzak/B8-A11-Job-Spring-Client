import Lottie from "lottie-react"
import signUpAnimation from "./SignUpAnimation.json"

const SignUpAnimation = () => {
    return (
        <Lottie animationData={signUpAnimation} loop={false}/>
    );
};

export default SignUpAnimation;