
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
const AddToy = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://collage-admission.vercel.app/addCollage', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You Added a Toy Successfully',
                        'success'
                      )
                } 
            })

    }

    return (
        <div className="bg-black text-black">
           
            <div className="bg-gradient-to-r from-gray-900  via-black to-gray-700 text-yellow-300 rounded p-2" >
                <h1 className="text-left font-black ps-5 text-5xl mt-5 mb-4">Add Your Information </h1>
                <p className='text-left   text-2xl font-bold p-5'>Please be careful.<br /> # Thank You #</p>
               
                <h2 className="text-center justify-end mb-5">________________________________________</h2>
            </div>
            <div className="bg-gradient-to-r from-gray-900  via-black to-gray-700">
                <form className="md:grid md:grid-cols-3 lg:grid lg:grid-cols-3  p-5 gap-3  justify-end" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                <h5 className="font-bold pt-3 text-white">Candidate - Name :</h5>
             <input className="p-2 w-full text-black  bg-pink-200 border border-black
                         rounded-3xl" defaultValue=""
                            {...register("name")} />
                    </div>
                   
                    <div>
                        <h5 className="font-bold mt-3 text-white">Candidate - Email :</h5>
                        <input className="p-2  w-full text-black   bg-pink-200 border border-black rounded-3xl" defaultValue=""
                            {...register("email", { required: true })} />
                    </div>
                    <div>
                        <h5 className="font-bold mt-3 text-white">Photo :</h5>
                        <input className="p-2  w-full text-black   bg-pink-200 border border-black rounded-3xl" defaultValue=""
                            {...register("photoURL")} />
                    </div>
                    <div>
                        <h5 className="font-bold text-white mt-3">Phone NUmber :</h5>
                        <input className="p-2  w-full text-black    bg-pink-200 border border-black rounded-3xl" defaultValue=""
                            {...register("number")} />
                    </div>
                    <div>
                        <h5 className="font-bold text-white mt-3">address :</h5>
                        <input className="p-2  w-full text-black   bg-pink-200 border border-black rounded-3xl" defaultValue=""
                            {...register("address")} />
                    </div>
                    <div>
                        <h5 className="font-bold mt-3 text-white">Date of Birth :</h5>
                        <input className="p-2  w-full text-black   bg-pink-200 border border-black rounded-3xl" defaultValue=""
                            {...register("calender")} />
                    </div>
                    <div></div>
                    <div>
                        <h5 className="font-bold text-white mt-3"> Subject :</h5>
                        <input className="p-2  w-full text-black  bg-pink-200 border border-black rounded-3xl" defaultValue="" {...register("subject")} />
                    </div>
                    <div></div>
                    <div></div>
                    
                    <div className="md:grid md:grid-cols-1 lg:grid grid-cols-1 mt-3">

                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" className='btn bg-black text-yellow-300 
                       hover:text-black  w-full mt-3 mb-3  '/>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;