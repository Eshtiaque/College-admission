import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
//Price, available quantity, Detail description)

const EditCollage = () => {
  const data = useLoaderData();
  const handleUpdate =event =>{
    event.preventDefault();
    const form =event.target;
    const number = form.number.value;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    console.log(number,email,address,name);
    form.reset();
    // console.log(data.price);
    const update ={number , email,address ,name};
    fetch(`http://localhost:5001/allCollage/${data._id}`,{
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(update)
    })
    .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                  Swal.fire({
                    background:'black',
                    position: 'center',
                    icon: 'success',
                    title: 'Your toy has been updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
            })
            
  }

 
  return (
    <div>
      <h1 className="text-center m-2 bg-black text-pink-300 p-4 font-black text-4xl rounded-full">Update Toys !</h1>
    
      <form onSubmit={handleUpdate} className=" items-center grid justify-center w-full">
      <h2 className="text-black font-bold">Name :</h2>
        <input type="text" name="name" defaultValue={data?.name} placeholder="Type here" className="input input-bordered input-secondary  bg-black text-white w-full max-w-xs items-center" />
        <h2 className="text-black font-bold">Email :</h2>
        <input type="text" name="email" defaultValue={data?.email} placeholder="Type here" className="input input-bordered input-secondary  bg-black text-white w-full max-w-xs items-center" />
        <br />
        <h2 className="text-black font-bold">Number :</h2>
        <input type="text" name="number" defaultValue={data?.number}  placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs bg-black text-white" />
        <br />
        <h2 className="text-black font-bold">Address :</h2>
        <input type="text" name="address" defaultValue={data?.address}  placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs bg-black text-white" />
        <input className="btn border mb-4 mt-8 text-pink-300 bg-black rounded-full w-full max-w-xs" type="submit" />


      </form>
   
    </div>
  );
};
export default EditCollage;