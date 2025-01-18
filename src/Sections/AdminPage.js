// import React, { useEffect, useState } from "react";
// import axios from "axios";
// //import getDashboardData from "../Services/adminServices"

// const AdminPage = () => {
//   console.log("AdminPage rendered");
//   const [dashboardData, setDashboardData] = useState(null);

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get(
//           "http://localhost:5000/api/admin/dashboard-summary",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         console.log("API Response:", response.data); // Log response data
//         console.log("Transaction data:", response.data.transactions);
//         setDashboardData(response.data); // Set state with API response
//       } catch (error) {
//         console.error("Failed to fetch dashboard data:", error);
//       }
//     };
//     fetchDashboard();
//   }, []);

//   if (!dashboardData) return <p>Loading...</p>;

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove the token from localStorage
//     window.location.href = "/login"; // Redirect to the login page
//   };

//   return (
//     <div className="p-8 text-black">
//       <h1 className="text-4xl text-black font-bold">Admin Dashboard</h1>
//       <p>Total Users: {dashboardData.totalUsers}</p>
//       <p>Total Transactions: {dashboardData.totalTransactions}</p>

//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
//         {/* <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-2">Reference</th>
//               <th className="border border-gray-300 p-2">User Name</th>
//               <th className="border border-gray-300 p-2">Email</th>
//               <th className="border border-gray-300 p-2">Status</th>
//               <th className="border border-gray-300 p-2">Amount</th>
//               <th className="border border-gray-300 p-2">Tickets</th>
//               <th className="border border-gray-300 p-2">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {dashboardData?.transactions.map((transaction) => (
//               <tr key={transaction._id} className="hover:bg-gray-100">
//                 <td className="border border-gray-300 p-2">
//                   {transaction.reference}
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   {transaction.userId?.name || transaction.name}
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   {transaction.userId?.email || transaction.email}
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   {transaction.status}
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   {transaction.amount || "N/A"}
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   {transaction.tickets || "N/A"}
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   {new Date(transaction.createdAt).toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table> */}
//         <div className="overflow-x-auto">
//           <table className="w-[80vw] md:min-w-fit lg:w-full border-collapse border border-gray-300 ">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 p-2">Reference</th>
//                 <th className="border border-gray-300 p-2">User Name</th>
//                 <th className="border border-gray-300 p-2">Email</th>
//                 <th className="border border-gray-300 p-2">Status</th>
//                 <th className="border border-gray-300 p-2">Amount</th>
//                 <th className="border border-gray-300 p-2">Tickets</th>
//                 <th className="border border-gray-300 p-2">Products</th>
//                 <th className="border border-gray-300 p-2">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {dashboardData?.transactions.map((transaction) => (
//                 <tr key={transaction._id} className="hover:bg-gray-100">
//                   <td className="border border-gray-300 p-2">
//                     {transaction.reference}
//                   </td>
//                   <td className="border border-gray-300 p-2">
//                     {transaction.userId?.name || transaction.name}
//                   </td>
//                   <td className="border border-gray-300 p-2">
//                     {transaction.userId?.email || transaction.email}
//                   </td>
//                   <td className="border border-gray-300 p-2">
//                     {transaction.status}
//                   </td>
//                   <td className="border border-gray-300 p-2 hidden sm:table-cell ">
//                     {transaction.amount || "N/A"}
//                   </td>
//                   {transaction.type === "ticket" && (
//                     <td className="border border-gray-300 p-2">
//                       {transaction.type?.tickets || "N/A"}
//                     </td>
//                   )}
//                   {transaction.type === "product" && (
//                     <td className="border border-gray-300 p-2">
//                       {transaction.type?.products || "N/A"}
//                     </td>
//                   )}

//                   <td className="border border-gray-300 p-2">
//                     {new Date(transaction.createdAt).toLocaleString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/* Render more details as needed */}
//       <button
//         className="w-full  bg-gradient-to-r from-[#7947df] to-[#232121] text-white py-2 rounded"
//         onClick={handleLogout}
//       >
//         log out
//       </button>
//     </div>
//   );
// };

// export default AdminPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminPage = () => {
//   console.log("AdminPage rendered");
//   const [dashboardData, setDashboardData] = useState(null);
//   const [selectedTransactions, setSelectedTransactions] = useState([]);

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get(
//           "http://localhost:5000/api/admin/dashboard-summary",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         console.log("API Response:", response.data);
//         setDashboardData(response.data);
//       } catch (error) {
//         console.error("Failed to fetch dashboard data:", error);
//       }
//     };
//     fetchDashboard();
//   }, []);

//     const handleTransactionSelection = (transactionId) => {
//       setSelectedTransactions(
//         (prevSelected) =>
//           prevSelected.includes(transactionId)
//             ? prevSelected.filter((id) => id !== transactionId) // Deselect
//             : [...prevSelected, transactionId] // Select
//       );
//     };

//     const handleDeleteSelectedTransactions = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.delete(
//           "http://localhost:5000/api/admin/delete-selected-transactions",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//             data: { transactionIds: selectedTransactions },
//           }
//         );
//         alert(response.data.message); // Notify the user
//         setSelectedTransactions([]); // Clear selection after deletion
//         // Optionally, refetch data after deletion
//         // fetchDashboard();
//       } catch (error) {
//         console.error("Error deleting selected transactions:", error);
//         alert("Failed to delete selected transactions");
//       }
//     };

//   if (!dashboardData) return <p>Loading...</p>;

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <div className="p-8 text-black">
//       <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
//       <div className="mb-6">
//         <p>
//           Total Users:{" "}
//           <span className="font-semibold">{dashboardData.totalUsers}</span>
//         </p>
//         <p>
//           Total Transactions:{" "}
//           <span className="font-semibold">
//             {dashboardData.totalTransactions}
//           </span>
//         </p>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 p-2">Reference</th>
//                 <th className="border border-gray-300 p-2">User Name</th>
//                 <th className="border border-gray-300 p-2">Email</th>
//                 <th className="border border-gray-300 p-2">Status</th>
//                 <th className="border border-gray-300 p-2">Amount</th>
//                 <th className="border border-gray-300 p-2">Type</th>
//                 <th className="border border-gray-300 p-2">Quantity</th>
//                 <th className="border border-gray-300 p-2">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {dashboardData?.transactions.map((transaction) => (
//                 <tr key={transaction._id} className="hover:bg-gray-100">
//                   <td className="border border-gray-300 p-2">
//                     {transaction.reference}
//                   </td>
//                   <td className="border border-gray-300 p-2">
//                     {transaction.userId?.name || transaction.name}
//                   </td>
//                   <td className="border border-gray-300 p-2">
//                     {transaction.userId?.email || transaction.email}
//                   </td>
//                   <td className="border border-gray-300 p-2">
//                     {transaction.status}
//                   </td>
//                   <td className="border border-gray-300 p-2">
//                     {transaction.amount || "N/A"}
//                   </td>
//                   <td className="border border-gray-300 p-2">
//                     {transaction.type || "N/A"}
//                   </td>
//                   <td className="border border-gray-300 p-2">
//                     {transaction.quantity || 0}
//                   </td>
//                   <td className="border border-gray-300 p-2">
//                     {new Date(transaction.createdAt).toLocaleString()}

//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <button
//         className="mt-8 w-full bg-gradient-to-r from-[#7947df] my-10 to-[#232121] text-white py-2 rounded"
//         onClick={handleLogout}
//       >
//         Log Out
//       </button>
//     </div>
//   );
// };

// export default AdminPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;
const AdminPage = () => {
  console.log("AdminPage rendered");
  const [dashboardData, setDashboardData] = useState(null);
  const [selectedTransactions, setSelectedTransactions] = useState([]);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${backendUrl}/api/admin/dashboard-summary`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("API Response:", response.data);
        setDashboardData(response.data);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };
    fetchDashboard();
  }, []);

  // Function to handle selection of transactions
  const handleTransactionSelection = (transactionId) => {
    setSelectedTransactions(
      (prevSelected) =>
        prevSelected.includes(transactionId)
          ? prevSelected.filter((id) => id !== transactionId) // Deselect
          : [...prevSelected, transactionId] // Select
    );
  };

  // Function to delete selected transactions
  const handleDeleteSelectedTransactions = async () => {
    try {
      const token = localStorage.getItem("token");

      // Ensure there are selected transactions
      if (selectedTransactions.length === 0) {
        alert("No transactions selected");
        return;
      }

      // Debug: Check if selectedTransactions is correct
      console.log("Selected transactions to delete:", selectedTransactions);

      // Send a DELETE request
      const response = await axios.delete(
        "http://localhost:5000/api/transactions/delete-selected-transactions",
        {
          headers: { Authorization: `Bearer ${token}` },
          data: { transactionIds: selectedTransactions }, // Send data as part of the body
        }
      );

      // Notify the user with a success message
      alert(response.data.message);

      // Clear selection after deletion
      setSelectedTransactions([]);

      // Optionally refetch data if needed
      // fetchDashboard();
    } catch (error) {
      // Log and display the error message
      console.error("Error deleting selected transactions:", error);
      alert("Failed to delete selected transactions");
    }
  };

  if (!dashboardData) return <p>Loading...</p>;

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="p-8 text-black">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-6">
        <p>
          Total Users:{" "}
          <span className="font-semibold">{dashboardData.totalUsers}</span>
        </p>
        <p>
          Total Transactions:{" "}
          <span className="font-semibold">
            {dashboardData.totalTransactions}
          </span>
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTransactions(
                          dashboardData.transactions.map(
                            (transaction) => transaction._id
                          )
                        );
                      } else {
                        setSelectedTransactions([]);
                      }
                    }}
                    checked={
                      selectedTransactions.length ===
                      dashboardData.transactions.length
                    }
                  />
                </th>
                <th className="border border-gray-300 p-2">Reference</th>
                <th className="border border-gray-300 p-2">User Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Status</th>
                <th className="border border-gray-300 p-2">Amount</th>
                <th className="border border-gray-300 p-2">Type</th>
                <th className="border border-gray-300 p-2">Quantity</th>
                <th className="border border-gray-300 p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData?.transactions.map((transaction) => (
                <tr key={transaction._id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">
                    <input
                      type="checkbox"
                      checked={selectedTransactions.includes(transaction._id)}
                      onChange={() =>
                        handleTransactionSelection(transaction._id)
                      }
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    {transaction.reference}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {transaction.userId?.name || transaction.name}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {transaction.userId?.email || transaction.email}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {transaction.status}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {transaction.amount || "N/A"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {transaction.type || "N/A"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {transaction.quantity || 0}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {new Date(transaction.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="mt-8 w-full bg-gradient-to-r from-[#7947df] to-[#232121] text-white py-2 rounded"
          onClick={handleDeleteSelectedTransactions}
          disabled={selectedTransactions.length === 0}
        >
          Delete Selected Transactions
        </button>
      </div>

      <button
        className="mt-8 w-full bg-gradient-to-r from-[#7947df] my-10 to-[#232121] text-white py-2 rounded"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default AdminPage;
