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
    <nav className="flex justify-center items-center flex-col z-50 text-black text-xl font-bold">
      <div
        className={`fixed top-0 left-0   flex justify-between items-center py-5 z-50 px-3 lg:px-20 w-[100vw] transition-all duration-300 ${
          isScrolled ? "bg-slate-950 bg-opacity-25 text-white" : "bg-slate-50 bg-opacity-30"
        }`}
      >
        <div className="flex items-center lg:ml-10 ml-3 ">
          <img
            className="mr-5 w-12 h-14 "
            src={isScrolled ? logo  : logo}
            alt="logo"
          />

          <a href="www.beachhouse.com" target="blank" rel="noopener noreferrer">
            {" "}
            Beach House
          </a>
        </div>
        <ul className="flex justify-around items-center  ">
          <li className=" hidden lg:flex mx-7">
            <Link
              to="Section5"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              activeClass="active-nav-link"
            >
              Tickets
            </Link>
          </li>
          <li className="hidden lg:flex mx-7">
            <Link
              to="Section6"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              activeClass="active-nav-link"
            >
              Products
            </Link>
          </li>{" "}
          <li className=" hidden lg:flex mx-7">
            <Link
              to="Section4"
              className="cursor-pointer"
              smooth={true}
              duration={500}
              activeClass="active-nav-link"
            >
              Testimonials
            </Link>
          </li>{" "}
          <li className="lg:mx-7 mx-3">
            <button className="w-full py-2 px-6 lg:py-3 text-white lg:px-10 bg-gradient-to-r from-[#ff0000] to-[#232121] text-center rounded-3xl relative font-bold hover:bg-gradient-to-l from-[#7947df] to-[#381d6d]  transition-all hover:delay-1000  hover:ease-in-out">
              <Link
                to="Section1"
                className="cursor-pointer"
                smooth={true}
                duration={500}
              >
                Buy Tickets
              </Link>
            </button>
          </li>
          <li className=" lg:hidden ">
            <button onClick={handleDropDown}>
              {dropDown ? (
                <FaPlus className="w-10 h-10 rotate-[40deg] hover:rotate-0 transition-transform" />
              ) : (
                <AiOutlineMenuFold className="w-10 h-10" />
              )}
            </button>
          </li>
        </ul>
      </div>
      {dropDown && (
        <div className="lg:hidden  ">
          {" "}
          <MobNav handleDropDown={handleDropDown} />
        </div>
      )}
    </nav>
  );
};

export default Nav;
