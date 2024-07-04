import React from "react";
import img from "../assets/img.png";
import Logo from "../assets/Logo.png";
import Photh from "../assets/Photh.png";
import Fram from "../assets/Fram.png";
import { Link } from "react-router-dom";

function ScheduledCard1() {
  return (
    <>
      <div>
        <div className=" opacity-[50%] ">
          <img className=" h-[1000px] fixed w-full " src={img}></img>
        </div>

        <Link to="/">
          <div className="fixed arrowss">
            <img
              className="lg:mt-[620px] lg:ml-[780px]  cursor-pointer"
              src={Fram}
            />
          </div>
        </Link>

        <div className="opacity-100 min-h-screen flex items-center justify-center font-['Roboto'] bg-[#DACBBB]">
          <div className="bg-[#FFFFFF99] bg-opacity-90 rounded-lg shadow-lg z-[1]  p-8 w-full max-w-md text-center">
            <div class="flex flex-col items-center ">
              <img src={Logo} alt="Logo" className="logo" />
            </div>

            <p className="text-[#632E04] font-semibold text-xl mb-4">
              Thank you, you have been scheduled
            </p>

            <div className="flex justify-center mb-4">
              <img
                src={Photh}
                alt="Ashok Reddy"
                className=" h-24 w-24 object-cover"
              />
            </div>

            <p className="text-[#632E04] text-lg mb-2">
              You have been Assigned with "Ashok Reddy"
            </p>
            <p className="text-[#632E04] text-sm">
              kindly wait for few minutes you will be attended shortly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScheduledCard1;
