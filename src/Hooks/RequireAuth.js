import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Components/Loading';
import auth from './Firebase.Init';

function RequireAuth({ children }) {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <Loading />;
    };

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    };

    if (error) {
        toast.error(error?.message);
    };

    return children;
}

export default RequireAuth;