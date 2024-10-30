 import  QZone1 from '../../../assets/assets/qZone1.png'
 import  QZone2 from '../../../assets/assets/qZone2.png'
 import  QZone3 from '../../../assets/assets/qZone3.png'
import { FaGoogle, FaGithub, FaFacebook,  FaTwitter,FaInstagram     } from 'react-icons/fa';

const RightSite = () => {
      return (
            <div>
           <div className='p-4 space-y-5 m-6' >
            <h2 className="text-3xl font-bold">Login with</h2>
           <button className=" btn btn-outline w-full">< FaGoogle ></FaGoogle>
  
  Login with Google
</button>

<button className=" btn btn-outline w-full">< FaGithub></ FaGithub>
  
Login with Github
</button>
           </div>

                    {/* Find Us On */}

           <div className='p-4 m-6' >
            <h2 className="text-3xl font-bold mb-5">Find Us On</h2>
           
           <a className="p-4 flex text-lg items-center border rounded-t-lg "><FaFacebook className='mr-3' ></FaFacebook >
  
           facebook
</a>

<a className="p-4 flex text-lg items-center border-x ">< FaTwitter className='mr-3'></ FaTwitter >
  
Twitter
</a>


<a className="p-4 flex text-lg items-center border rounded-b-lg "><FaInstagram className='mr-3' ></FaInstagram  >
  
Instagram
</a>
           </div>
                                    {/* Q-Zone */}
           <div className='p-4 space-y-5 m-6' >
            <h2 className="text-3xl font-bold">Q-Zone</h2>

            <img src={QZone1} alt="" />
            <img src={QZone2} alt="" />
            <img src={QZone3} alt="" />
      
           </div>
            </div>
      );
};

export default RightSite;