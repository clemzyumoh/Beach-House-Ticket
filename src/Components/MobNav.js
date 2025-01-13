import React from "react";
import { Link } from "react-scroll";


const MobNav = ({handleDropDown}) => {

  return (
    <div className=" top-0 bg-neutral-900 fixed text-neutral-200 left-0 w-screen h-screen py-10 z-30">
      <ul className=" fixed flex text-white items-start flex-col  mt-24">
        <li className="mx-6 my-5">
          <Link
            to="Section2"
            className="cursor-pointer"
            smooth={true}
            duration={500}
            activeClass="active-nav-link"
            onClick={handleDropDown}
          >
            Tickets
          </Link>
        </li>
        <li className=" mx-6 my-7">
          <Link
            to="Section3"
            className="cursor-pointer"
            smooth={true}
            duration={500}
            activeClass="active-nav-link"
            onClick={handleDropDown}
          >
            Products
          </Link>
        </li>{" "}
        <li className=" mx-6 my-7">
          <Link
            to="Section7"
            className="cursor-pointer"
            smooth={true}
            duration={500}
            activeClass="active-nav-link"
            onClick={handleDropDown}
          >
            Gallery
          </Link>
        </li>{" "}
        <li className=" mx-6 my-7">
          <Link
            to="Section4"
            className="cursor-pointer"
            smooth={true}
            duration={500}
            activeClass="active-nav-link"
            onClick={handleDropDown}
          >
            Testimonials
          </Link>
        </li>{" "}
      </ul>
    </div>
  );
};

export default MobNav;
