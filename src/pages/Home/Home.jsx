import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import HomePageJobs from "../../components/HomePageJobs/HomePageJobs";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Job Spring - Home Page
                </title>
            </Helmet>
            <Banner/>
            <HomePageJobs/>
        </div>
    );
};

export default Home;