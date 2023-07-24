import { useLoaderData } from "react-router-dom";


const Details = () => {
    const singleDetails = useLoaderData();
    const {
        college_image,
        college_name,
        admission_dates,
        main_events,
        main_sports,
        number_of_research,
        research_work,
        research_history,
        admission_process,
        events_details,
        sports_categories_section

    } = singleDetails;


    return (

        <div>
                     <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mb-5">
                <p className="text-yellow-300 text-center ">_______________________________</p>
                <p className="text-yellow-300 text-center ">_______________________________</p>
                <p className="text-yellow-300 text-center ">_______________________________</p>
            </div>
            <h1 className="text-center m-5 text-3xl font-black text-yellow-300"> {college_name}</h1>
            <div className="grid grid-cols-3">
                <div></div>
                <img className="" src={college_image} alt="" />
                <div></div>

            </div>
            <div className="text-center m-5">

                <div className="divider text-yellow-300 ">Admission</div>

                <h1 className="text-yellow-300">Date : {admission_dates}</h1>

                <div className="divider text-yellow-300 ">Process</div>
                <h1>{admission_process}</h1>

                <div className="divider text-yellow-300 ">Research</div>


                <h1 className="text-2xl">{number_of_research}</h1>
                <div className="divider text-yellow-300 "> Research Work</div>
                <h1>{research_work}</h1>

                <div className="divider text-yellow-300 "> Research History</div>
                <h1>{research_history}</h1>
                <div className="divider text-yellow-300 "> Main Events</div>
                <h1>{main_events}</h1>
                <div className="divider text-yellow-300 "> Event Details</div>
                <h1>{events_details}</h1>
                <div className="divider text-yellow-300 "> Main Sports</div>
                <h1>{main_sports}</h1>
                <div className="divider text-yellow-300 ">Categories Section </div>
                <h1>{sports_categories_section}</h1>

            </div>
        </div>
    );
};

export default Details;