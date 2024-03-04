import Lottie from "lottie-react";
import errorAnimation from "./Animation - 1709472229064.json";
import { Button } from "keep-react";
import { Link } from "react-router-dom";

const ErrorAnimation = () => {
    return (
        <div className="flex justify-center flex-col">
            <div className="w-2/3 mx-auto">
            <Lottie
                loop={false}
                animationData={errorAnimation}
            />
            </div>
            <div className="flex justify-center my-5 z-20">
                <Button className="bg-rose-500 text-white uppercase" type="error"><Link to='/'>Home</Link></Button>
            </div>
        </div>
    );
};

export default ErrorAnimation;
