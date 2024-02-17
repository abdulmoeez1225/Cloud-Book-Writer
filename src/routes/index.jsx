
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/Signup";
import { useEffect, useMemo, useState } from "react";
import Books from "../pages/Books";
import { useGlobalStore } from "../store";
import { getUserAccessTokenLocalStorage } from "../utils";
import CreateBook from "../pages/CreateBook";
import Users from "../pages/Users";

const PrivateRoute = ({ Component }) => {
    const { token } = useGlobalStore()

    const [isAuthenticated, setIsAuthenticated] = useState(token || getUserAccessTokenLocalStorage() );

    useEffect(() => {
        setIsAuthenticated(token || getUserAccessTokenLocalStorage() )
    }, [token])


    return isAuthenticated ? <Component /> : <Navigate to="/signin" />;
};

const AllRoutes = () => {
    return (<Routes>
        <Route path="/" element={<PrivateRoute Component={Books} />} />
        <Route path="/book-list" element={<PrivateRoute Component={Books} />} />
        <Route path="/book" element={<PrivateRoute Component={CreateBook} />} />
        <Route path="/book/:id" element={<PrivateRoute Component={CreateBook} />} />
        <Route path="/users" element={<PrivateRoute Component={Users} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>)
}

export default AllRoutes;


