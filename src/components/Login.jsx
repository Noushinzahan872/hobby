

import Swal from 'sweetalert2';
 
 import React, { use,useState } from 'react';
 import { Link, useLocation, useNavigate } from 'react-router';
 
 import { FcGoogle } from "react-icons/fc";
import Footer from '../components/Footer';
import { AuthContext } from '../contexts/AuthProvider';


const Login = () => {
  const [emailInput, setEmailInput] = useState("");


  const [error,setError]=useState("");
  const { signIn, handleGoogleLogin }=use(AuthContext);

  const location=useLocation();
  const navigate=useNavigate();
//  console.log(location);

  const handleLogin=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    // console.log({email,password});


     signIn(email,password)
     .then(result=>{
       const user=result.user;
      //  console.log(user);
      navigate(`${location.state?location.state:"/"}`);
      // alert('login successfully')
      Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'User login successfully'
          });
      
     })
     .catch((error)=>{
       const errorCode=error.code;
  //  const errorMessage=error.message;
//  alert(errorCode,errorMessage)


 setError(errorCode)

 Swal.fire({
  icon: 'error',
  title: 'Error!',
  text: 'please right password'
});
     } )
   
  };

  const googleLogingHandler = () =>{
    handleGoogleLogin()
    .then(res=>{
      navigate(location.state.from)
    })
  }

    return (
      <>
      
        <div className='flex justify-center min-h-screen items-center'>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input type="email"
          name="email"
           className="input"
            placeholder="Email"
            required

            onChange={(e) => setEmailInput(e.target.value)}
             />
          {/* password */}
          <label className="label">Password</label>
          <input type="password"
          name="password"
           className="input" 
           placeholder="Password" 
           required
           />
          <div><Link
  to="/auth/forgot-password"         
  state={{ email: emailInput }}         
  className="link link-hover"
>
  Forgot password?
</Link></div>

          {error && <p className='text-red-500'>{error}</p>}
          
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='font-semibold text-center'>Don't have An Account?<Link className='text-secondary' to='/register'>Register</Link></p>
        </form>
      </div>
      <button onClick={googleLogingHandler} className='btn'> <FcGoogle />Google login</button>
    </div>
        </div>
        <Footer></Footer>
        </>
    ); 
};

export default Login;


















// import React from 'react';
// import { Link } from 'react-router';

// const Login = () => {


// const handleLogin=(e)=>{
//     e.preventDefault();
//     const form=e.target;
//     const email=form.email.value;
//     const password=form.password.value;
//      console.log({email,password});
// }

    
//     return (
//         <div>
//            <div className='flex justify-center min-h-screen items-center'>
//            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//             <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
//       <div className="card-body">
//         <form onSubmit={handleLogin} className="fieldset">
//           {/* email */}
//           <label className="label">Email</label>
//           <input type="email"
//           name="email"
//            className="input"
//             placeholder="Email"
//             required

//             onChange={(e) => setEmailInput(e.target.value)}
//              />
//           {/* password */}
//           <label className="label">Password</label>
//           <input type="password"
//           name="password"
//            className="input" 
//            placeholder="Password" 
//            required
//            />
//           {/* <div><Link
//   to="/auth/forgot-password"         
//   state={{ email: emailInput }}         
//   className="link link-hover"
// >
//   Forgot password?
// </Link></div> */}

//           {/* {error && <p className='text-red-500'>{error}</p>} */}
          
//           <button type='submit' className="btn btn-neutral mt-4">Login</button>
//           <p className='font-semibold text-center'>Don't have An Account?<Link className='text-secondary' to='/register'>Register</Link></p>
//         </form>
//       </div>
//       {/* <button onClick={googleLogingHandler} className='btn'> <FcGoogle />Google login</button> */}
//     </div>
//         </div> 
            
//         </div>
//     );
// };

// export default Login;