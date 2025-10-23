import React, { createContext, useEffect, useState } from 'react';
import App from '../App';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from "../../src/FireBase/firebaseConfig"
export const AuthContex = createContext()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // (userconsole.log);
    const createUser = (Email, Password) => {
        return createUserWithEmailAndPassword(auth, Email, Password)
    }
    const Logout = () => {
        return signOut(auth)
    }

    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsub()
        }
    })
    const authData = {
        user, setUser, createUser, Logout, singIn, loading, setLoading
    };
    return (

        <AuthContex value={authData} >
            {children}
        </AuthContex>
    );
};

export default AuthProvider;