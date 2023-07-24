
import { Link } from "react-router-dom";
import bang from "../../../../assets/mannnnnnnnnnnn-removebg-preview.png"
const Banner = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mb-5">
                <p className="text-yellow-300 text-center ">_______________________________</p>
                <p className="text-yellow-300 text-center ">_______________________________</p>
                <p className="text-yellow-300 text-center ">_______________________________</p>
            </div>
            <div className=" lg:mt-10 w-full grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 ">

                <div>
                    <div className=" rounded-xl items-center h-full flex  bottom-0">
                        <div className='text-white lg:ms-9 space-y-7 w-3/4 pl-4  ps-7   '>
                            <h2 className='text-2xl md:text-2xl font-bold '>Get <span className="text-yellow-300 ">&#39;</span>s Your <span className=" text-yellow-300 ">! </span><br /><span className="lg:text-8xl text-7xl font-black text-yellow-300">Collage</span></h2>
                            <p className="lg:block text-xl text-white">Find Your best choice for your career. {"Don't"} compromise.<br></br>Successful people are not gifted, they just work hard, then succeed on purpose</p>
                            <div className="grid lg:grid-cols-1  md:grid-cols-2  grid-cols-2" >
                                <div>
                                    <Link to="/login"><button className='lg:text-lg  w-3/4 lg:w-full mb-3 btn text-black bg-yellow-300 mr-5'>LOG-IN</button></Link>
                                </div>
                                <div>
                                    <Link to="/Collages"> <button className='lg:text-lg w-3/4  lg:w-full btn btn-outline btn-warning'>COLLAGE</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <img className="rounded-full" src={bang} alt="" />

                </div>
            </div>









        </div>

    )

};

export default Banner;