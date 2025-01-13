import React from "react";
import { Navigate} from "react-router-dom";
//import { jwtDecode as decode } from "jwt-decode";


// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem("token");
//   try {
//     const decoded = decode(token);
//     const isTokenValid = decoded.exp * 1000 > Date.now(); // Check expiry
//     return isTokenValid ? children : <Navigate to="/login" />;
//   } catch {
//     return <Navigate to="/login" />;
//   }
//    return <Outlet />;
// };
// const PrivateRoute = () => {
//   const token = localStorage.getItem("token");

//   // If no token exists, redirect to the login page
//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   return <Outlet />;
// };
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log("PrivateRoute token:", token); // Add this line

  // If no token exists, redirect to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Otherwise, render the child component (AdminPage in this case)
  return children;
};

export default PrivateRoute;
