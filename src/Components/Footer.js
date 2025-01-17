import React from "react";
import img from "../Assets/images/logo-white-3.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-neutral-900 px-10 md:px-20 lg:px-24 pt-10 mt-20 box-border">
      <div className="flex justify-between w-full items-center flex-col lg:flex-row">
        <div className="flex justify-start items-start w-full flex-col">
          <div className="flex justify-start w-full items-center mb-5">
            <img src={img} className="h-24 w-32" alt="footer logo" />
            <h2 className="lg:text-3xl w-full text-xl md:text-2xl font-bold   lg:leading-normal bg-gradient-to-r from-[#7947df] via-[#7947df] to-[#381d6d]/50 bg-clip-text text-transparent">
              Beach House
            </h2>
          </div>

          <div className="flex justify-center items-center md:ml-10 mb-8 md:mb-16">
            <p className="text-neutral-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been the industry's standard dummy text
              <br />
              ever since the 1500s.
            </p>
          </div>
          <div className="flex justify-start w-full items-start flex-col">
            <h3 className="lg:text-3xl md:ml-10 text-xl md:text-2xl font-bold leading-[55px]  lg:leading-normal  bg-gradient-to-r from-[#7947df] via-[#7947df] to-[#381d6d]/50 bg-clip-text text-transparent">
              Follow Us
            </h3>
            <div className="bg-neutral-300 w-full h-1 md:ml-10 my-5 rounded"></div>
            <div className="flex justify-center items-center md:ml-7 ">
              <FaFacebook className="m-3 text-3xl text-neutral-300" />
              <FaTwitter className="m-3 text-3xl text-neutral-300" />
              <FaInstagramSquare className="m-3 text-3xl text-neutral-300" />
              <FaLinkedinIn className="m-3 text-3xl text-neutral-300" />
            </div>
          </div>
        </div>
        <div className="flex justify-around md:ml-16  items-center w-full flex-col md:flex-row">
          <div className="flex justify-start items-start  mt-10 lg:mt-0 lg:mb-20 flex-col">
            <h3 className="lg:text-3xl text-xl md:text-2xl font-bold leading-[55px]  lg:leading-normal  bg-gradient-to-r from-[#7947df] via-[#7947df] to-[#381d6d]/50 bg-clip-text text-transparent">
              Features
            </h3>
            <div className="flex justify-start items-start my-4 flex-col">
              <div className="flex justify-center my-3 items-center">
                <IoMdCheckmarkCircleOutline className="text-neutral-300 text-2xl mr-3" />
                <h3>Book Tickets</h3>
              </div>
              <div className="flex justify-center my-3 items-center">
                <IoMdCheckmarkCircleOutline className="text-neutral-300 text-2xl mr-3" />
                <h3>Buy our products</h3>
              </div>
              <div className="flex justify-center my-3 items-center">
                <IoMdCheckmarkCircleOutline className="text-neutral-300 text-2xl mr-3" />
                <h3>View our Gallery</h3>
              </div>
              <div className="flex justify-center my-3 items-center">
                <IoMdCheckmarkCircleOutline className="text-neutral-300 text-2xl mr-3" />
                <h3>Testimonilas</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-start my-5 flex-col lg:mb-36">
            <h3 className="lg:text-3xl text-xl md:text-2xl font-bold leading-[55px]  lg:leading-normal  bg-gradient-to-r from-[#7947df] via-[#7947df] to-[#381d6d]/50 bg-clip-text text-transparent">
              Contacts
            </h3>
            <div className="flex justify-start items-start my-4 flex-col">
              <div className="flex justify-center my-3 items-center">
                <FaPhoneAlt className="text-neutral-300 text-2xl mr-3" />
                <h3>09164129038</h3>
              </div>
              <div className="flex justify-center my-3 items-center">
                <MdEmail className="text-neutral-300 text-2xl mr-3" />
                <h3>clemzyumoh@gmail.com</h3>
              </div>
              <div className="flex justify-center my-3 items-center">
                <FaLocationDot className="text-neutral-300 text-2xl mr-3" />
                <h3>Ibeno LGA,Akwa Ibom State</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mt-16 flex-col">
        <div className="bg-neutral-300 w-[85vw] md:ml-14  h-1  my-5 rounded"></div>
        <div className="flex justify-between items-center flex-col md:flex-row w-[85vw] md:ml-12">
          <div className="flex justify-center my-3 items-center">
            <FaRegCopyright /> <h3>Copyright2025</h3>
          </div>
          <div className="flex justify-center flex-col my-3 md:flex-row items-center">
            <h3>Privacy Policy </h3>
            <div className="flex justify-center flex-col  my-3 md:flex-row items-center">
              <h3>Customer Support</h3>
              <div className="flex justify-center  my-3items-center ml-7 ">
                <FaFacebook className="m-3 text-3xl text-neutral-300" />
                <FaTwitter className="m-3 text-3xl text-neutral-300" />
                <FaInstagramSquare className="m-3 text-3xl text-neutral-300" />
                <FaLinkedinIn className="m-3 text-3xl text-neutral-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
