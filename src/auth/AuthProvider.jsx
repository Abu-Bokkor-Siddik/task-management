import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register
  const signs = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   profile
  const profile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
// log out 
  const logout = ()=>{
    setLoading(true)

   
  return signOut(auth)
  }
  // login
  const logins = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };
  // google login
  const provider =new GoogleAuthProvider();
  const google = ()=>{
       return signInWithPopup(auth,provider)
  }
  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth,(current)=>{
        setUser(current)
        setLoading(false)
    })
    return()=>{
        return unsuscribe()
    }
  },[])

  const info = {user,signs,profile,logins,loading,logout,google};
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
