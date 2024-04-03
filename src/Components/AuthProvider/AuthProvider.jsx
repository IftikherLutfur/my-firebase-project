import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState} from "react";
import auth from "../../firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
     const [user, setUser] = useState('');


     const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
     }

     const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
     } 

     const logOut = () =>{
      return signOut(auth)
     }


     useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
    console.log("onAuthState", currentUser);
  })
  return () =>{
    unSubscribe()
  }
     },[])

     const authInfo = {
      user, 
      createUser, 
      signInUser,
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