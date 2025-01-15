import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const backendUrl = process.env.REACT_APP_BACKEND_URL;



const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const navigate = useNavigate();
  

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/admin/login", {
//         username,
//         password,
//       });
//       localStorage.setItem("token", response.data.token); // Store token
//       onLogin(true); // Notify parent of successful login
//     } catch (error) {
//       alert(error.response?.data?.error || "Login failed");
//     }
//   };
   const handleLogin = async (e) => {
     e.preventDefault();
     try {
       const response = await axios.post(
         `${backendUrl}/api/admin/login`,
         {
           username,
           password,
         }
       );

       // If login is successful, store the token in localStorage
       localStorage.setItem("token", response.data.token);
       

       // Redirect to the protected route (like the dashboard)
       navigate("/dashboard");
     } catch (err) {
       // Handle error (for example: invalid credentials)
       setError(err.response?.data?.error || "Login failed");
     }
   };
   
   


  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
    //   <form
    //     onSubmit={handleLogin}
    //     className="p-6 bg-white rounded shadow-md w-80"
    //   >
    //     <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
    //     <input
    //       type="text"
    //       placeholder="Username"
    //       className="w-full mb-3 p-2 border rounded"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       className="w-full mb-3 p-2 border rounded"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button
    //       type="submit"
    //       className="w-full bg-blue-500 text-white py-2 rounded"
    //     >
    //       Login
    //     </button>
    //   </form>
    // </div>
    <div className="w-full flex justify-center py-52 bg-gray-100 items-center">
      <div className="flex items-center w-[75vw] flex-col justify-center   text-black">
        <h1 className="mb-10 text-2xl font-bold">Login</h1>
        <form className="w-[75vw] md:w-[45vw]" onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              className="w-full  mb-5 p-2 border rounded"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              className="w-full mb-3 p-2 border rounded"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
         
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#7947df] to-[#232121] text-white py-2 mt-5 rounded"
          >
            Login
          </button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
