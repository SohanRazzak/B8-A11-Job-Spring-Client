import { Outlet } from "react-router-dom";
import { TopNavbar } from "../../components/TopNavBar/TopNavbar";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <TopNavbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;