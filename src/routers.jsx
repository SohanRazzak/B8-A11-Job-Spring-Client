import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./pages/Profile/Profile";
import AllJobs from "./pages/AllJobs/AllJobs";
import AddJob from "./pages/AddJob/AddJob";
import MyJobs from "./pages/MyJobs/MyJobs";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import JobDetails from "./pages/JobDetails/JobDetails";
import UpdateJob from "./pages/UpdateJob/UpdateJob";
import Search from "./pages/Search/Search";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/sign_up",
                element: <SignUp/>
            },
            {
                path: "/sign_in",
                element: <SignIn/>
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path: "/all_jobs",
                element: <AllJobs/>
            },
            {
                path: "/add_job",
                element: <PrivateRoute><AddJob/></PrivateRoute>
            },
            {
                path: "/my_jobs",
                element: <PrivateRoute><MyJobs/></PrivateRoute>
            },
            {
                path: "/update_my_job/:_id",
                element: <PrivateRoute><UpdateJob/></PrivateRoute>
            },
            {
                path: "/applied_jobs",
                element: <PrivateRoute><AppliedJobs/></PrivateRoute>
            },
            {
                path: "/job_details/:_id",
                element: <PrivateRoute><JobDetails/></PrivateRoute>
            },
            {
                path: "/search/:searchTerm",
                element: <Search/>
            },
            {
                path: "/blogs",
                element: <PrivateRoute><MyJobs/></PrivateRoute>
            },
            {
                path: "/terms_condition"
            },
            {
                path: "/privacy_policy"
            }
        ]
    }
])

export default routers;