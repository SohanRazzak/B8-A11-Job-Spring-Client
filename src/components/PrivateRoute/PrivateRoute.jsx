import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const isLoggedIn = false;
    if(isLoggedIn){
        return children
    }
    else{
        return <Navigate to='/sign_in' state={location.pathname}/>
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;