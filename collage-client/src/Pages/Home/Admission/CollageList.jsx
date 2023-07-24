import { Link } from "react-router-dom";

const CollageList = () => {
    return (
        <div>
             <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mb-5">
                <p className="text-yellow-300 text-center ">_______________________________</p>
                <p className="text-yellow-300 text-center ">_______________________________</p>
                <p className="text-yellow-300 text-center ">_______________________________</p>
            </div>
            <h1 className="font-black text-4xl  text-center text-yellow-300 mb-10">Go for Admission </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-3  m-3 text-center ">
                <Link to="/Admission">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body ">
                            <h2 className="card-title text-2xl bg-gray-900 text-yellow-300 p-5 rounded-full "> University of Oxford</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/Admission">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body">
                            <h2 className="card-title text-2xl bg-gray-900 text-yellow-300 p-5 rounded-full"> Massachusetts (MIT)</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/Admission">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body">
                            <h2 className="card-title text-2xl bg-gray-900 text-yellow-300 p-5 rounded-full"> Stanford University</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/Admission">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body">
                            <h2 className="card-title text-2xl bg-gray-900 text-yellow-300 p-5 rounded-full"> Old Harvard University</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/Admission">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body">
                            <h2 className="card-title text-2xl bg-gray-900 text-yellow-300 p-5 rounded-full"> California Technology</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/Admission">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body">
                            <h2 className="card-title text-2xl bg-gray-900 text-yellow-300 p-5 rounded-full"> Buffelo yaro University</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/Admission">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body">
                            <h2 className="card-title text-2xl bg-gray-900 text-yellow-300 p-5 rounded-full"> Princeton University</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/Admission">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body">
                            <h2 className="card-title text-2xl bg-gray-900 text-yellow-300 p-5 rounded-full"> Columbia University</h2>
                        </div>
                    </div>
                </Link>
                <Link to="/Admission">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <div className="card-body">
                            <h2 className="card-title text-2xl bg-gray-900 text-yellow-300 p-5 rounded-full"> University of Chicago</h2>
                        </div>
                    </div>
                </Link>
                
             
            </div>
        </div>
    );
};

export default CollageList;