import React from "react";
import img from "../assets/img.png";
import Logo from "../assets/Logo.png";
import Photh from "../assets/Rectangle 23.png";
import Fram from "../assets/Fram.png";
import { Link } from "react-router-dom";

function ScheduledCard1() {
  return (
    <>
      <div>
        <div className="opacity-[50%]">
          <img className="h-[1000px] fixed w-full" src={img} alt="Background" />
        </div>

        <div className="opacity-100 min-h-screen flex flex-col items-center justify-center font-['Roboto'] bg-[#DACBBB]">
          <div className="bg-[#FFFFFF99] bg-opacity-90 rounded-lg shadow-lg z-[1] p-8 w-full max-w-md text-center">
            <div className="flex flex-col items-center">
              <img src={Logo} alt="Logo" className="logo" />
            </div>

            <p className="text-[#632E04] font-semibold text-xl mb-3 font-Manrope">
              Thank you, you have been scheduled
            </p>

            <div className="flex justify-center">
              <img
                src={Photh}
                alt="Ashok Reddy"
                className="h-24 w-24 object-cover"
              />
            </div>

            <p className="text-[#632E04] text-md mb-2 font-Manrope">
              You have been Assigned with "Sameer Plumber"
            </p>
            <p className="text-[#632E04] text-xs font-Manrope">
              kindly wait for few minutes you will be attended shortly.
            </p>
          </div>

          <Link to="/">
            <div className="fixed  bottom-1 left-1/2 transform -translate-x-1/2">
              <img className="cursor-pointer" src={Fram} alt="Back" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ScheduledCard1;
