import LifesideNav from "../Shared/LeftSide/LifesideNav";
import Header from "../Shared/Navbar/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSite from "../Shared/Rightsite/RightSite";
import BreakingNews from "./BreakingNews";


const Home = () => {
      return (
            <div>
                  <Header></Header>
                  <BreakingNews></BreakingNews>
                  <Navbar ></Navbar>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="border" >
                 
                        <LifesideNav></LifesideNav>
                  </div>
                  <div className="md:col-span-2 border">
                        <h2 className="text-2xl">News Coming soon</h2>
                  </div>
                  <div >
                        <RightSite></RightSite>
                  </div>
                  </div>
            </div>
      );
};

export default Home;