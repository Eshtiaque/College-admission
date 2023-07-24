import { createContext, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { useState } from "react";
import app from "../Firebase/Firebase.confiq";


// import React from 'react';
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password)
    }
     
const signIn =(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
}
const googleSignIn = () => {
    return signInWithPopup(auth, GoogleAuthProvider)
}
const logOut = () => {
    return signOut(auth);
}

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // setUser('currentUser', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe;
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;