import Lottie from "lottie-react";
import loginAnimation from './login.json';

const LoginAnimation = () => {
    return (
        <Lottie animationData={loginAnimation} loop={false}/>
    );
};

export default LoginAnimation;