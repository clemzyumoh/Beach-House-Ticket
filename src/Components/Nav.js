import React from "react";
import logo from "../Assets/beach ticketr site/HJSAHJFAF.png";
//import logo2 from "../Assets/images/logo-white-3.png";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import MobNav from "./MobNav";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change '50' to the desired scroll threshold
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // <nav className="flex justify-center items-center flex-col text-black text-xl font-bold">
    //   <div
    //     className={` top-0 left-0   flex justify-between items-center py-5 px-3 lg:px-20 w-[100vw] transition-all duration-300 ${
    //       isScrolled ? "bg-slate-950 bg-opacity-25 text-white" : "bg-slate-300 bg-opacity-30"
    //     }`}
    //   >
    //     <div className="flex items-center lg:ml-10 ml-3 ">
    //       <img
    //         className="mr-5 w-12 h-14 "
    //         src={isScrolled ? logo  : logo}
    //         alt="logo"
    //       />

    //       <a href="www.beachhouse.com" target="blank" rel="noopener noreferrer">
    //         {" "}
    //         Beach House
    //       </a>
    //     </div>
    //     <ul className="flex justify-around items-center  ">
    //       <li className=" hidden lg:flex mx-7">
    //         <Link
    //           to="Section5"
    //           className="cursor-pointer"
    //           smooth={true}
    //           duration={500}
    //           activeClass="active-nav-link"
    //         >
    //           Tickets
    //         </Link>
    //       </li>
    //       <li className="hidden lg:flex mx-7">
    //         <Link
    //           to="Section6"
    //           className="cursor-pointer"
    //           smooth={true}
    //           duration={500}
    //           activeClass="active-nav-link"
    //         >
    //           Products
    //         </Link>
    //       </li>{" "}
    //       <li className=" hidden lg:flex mx-7">
    //         <Link
    //           to="Section4"
    //           className="cursor-pointer"
    //           smooth={true}
    //           duration={500}
    //           activeClass="active-nav-link"
    //         >
    //           Testimonials
    //         </Link>
    //       </li>{" "}
    //       <li className="lg:mx-7 mx-3">
    //         <button className="w-full py-2 px-6 lg:py-3 text-white lg:px-10 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center rounded-3xl relative font-bold hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out">
    //           <Link
    //             to="Section1"
    //             className="cursor-pointer"
    //             smooth={true}
    //             duration={500}
    //           >
    //             Buy Tickets
    //           </Link>
    //         </button>
    //       </li>
    //       <li className=" lg:hidden ">
    //         <button onClick={handleDropDown}>
    //           {dropDown ? (
    //             <FaPlus className="w-10 h-10 rotate-[40deg] hover:rotate-0 transition-transform" />
    //           ) : (
    //             <AiOutlineMenuFold className="w-10 h-10" />
    //           )}
    //         </button>
    //       </li>
    //     </ul>
    //   </div>
    //   {dropDown && (
    //     <div className="lg:hidden  ">
    //       {" "}
    //       <MobNav handleDropDown={handleDropDown} />
    //     </div>
    //   )}
    // </nav>
    <nav className="flex justify-center items-center flex-col  text-black text-xl font-bold">
      <div
        className={` fixed top-0 left-0 flex justify-between items-center z-50 py-5 px-3 lg:px-20 w-[100vw] transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950 bg-opacity-25 text-white"
            : "bg-slate-200 bg-opacity-30"
        }`}
      >
        <div className="flex justify-center items-center lg:ml-10 ml-3 ">
          <img className="mr-5 w-12 h-14" src={logo} alt="logo" />
          <a
            href="www.beachhouse.com"
            target="blank"
            rel="noopener noreferrer"
            className="text-[#7947df] hidden md:block"
          >
            Beach House
          </a>
        </div>

        <ul className="flex justify-around items-center">
          {/* Tickets Link */}
          <li className="hidden lg:flex mx-7">
            <Link
              to="Section5"
              smooth={true}
              duration={500}
              className="relative cursor-pointer py-2 px-4 hover:text-[#7947df] transition-all after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#7947df] after:bottom-[-2px] after:left-1/2 after:transform after:-translate-x-1/2 hover:after:w-full"
              activeClass="active-nav-link bg-[#7947df] text-white rounded-lg"
            >
              Tickets
            </Link>
          </li>

          {/* Products Link */}
          <li className="hidden lg:flex mx-7">
            <Link
              to="Section6"
              smooth={true}
              duration={500}
              className="relative cursor-pointer py-2 px-4 hover:text-[#7947df] transition-all after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#7947df] after:bottom-[-2px] after:left-1/2 after:transform after:-translate-x-1/2 hover:after:w-full"
              activeClass="active-nav-link bg-[#7947df] text-white rounded-lg"
            >
              Products
            </Link>
          </li>
          <li className="hidden lg:flex mx-7">
            <Link
              to="Section7"
              smooth={true}
              duration={500}
              className="relative cursor-pointer py-2 px-4 hover:text-[#7947df] transition-all after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#7947df] after:bottom-[-2px] after:left-1/2 after:transform after:-translate-x-1/2 hover:after:w-full"
              activeClass="active-nav-link bg-[#7947df] text-white rounded-lg"
            >
              Gallery
            </Link>
          </li>

          {/* Testimonials Link */}
          <li className="hidden lg:flex mx-7">
            <Link
              to="Section4"
              smooth={true}
              duration={500}
              className="relative cursor-pointer py-2 px-4 hover:text-[#7947df] transition-all after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#7947df] after:bottom-[-2px] after:left-1/2 after:transform after:-translate-x-1/2 hover:after:w-full"
              activeClass="active-nav-link bg-[#7947df] text-white rounded-lg"
            >
              Testimonials
            </Link>
          </li>

          {/* Buy Tickets Button */}
          <li className="lg:mx-7 mx-3">
            <button className="w-full py-2 px-6 lg:py-3 text-white lg:px-10 bg-[#7947df] hidden md:block text-center rounded-3xl relative font-bold hover:bg-gradient-to-l from-[#7947df] to-[#381d6d] transition-all hover:delay-1000 hover:ease-in-out">
              <Link
                to="Section5"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Buy Tickets
              </Link>
            </button>
          </li>

          {/* Mobile Menu Button */}
          <li className="lg:hidden ">
            <button onClick={handleDropDown}>
              {dropDown ? (
                <FaPlus className="w-10 h-10 rotate-[40deg] hover:rotate-0 text-white transition-transform" />
              ) : (
                <AiOutlineMenuFold className="w-10 h-10" />
              )}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {dropDown && (
        <div className="lg:hidden">
          <MobNav handleDropDown={handleDropDown} />
        </div>
      )}
    </nav>
  );
};

export default Nav;
