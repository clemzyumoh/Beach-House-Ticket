import React from 'react'
import img from "../Assets/images/logo-white.png";

const Section5 = () => {
  return (
    <div id="Section5" className="my-10">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold text-center text-black my-8">
          Tickets
        </h1>
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-around items-center flex-col lg:flex-row ">
            <div className="flex justify-center items-center my-3 mx-10 bg-slate-100 rounded-2xl w-56 flex-col">
              <img src={img} className="w-full" alt="card img" />
              <h2 className="text-xl font-bold text-black my-3">
                Regular #5000
              </h2>
              <button
                onClick={() => alert(`Buying Regular}`)} // Replace with your action
                className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center my-3 hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="flex justify-center items-center my-3 mx-10 bg-slate-100 rounded-2xl w-56 flex-col">
              <img src={img} className="w-full" alt="card img" />
              <h2 className="text-xl font-bold text-black my-3">
                Gold #10,000
              </h2>
              <button
                onClick={() => alert(`Buying Gold}`)} // Replace with your action
                className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="flex justify-center items-center my-3 mx-10 bg-slate-100 rounded-2xl w-56 flex-col">
              <img src={img} className="w-full" alt="card img" />
              <h2 className="text-xl font-bold text-black my-3">
                Diamond #15,000
              </h2>
              <button
                onClick={() => alert(`Buying Diamond}`)} // Replace with your action
                className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
          </div>
          <div className="flex justify-around items-center mt-12 flex-col lg:flex-row ">
            <div className="flex justify-center items-center mx-10 bg-slate-100 rounded-2xl my-3 w-56 flex-col">
              <img src={img} className="w-full" alt="card img" />
              <h2 className="text-xl font-bold text-black my-3">
                Platinum #45,000
              </h2>
              <button
                onClick={() => alert(`Buying Platinum}`)} // Replace with your action
                className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center my-3 hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            <div className="flex justify-center items-center mx-10 bg-slate-100 my-3 rounded-2xl w-56 flex-col">
              <img src={img} className="w-full" alt="card img" />
              <h2 className="text-xl font-bold text-black my-3">
                VIP #50,000
              </h2>
              <button
                onClick={() => alert(`Buying VIP}`)} // Replace with your action
                className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5
