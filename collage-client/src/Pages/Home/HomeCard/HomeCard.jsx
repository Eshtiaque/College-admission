import { useEffect, useState } from "react";
import CollageCard from "../Collages/CollageCard";

const HomeCard = () => {
    const [collage, setCollage] = useState([]);
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        setLoading(true)
        fetch('https://collage-admission.vercel.app/allCollage')
            .then(res => res.json())
            .then(data => {
                setCollage(data)
                setLoading(false)
            })

    }, [])

    const handleSearch = () => {
        fetch(`https://collage-admission.vercel.app/searchText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCollage(data);
            });
    };


    return (

        <div>

            <h1 className="rounded-lg  bg-black  p-2 text-2xl font-bold text-yellow-300 text-center">Search  Collages </h1>
            <div className="search-box  text-center">
                <input

                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-1 rounded-lg bg-white text-black"
                    placeholder="Collage Name "
                />{" "}
                <button onClick={handleSearch} className="btn m-4 bg-black text-yellow-300">Search</button>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2 m-2">
                {collage &&
                    collage?.slice(0,3).map(calls => <CollageCard
                        key={calls.id}
                        calls={calls}
                    ></CollageCard>)
                }
            </div>
            </div>

           

        </div>
    );

};

export default HomeCard;