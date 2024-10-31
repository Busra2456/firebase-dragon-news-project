import LifesideNav from "../Shared/LeftSide/LifesideNav";
import Header from "../Shared/Navbar/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSite from "../Shared/Rightsite/RightSite";
import BreakingNews from "./BreakingNews";
import user from "../../assets/assets/user.png"
import { FaShareAlt } from "react-icons/fa";

const Home = () => {
      return (
            <div>
                 


                  <Header></Header>
                  <BreakingNews></BreakingNews>
                  <Navbar ></Navbar>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="" >
                 
                        <LifesideNav></LifesideNav>
                  </div>
                 
                 
                 {/* LifesideNav------------------------------------------------------------ */}
                 
                    
                
              <div className="md:col-span-2 ">
                      
              <h2 className="text-3xl font-bold">Dragon News Home</h2>      
                       
                 
               
                <div className="flex mt-10 bg-slate-200 px-4 py-4 border border-fuchsia-600" >
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user} />

      </div>
            
              </div>

              </div>
              </div>

{/* RightSite------------------------------------------------------------------------------------ */}



<div >
                        <RightSite></RightSite>
                  </div>
                  </div>
            </div>
      );
};

export default Home;