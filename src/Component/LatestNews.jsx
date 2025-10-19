import React from 'react';
import Marquee from "react-fast-marquee";
const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='gap-3' pauseOnHover={true}><p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aliquid voluptatem, porro cupiditate earum voluptatibus ducimus! Sequi reprehenderit, deleniti quia, doloribus perferendis mollitia quam assumenda rem, voluptatum ex minus culpa.</p></Marquee>
        </div>
    );
};

export default LatestNews;