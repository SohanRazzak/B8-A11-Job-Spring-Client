import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../configs/firebase.config.js";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import LoadingAnimation from "../animations/LoadingAnimation/LoadingAnimation.jsx";
import useAxiosInstance from "../hooks/useAxiosInstance/useAxiosInstance.jsx";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const axiosInstance = useAxiosInstance();

    // Sign Up with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign up-in with google
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Login Existing User
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout User
    const logOutUser = () => {
        return signOut(auth);
    };

    // Observing User (Checking for Login - Logout)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
                const jwtUser = {
                    email: user.email,
                    uid: user.uid
                }
                user &&
                    axiosInstance.post("/jwt", jwtUser)
                        .then((res) => console.log(res.data));
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, [axiosInstance]);

    const authContext = {
        createUser,
        googleLogin,
        logInUser,
        logOutUser,
        isLoggedIn,
        setIsLoggedIn,
    };

    // Checking is Loading
    if (isLoading) {
        return <LoadingAnimation />;
    }

    // When loading complete, render app
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
