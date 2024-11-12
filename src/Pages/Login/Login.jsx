import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";


const Login = () => {
  const {signIn} = useContext(authContext)
      const handleLogin = e =>{
            e.preventDefault();
            console.log(e.currentTarget);
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const password = form.get('password')
            console.log(email,password)
            signIn(email,password)
            .then(result =>{
              console.log(result.user)
            })
            .catch(error =>{
              console.error(error)
            })
          
      }
      return (
           
            <div className="">
                <Navbar></Navbar>
                <div>
                <h1 className="text-3xl font-bold text-center my-10  ">Login your account</h1>
                <hr />
               
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto ">
      <div className="text-center ">
     
    </div>
        <div className="form-control mt-5">
        <label className="label ">
            <span className="text-xl">Email address</span>
          </label>

          <input type="email" name="email" placeholder="email" className="input  bg-base-200 py-7 mb-8 " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl">Password</span>
          </label>
          <input type="password" name="password" placeholder="password"  className="input py-7 bg-base-200 mb-8" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-active btn-neutral md:w-full lg:w-full mx-auto text-xl m-5 ">Login</button>
        </div>
      </form>
      <p className="text-center text-red-800" >
        Do not have an account <Link className="text-blue-800 font-bold " to="/Register" >Register</Link>
      </p>
                </div>

                
              
     
      
     
              
   
            </div>
      );
};

export default Login;