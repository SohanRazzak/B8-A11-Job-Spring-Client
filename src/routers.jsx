import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AllJobs from "./pages/AllJobs/AllJobs";
import AddJob from "./pages/AddJob/AddJob";
import MyJobs from "./pages/MyJobs/MyJobs";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import JobDetails from "./pages/JobDetails/JobDetails";
import UpdateJob from "./pages/UpdateJob/UpdateJob";
import Search from "./pages/Search/Search";
import Blogs from "./pages/Blogs/Blogs";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import BlogPost from "./pages/BlogPost/BlogPost";

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
                element: <Blogs/>
            },
            {
                path: "/blog/:id",
                loader : ({params})=> fetch(`https://b8-a11-job-spring-server.onrender.com/get-blog-post/${params.id}`),
                element: <BlogPost/>
            },
            {
                path: "/terms_condition",
                element: <Terms/>
            },
            {
                path: "/privacy_policy",
                element: <Privacy/>
            }
        ]
    }
])

export default routers;