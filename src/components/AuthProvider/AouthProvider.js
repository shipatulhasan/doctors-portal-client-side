import React, { createContext, useEffect, useState } from 'react';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged,updateProfile,signOut, getAuth} from 'firebase/auth'

import {app} from '../../Firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)

const AouthProvider = ({children}) => {

    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

    // create user

    const createUser = (email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const signIn = (email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const updateUser = (profile)=>{
       return updateProfile(auth.currentUser,profile)

    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }




    const authInfo = { user, createUser, signIn, updateUser,logOut,loading }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
           setUser(currentUser)
           setLoading(false)
       })
       return ()=>unsubscribe()
        
    },[])



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AouthProvider;