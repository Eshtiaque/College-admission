const Gallery = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-3 bg-black text-yellow-300 rounded-xl p-2">College Gallery</h2>
            <div className="grid grid-cols-1 gap-1 m-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <img className="w-full h-full" src="https://www.allaboutcareers.com/wp-content/uploads/2021/03/how-many-credits-to-graduate-college.jpg" alt="" />
                <img className="w-full h-full" src="https://blogdotpetersonsdotcom.files.wordpress.com/2017/08/graduate-dilemmas-how-to-change-your-college-mindset-and-become-a-professional.jpg" alt="" />
                <img className="w-full h-full" src="https://img.freepik.com/free-photo/graduate-female-student-with-diploma-celebration-successful-college-graduation-high-quality-photo_144627-72860.jpg?w=900&t=st=1690140920~exp=1690141520~hmac=9415b8c001a7698317c4aefb2d9a839a8bd354c567d8a05bde71858e29b0d02d" alt="" />
                <img className="w-full h-full" src="https://di-uploads-pod5.s3.amazonaws.com/beachautomotivegroup/uploads/2016/03/graduates.jpg" alt="" />
                <img className="w-full h-full" src="https://www.ppic.org/wp-content/uploads/college-graduate-hugging-mother-and-holding-diploma.jpg" alt="" />
                <img className="w-full h-full" src="https://image.cnbcfm.com/api/v1/image/107247466-1685542840859-Landscape_2.jpg?v=1685544872&w=720&h=405" alt="" />
                <img className="w-full h-full" src="https://www.pewresearch.org/wp-content/uploads/2022/04/FT_22.03.29_CollegeGradFacts__feature.jpg?w=640" alt="" />
                <img className="w-full h-full" src="https://www.orcuttfinancial.com/wp-content/uploads/2023/04/Orcutt-Should-You-Hire-A-Recent-College-Graduate.jpg" alt="" />
                <img className="w-full h-full" src="https://ideas.ted.com/wp-content/uploads/sites/3/2018/05/featured_art_grad_avice_istock.jpg" alt="" />
            </div>
        </div>
    );
};

export default Gallery;