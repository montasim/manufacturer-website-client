import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from './Firebase.Init';
import Loading from '../Components/Loading';
import useAdmin from './useAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loading />;
    };

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    };

    return children;
};

export default RequireAdmin;