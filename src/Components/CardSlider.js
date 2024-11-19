import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/effect-coverflow"; // Coverflow effect styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/autoplay"; // Autoplay styles
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";



const CardSlider = ({ cards }) => {
  return (
    <div className="w-full max-w-6xl mx-auto my-10 relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Show 3 slides at once
        loop={true} // Enable continuous loop
        spaceBetween={5} // Space between slides
        breakpoints={{
          640: { slidesPerView: 1 }, // On small screens, show 1 card
          768: { slidesPerView: 2}, // On medium screens, show 2 cards
          1024: { slidesPerView: 3 }, // On large screens, show 3 cards
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000, // Slide every 3 seconds
          disableOnInteraction: false, // Keep autoplay running after interaction
        }}
        pagination={{
          el: ".custom-pagination ", // Attach to custom container
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper "
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center lg:ml-40 bg-black">
            <div className="w-64 h-96 border-neutral-300 border-4 border-solid bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transform transition-transform hover:scale-95">
              <div className="h-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="text-gray-600 font-bold my-5">{card.description}</p>
              {/* <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                Learn More
              </a> */}
              {/* <button
                onClick={() => alert(`Buying ${card.title}`)} // Replace with your action
                className="px-4 my-4 py-2 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center  hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600"
              >
                Buy Now!
              </button> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination Container */}
      <div className="custom-pagination  absolute flex justify-center items-center  top-[500px] left-[500px] text-white z-50"></div>
      
    </div>
  );
};

export default CardSlider;
