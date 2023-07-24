import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Review = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center bg-black text-yellow-300 rounded-xl p-2">Review College</h2>
            <div className="grid grid-cols-1 gap-2 m-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="font-bold bg-yellow-200 text-black rounded-lg p-3">
                <h2 className="text-3xl mb-2">Harvard University</h2>
                <p className="flex mb-3"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                <p className="text-xl mb-3">The college infrastructure is neat and clean.The classrooms are well maintained with proper clean desks.There is wifi facility available also for students also.</p>
                <div className="flex items-center gap-2">
                    <img className="w-16 h-16" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914927/man-icon-md.png" alt="" />
                    <h4>Sunny Mahmud</h4>
                </div> 
            </div>

            <div className="font-bold  bg-yellow-200 text-black  rounded-lg p-3">
                <h2 className="text-3xl mb-2">California Technology</h2>
                <p className="flex mb-3"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></p>
                <p className="text-xl mb-3">It was nice! Our college has very good labs.College infrastructure is very good labs are well maintained and equipped with all lab items and chemicals.</p>
                <div className="flex items-center gap-2">
                    <img className="w-16 h-16" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914275/man-icon-sm.png" alt="" />
                    <h4>Sanvi Ahmed</h4>
                </div> 
            </div>

            <div className="font-bold  bg-yellow-200 text-black rounded-lg p-3">
                <h2 className="text-3xl mb-2">Stanford University</h2>
                <p className="flex mb-3"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></p>
                <p className="text-xl mb-3">College Infrastructure is good. The classes are equipped with smart boards. The classes are clean. Hostels too are good in terms of cleanliness. </p>
                <div className="flex items-center gap-2">
                    <img className="w-16 h-16" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7913955/business-man-icon-md.png" alt="" />
                    <h4>Rudro Ahmed</h4>
                </div> 
            </div>
        </div>
        </div>
    );
};

export default Review;