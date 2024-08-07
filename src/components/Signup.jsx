import React from 'react';

export default function Signup() {
  return (
    <div className="font-size:10rem">
      <h1>Welcome to the Signup page</h1>
    </div>
  );
}

// import ielogo from "../assets/logo.png";
// import ielogoo from "../assets/ielogoo.jpg";
// import axios from "axios";

// import React, { useState } from "react";
// import { Form } from "react-router-dom";

// const Login = () => {
//     const [Data ,setData] = useState ( {
//         email: "",
//         password: ""
//     })
// const [errors, setErrors] = useState({})
// const [vaild, setValid] = useState(true)

// const handleSubmit = (e) => {
//     e.preventDefault();
//     let isvalid = true;
//     let validationErrors = {}
//     if (Data.email === "" || Data.email === null) {
//         isvalid =false ;
//         validationErrors.fname = "email required"
//     }
//     if (Data.password === "" || Data.password === null) {
//         isvalid =false ;
//         validationErrors.fname = "password required"
//     }else if (Data.password.length < 6 ){
//         isvalid = false;
//         validationErrors.password = "minimum length"
//     }
//     setErrors(validationErrors)
//     setValid(isvalid)

//     if (Object.keys(validationErrors).length ===0){
//         axios.post('http://localhost:8000/users' ,Data)
//         .then(result => {
//             alert("success")
//         })
//         .catch(err => console.log(err))
//     }

//     console.log(Data);

// }
//   return (

//     <section
//     className="bg-gradient-to-r h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 bg-cover bg-center"
//     style={{ backgroundImage: `url(${ielogoo})` }}
//   >
//       <div className="md:w-1/3 max-w-sm ">
//         <img
//           src={ielogo}
//           alt="Sample image"

//         />
//       </div>
//       <div className="md:w-1/3 max-w-sm">

//         <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
//           <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
//             Log in page
//           </p>
//         </div>
//         <div className="text-danger">
//             {
//                 vaild ? <></> :
//                 <span> {errors.email} {errors.password} </span>
//             }
//         <form onSubmit={handleSubmit}>
//         <div className="w-full flex flex-col">
//             <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full bg-transparent text-black border-b border-black bg-white rounded px-4 py-2 mb-7 outline-none focus:outline-none"
//                 style={{ boxShadow: "0 4px 6px -1px rgba(70, 130, 180, 0.7)" }} // Brighter sky-blue shadow
//                 onChange={(event) => setData({...Data, email: event.target.value})}
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full bg-transparent text-black border-b border-black bg-white rounded px-4 py-2 mb-2 outline-none focus:outline-none"
//                 style={{ boxShadow: "0 4px 6px -1px rgba(70, 130, 180, 0.7)" }} // Brighter sky-blue shadow
//                 onChange={(e) => setData({...Data, password: e.target.value})}
//             />
//         </div>

//         <div className="mt-4 flex justify-between font-semibold text-sm">
//           <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
//             <input className="mr-1" type="checkbox" />
//             <span>Remember Me</span>
//           </label>
//           <a
//             className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
//             href="#"
//           >
//             Forgot Password?
//           </a>
//         </div>
//         <div className="text-center md:text-left">

//           <button
//             className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
//             type="submit"
//           >
//             Login
//           </button>

//         </div>
//         </form>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Login;
