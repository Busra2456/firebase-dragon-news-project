import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
      const {user, loading} = useContext(authContext);
      const location = useLocation();
      console.log(location.pathname
      );
      if(loading){
            
            return <span className="loading loading-spinner loading-lg"></span>
      }
      if(user){
            return children;
      }
      return <Navigate state={location.pathname} to="/Login" ></Navigate>
      
};

export default PrivateRoute;