import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/Firebase.config";


export const AuthContext = createContext(null);


const auth = getAuth(app);


const AuthProvider = ({children}) => {
      const createUser = (name,photo,email,password) =>{
           return createUserWithEmailAndPassword(auth,name,photo,email,password)

      }
      const [user , setUser] = useState(null);
      const authInfo = {
            user,
            createUser
      }
      return (
            <AuthContext.Provider value={authInfo}>
               {children}   
            </AuthContext.Provider>
      );
};

export default AuthProvider;