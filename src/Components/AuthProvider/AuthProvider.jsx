import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState} from "react";
import auth from "../../firebase.config";

export const AuthContext = createContext(null);

const google = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
     const [user, setUser] = useState('');
     const [loading, setLoading] = useState(true)

     const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
     }

     const signInUser = (email,password) =>{
      setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     } 

     const signInWithGoogle = () =>{
      setLoading(true)
      return signInWithPopup(auth, google)
     }

     const logOut = () =>{
      setLoading(true)
      return signOut(auth)
     }


     useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
    console.log("onAuthState", currentUser);
    setLoading(false)
  })
  return () =>{
    unSubscribe()
  }
     },[])

     const authInfo = {
      user,
      loading, 
      createUser, 
      signInUser,
      signInWithGoogle,
     logOut
    }
  
    
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}