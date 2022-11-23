import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider/AouthProvider';
import Loader from '../components/Loader';
import useAdmin from '../Hooks/useAdmin'

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
   
    let location = useLocation();

    if(loading || isAdminLoading){
        return <Loader />
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;