import Lottie from "lottie-react";
import loadingAnimation from "./LoadingAnimation.json";

const LoadingAnimation = () => {
    return (
        <div className="h-screen grid place-items-center">
            <Lottie className="h-16 md:h-24" animationData={loadingAnimation} />
        </div>
    );
};

export default LoadingAnimation;
