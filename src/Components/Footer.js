import React from 'react'
import img from "../Assets/images/logo-white-3.png";

const Footer = () => {
  return (
    <div className="w-full bg-black px-24 py-0 flex-col lg:flex-row">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img src={img} className="h-24 w-32" alt="footer logo" />
          <h2 className="text-3xl font-bold">Beach House</h2>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-xl font-bold">www.beachhouse.com</h3>
          <h3 className="text-xl font-bold">Copy Right @ Beach House</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer
