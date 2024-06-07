import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import HomePageJobs from "../../components/HomePageJobs/HomePageJobs";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Job Spring - Home Page
                </title>
            </Helmet>
            <Banner/>
            <HowItWorks/>
            <HomePageJobs/>
            <Testimonials/>
        </div>
    );
};

export default Home;