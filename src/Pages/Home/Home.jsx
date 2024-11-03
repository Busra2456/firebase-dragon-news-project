import LifesideNav from "../Shared/LeftSide/LifesideNav";
import Header from "../Shared/Navbar/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSite from "../Shared/Rightsite/RightSite";
import BreakingNews from "./BreakingNews";
import user from "../../assets/assets/user.png"
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import image1 from "../../assets/assets/editorsInsight1.png"
import image2 from "../../assets/assets/editorsInsight2.png"
import moment from 'moment';
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
                       
            {/* -------------------image-1---------------------------------------------------------- */}
               
                <div className="flex mt-10 bg-slate-200 px-4 py-4 " >
                  <div tabIndex={0} role="button" className="  btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
          <img 
            alt="Tailwind CSS Navbar component"
            src={user} />
           

      </div>
     </div>
              <div className="ml-2" ><h1 className="text-[#706F6F] text-xl font-bold" >Awlad Hossain</h1>
              <p className="text-xl text-[#706F6F] "> {moment().format("YYYY-MM-D ")} </p> 
              
              </div>
             <div className=" flex text-[#706F6F]  ml-64 " >
             <FaRegBookmark className="text-2xl mt-4" ></FaRegBookmark>
             <IoShareSocialOutline className="text-3xl ml-2 mt-3" ></IoShareSocialOutline>
             </div>

              </div>

              <div className=" space-y-5 mt-8" >
                  <h1 className="text-3xl font-bold" >Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h1>
                  <img src={image1} alt="" />
                  <p className="text-xl text-[#706F6F]" >Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... Read More</p>
              </div>


{/* -------------------------------image-2-------------------------------- */}


<div className="flex mt-10 bg-slate-200 px-4 py-4 " >
                  <div tabIndex={0} role="button" className="  btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
          <img 
            alt="Tailwind CSS Navbar component"
            src={user} />
           

      </div>
     </div>
              <div className="ml-2" ><h1 className="text-[#706F6F] text-xl font-bold" >Awlad Hossain</h1>
              <p className="text-xl text-[#706F6F] "> {moment().format("YYYY-MM-D ")} </p> 
              
              </div>
             <div className=" flex text-[#706F6F]  ml-64 " >
             <FaRegBookmark className="text-2xl mt-4" ></FaRegBookmark>
             <IoShareSocialOutline className="text-3xl ml-2 mt-3" ></IoShareSocialOutline>
             </div>

              </div>

              <div className=" space-y-5 mt-8" >
                  <h1 className="text-3xl font-bold" >Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h1>
                  <img src={image2} alt="" />
                  <p className="text-xl text-[#706F6F]" >Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... Read More</p>
              </div>





{/* --------------------------------image-3------------------------------------- */}

<div className="flex mt-10 bg-slate-200 px-4 py-4 " >
                  <div tabIndex={0} role="button" className="  btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
          <img 
            alt="Tailwind CSS Navbar component"
            src={user} />
           

      </div>
     </div>
              <div className="ml-2" ><h1 className="text-[#706F6F] text-xl font-bold" >Awlad Hossain</h1>
              <p className="text-xl text-[#706F6F] "> {moment().format("YYYY-MM-D ")} </p> 
              
              </div>
             <div className=" flex text-[#706F6F]  ml-64 " >
             <FaRegBookmark className="text-2xl mt-4" ></FaRegBookmark>
             <IoShareSocialOutline className="text-3xl ml-2 mt-3" ></IoShareSocialOutline>
             </div>

              </div>

              <div className=" space-y-5 mt-8" >
                  <h1 className="text-3xl font-bold" >Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h1>
                 
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