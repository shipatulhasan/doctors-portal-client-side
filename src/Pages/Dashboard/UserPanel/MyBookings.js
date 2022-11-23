import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../components/AuthProvider/AouthProvider";
import Loader from "../../../components/Loader";

const MyBookings = () => {
  const { user,logOut } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () => fetch(url,{
        headers:{
          authorization:`bearer ${localStorage.getItem('my-token')}`
        }
      })
    .then((res) => {
        if(res.status===403 || res.status===401 ){
           return logOut()
            .then(()=>{ })
            .catch(err=>console.error(err))
        }
        return res.json()
    })
  });
 if(isLoading){
     return <Loader />
 }
 

  return (
    <div className="overflow-x-auto">
        
        {
            bookings?.length > 0 ? <table className="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Appointment Date</th>
                <th>Treatement</th>
                <th>Slot</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {bookings.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking.appointment_date}</td>
                  <td>{booking.treatement}</td>
                  <td>{booking.slot}</td>
                 <td>
                 {
                    booking.price && !booking.paid ?<Link to={`/dashboard/bookings/${booking._id}`}>
                    <button className='btn btn-primary btn-sm'>Pay</button>
                    </Link> : <button className='btn btn-success btn-sm'>Paid</button>
                  }
                 </td>
                </tr>
              ))}
              
              
            </tbody>
          </table> 
          :
          <h2 className="text-2xl font-bold">
              You don't have any appoinment yet
          </h2>

        }
      
    </div>
  );
};

export default MyBookings;
