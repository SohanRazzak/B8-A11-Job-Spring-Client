import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./pages/Profile/Profile";

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
            }
        ]
    }
])

export default routers;