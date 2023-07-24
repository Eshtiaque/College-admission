import { Link } from "react-router-dom";

const CollageName = ({calls}) => {
    const {_id, college_name } = calls;
    return (
        <div>
            <h1></h1>
             <Link to={`/details/${_id}`}>
            <div className="card h-32 bg-base-100 text-white shadow-xl">
                {/* <figure><img className="h-48 w-full" src={college_image} alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="font-black text-xl text-black bg-yellow-500 p-5 rounded-full text-center">
                        {college_name}
                    </h2>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default CollageName;