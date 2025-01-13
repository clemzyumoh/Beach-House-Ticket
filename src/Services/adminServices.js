import axios from "axios";

const getDashboardData = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    // If no token, redirect to login
    window.location.href = "/login";
    return;
  }

  try {
    const response = await axios.get(
      "http://localhost:5000/api/admin/dashboard-summary",
      {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
      }
    );

    console.log(response.data); // Handle response data
  } catch (error) {
    console.error(
      "Error fetching dashboard data:",
      error.response?.data?.error || error
    );
  }
};
export default getDashboardData;
