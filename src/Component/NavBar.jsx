import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContex } from '../Provider/auThProvider';
const NavBar = () => {
    const { user, Logout } = use(AuthContex);
    const handleLogout = () => {
        // console.log('Log  out rying ');
        Logout().then(() => {
            alert("LOG OUT SCCCESS");
        }).catch((error) => {
            // An error ocurred
            // ...
            // console.log('Log out problem ');
        });
    }
    return (
        <nav className="navbar bg-base-100  px-4">
            <div className="navbar-start">
                <div className=''>{user && user.email} </div>
            </div>

            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal px-1 gap-5">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>About </NavLink>
                    <NavLink to='/'>Career </NavLink>

                </ul>
            </div>

            <div className="navbar-end gap-4">
                <img src={userIcon} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary'>Log Out</button> : <Link to="/auth/login" className="btn btn-primary text-white">Login</Link>
                }

            </div>
        </nav>
    );
};

export default NavBar;
