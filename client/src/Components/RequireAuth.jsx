import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useEffect} from "react";
import refresh from "../hooks/userRefreshToken";

const RequireAuth = () => {
    const { auth, setAuth } = useAuth();
    const location = useLocation();
    return (
        auth?.username
            ? <Outlet/>
            : <Navigate to={"/login"} state={{ from: location}} replace />
    )
}

export default RequireAuth;