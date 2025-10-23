// import React, { use } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router';
// import { AuthContex } from '../Provider/auThProvider';
// const LoginPage = () => {
//     const { singIn } = use(AuthContex)
//     const location = useLocation()
//     const navigate = useNavigate()
//     console.log(location);
//     const handleLogin = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         singIn(email, password)
//             .then(res => {
//                 const x = res.user;
//                 setUser(x);
//                 console.log(x);
//                 navigate(`${location.state ? location.state : "/"}`)
//             })
//             .catch(error => {
//                 console.error(error.code, error.message);
//             });
//     };

//     return (
//         <div>
//             <div className="hero bg-base-200 min-h-screen">
//                 <div className="hero-content flex-col lg:flex-row-reverse w-5xl">
//                     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                         <form onSubmit={handleLogin} className="card-body">
//                             <fieldset className="fieldset">
//                                 <label className="label">Email</label>
//                                 <input type="email" className="input" placeholder="Email" name='email' />
//                                 <label className="label">Password</label>
//                                 <input type="password" className="input" placeholder="Password" name='password' />
//                                 <div><a className="link link-hover">Forgot password?</a></div>
//                                 <p className='font-bold text-center'>Don't Have a Accout ? <Link to='/auth/register' className='text-secondary'>Register Now  </Link> </p>
//                                 <button type='submit' className="btn btn-neutral mt-4">Login</button>
//                             </fieldset>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;


import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContex } from "../Provider/auThProvider";

const LoginPage = () => {
    const { singIn, setUser } = useContext(AuthContex);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        singIn(email, password)
            .then((res) => {
                const user = res.user;
                setUser(user);
                navigate(location.state?.from?.pathname || "/", { replace: true });
            })
            .catch((error) => {
                console.error(error.code, error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-5xl">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" name="email" required />
                            <label className="label">Password</label>
                            <input type="password" className="input" name="password" required />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <p className="font-bold text-center">
                                Don't Have an Account?{" "}
                                <Link to="/auth/register" className="text-secondary">
                                    Register Now
                                </Link>
                            </p>
                            <button type="submit" className="btn btn-neutral mt-4">
                                Login
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
