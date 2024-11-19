import React from 'react'
import CardSlider from "../Components/CardSlider";
import img from "../Assets/images/won.png"
import img1 from "../Assets/images/man.png"

import img4 from "../Assets/images/man1.png";


const Section4 = () => {
const cardsData = [
  {
    title: "Regular",
    description: "I had a Great time",
    image: img,
    link: "https://project1.com", // Learn More link
  },
  {
    title: "Gold",
    description: "Fun Party",
    image: img1,
    link: "https://project2.com",
  },
  {
    title: "Diamond",
    description: "Great Experience",
    image: img,
    link: "https://project3.com",
  },
  {
    title: "Platinum",
    description: "Unlimited Fun",
    image: img1,
    link: "https://project3.com",
  },
  {
    title: "VIP",
    description: "Lovely Place",
    image: img4,
    link: "https://project3.com",
  },
];

  return (
    <div
      id="Section4"
      className=" flex justify-center items-center flex-col py-10"
    >
      <div className="flex justify-center ml-36 md:ml-0 items-center flex-col w-[100vw]  lg:w-[80vw] md:w-[80vw] ">
        <h1 className="text-3xl font-bold text-center text-black mr-24 md:mr-0 my-8">Testimonials</h1>
        <div className='bg-black'>
          <CardSlider
            cards={cardsData}
            slidesPerView={3} // You can adjust this or pass a number
            coverflowConfig={{
              rotate: 0,
              stretch: 3, // Customize spacing between cards
              depth: 100, // Control depth effect
              modifier: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Section4






