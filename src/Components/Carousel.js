import React from "react";
import Slider from "react-slick";

const Carousel = ({ items }) => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through items
    speed: 500, // Transition speed
    slidesToShow: 1, // Items visible per slide
    slidesToScroll: 1, // Items to scroll per action
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set delay to 5 seconds (5000ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div
          key={index}
          className="p-4 flex justify-center items-center flex-col"
        >
          <div className=" w-[50vw] h-[500px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded"
            />{" "}
          </div>
          <h3 className="mt-2 text-xl font-semibold text-center">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 text-center">
            {item.description}
          </p>
          <button className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center  hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600">
            Buy Now!
          </button>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
