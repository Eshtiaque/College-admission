import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import HomeCard from "../HomeCard/HomeCard";
import ResearchPaper from "../Research/Research";
import Review from "../Review/Review";

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <Gallery></Gallery>
            <ResearchPaper></ResearchPaper>
            <Review></Review>
        </div>
    );
};

export default Home;