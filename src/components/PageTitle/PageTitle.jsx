import PropTypes from "prop-types";
import bgTitle from "../../assets/bgTitle.jpg";

const PageTitle = ({ title }) => {
    return (
        <div
            className="relative h-24 md:h-48 w-full -mb-10 rounded-b-[35%]"
            style={{
                backgroundImage: `url(${bgTitle})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-indigo-500 opacity-60 rounded-b-[35%]"></div>
            <div className="relative h-full flex items-center justify-center rounded-b-[35%]">
                <h2 className="text-2xl md:text-4xl font-bold text-white mt-8 font-openSans backdrop-blur-md backdrop-brightness-110 rounded-lg p-2">
                    {title}
                </h2>
            </div>
        </div>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string,
};

export default PageTitle;