import { useEffect, useState } from "react";
import CollageCard from "./CollageCard";

const Collages = () => {

    const [collage, setCollage] = useState([]);
    const [loading, setLoading] = useState(true)
    
        // const { _id,name, price, quantity, category, sellerName } = toys;
        // console.log(_id,name, price, quantity, category, sellerName )
      useEffect(()=>{
        setLoading(true)
        fetch('http://localhost:5001/allCollage')
        .then(res=>res.json())
        .then(data=>{
            setCollage(data)
            setLoading(false)
        })
    
      },[])

    return (

        <div>
             <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mb-5">
                <p className="text-yellow-300 text-center ">_______________________________</p>
                <p className="text-yellow-300 text-center ">_______________________________</p>
                <p className="text-yellow-300 text-center ">_______________________________</p>
            </div>
            <h1 className="text-2xl font-bold text-yellow-300 text-center">All Collages </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mb-5">
                <p className="text-yellow-300 text-center ">_______________________________</p>
                <p className="text-yellow-300 text-center ">_______________________________</p>
                <p className="text-yellow-300 text-center ">_______________________________</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2 m-2">
                {
                    collage.map(calls=><CollageCard 
                        key={calls.id}
                        calls={calls}
                    ></CollageCard>)
                }
            </div>

        </div>
    );
};

export default Collages;