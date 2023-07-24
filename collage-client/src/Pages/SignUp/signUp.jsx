// import React from 'react';
import { useContext, useEffect } from "react";
// import img  from "../../assets/images/login/login.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Provider/AuthProvider";
const SignUp = () => {

    const { createUser } =useContext(AuthContext);
    const handleSignUP =event=>{
        event.preventDefault();
        const form =event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL=form.photoURL.value;
        const password=form.password.value;
        // const photo=form.photo.value;
        console.log(name,password,email,photoURL);
        createUser(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user); 
            form.reset();
        })
        .catch(error=>console.log(error));
    }
    useEffect ( () => {
      document.title = "Sign Up";
  },[])
    return (
        <div className=" bg-gray-900 ">
           <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mb-5">
            <p className="text-yellow-300 text-center ">_______________________________</p>
            <p className="text-yellow-300 text-center ">_______________________________</p>
            <p className="text-yellow-300 text-center ">_______________________________</p>
            </div>
        <div className="hero-content flex-col lg:flex-row">
        
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-yellow-300 ">
            <div className="card-body ">
            <h1 className="text-3xl text-center font-bold text-black">Sign Up</h1>
             <form onSubmit={handleSignUP} >
             <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered text-white" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Photo_URL</span>
                </label>
                <input type="text" name="photoURL" placeholder="url" className="input input-bordered text-white" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input type="email" name="email" placeholder="enter email" className="input input-bordered text-white" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Confirm Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered text-white" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-black">Forgot password?</a>
                </label>
              </div>
              
              
              
              <div className="form-control mt-6">
                <button className="btn bg-black text-yellow-300" type='submit' value="Sign Up">Sign Up</button>
              </div>
              
             </form>
             <p className='my-4 text-center text-black'>Already Have an Account ? : <Link  className="text-black border-2 p-1  font-bold border-black rounded-full" to="/login">Login</Link></p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mb-5">
            <p className="text-yellow-300 text-center ">_______________________________</p>
            <p className="text-yellow-300 text-center ">_______________________________</p>
            <p className="text-yellow-300 text-center ">_______________________________</p>
            </div>
      </div>
    );
};

export default SignUp;