import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthProvider';
import Swal from 'sweetalert2';
import logo from '../assets/30696bd8-249f-426e-9c1d-9b32e367bd42.jpeg'
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {

  const{user,logOut}=use(AuthContext);
const handleLogOut=()=>{
  // console.log('usertrying')
  logOut()
  .then(()=>{
    // alert('your logged out successful')
    Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'User logout successfully'
              });

  })
  .catch((error)=>{
    console.log(error)
  })

}

const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);


    return (
        <div>
            
             <div className="navbar p-0 bg-base-100 shadow-sm px-8 md:px-12 lg:px-16 xl:px-24 mb-4">
        <div className="navbar-start">
          {/* <div>{user&&user.email}</div> */}
          <div className="dropdown">
            <div tabIndex={0} className="cursor-pointer mr-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-blue-600" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-600 underline" : "")}
                to="/createGroup"
              >
               Create Group
              </NavLink>
            </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-blue-600" : "")}
                  to="/allGroup"
                >
                 AllGroup
                </NavLink>
              </li>
              
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-600 underline" : "")}
                to="/myGroup"
              >
               My Group
              </NavLink>
            </li>


            </ul>
          </div>
          {/* <Link to="/" className="font-bold text-xl">
           Hobby-Hub
          </Link> */}
          <div className='w-[60px] '>
            <img src={logo} alt="logo"></img>
          </div>
        </div>
  
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-600 underline" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-600 underline" : "")}
                to="/createGroup"
              >
                Create Group
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-600 underline" : "")}
                to="/allGroup"
              >
                AllGroup
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-600 underline" : "")}
                to="/myGroup"
              >
               My Group
              </NavLink>
            </li>
          </ul>
        </div>



     <div className="navbar-end flex gap-2">


<img className='w-12 rounded-full cursor-pointer' src={`${user ? user.photoURL:''}`} alt=""
title={`${user?.displayName || 'No name'}`}
/>


{ user?(<button onClick={handleLogOut} className=' btn btn-primary rounded'>LogOut</button>):
(<Link to='/login' className="btn  md:block lg:block  btn-primary rounded">Login</Link>)}

<button onClick={toggleTheme}>{isDark?<FaMoon></FaMoon>:<FaSun/>}</button>
        
      </div> 

        </div> 

        </div>
    );
};

export default Navbar;