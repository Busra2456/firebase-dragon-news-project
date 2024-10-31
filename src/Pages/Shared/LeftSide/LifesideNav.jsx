import picture1 from "../../../assets/assets/1.png"
import picture2 from "../../../assets/assets/2.png"
import picture3 from "../../../assets/assets/3.png"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LifesideNav = () => {
      const [allCategory,setAllCategory ] = useState([]);
      useEffect(() =>{
            fetch('categories.json')
            .then(res => res.json())
            .then(data => setAllCategory(data))
      },[])
      return (
     
            <div className="space-y-6" >
              <h1 className="text-3xl font-bold mt-8 ">All Category  </h1> 
              {
                allCategory.map(category => <Link 
                  className="block ml-4 text-xl font-bold"
                  key={category.id} to={`/category/${category.id} `}  >
                 {category.name} </Link>)
                 
              }

              {/* picture-1 */}

<div>

                    
<div className="card card-compact bg-base-100 rounded mx-4">
  <figure>
    <img
      src={picture1}
      alt=""/>
  </figure>
  <div className="card-body">
   
    <p className="text-xl" >Bayern Slams Authorities Over Flight Delay to Club World Cup </p>
    <p>Sports  Jan 4, 2022</p>
   
  </div>
</div>
        

        {/* picture-2 */}

                      
        <div className="card card-compact bg-base-100 rounded mx-4">
  <figure>
    <img
      src={picture2}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   
    <p className=" text-xl" >Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
    <p>Sports  Jan 4, 2022</p>
  </div>
</div>
        {/*picture-3*/}

                      
        <div className="card card-compact bg-base-100 rounded mx-4">
  <figure>
    <img
      src={picture3}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   
    <p className=" text-xl" >Bayern Slams Authorities Over Flight Delay to Club World Cup </p>
    <p>Sports  Jan 4, 2022</p>
  </div>
</div>
        
      
      
      </div>     



              
            </div>
      );
};

export default LifesideNav;