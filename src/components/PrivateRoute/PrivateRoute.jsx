import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);


    if (isLoggedIn) {
        return children;
    } else {
        return <Navigate to="/sign_in" state={location.pathname} />;
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
