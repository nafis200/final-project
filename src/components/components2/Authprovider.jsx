import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup, signOut,GoogleAuthProvider } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from "./firebase";



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()



const Authprovider = ({children}) => {
  
    const [users,setUsers] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = ()=>{
         setLoading(true)
         return signOut(auth)
    }

    const signIngoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    

    useEffect(()=>{
          const unSubscrive = onAuthStateChanged(auth,currentUser=>{

            const userEmail = currentUser?.email || users?.email
            const loggedUser = {email : userEmail}
            
            setUsers(currentUser)
            setLoading(false)
            if(currentUser){
                
                
            }
            else{
              
            }
          })
          return ()=>{
            unSubscrive()
        }
    },[])
    const authInfo = {users,createUser,loading,signInUser, logout,signIngoogle}
    return (
        <AuthContext.Provider value = {authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;