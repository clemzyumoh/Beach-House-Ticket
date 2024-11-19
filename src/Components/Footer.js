import React from 'react'
import img from "../Assets/images/logo-white-3.png";

const Footer = () => {
  return (
    <div className="w-full bg-black px-24 py-0 ">
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <div className="flex justify-center items-center">
          <img src={img} className="h-24 w-32" alt="footer logo" />
          <h2 className="lg:text-3xl text-xl md:text-2xl font-bold">Beach House</h2>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h3 className="lg:text-xl text-xs font-bold">www.beachhouse.com</h3>
          <h3 className="md:text-xl text-xs font-bold">Copy Right @ Beach House</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer
