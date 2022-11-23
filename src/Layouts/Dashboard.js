import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AouthProvider";
import useAdmin from "../Hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-start mt-4">
          {/* <!-- Page content here --> */}

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard/my-bookings">My bookings</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/users">All users</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-doctor">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manage-doctors">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
