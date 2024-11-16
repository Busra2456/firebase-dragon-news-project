import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";
export const authContext = createContext(null)
const auth = getAuth(app); 

const AuthProvider = ({ children}) => {

      const [user,setUser] = useState(null)
      const [loading,setLoading] = useState(true)
      const createUser = (email,password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)

      }

      const signIn = (email,password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
 
      }

      const logOut = () =>{
            setLoading(true)
           return signOut(auth);
           
      }



      useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
                  console.log('busraaaaaaaaaaa',currentUser);
                  setUser(currentUser);
                  setLoading(false);
            });
            return () =>{
                  unSubscribe()
            }
      },[])
      const authInfo = { 
            user,
            loading,
            createUser,
            signIn,
            logOut,
           
           
      }
      return (
            <authContext.Provider value={authInfo}>
{ children}
            </authContext.Provider>
      );
};

export default AuthProvider;