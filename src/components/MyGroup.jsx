

import React, { useContext, useEffect, useState } from "react";


import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthProvider";
import { Helmet } from "react-helmet";

const MyGroup = () => {
  const { user,_id} = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/hobbes?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setGroups(data);
        //   setLoading(false);
        });
    }
  }, [user]);

//   if (loading) return <Loading></Loading>;
  if (groups.length === 0)

    return (
      <p className="text-center w-2/6 mx-auto mt-12"> You haven’t created any groups yet. Start by creating one to organize your hobbies!</p>
    );
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action is permanent and cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {

      if (result.isConfirmed) {
        fetch(`http://localhost:3000/hobbes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
       
                       const remainingUsers = groups.filter(group => group._id !== id);
                             setGroups(remainingUsers);     

            //   setGroups((prevGroups) =>
            //     prevGroups.filter((group) => group._id !== id)
            //   );

              Swal.fire("Deleted!", "Your group has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
    <Helmet>
      <title>My Group</title>
    </Helmet>
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 overflow-x-auto">
      <h2 className="text-3xl font-bold text-center mb-8">My Groups</h2>

      <table className="table table-zebra w-full border border-base-300 rounded-lg">
        <thead className="bg-base-200 text-base">
          <tr className="text-center">
            <th>No.</th>
            <th>Group Name</th>
            <th>Category</th>
            <th>Location</th>
            <th>Date</th>
            <th>Max Members</th>
            <th>Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {groups.map((group, index) => (
            <tr key={group._id}>
              <td>{index + 1}</td>
              <td className="font-semibold text-nowrap">{group.groupName}</td>
              <td>{group.category}</td>
              <td>{group.location}</td>
              <td className="text-nowrap">{group.startDate}</td>
              <td>{group.maxMembers}</td>
              <td>
                <img
                  src={group.imageUrl}
                  alt={group.groupName}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>

              <td className="join join-vertical space-y-3 p-2">
                <Link
                  to={`/details-group/${group.id}`}
                  className=" rounded-full join-item"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={"See More Info"}
                  data-tooltip-place="right"
                  data-tooltip-class-name="z-50"
                >
                  <FaInfoCircle
                    className="text-purple-500 cursor-pointer"
                    size={18}
                  />
                </Link>
                <Link
                  to={`/updateGroup/${group._id}`}
                  className=" rounded-full join-item"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={"Edit Group"}
                  data-tooltip-place="right"
                  data-tooltip-class-name="z-50"
                >
                  <FaEdit
                    className="text-purple-500 cursor-pointer"
                    size={18}
                  />
                </Link>
                <button
                  onClick={() => handleDelete(group._id)}
                  className="rounded-full join-item"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={"Delete Group"}
                  data-tooltip-place="right"
                  data-tooltip-class-name="z-50"
                >
                  <MdDelete
                    className="text-purple-500 cursor-pointer"
                    size={18}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   
    </>
  );
};

export default MyGroup;










// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router';
// import Swal from 'sweetalert2';

// const MyGroup = () => {
//     const initialUsers=useLoaderData();
//      const [users, setUsers] = useState(initialUsers);

// const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {

//                 fetch(`http://localhost:3000/users/${id}`, {
//                     method: 'DELETE'
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//       console.log('after',data);

//                         if (data.deletedCount) {

//                             const remainingUsers = users.filter(user => user._id !== id);
//                             setUsers(remainingUsers);
                       

//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "Your user has been deleted.",
//                                 icon: "success"
//                             });
//                          }
//                     })


//             }
//         });
//     }

//     return (
//         <div>
//            <h2 className='text-3xl'>users:{users.length}</h2>
//            <div className="overflow-x-auto">
//                 <table className="table">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>
//                                 No
//                             </th>
//                             <th>Name</th>
//                             <th>Phone</th>
//                             <th>Email</th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* row 1 */}
//                         {
//                             users.map((user, index) => <tr key={user._id}>
//                                 <th>
//                                     {index + 1}
//                                 </th>
//                                 <td>
//                                     <div className="flex items-center gap-3">
//                                         <div className="avatar">
//                                             <div className="mask mask-squircle h-12 w-12">
//                                                 <img
//                                                     src={user.photo}
//                                                     alt="Avatar Tailwind CSS Component" />
//                                             </div>
//                                         </div>
//                                         <div>
//                                             <div className="font-bold">{user.name}</div>
//                                             <div className="text-sm opacity-50">{user.address}</div>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     {user.phone}
//                                 </td>
//                                 <td>{user.email}</td>
//                                 <th>
//                                     <button className="btn btn-xs">V</button>
//                                     <button className="btn btn-xs">E</button>
//                                     <button onClick={() => handleDelete(user._id)} className="btn btn-xs">X</button>
//                                 </th>
//                             </tr>)
//                         }
//                     </tbody>

//                 </table>
//             </div>


//         </div>
//     );
// };

// export default MyGroup;