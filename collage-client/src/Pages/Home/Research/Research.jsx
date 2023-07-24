import { Link } from "react-router-dom";

const ResearchPaper = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-3 bg-black text-yellow-300 mt-5 rounded-xl p-2">Research Paper</h2>
            <div className="grid grid-cols-1 gap-4 m-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-white ">                
                <div className="">
                    <img className="w-full h-1/2 " src="https://www.diabetes.ie/wp-content/uploads/2022/11/ShutterstockBasic_2160763437-scaled.jpg" alt="" />
                    <p className="text-lg font-bold">IoT-Based Health Monitoring System Development and Analysis</p>
                    <Link to="https://www.hindawi.com/journals/scn/2022/9639195/" ><button className=" btn btn-warning mb-0 mt-2 font-bold">{"See The Journal"}</button></Link>
                </div>
                <div className="">
                    <img className="w-full h-1/2" src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/28214113/Types-of-Research-Design.jpg" alt="" />
                    <p className="text-lg font-bold">The Internet of Things in Geriatric Healthcare and Analysis</p>
                    <div className="relative">
                    <Link to="https://www.hindawi.com/journals/jhe/2021/6611366/" ><button className=" btn btn-warning mt-2 font-bold absolute ">{"See The Journal"}</button></Link>
                    </div>
                </div>
                <div className="">
                    <img className="w-full h-1/2" src="https://www.discoverphds.com/wp-content/uploads/elementor/thumbs/What-is-Research-Purpose-of-Research-phul4s3cbwe0xam190dnc4kz3z616ajmfkygodcdqg.png" alt="" />
                    <p className="text-lg font-bold">A Pulse Rate-Triggered Wearable Device for Critical Assistance</p>
                    <Link to="https://www.hindawi.com/journals/js/2022/9807188/" ><button className=" btn btn-warning mt-2 font-bold ">{"See The Journal"}</button></Link>
                </div>
                <div className="">
                    <img className="w-full h-1/2" src="https://www.questionpro.com/blog/wp-content/uploads/2018/04/Research-Methods_without-logo.jpg" alt="" />
                    <p className="text-lg font-bold">Home Based Monitoring for Smart Health-Care Systems: A Survey</p>
                    <Link to="https://www.hindawi.com/journals/wcmc/2022/1829876/" ><button className=" btn btn-warning mt-2 font-bold ">{"See The Journal"}</button></Link>
                </div>
                <div className="">
                    <img className="w-full h-1/2" src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/08/11195303/research-project.jpg" alt="" />
                    <p className="text-lg font-bold">Detecting Anomaly Data for IoT Sensor Networks with a Device</p>
                    <Link to="https://www.hindawi.com/journals/sp/2022/4671381/" ><button className=" btn btn-warning mt-2 font-bold ">{"See The Journal"}</button></Link>
                </div>
                <div className="">
                    <img className="w-full h-1/2" src="https://www.unisa.ac.za/static/corporate_web/Content/Training/Research/Image/top-banner.png" alt="" />
                    <p className="text-lg font-bold">A Disaster Management Framework Using IOT Interconnected Devices</p>
                    <Link to="https://www.hindawi.com/journals/scn/2022/9639195/" ><button className=" btn btn-warning mt-2 font-bold ">{"See The Journal"}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ResearchPaper;