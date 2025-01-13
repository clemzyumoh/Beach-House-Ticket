import React from "react";

const Ticket = ({
  name,
  description,
  price,
  originalPrice,
  time,
  category,
  discount,
}) => {
  return (
    <div className="relative w-96 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 border-4 border-yellow-700 rounded-lg shadow-lg p-6 mx-auto">
      {/* Border Decorations */}
      <div className="absolute inset-0 m-1.5 border-2 border-yellow-800 rounded-lg"></div>

      {/* Title and Category */}
      <h1 className="text-4xl font-extrabold text-center text-yellow-900 tracking-wide">
        {name}
      </h1>
      <p className="text-center text-lg font-semibold text-yellow-700 mt-1 uppercase">
        {category}
      </p>

      {/* Divider Line */}
      <div className="my-4 border-b-2 border-yellow-800"></div>

      {/* Description and Time */}
      <p className="text-center text-yellow-900 text-lg font-medium">
        {description}
      </p>
      <p className="text-center text-yellow-900 text-md mt-1">Time: {time}</p>

      {/* Pricing Section */}
      <div className="mt-6 text-center">
        <p className="text-5xl font-bold text-yellow-900">${price}</p>
        <p className="text-lg text-yellow-700 line-through">${originalPrice}</p>
        <p className="text-md text-green-700 font-semibold">{discount}% Off</p>
      </div>

      {/* Buy Now Button */}
      <button className="mt-8 w-full py-3 bg-yellow-900 text-yellow-50 font-bold text-lg rounded-lg hover:bg-yellow-700 transition">
        Buy Now
      </button>

      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-[-12px] transform -translate-y-1/2 w-6 h-6 bg-yellow-300 border-2 border-yellow-700 rounded-full"></div>
      <div className="absolute top-1/2 right-[-12px] transform -translate-y-1/2 w-6 h-6 bg-yellow-300 border-2 border-yellow-700 rounded-full"></div>
    </div>
  );
};

export default Ticket;
