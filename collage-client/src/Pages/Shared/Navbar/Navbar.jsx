// import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../../../assets/books_4011477.png";
import users from "../../../../assets/user_7971387.png";

import { getAuth } from "firebase/auth";
import app from "../../../Firebase/Firebase.confiq";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
// import { useState } from "react";


const Navbar = () => {
  const { user, logOut,  } = useContext(AuthContext);


  // const { signIn } = useContext(AuthContext);

  const auth = getAuth(app);
  // const googleProvider = new GoogleAuthProvider();
  console.log(user);
  const navItems = <>
    <li><Link to="/">Home</Link></li>
    {/* <li><Link to="/allToys">All </Link></li> */}
    <li><Link to="/Collages">Colleges</Link></li>
    <li><Link to="/collageList">Admission</Link></li>
    <li><Link to="/myCollage">My College</Link></li>

  </>


  const handleLogOut = () => {
    logOut(auth)
      .then(result => { result })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="navbar bg-gray-900 text-white  h-24">
      <div className="navbar-start">
        <div className="dropdown text-white">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          
          <ul tabIndex={0} className="menu menu-compact text-white dropdown-content mt-3 p-2 shadow bg-black  rounded-box w-52">
            {navItems}
           
          </ul>
          
        </div>
        
        <div>
          <Link to="/" className=" text-xl"><img className=" h-16 lg:h-20 md:h-20 w-16 lg:w-20 md:w-20" src={logo} alt="" /></Link>
        </div>
        <h2 className="text-2xl font-black ms-2 lg:block md:hidden hidden text-yellow-300"> Feel Your <br/> Dream</h2>
        {/* <div className="flex text-white  ">
                   
                   <div className="">
                       <a href="/"><h1 className="text-8xl font-black text-yellow-300 ms-5" >D</h1></a>
                   </div>
                   <div  className="mt-6">
                       <h4 className="text-2xl">feel Your</h4>
                       <h4 className="text-2xl"><span></span>ream</h4>
                   </div>
               </div> */}


      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">

        {
          user ?
            <span className="flex">
              <Link to="/profile">
              <div className="avatar placeholder">
              <p className="text-white text-xl flex items-center mr-3">{user.displayName}</p>
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                  <img  src={user.photoURL} alt="" />
                  
                </div>
              </div>
              </Link>

              <div className="ps-4 mt-2">
                <button onClick={handleLogOut} className="btn btn-outline btn-warning ">Sign Out</button>
              </div>

            </span>

            :

            <span className="flex">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16 h-16">
                  <img  src={users} alt="" />
                </div>
              </div>

              <div className="ps-4 mt-2">
                <Link to="/login">  <button className="btn btn-outline btn-warning  text-black">Sign In</button></Link>
              </div>

            </span>
        }



      </div>
    </div>
  );
};

export default Navbar;