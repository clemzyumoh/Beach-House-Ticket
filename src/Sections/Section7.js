import React from "react";
import img1 from "../Assets/images/gallery1.png";
import img2 from "../Assets/images/gallery2.png";
import img3 from "../Assets/images/gallery3.png";
import img4 from "../Assets/images/gallery4.png";
import img5 from "../Assets/images/gallery5.png";
import img6 from "../Assets/images/gallery6.png";

const Section7 = () => {
  return (
    <div
      id="Section7"
      className="my-16 bg-neutral-300 py-10 flex justify-center items-center flex-col "
    >
      <div className="  flex justify-center items-center flex-col mb-10">
        <h1 className="font-extrabold text-3xl lg:text-4xl leading-[55px] my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#7947df] via-[#7947df] to-[#381d6d]/50 bg-clip-text text-transparent">
          Gallery
        </h1>
        <p className="text-neutral-600 text-center">
          Extraordinary moment you won't forget.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 md:px-5">
        <img
          src={img1}
          className="hover:scale-105  w-72 md:w-96 "
          alt="img"
        />
        <img
          src={img2}
          className="hover:scale-105  w-72 md:w-96"
          alt="img"
        />
        <img
          src={img3}
          className="hover:scale-105 w-72 md:w-96"
          alt="img"
        />
        <img
          src={img4}
          className="hover:scale-105  w-72 md:w-96"
          alt="img"
        />
        <img
          src={img5}
          className="hover:scale-105  w-72 md:w-96"
          alt="img"
        />
        <img
          src={img6}
          className="hover:scale-105  w-72 md:w-96"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Section7;
