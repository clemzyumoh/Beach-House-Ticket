import React from "react";
import CardSlider from "../Components/CardSlider";
import img from "../Assets/images/won.png";
import img1 from "../Assets/images/man.png";

import img4 from "../Assets/images/man1.png";

const Section4 = () => {
  const cardsData = [
    {
      title: "Clara",
      description: '" I had a Great time "',
      image: img,
      link: "https://project1.com", // Learn More link
    },
    {
      title: "John",
      description: '" Fun Party "',
      image: img1,
      link: "https://project2.com",
    },
    {
      title: "Anita",
      description: '" Great Experience "',
      image: img,
      link: "https://project3.com",
    },
    {
      title: "Isak",
      description: '" Unlimited Fun "',
      image: img1,
      link: "https://project3.com",
    },
    {
      title: "Victor",
      description: '" Lovely Place "',
      image: img4,
      link: "https://project3.com",
    },
  ];

  return (
    <div
      id="Section4"
      className=" flex  justify-center items-center flex-col py-10"
    >
      <div className="flex justify-center  md:ml-0 items-center flex-col w-[80vw]  lg:w-[80vw] md:w-[80vw] ">
        <div className="  flex justify-center items-center flex-col mb-10">
          <h1 className="font-extrabold text-3xl lg:text-4xl leading-[55px] my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#7947df] via-[#7947df] to-[#381d6d]/50 bg-clip-text text-transparent">
            Testimonals
          </h1>
          <p className="text-neutral-600 text-center">
            Here's what our clients have to say.
          </p>
        </div>
        <div className="bg-neutral-200 shadow-lg relative p-16">
          <CardSlider
            cards={cardsData}
            slidesPerView={3} // You can adjust this or pass a number
            coverflowConfig={{
              rotate: 0,
              stretch: 50, // Customize spacing between cards
              depth: 300, // Control depth effect
              modifier: 2,
            }}
          />
          <div className="custom-pagination  absolute flex justify-center items-center  top-[500px] left-[300px] text-white z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
