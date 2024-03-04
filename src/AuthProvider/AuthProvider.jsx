import PropTypes from "prop-types";
import { createContext } from "react";
import auth from '../configs/firebase.config.js';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authContext = {
        createUser,
    }
    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
