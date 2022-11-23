import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Appointment from "../Pages/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AdminPanel/AddDoctor";
import AllUsers from "../Pages/Dashboard/AdminPanel/AllUsers";
import ManageDoctor from "../Pages/Dashboard/AdminPanel/ManageDoctor";
import PaymentPage from "../Pages/Dashboard/PaymentPage/PaymentPage";
import MyBookings from "../Pages/Dashboard/UserPanel/MyBookings";
import Login from "../Pages/Forms/Login";
import Signup from "../Pages/Forms/SignUp";
import Home from "../Pages/Home/Home";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/home',
                element:<Home />
            },
            {
                path:'/appointment',
                element:<PrivateRoute><Appointment /></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signup',
                element:<Signup />
            },
            
        ]
    },

    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard /></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyBookings />
            },
            {
                path:'/dashboard/bookings/:id',
                element:<PaymentPage />
            },
            {
                path:'/dashboard/my-bookings',
                element:<MyBookings />
            },
            
            {
                path:'/dashboard/users',
                element:<AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path:'/dashboard/add-doctor',
                element:<AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path:'/dashboard/manage-doctors',
                element:<AdminRoute><ManageDoctor /></AdminRoute>
            },
        ]
    }
])

export default router