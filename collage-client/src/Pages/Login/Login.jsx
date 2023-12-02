// import React from 'react';
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const auth = getAuth();
    const githubProvider = new GithubAuthProvider();

    const { signIn } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [user, setUser] = useState('');
    const googleProvider = new GoogleAuthProvider;
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                setSuccess('Login Successfully')
                console.log(user);
                form.reset();
                navigate(from,{replace:true});
            })
            .catch(error => console.log(error))
    }
    //private route
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/";



    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setSuccess('Google Successfully');
                console.log(user);
                setUser(loggedInUser);
                navigate(from,{replace:true});
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    useEffect ( () => {
        document.title = "Login";
    },[])
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then( result => {
            const loggedUser = result.user;
            console.log(user);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log('error', error.message);
        })
    }
    return (
        <div className=" bg-gray-900 text-black ">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mb-5">
            <p className="text-yellow-300 text-center ">_______________________________</p>
            <p className="text-yellow-300 text-center ">_______________________________</p>
            <p className="text-yellow-300 text-center ">_______________________________</p>
            </div>
{/*             
             <p className="text-yellow-300 text-center ">___</p>
             <p className="text-yellow-300 text-center ">________</p>
             <p className="text-yellow-300 text-center ">_______________</p>
             <p className="text-yellow-300 text-center ">________________________</p>
            <p className="text-yellow-300 text-center ">_______________________________</p> */}
            <div className="hero-content flex-col lg:flex-row">
           
                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-yellow-300 ">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold ">Login</h1>
                        <form onSubmit={handleLogin} >
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered text-white" />
                            </div>
                            <div className="form-control text-black">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered text-white" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-black">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  bg-black text-yellow-300" type='submit' value="Login">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleSignIn} className="btn bg-black text-yellow-300" type='submit' value="Login"><span className="mr-2 rounded-full p-1"><FcGoogle/></span> Google</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGithubSignIn} className="btn bg-black text-yellow-300" type='submit' value="Login"><span className="mr-2 rounded-full p-1"><FaGithub/></span> Github</button>
                            </div>
                        </form>

                        <p className='my-4 text-center text-black'>New Member ?  ::  <Link className="text-black border-2 p-1 border-black rounded-full font-bold" to="/signUp">Sign Up</Link></p>

                        <p className="text-success">{success}</p>
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

export default Login;