
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import MyDetails from "./MyDetails";

const MyCollage = () => {

    const { user } = useContext(AuthContext)
    const [man, setMan] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5001/myCollage/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMan(data);
                
            })
    }, [user])
    return (


        <div className="my-jobs-container">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mb-5">
                <p className="text-yellow-300 text-center ">_______________________________</p>
                <p className="text-yellow-300 text-center ">_______________________________</p>
                <p className="text-yellow-300 text-center ">_______________________________</p>
            </div>
            <h1 className="text-center m-2 text-yellow-300 p-4 font-black text-4xl rounded-full">My Collage !</h1>
            <div className="search-box  text-center">
             
                <table className="table w-full bg-black">
                    {/* head */}
                    <thead className="">
                        <tr className="">
                            <th className="bg-black border rounded text-center text-white">Index</th>
                            <th className="bg-black border rounded text-center text-white">Name</th>
                            <th className="bg-black border rounded text-center text-white">Email</th>
                            <th className="bg-black border rounded text-center text-white">Phone Number </th>
                            <th className="bg-black border rounded text-center text-white">Address</th>
                           
                            <th className="bg-black border rounded text-center text-white">Birth Date</th>
                            <th className="bg-black border rounded text-center text-white">Option</th>

                        </tr>
                    </thead>
                    <tbody className="bg-black text-white text-center">
                        {
                            man.map((info, index) => <tr key={info}>
                                <td>{index + 1}</td>
                                <td className="font bold">{info.name}</td>
                                <td>{info.email}</td>
                                <td>{info.number}</td>
                                <td >{info.address}</td>
                                <td>{info.calender}</td>
                                <td>
                                    <Link to={`/editCollage/${info._id}`}>
                                    <button className="btn rounded-lg btn-warning bg-black text-yellow-300 " >Edit</button>
                                    </Link>
                                    
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
          
                <MyDetails></MyDetails>
        </div>
    )
};

export default MyCollage;