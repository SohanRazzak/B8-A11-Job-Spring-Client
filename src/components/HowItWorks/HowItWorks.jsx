import { RiFileAddLine } from "react-icons/ri";
import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";
import {
    PiListMagnifyingGlass,
    PiSealCheck,
    PiUserCirclePlus,
} from "react-icons/pi";

const HowItWorks = () => {
    return (
        <ContainerLayout>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-lime-600 font-semibold mt-6">
                How It Works?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 p-5 mx-10 gap-5">
                <div className="flex flex-col items-center justify-center gap-5">
                    <PiUserCirclePlus size={80} color="#3994ff" />
                    <p className="text-[#3994ff]">Sign Up Now!</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <PiListMagnifyingGlass size={80} color="#E11D48"/>
                    <p className="text-rose-600">Search For Job</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <PiSealCheck size={80} color="#C026D3"/>
                    <p className="text-fuchsia-600">Apply For Job, Or</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <RiFileAddLine size={80} color="lime"/>
                    <p className="text-lime-600">Publish New Job</p>
                </div>
            </div>
        </ContainerLayout>
    );
};

export default HowItWorks;
