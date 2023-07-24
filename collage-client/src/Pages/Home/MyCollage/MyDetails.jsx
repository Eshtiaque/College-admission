import { useEffect, useState } from "react";

import CollageName from "./CollageName";

const MyDetails = () => {
    const [collage, setCollage] = useState([]);
    
        // const { _id,name, price, quantity, category, sellerName } = toys;
        // console.log(_id,name, price, quantity, category, sellerName )
      useEffect(()=>{
       
        fetch('http://localhost:5001/allCollage')
        .then(res=>res.json())
        .then(data=>{
            setCollage(data)
          
        })
    
      },[])

    return (
        <div>
            <h1 className="text-4xl text-center text-yellow-500 m-4 bg-black p-2 rounded-full underline underline-offset-8">Details</h1>
             <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2 m-2">
                {
                    collage.map(calls=><CollageName 
                        key={calls.id}
                        calls={calls}
                    ></CollageName>)
                }
            </div>
        </div>
    );
};

export default MyDetails;