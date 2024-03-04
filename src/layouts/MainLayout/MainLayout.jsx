import { Outlet } from "react-router-dom";
import { TopNavbar } from "../../components/TopNavBar/TopNavbar";

const MainLayout = () => {
    return (
        <div>
            <TopNavbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;