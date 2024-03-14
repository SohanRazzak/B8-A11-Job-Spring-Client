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
    const [user, setUser] = useState(null);
    const axiosInstance = useAxiosInstance()

    // Sign Up with email and password
    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign up-in with google
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Login Existing User
    const logInUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout User
    const logOutUser = () => {
        setIsLoading(true);
        return signOut(auth);
    };

    // Observing User (Checking for Login - Logout)
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, user => {
            // if user exist
            if(user){
                // setting loggedIn true and firebase user to user state
                setIsLoggedIn(true);
                setUser(user);
                // generating jwt token
                const jwtUser = {
                    email: user.email,
                    uid: user.uid
                }
                axiosInstance.post('/jwt', jwtUser)
                .then(res=> console.log(res.data))
            }
            // if user not found
            else{
                // clear token cookie
                axiosInstance.post('/logout');
                // set user states
                setIsLoggedIn(false);
                setUser(null)
            }
            setIsLoading(false)
        })
        return ()=> unSubscribe();
    },[axiosInstance])

    const authContext = {
        createUser,
        googleLogin,
        logInUser,
        logOutUser,
        isLoggedIn,
        user
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
