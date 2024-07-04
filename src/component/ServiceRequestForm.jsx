import React from "react";
import Logo from "../assets/Logo.png";
import img from "../assets/img.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Frame from "../assets/Frame.png";
import axios from "axios";

function ServiceRequestForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Data console pe dikhane k liye
    localStorage.setItem("serviceRequestData", JSON.stringify(data)); // Data ko localStorage me save karne k liye
    navigate("/LoactionService"); // Agle step pe navigate karne k liye
  };

  return (
    <>
      <div>
        <div className="opacity-[50%]">
          <img className="h-[1000px] fixed w-full" src={img} alt="Background" />
        </div>
        <Link to='/'>
          <div className="fixed arrowss bottom-4 left-4">
            <img className="cursor-pointer" src={Frame} alt="Back" />
          </div>
        </Link>

        <div>
          <div className="opacity-100 min-h-screen flex items-center justify-center font-['Roboto'] bg-[#DACBBB]">
            <div className="bg-[#FFFFFF99] bg-opacity-90 rounded-lg shadow-lg z-[1] p-8 w-full max-w-md">
              <div className="flex flex-col items-center">
                <img src={Logo} alt="Logo" className="logo" />
              </div>

              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="serviceName"
                    className="block text-sm font-medium text-brown-700 font-Manrope"
                  >
                    Customer’s Name*
                  </label>
                  <input
                    {...register("serviceName", { required: true })}
                    type="text"
                    id="serviceName"
                    name="serviceName"
                    placeholder="John Doe"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring focus:ring-brown-500 focus:ring-opacity-50 p-2"
                  />
                  {errors.serviceName && <span>This field is required</span>}
                </div>

                <div>
                  <label
                    htmlFor="serviceDescription"
                    className="block text-sm font-medium text-brown-700 font-Manrope"
                  >
                    Mobile No *
                  </label>
                  <input
                    {...register("serviceDescription", { required: true })}
                    type="tel"
                    id="serviceDescription"
                    name="serviceDescription"
                    placeholder="John Doe"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring focus:ring-brown-500 focus:ring-opacity-50 p-2"
                  />
                  {errors.serviceDescription && <span>This field is required</span>}
                </div>

                <div>
                  <label
                    htmlFor="customerName"
                    className="block text-sm font-medium text-brown-700 font-Manrope"
                  >
                    Customer ID
                  </label>
                  <input
                    {...register("customerName", { required: true })}
                    type="email"
                    id="customerName"
                    name="customerName"
                    placeholder="johndoe@gmail.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring focus:ring-brown-500 focus:ring-opacity-50 p-2"
                  />
                  {errors.customerName && <span>This field is required</span>}
                </div>

                <div className="p-2">
                  <button
                    type="submit"
                    className="font-Manrope w-full bg-red-950 text-white py-2 px-4 rounded-md hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  >
                    Proceed for Step 2
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceRequestForm;
