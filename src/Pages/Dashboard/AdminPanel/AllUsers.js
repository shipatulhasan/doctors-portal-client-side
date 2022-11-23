import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../components/AuthProvider/AouthProvider';
import Loader from '../../../components/Loader';
import toast from 'react-hot-toast'

const AllUsers = () => {
    const { user,logOut } = useContext(AuthContext);

  const url = `http://localhost:5000/users`;

  const { data: users, isLoading,refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetch(url)
    .then(res=> res.json())
  })

  const handleAdmin = (id)=>{
    const url = `http://localhost:5000/users/admin/${id}`;

    fetch(url,{
        method:'put',
        headers:{
            authorization:`bearer ${localStorage.getItem('my-token')}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.matchedCount>0){
            toast.success('Make admin successfully')
            refetch()
        }
    })
  }


 if(isLoading){
     return <Loader />
    
 }
    return (
        <div className="overflow-x-auto">
        
        {
            users?.length > 0 ? <table className="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                      {
                          user?.role!=='admin' ? 'user' : 'Admin'

                      }
                  </td>
                  <td className='space-x-2'>
                      {
                          user?.role!=='admin' && <button onClick={()=>handleAdmin(user._id)} className='btn btn-primary btn-sm'>Make admin</button>
                       
                       
                      }
                      
                      <button className='btn btn-error btn-sm'>Delete</button>
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

export default AllUsers;