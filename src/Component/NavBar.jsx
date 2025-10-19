import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'
const NavBar = () => {
    return (
        <nav className="navbar bg-base-100  px-4">
            <div className="navbar-start">

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>About </NavLink>
                    <NavLink to='/'>Career </NavLink>

                </ul>
            </div>

            <div className="navbar-end gap-4">
                <img src={user} alt="" />
                <a className="btn btn-primary text-white">Login</a>
            </div>
        </nav>
    );
};

export default NavBar;
