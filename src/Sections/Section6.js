import React, { useState, useEffect } from "react";
import axios from "axios";
//import img from "../Assets/beach ticketr site/cap.png";
const backendUrl = process.env.REACT_APP_BACKEND_URL;


const Section6 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/products`);
         if (Array.isArray(response.data)) {
          setProducts(response.data);
          setLoading(false);
        } else {
          console.error("Expected an array, but got:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
     
    };

    fetchProducts();
  }, []);
  // Filter products by type

 const blackTshirt = Array.isArray(products)
   ? products.find(
       (product) =>
         product.type === "product" && product.name === "Black T-Shirt"
     )
   : null;

 const BlackTshirt = Array.isArray(products)
   ? products.find(
       (product) =>
         product.type === "product" && product.name === "black T-Shirt"
     )
   : null;
 const whiteTshirt = Array.isArray(products)
   ? products.find(
       (product) =>
         product.type === "product" && product.name === "White T-Shirt"
     )
   : null;
 const whitecap = Array.isArray(products)
   ? products.find(
       (product) => product.type === "product" && product.name === "White Cap"
     )
   : null;
 const blackcap = Array.isArray(products)
   ? products.find(
       (product) => product.type === "product" && product.name === "Black Cap"
     )
   : null;

  // const blac = products.find(
  //   (product) => product.type === "product" && product.name === "Black T-Shirt"
  // );
  //  const BlackTshi = products.find(
  //    (product) => product.type === "product" && product.name === "black T-Shirt"
  //  );
  // const whiteTsh = products.find(
  //   (product) => product.type === "product" && product.name === "White T-Shirt"
  // );
  // const whiteca = products.find(
  //   (product) => product.type === "product" && product.name === "White Cap"
  // );
  // const black = products.find(
  //   (product) => product.type === "product" && product.name === "Black Cap"
  // );

  if (loading) return <p>Loading...</p>;
  // Handle select function for redirecting to the product's detail page
  function handleSelect(product) {
    if (product && product._id) {
      window.location.href = `/detail/${product._id}`; // Redirect
    } else {
      console.error("Product is not defined or missing _id:", product);
    }
  }
  return (
    <div id="Section6" className="my-16">
      <div className="flex justify-center items-center flex-col">
        <div className="  flex justify-center items-center flex-col mb-10">
          <h1 className="font-extrabold text-3xl lg:text-4xl leading-[55px] my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#7947df] via-[#7947df] to-[#381d6d]/50 bg-clip-text text-transparent">
            Products
          </h1>
          <p className="text-neutral-600 text-center">
            Buy our amazing Products for extraordinary experience.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-around items-center flex-col lg:flex-row ">
            <div className="flex justify-center items-center my-3 mx-10  rounded-2xl h-96 bg-neutral-200 w-72 shadow-custom-sides-bottom  shadow-neutral-400 hover:scale-105 transition flex-col">
              <img src={blackTshirt.image} className="w-full " alt="card img" />
              {blackTshirt ? (
                <div className="card flex justify-between w-full items-center px-3">
                  <h3 className="text-md  text-neutral-700 my-3">
                    {blackTshirt.name}
                  </h3>
                  <p className="text-md  text-neutral-700 my-3">
                    ₦{blackTshirt.price}
                  </p>
                </div>
              ) : (
                <p className="text-black">Black T-shirt not available</p>
              )}
              <p className="text-neutral-700">{blackTshirt.description}</p>
              <button
                onClick={() => handleSelect(blackTshirt)} // Replace with your action
                className="px-4 my-4 py-2 mx-3 w-64 bg-[#7947df] text-center  hover:delay-1000  hover:ease-in-out hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="flex justify-center items-center my-3 mx-10  rounded-2xl h-96 bg-neutral-200 w-72 shadow-custom-sides-bottom  shadow-neutral-400 hover:scale-105 transition flex-col">
              <img src={whiteTshirt.image} className="w-full " alt="card img" />
              {whiteTshirt ? (
                <div className="card flex justify-between w-full items-center px-3">
                  <h3 className="text-md  text-neutral-700 my-3">
                    {whiteTshirt.name}
                  </h3>
                  <p className="text-md  text-neutral-700 my-3">
                    ₦{whiteTshirt.price}
                  </p>
                </div>
              ) : (
                <p className="text-black">White T-shirt not available</p>
              )}
              <p className="text-neutral-700">{whiteTshirt.description}</p>
              <button
                onClick={() => handleSelect(whiteTshirt)} // Replace with your action
                className="px-4 my-4 py-2 mx-3 w-64 bg-[#7947df] text-center  hover:delay-1000  hover:ease-in-out hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="flex justify-center items-center my-3 mx-10  rounded-2xl h-96 bg-neutral-200 w-72 shadow-custom-sides-bottom  shadow-neutral-400 hover:scale-105 transition flex-col">
              <img src={whitecap.image} className="w-full " alt="card img" />
              {whitecap ? (
                <div className="card flex justify-between w-full items-center px-3">
                  <h3 className="text-md  text-neutral-700 my-3">
                    {whitecap.name}
                  </h3>
                  <p className="text-md  text-neutral-700 my-3">
                    ₦{whitecap.price}
                  </p>
                </div>
              ) : (
                <p className="text-black">White cap not available</p>
              )}
              <p className="text-neutral-700">{whitecap.description}</p>
              <button
                onClick={() => handleSelect(whitecap)} // Replace with your action
                className="px-4 my-4 py-2 mx-3 w-64 bg-[#7947df] text-center  hover:delay-1000  hover:ease-in-out hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
          </div>
          <div className="flex justify-around items-center mt-12 flex-col lg:flex-row ">
            <div className="flex justify-center items-center my-3 mx-10  rounded-2xl h-96 bg-neutral-200 w-72 shadow-custom-sides-bottom  shadow-neutral-400 hover:scale-105 transition flex-col">
              <img src={blackcap.image} className="w-full " alt="card img" />
              {blackcap ? (
                <div className="card flex justify-between w-full items-center px-3">
                  <h3 className="text-md  text-neutral-700 my-3">
                    {blackcap.name}
                  </h3>
                  <p className="text-md  text-neutral-700 my-3">
                    ₦{blackcap.price}
                  </p>
                </div>
              ) : (
                <p className="text-black">Black cap not available</p>
              )}
              <p className="text-neutral-700">{blackcap.description}</p>
              <button
                onClick={() => handleSelect(blackcap)} // Replace with your action
                className="px-4 my-4 py-2 mx-3 w-64 bg-[#7947df] text-center  hover:delay-1000  hover:ease-in-out hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="flex justify-center items-center my-3 mx-10  rounded-2xl h-96 bg-neutral-200 w-72 shadow-custom-sides-bottom  shadow-neutral-400 hover:scale-105 transition flex-col">
              <img src={BlackTshirt.image} className="w-full " alt="card img" />
              {BlackTshirt ? (
                <div className="card flex justify-between w-full items-center px-3">
                  <h3 className="text-md  text-neutral-700 my-3">
                    {BlackTshirt.name}
                  </h3>
                  <p className="text-md  text-neutral-700 my-3">
                    ₦{BlackTshirt.price}
                  </p>
                </div>
              ) : (
                <p className="text-black">Black Shirt not available</p>
              )}
              <p className="text-neutral-700">{BlackTshirt.description}</p>
              <button
                onClick={() => handleSelect(BlackTshirt)} // Replace with your action
                className="px-4 my-4 py-2 mx-3 w-64 bg-[#7947df] text-center  hover:delay-1000  hover:ease-in-out hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
