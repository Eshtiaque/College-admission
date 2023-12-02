// import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const CollageCard = ({ calls }) => {
    const {_id, college_image, college_name, admission_dates, number_of_research } = calls;
    return (
        <div>
            <div className="card bg-base-100 text-black shadow-xl">
                <figure><img className="h-48 w-full" src={college_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {college_name}
                        <Link to={`/details/${_id}`}>
                        <div className="badge badge-warning">Details</div>
                        </Link>
                       
                    </h2>
                    <div className='flex text-left'>
                        <p>Rating : </p>
                        <div className="rating ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" />
                        </div>
                    </div>
                    <p className='text-left'>Admission Dates : <br />  <span className="text-left text-yellow-300">{admission_dates}</span></p>
                    <p className='text-left'>Number of Research : <span className="text-yellow-300 ">{number_of_research}</span></p>

                    {/* <div className="card-actions justify-end">
                      
                        <div className="badge badge-outline">Details</div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default CollageCard;