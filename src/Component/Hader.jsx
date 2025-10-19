// import React from 'react';
// import logo from '../assets/logo.png'
// import { format } from 'date-fns';
// const Hader = () => {
//     return (
//         <div className='flex justify-center flex-col items-center gap 3 mt-6'>
//             <img className='w-[400px]' src={logo} alt="" />
//             <p className='text-accent'>Journalism Without Fear or Favour</p>
//             <p className='font-semibold text-accent'>{format(new Date(), "EEEE ,MMMM MM,YYY")}</p>
//         </div>
//     );
// };

// export default Hader;



import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 mt-6">
            <img className="w-[400px]" src={logo} alt="Website Logo" />
            <p className="text-accent">Journalism Without Fear or Favour</p>
            <p className="font-semibold text-accent">
                {format(new Date(), 'EEEE, MMMM dd, yyyy')}
            </p>
        </div>
    );
};

export default Header;
