import React from 'react';
import { Outlet } from 'react-router';
import Hader from '../Component/Hader';
import LatestNews from '../Component/LatestNews';
import NavBar from '../Component/NavBar';
import LeftSide from '../Component/LeftSide';
import CategoryNews from '../Pages/CategoryNews';
import RightSide from '../Component/RightSide';

const Layout = () => {
    return (
        <div>
            <header>
                <Hader></Hader>
                <section className='w-11/12 mx-auto my-4 '>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-4'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-4 grid grid-cols-12' >
                <aside className='col-span-3'>
                    <LeftSide></LeftSide>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3' >
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    );
};

export default Layout;