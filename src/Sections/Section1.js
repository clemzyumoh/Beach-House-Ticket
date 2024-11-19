import React from "react";
// import { GoDownload } from "react-icons/go";
// import { FaGithub } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa6";
import bg from "../Assets/images/bg.jpg"
import logo from "../Assets/beach ticketr site/HJSAHJFAF.png";
import { Link } from "react-scroll";




const Section1 = () => {
  return (
    <div
      id="Section1"
      className="  h-screen bg-cover bg-center bg-no-repeat  w-[100vw] flex items-center justify-center mx-0 text-black"
      style={{
        backgroundImage: `url(${bg})`, // Path to your image
      }}
    >
      <div className="flex justify-center items-center md:w-[80vw]  bg-white bg-opacity-30 lg:w-[60vw]">
        <div className=" py-8 h-full text-black  text-center flex justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-6xl lg:text-7xl font-bold">Beach House Party!</h1>
            <img
              className="h-35 w-20 md:hidden"
              src={logo}
              alt="banner logo"
            />

            <p className="text-2xl my-5 font-semibold text-shadow">
              Limited Tickets , Unlimited Adventure
            </p>
            <button className="w-full py-2 px-6 lg:py-3 text-white lg:px-10 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center rounded-3xl relative font-bold hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out">
              <Link
                to="Section2"
                className="cursor-pointer"
                smooth={true}
                duration={500}
              >
                Buy Tickets Now!
              </Link>
            </button>
          </div>
          <img
            className="h-60 w-50 hidden md:block"
            src={logo}
            alt="banner logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
