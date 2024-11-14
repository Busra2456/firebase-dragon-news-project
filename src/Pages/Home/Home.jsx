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
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";
const Home = () => {
      const news = useLoaderData();
      console.log(news)
      return (
            <div>
                 


                  <Header></Header>
                  <BreakingNews></BreakingNews>
                  <Navbar ></Navbar>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="" >
                 
                        <LifesideNav></LifesideNav>
                  </div>
                 
                 
                 {/*-------------------------------------------------- */}
                 
              <div className="md:col-span-2 ">
                      
            {
                  news.map(aNews => <NewsCard
                  kew ={aNews._id}
                  news = {aNews}
                  ></NewsCard>)
            }    
                       
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