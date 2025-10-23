import React, { use } from 'react';
import { AuthContex } from './auThProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContex)
    const location = useLocation();
    // console.log(location);
    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if (user && user?.email) {
        return children
    }

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>

};

export default PrivateRoute;






// import React, { useContext } from 'react';
// import { AuthContex } from './auThProvider';
// import { Navigate, useLocation } from 'react-router';

// const PrivateRoute = ({ children }) => {
//     const { user, loading } = useContext(AuthContex); // useContext instead of use()
//     const location = useLocation();

//     if (loading) {
//         return <span className="loading loading-spinner loading-xl"></span>;
//     }

//     if (user?.email) {
//         return children;
//     }

//     return <Navigate to="/auth/login" state={{ from: location }} replace />;
// };

// export default PrivateRoute;
