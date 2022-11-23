import { useQuery } from "@tanstack/react-query";
import React, {useState} from "react";
import toast from "react-hot-toast";
import ConfirmationDialouge from "../../../components/ConfirmationDialouge";
import Loader from "../../../components/Loader";

const ManageDoctor = () => {

  const [deleteDoctor,setDeleteDoctor] = useState(null)

  const { data: doctors, isLoading,refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("my-token")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  const closeModal = ()=>{
    setDeleteDoctor(null)
  }

 const handleDelete=(doctor)=>{

  fetch(`http://localhost:5000/doctors/${doctor._id}`,{
      method:'delete',
          headers: {
           
            authorization: `Bearer ${localStorage.getItem("my-token")}`,
          },
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount>0){

            toast.success('Successfully Deleted ')
            refetch()
          }
        })
        .catch(err=>console.error(err))


 }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h2 className="text-xl py-3">
        Total {doctors?.length <= 1 ? "doctor" : "doctors"} {doctors?.length}
      </h2>
      <div className="overflow-x-auto">
        {doctors?.length > 0 ? (
          <table className="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>speciality</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {doctors?.map((doctor, i) => (
                <tr key={doctor._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar mr-4">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={doctor?.thumbnail}
                          alt=""
                          title={doctor?.name}
                        />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.speciality}</td>

                  <td>
                    <label onClick={()=>setDeleteDoctor(doctor)}
                      htmlFor="confirmation-modal"
                      className="btn px-5 btn-sm btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2 className="text-2xl font-bold">No doctor added yet</h2>
        )}
      </div>
      {
        deleteDoctor && <ConfirmationDialouge
      
        modalData={deleteDoctor}
        title={` Would you like to delete ${deleteDoctor?.name}`}
        message = {`If you click yes it can't be undone. The doctor id will delete permanently.`}
        closeModal = {closeModal}
        successAction = {handleDelete}

    />
      }

      
    </div>
  );
};

export default ManageDoctor;
