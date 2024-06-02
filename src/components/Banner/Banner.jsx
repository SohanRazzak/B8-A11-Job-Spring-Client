import ContainerLayout from "../../layouts/ContainerLayout/ContainerLayout";
import banner from '../../../public/banner.svg';
import { TextInput } from "keep-react";
import { useNavigate } from "react-router-dom";


const Banner = () => {
    const navigate = useNavigate();
    const handleSearch = (e)=>{
        e.preventDefault();
        const searchTerm = e.target.search.value;
        navigate(`/search/${searchTerm}`)
        
    }
    return (
        <div className="bg-customPrimary bg-opacity-80 font-openSans">
            <ContainerLayout>
                <div className="flex flex-col-reverse md:flex-row md:gap-5 justify-center items-center">
                    <div className="text-white md:w-1/2 px-5 pt-4 py-16 grid place-items-center">
                        <div className="space-y-4">
                        <h2 className="text-3xl lg:text-5xl font-bold ">Job Spring</h2>
                        <p className="text-xl font-medium">Where Your Job Search Blossoms</p>
                        </div>
                        <form onSubmit={handleSearch} className="flex justify-center items-center w-full mt-8">
                        <TextInput
                                name="search"
                                placeholder="Enter your keyword..."
                                color="gray"
                                sizing="md"
                                required
                            />
                        <input
                                type="submit"
                                value="Search"
                                className="bg-white text-customPrimary -ml-1 z-10 border-customPrimary border-2 px-4 py-[9px] rounded-r-md active:scale-[0.95] active:border-customPrimary border-3 active:border-opacity-70"
                            />
                        </form>
                    </div>
                    <div className="md:w-1/2 p-5">
                        <img src={banner} alt="Banner" className="w-full"/>
                    </div>
                </div>
            </ContainerLayout>
        </div>
    );
};

export default Banner;