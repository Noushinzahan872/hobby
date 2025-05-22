

import React, { useState, useEffect, useContext } from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthProvider';


const CreateGroup = () => {
  const { user } = useContext(AuthContext); 

  const [formData, setFormData] = useState({
    groupName: '',
    category: '',
    description: '',
    location: '',
    maxMembers: '',
    startDate: '',
    imageUrl: '',
    userName: '',
    userEmail: ''
  });


  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        userName: user.displayName || '', 
        userEmail: user.email || ''
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Group Created:', formData);

    fetch('http://localhost:3000/hobbes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Group added successfully!",
            icon: "success",
            draggable: true
          });
        }
      });
  };

  return (
    <>
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">🎯 Create a New Hobby Group</h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Group Name + Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Group Name</label>
              <input
                type="text"
                name="groupName"
                value={formData.groupName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Hobby Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              >
                <option value="">-- Select --</option>
                <option value="Drawing & Painting">Drawing & Painting 🎨</option>
                <option value="Photography">Photography 📸</option>
                <option value="Video Gaming">Video Gaming 🎮</option>
                <option value="Fishing">Fishing 🎣</option>
                <option value="Running">Running 🏃</option>
                <option value="Cooking">Cooking 🍳</option>
                <option value="Reading">Reading 📖</option>
                <option value="Writing">Writing ✍️</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          {/* Location + Max Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Meeting Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Max Members</label>
              <input
                type="number"
                name="maxMembers"
                value={formData.maxMembers}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          {/* Start Date + Image URL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          {/* User Info (readonly) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">User Name</label>
              <div className="flex items-center bg-gray-100 border border-gray-300 rounded-xl px-4 py-2">
                <FaUser className="mr-2 text-gray-500" />
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  readOnly
                  className="bg-transparent w-full outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">User Email</label>
              <div className="flex items-center bg-gray-100 border border-gray-300 rounded-xl px-4 py-2">
                <FaEnvelope className="mr-2 text-gray-500" />
                <input
                  type="email"
                  name="userEmail"
                  value={formData.userEmail}
                  readOnly
                  className="bg-transparent w-full outline-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-2 px-6 rounded-full transition"
            >
              ➕ Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
   
    </>
  );
};

export default CreateGroup;


















// import React, { useState } from 'react';
// import { use } from 'react';
// import { FaUser, FaEnvelope } from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../contexts/AuthProvider';

// const CreateGroup = () => {
//   const {user} =use(AuthContext)
//   const [formData, setFormData] = useState({
//     groupName: '',
//     category: '',
//     description: '',
//     location: '',
//     maxMembers: '',
//     startDate: '',
//     imageUrl: '',
//     userName: '',
//     userEmail: ''
//   });




//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Group Created:', formData);
//     // Later: POST to backend API

//     fetch('http://localhost:3000/hobbes',{
//         method:'POST',
//         headers:{
//             'content-type':'application/json'
//         },
//         body:JSON.stringify(formData)
//     })
//     .then(res=>res.json())
//     .then(data=>{
//       if(data.insertedId){
//         Swal.fire({
//   title: "Group added successfully!",
//   icon: "success",
//   draggable: true
// });
//       }
//         // console.log('AFTER ADDING DB',data)
//     })


//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-10 px-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
//         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">🎯 Create a New Hobby Group</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">

//           {/* Group Name + Category */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-1">Group Name</label>
//               <input
//                 type="text"
//                 name="groupName"
//                 value={formData.groupName}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Hobby Category</label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
//               >
//                 <option value="">-- Select --</option>
//                 <option value="Drawing & Painting">Drawing & Painting 🎨</option>
//                 <option value="Photography">Photography 📸</option>
//                 <option value="Video Gaming">Video Gaming 🎮</option>
//                 <option value="Fishing">Fishing 🎣</option>
//                 <option value="Running">Running 🏃</option>
//                 <option value="Cooking">Cooking 🍳</option>
//                 <option value="Reading">Reading 📖</option>
//                 <option value="Writing">Writing ✍️</option>
//               </select>
//             </div>
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               rows="4"
//               required
//               className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
//             ></textarea>
//           </div>

//           {/* Location + Max Members */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-1">Meeting Location</label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Max Members</label>
//               <input
//                 type="number"
//                 name="maxMembers"
//                 value={formData.maxMembers}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//           </div>

//           {/* Start Date + Image URL */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-1">Start Date</label>
//               <input
//                 type="date"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Image URL</label>
//               <input
//                 type="URL"
//                 name="imageUrl"
//                 value={formData.imageUrl}
//                 onChange={handleChange}
//                 required
//                 className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//           </div>

//           {/* User Info (readonly) */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium mb-1">User Name</label>
//               <div className="flex items-center bg-gray-100 border border-gray-300 rounded-xl px-4 py-2">
//                 <FaUser className="mr-2 text-gray-500" />
//                 <input
//                   type="text"
//                   name="userName"
//                   value={formData.userName}
//                   readOnly
//                   className="bg-transparent w-full outline-none"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">User Email</label>
//               <div className="flex items-center bg-gray-100 border border-gray-300 rounded-xl px-4 py-2">
//                 <FaEnvelope className="mr-2 text-gray-500" />
//                 <input
//                   type="email"
//                   name="userEmail"
//                   value={formData.userEmail}
//                   readOnly
//                   className="bg-transparent w-full outline-none"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center pt-4">
//             <button
//               type="submit"
//               className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-2 px-6 rounded-full transition"
//             >
//               ➕ Create Group
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateGroup;
