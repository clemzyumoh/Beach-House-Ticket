import React from "react";
import Sp1 from "../Assets/beach ticketr site/Sp1.jpg";
import Sp2 from "../Assets/beach ticketr site/Sp2.jpg";
import Sp3 from "../Assets/beach ticketr site/Sp3.jpg";
import Sp4 from "../Assets/beach ticketr site/Sp4.jpg";
import Sp5 from "../Assets/beach ticketr site/Sp5.jpg";
import Sp6 from "../Assets/beach ticketr site/Sp6.jpg";
import Sp7 from "../Assets/beach ticketr site/Sp7.jpg";
import Sp8 from "../Assets/beach ticketr site/Sp8.jpg";

const Section2 = () => {
  return (
    <div id="Section2" className=" w-full p-5 flex justify-center items-center ">
      <div className="flex justify-center items-center flex-col lg:w-[80vw] w-[80vw] bg-black rounded-lg lg:rounded-full">
        <div className=" hidden flex justify-center items-center flex-col">
          <h1 className="font-extrabold text-3xl lg:text-4xl leading-[55px] my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#ff0000] via-[#f86a6a] to-white bg-clip-text text-transparent">
            Sponsors
          </h1>
        </div>
        <div className="flex justify-center items-center w-[80vw] md:flex-col  flex-col lg:flex-row">
          <div className="flex justify-around items-center">
            <div className="flex justify-center items-center flex-col mx-5">
              <div className="flex items-center justify-center rounded-full object-cover   bg-gray-100 h-24 w-24">
                <img
                  className="h-20 w-20 rounded-full "
                  src={Sp1}
                  alt="sponsor logo"
                />
              </div>
              <p className="font-bold text-neutral-400">Lions Vague</p>
            </div>
            <div className="flex justify-center items-center flex-col mx-5">
              <div className="flex items-center justify-center rounded-full object-cover   bg-gray-100 h-24 w-24">
                <img
                  className="h-20 w-20 rounded-full "
                  src={Sp2}
                  alt="sponsor logo"
                />
              </div>
              <p className="font-bold text-neutral-400">AB</p>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex justify-center items-center flex-col mx-5">
              <div className="flex items-center justify-center rounded-full object-cover   bg-gray-100 h-24 w-24">
                <img
                  className="h-20 w-20 rounded-full "
                  src={Sp3}
                  alt="sponsor logo"
                />
              </div>
              <p className="font-bold text-neutral-400">Soft Wears</p>
            </div>
            <div className="flex justify-center items-center flex-col mx-5">
              <div className="flex items-center justify-center rounded-full object-cover   bg-gray-100 h-24 w-24">
                <img
                  className="h-20 w-20 rounded-full "
                  src={Sp4}
                  alt="sponsor logo"
                />
              </div>
              <p className="font-bold text-neutral-400">3RD Eye</p>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex justify-center items-center flex-col mx-5">
              <div className="flex items-center justify-center rounded-full object-cover   bg-gray-100 h-24 w-24">
                <img
                  className="h-20 w-20 rounded-full "
                  src={Sp5}
                  alt="sponsor logo"
                />
              </div>
              <p className="font-bold text-neutral-400">Farms</p>
            </div>
            <div className="flex justify-center items-center flex-col mx-5">
              <div className="flex items-center justify-center rounded-full object-cover   bg-gray-100 h-24 w-24">
                <img
                  className="h-20 w-20 rounded-full "
                  src={Sp6}
                  alt="sponsor logo"
                />
              </div>
              <p className="font-bold text-neutral-400">Easy Josh</p>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex justify-center items-center flex-col mx-5">
              <div className="flex items-center justify-center rounded-full object-cover   bg-gray-100 h-24 w-24">
                <img
                  className="h-20 w-20 rounded-full "
                  src={Sp7}
                  alt="sponsor logo"
                />
              </div>
              <p className="font-bold text-neutral-400">La Cucina</p>
            </div>
            <div className="flex justify-center items-center flex-col mx-5">
              <div className="flex items-center justify-center rounded-full object-cover   bg-gray-100 h-24 w-24">
                <img
                  className="h-20 w-20 rounded-full "
                  src={Sp8}
                  alt="sponsor logo"
                />
              </div>
              <p className="font-bold text-neutral-400">Farms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
