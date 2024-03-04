import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from '../configs/firebase.config.js';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Sign Up with email and password
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign up-in with google
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = ()=>{
        return signInWithPopup(auth,googleProvider);
    }

    // Login Existing User
    const logInUser = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Observing User (Checking for Login - Logout)
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user =>{
            user && setIsLoggedIn(true);
        });
        return ()=> unsubscribe();
    },[])

    const authContext = {
        createUser,
        googleLogin,
        logInUser,
        isLoggedIn
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
