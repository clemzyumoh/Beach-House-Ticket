import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import img from "../Assets/images/logo-white.png";
//import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/beach ticketr site/HJSAHJFAF.png";
const backendUrl = process.env.REACT_APP_BACKEND_URL;


const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  //const [paymentKey, setPaymentKey] = useState("");
  const [initializingPayment, setInitializingPayment] = useState(false);
  const [quantity, setQuantity] = useState(1); // Default quantity
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    ticketType: "",
    //amount: 0, // To ensure this is always fetched from the backend
  });

  // Fetch product and user-related details
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/products/${id}`
        );
        const productData = response.data;

        // Set product and user details with ticket type and amount
        setProduct(productData);
        setUserDetails((prevState) => ({
          ...prevState,
          ticketType: productData.ticketType,
          amount: productData.price, // Price from backend
        }));
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };
  // Handle ticket quantity change
  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) setQuantity(value);
  };

  // Calculate total amount
  const calculateTotal = () => {
    if (!product || typeof product.price !== "number") return 0;
    return quantity * product.price;
  };

  // Handle payment initialization and form submission
  const handlePaymentInitialization = async (e) => {
    e.preventDefault();
    setInitializingPayment(true);

    try {
      const response = await axios.post(
        `${backendUrl}/api/payment/initialize`,
        {
          name: userDetails.name,
          email: userDetails.email,
          phone: userDetails.phone,
          address: userDetails.address,
          type: product.type, // Either "ticket" or "product"
          quantity, // Quantity of tickets or products
          amount: calculateTotal(), // Total amount

          //amount: userDetails.amount,
        }
      );

      //   if (response.data) {
      //     setPaymentKey(response.data.key); // Save the public key
      //   }
      // } catch (error) {
      //   console.error("Error initializing payment:", error);
      //   alert("Failed to initialize payment. Please check your details.");
      // } finally {
      //   setInitializingPayment(false);
      // }
      if (response.data && response.data.paymentUrl) {
        window.location.href = response.data.paymentUrl; // Redirect to Paystack
      } else {
        alert("Payment initialization failed. No payment URL received.");
      }
    } catch (error) {
      console.error(
        "Error initializing payment:",
        error.response || error.message
      );
      alert("Failed to initialize payment. Please try again.");
    } finally {
      setInitializingPayment(false); // Re-enable button
    }
  };

  // const paystackConfig = {
  //   email: userDetails.email,
  //   amount: userDetails.amount * 100, // Convert amount to kobo
  //   publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY, // Access the public key from .env
  //   onSuccess: (response) => {
  //     console.log("Payment successful:", response);
  //     alert("Payment successful!");
  //     // Further steps (e.g., save transaction, redirect, etc.)
  //   },
  //   onClose: () => alert("Payment process was closed."),
  // };

  // Loading state
  if (loading) return <p>Loading...</p>;

  // Product not found
  if (!product) return <p>Product not found</p>;

  return (
    <div className="flex justify-center items-center mb-36 w-full flex-col box-border">
      <div className="flex justify-between w-[70vw] items-center mb-10">
        <button
          onClick={() => navigate("/")}
          className=" bg-[#7947df] text-center  hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white px-4 py-2 rounded mt-4 "
        >
          Back to Home
        </button>
        <img
          src={logo}
          className="md:w-20 md:h-28  w-14 h-16"
          alt={product.name}
        />
      </div>
      <div className="flex justify-between items-center w-[80vw]   flex-col md:flex-row ">
        <div className="flex justify-center mb-5  items-center  w-full md:w-[40vw]">
          {/* User Details Form */}
          <form
            onSubmit={handlePaymentInitialization}
            className=" flex justify-center items-center flex-col   w-full  max-w-md mt-8"
          >
            <div className="flex flex-col space-y-4 w-full">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={userDetails.name}
                onChange={handleInputChange}
                className="p-2 border rounded   my-2 text-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={userDetails.email}
                onChange={handleInputChange}
                className="p-2 border rounded  my-2 text-black"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={userDetails.phone}
                onChange={handleInputChange}
                className="p-2 border rounded  text-black my-2"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={userDetails.address}
                onChange={handleInputChange}
                className="p-2 border rounded  text-black my-2"
                required
              />
              <label className="text-black">
                Number of {product.type}s:
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  className="p-2 border rounded  text-black my-2"
                  required
                />
              </label>
              <p className="text-black">Total Amount: ₦{calculateTotal()}</p>
              <button
                type="submit"
                className="py-2 my-2 px-4  bg-[#7947df] text-center  hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white rounded"
                disabled={initializingPayment}
              >
                {initializingPayment ? "Processing..." : " Buy Now!"}
              </button>
            </div>
          </form>

          {/* Paystack Button */}

          {/* <div className="mt-6">
            <PaystackButton
              {...paystackConfig}
              className="bg-green-500 px-4 py-2 text-white rounded"
            />
          </div> */}
        </div>
        <div className="product-details flex justify-center items-center flex-col">
          <img
            src={product.image}
            alt={product.name}
            className="w-56 h-60 mb-3"
          />
          <h1 className="text-3xl font-bold text-black">{product.name}</h1>
          <p className="text-lg mt-4 text-black">{product.description}</p>
          <p className="text-xl font-bold text-black mt-4">
            Price: ₦{product.price}
          </p>

          {/* <button
            onClick={() => (window.location.href = `/checkout/${product._id}`)}
            className="mt-4 py-2 px-6 bg-gradient-to-r from-[#ff0000] to-[#232121] text-white rounded-md"
          >
            Buy Now!
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
