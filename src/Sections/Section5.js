import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../Assets/images/platinum.png";
import img1 from "../Assets/images/regular.png";
import img2 from "../Assets/images/diamond.png";
import img3 from "../Assets/images/vip.png";
import img4 from "../Assets/images/gold.png";
//import { IoIosStar } from "react-icons/io";
//import { IoIosStarHalf } from "react-icons/io";
const backendUrl = process.env.REACT_APP_BACKEND_URL;



const Section5 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/products`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  // Filter products by type
  const goldTicket = products.find(
    (product) => product.type === "ticket" && product.ticketCategory === "Gold"
  );
  const vipTicket = products.find(
    (product) => product.type === "ticket" && product.ticketCategory === "VIP"
  );
  const regularTicket = products.find(
    (product) =>
      product.type === "ticket" && product.ticketCategory === "Regular"
  );
  const platinumTicket = products.find(
    (product) =>
      product.type === "ticket" && product.ticketCategory === "Platinum"
  );
  const diamondTicket = products.find(
    (product) =>
      product.type === "ticket" && product.ticketCategory === "Diamond"
  );
  //const tShirt = products.find((product) => product.name === "Black T-shirt" && product.type === "product");
  if (loading) return <p>Loading...</p>;
  // function handleSelect(product) {
  //   if (product && product._id) {
  //     // Redirect to the detail page with the selected product's ID
  //     window.location.href = `/detail/${product._id}`;
  //   } else {
  //     console.error("Product is not defined or missing _id:", product);
  //   }
  // }

  // Handle select function for redirecting to the product's detail page
  function handleSelect(product) {
    if (product && product._id) {
      window.location.href = `/detail/${product._id}`; // Redirect
    } else {
      console.error("Product is not defined or missing _id:", product);
    }
  }

  return (
    <div id="Section5" className="my-40 bg-neutral-300">
      <div className="flex justify-center items-center flex-col py-10   shadow-[#7947df]">
        <div className="  flex justify-center items-center flex-col mb-10">
          <h1 className="font-extrabold text-3xl lg:text-4xl leading-[55px] my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#7947df] via-[#7947df] to-[#381d6d]/50 bg-clip-text text-transparent">
            Tickets
          </h1>
          <p className="text-neutral-600 text-center">
            Book your spot and make your moments extraordinary.
          </p>
        </div>
        <div className=" flex justify-center items-center flex-col">
          <div className="flex justify-around items-center flex-col lg:flex-row ">
            <div className=" justify-center hidden items-center my-3 mx-10 bg-slate-200 shadow-xl rounded-2xl w-56 flex-col">
              <img src={img} className="w-full" alt="card img" />
              {/* <h2 className="text-xl font-bold text-black my-3">
                 Regular #5000
               </h2> */}
              {vipTicket ? (
                <div className="card">
                  <h3 className="text-xl font-bold text-black my-3">
                    {vipTicket.name}
                  </h3>
                  <p className="text-xl font-bold text-black my-3">
                    Price: ${vipTicket.price}
                  </p>
                </div>
              ) : (
                <p className="text-black">VIP Ticket not available</p>
              )}
              <button
                onClick={() => handleSelect(vipTicket)} // Replace with your action
                className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center my-3 hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="w-72 my-5">
              <img
                src={img3}
                className="w-full shadow-custom-sides-bottom rounded-md p-4 shadow-neutral-400 hover:scale-105 transition"
                alt="card img"
              />
              <button
                onClick={() => handleSelect(vipTicket)} // Replace with your action
                className="px-4 my-4 w-full py-2 bg-[#7947df] text-center  hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="w-72 my-5 mx-10">
              <img
                src={img}
                className="w-full shadow-custom-sides-bottom rounded-md p-4 shadow-neutral-400 hover:scale-105 transition"
                alt="card img"
              />
              <button
                onClick={() => handleSelect(platinumTicket)} // Replace with your action
                className="px-4 my-4 py-2 bg-[#7947df] text-center w-full  hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="w-72 my-5 ">
              <img
                src={img2}
                className="w-full shadow-custom-sides-bottom rounded-md p-4 shadow-neutral-400 hover:scale-105 transition"
                alt="card img"
              />
              <button
                onClick={() => handleSelect(diamondTicket)} // Replace with your action
                className="px-4 w-full my-4 py-2 bg-[#7947df] text-center  hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="hidden justify-center items-center my-3 mx-10 bg-slate-200 shadow-xl rounded-2xl w-56 flex-col">
              <img src={img} className="w-full" alt="card img" />
              {platinumTicket ? (
                <div className="card">
                  <h3 className="text-xl font-bold text-black my-3">
                    {platinumTicket.name}
                  </h3>
                  <p className="text-xl font-bold text-black my-3">
                    Price: ${platinumTicket.price}
                  </p>
                </div>
              ) : (
                <p className="text-black">PLatinum Ticket not available</p>
              )}
              <button
                onClick={() => handleSelect(platinumTicket)} // Replace with your action
                className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="hidden justify-center items-center my-3 mx-10 bg-slate-200 shadow-xl rounded-2xl w-56 flex-col">
              <img src={img} className="w-full" alt="card img" />
              {diamondTicket ? (
                <div className="card">
                  <h3 className="text-xl font-bold text-black my-3">
                    {diamondTicket.name}
                  </h3>
                  <p className="text-xl font-bold text-black my-3">
                    Price: ${diamondTicket.price}
                  </p>
                </div>
              ) : (
                <p className="text-black">Diamond Ticket not available</p>
              )}
              <button
                onClick={() => handleSelect(diamondTicket)} // Replace with your action
                className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
          </div>
          <div className="flex justify-around items-center mt-5 md:mt-12 flex-col lg:flex-row ">
            <div className="hidden relative justify-center items-center mx-10 bg-slate-200 shadow-md shadow-[#7947df] rounded-2xl my-3 w-72 flex-col">
              {" "}
              {/* Discount Badge */}
              {goldTicket.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full shadow-md">
                  {goldTicket.discount}% OFF
                </div>
              )}
              <img src={img} className="w-full" alt="card img" />
              {goldTicket ? (
                <div className="card flec justify-start items-start">
                  <h3 className="text-lg  text-neutral-700 font-semibold my-3">
                    {goldTicket.name}
                  </h3>
                  <p className="text-lg text-neutral-700">
                    {goldTicket.description}
                  </p>
                  <p>{goldTicket.time}</p>
                  <p className="text-lg text-neutral-700">
                    {" "}
                    {new Date(goldTicket.eventDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                  <p className="text-lg text-neutral-700">{goldTicket.time}</p>
                  <p className="text-lg text-neutral-700">
                    {goldTicket.location}
                  </p>

                  <p className="text-lg font-bold text-neutral-600 my-3">
                    Price: ${goldTicket.price}
                  </p>
                  <p className="text-gray-600">
                    Price:{" "}
                    <span className="line-through">
                      ${goldTicket.originalPrice}
                    </span>{" "}
                    ${goldTicket.price}
                  </p>
                </div>
              ) : (
                <p className="text-black">Gold Ticket not available</p>
              )}
              <button
                onClick={() => handleSelect(goldTicket)} // Replace with your action
                className="px-4 my-4 py-2 bg-[#7947df] text-center  hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="hidden justify-center items-center mx-10 bg-slate-200 shadow-xl my-3 rounded-2xl w-56 flex-col">
              <img src={img} className="w-full" alt="card img" />
              {regularTicket ? (
                <div className="card">
                  <h3 className="text-xl font-bold text-black my-3">
                    {regularTicket.name}
                  </h3>
                  <p className="text-xl font-bold text-black my-3">
                    Price: ${regularTicket.price}
                  </p>
                </div>
              ) : (
                <p className="text-black">Regular Ticket not available</p>
              )}
              <button
                onClick={() => handleSelect(regularTicket)} // Replace with your action
                className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="w-72 my-5 mx-10 ">
              <img
                src={img4}
                className="w-full shadow-custom-sides-bottom rounded-md p-4 shadow-neutral-400 hover:scale-105 transition"
                alt="card img"
              />
              <button
                onClick={() => handleSelect(goldTicket)} // Replace with your action
                className="px-4 w-full my-4 py-2 bg-[#7947df] text-center  hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="w-72 my-5 mx-10">
              <img
                src={img1}
                className="w-full shadow-custom-sides-bottom rounded-md p-4 shadow-neutral-400 hover:scale-105 transition"
                alt="card img"
              />
              <button
                onClick={() => handleSelect(regularTicket)} // Replace with your action
                className="px-4 w-full my-4 py-2 bg-[#7947df] text-center  hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default Section5;

//  <div className="flex justify-center items-center flex-col">
//    <div className="flex justify-around items-center flex-col lg:flex-row ">
//      <div className="flex justify-center items-center my-3 mx-10 bg-slate-100 rounded-2xl w-56 flex-col">
//        <img src={img} className="w-full" alt="card img" />
//        {/* <h2 className="text-xl font-bold text-black my-3">
//                 Regular #5000
//               </h2> */}
//        {vipTicket ? (
//          <div className="card">
//            <h3 className="text-xl font-bold text-black my-3">
//              {vipTicket.name}
//            </h3>
//            <p className="text-xl font-bold text-black my-3">
//              Price: ${vipTicket.price}
//            </p>
//          </div>
//        ) : (
//          <p className="text-black">VIP Ticket not available</p>
//        )}
//        <button
//          onClick={() => handleSelect(vipTicket)} // Replace with your action
//          className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center my-3 hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
//        >
//          Buy Now!
//        </button>
//      </div>
//      <div className="flex justify-center items-center my-3 mx-10 bg-slate-100 rounded-2xl w-56 flex-col">
//        <img src={img} className="w-full" alt="card img" />
//        {platinumTicket ? (
//          <div className="card">
//            <h3 className="text-xl font-bold text-black my-3">
//              {platinumTicket.name}
//            </h3>
//            <p className="text-xl font-bold text-black my-3">
//              Price: ${platinumTicket.price}
//            </p>
//          </div>
//        ) : (
//          <p className="text-black">PLatinum Ticket not available</p>
//        )}
//        <button
//          onClick={() => alert(`Buying Gold}`)} // Replace with your action
//          className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
//        >
//          Buy Now!
//        </button>
//      </div>
//      <div className="flex justify-center items-center my-3 mx-10 bg-slate-100 rounded-2xl w-56 flex-col">
//        <img src={img} className="w-full" alt="card img" />
//        {diamondTicket ? (
//          <div className="card">
//            <h3 className="text-xl font-bold text-black my-3">
//              {diamondTicket.name}
//            </h3>
//            <p className="text-xl font-bold text-black my-3">
//              Price: ${diamondTicket.price}
//            </p>
//          </div>
//        ) : (
//          <p className="text-black">Diamond Ticket not available</p>
//        )}
//        <button
//          onClick={() => alert(`Buying Diamond}`)} // Replace with your action
//          className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
//        >
//          Buy Now!
//        </button>
//      </div>
//    </div>
//    <div className="flex justify-around items-center mt-12 flex-col lg:flex-row ">
//      <div className="flex justify-center items-center mx-10 bg-slate-100 rounded-2xl my-3 w-56 flex-col">
//        <img src={img} className="w-full" alt="card img" />
//        {goldTicket ? (
//          <div className="card">
//            <h3 className="text-xl font-bold text-black my-3">
//              {goldTicket.name}
//            </h3>
//            <p className="text-xl font-bold text-black my-3">
//              Price: ${goldTicket.price}
//            </p>
//          </div>
//        ) : (
//          <p className="text-black">Gold Ticket not available</p>
//        )}
//        <button
//          onClick={() => alert(`Buying Platinum}`)} // Replace with your action
//          className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center my-3 hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
//        >
//          Buy Now!
//        </button>
//      </div>
//      <div className="flex justify-center items-center mx-10 bg-slate-100 my-3 rounded-2xl w-56 flex-col">
//        <img src={img} className="w-full" alt="card img" />
//        {regularTicket ? (
//          <div className="card">
//            <h3 className="text-xl font-bold text-black my-3">
//              {regularTicket.name}
//            </h3>
//            <p className="text-xl font-bold text-black my-3">
//              Price: ${regularTicket.price}
//            </p>
//          </div>
//        ) : (
//          <p className="text-black">Regular Ticket not available</p>
//        )}
//        <button
//          onClick={() => handleSelect()} // Replace with your action
//          className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
//        >
//          Buy Now!
//        </button>
//      </div>
//    </div>
//  </div>;
