import React from "react";
import Logo from "../assets/Logo.png";
import img from "../assets/img.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Frame from "../assets/Frame.png";
import axios from "axios";
function DirectFrom() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      ChannelName: data.ChannelName,
      EmailId: data.EmailId,
      MobileNo: data.MobileNo,
    };
    try {
      const response = await axios.post("", userInfo);
      console.log("API Response:", response.data);
      navigate("/Slide2");
    } catch (error) {
      console.error(
        "API Error:",
        error.response ? error.response.data : error.message
      );
    }
    console.log(data);
    navigate("/LocationDirect");
  };

  return (
    <>
      <div>
        <div className="opacity-[50%]">
          <img className="h-[1000px] fixed w-full" src={img} alt="Background" />
        </div>
          <Link to='/'>
        <div className="fixed arrowss">
          <img className="lg:mt-[570px] lg:ml-12  cursor-pointer" src={Frame} />
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
                    htmlFor="channelName"
                    className="block text-sm font-medium text-brown-700"
                  >
                    Customer’s Name
                  </label>
                  <input
                    {...register("Customer’s Name", { required: true })}
                    type="text"
                    id="Customer’s Name"
                    name="Customer’s Name"
                    placeholder="John Doe"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring focus:ring-brown-500 focus:ring-opacity-50 p-2"
                  />
                  {errors.CustomerName && <span>This field is required</span>}
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-brown-700"
                  >
                    Email Id
                  </label>
                  <input
                    {...register("Email Id", { required: true })}
                    type="text"
                    id="Email Id"
                    name="Email Id"
                    placeholder="johndoe@gmail.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring focus:ring-brown-500 focus:ring-opacity-50 p-2"
                  />
                  {errors.EmailName && <span>This field is required</span>}
                </div>

                <div>
                  <label
                    htmlFor="customerName"
                    className="block text-sm font-medium text-brown-700"
                  >
                    Mobile No
                  </label>
                  <input
                    {...register("Mobile No", { required: true })}
                    type="text"
                    id="Mobile No"
                    name="Mobile No"
                    placeholder="John Doe"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring focus:ring-brown-500 focus:ring-opacity-50 p-2"
                  />
                  {errors.MobileNoName && <span>This field is required</span>}
                </div>

                {/* <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-brown-700">
                    Last four digits of Customer Mobile Number
                  </label>
                  <input
                    {...register("mobileNumber", { required: true, maxLength: 4 })}
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="1234"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring focus:ring-brown-500 focus:ring-opacity-50 p-2"
                  />
                  {errors.mobileNumber && <span>This field is required and must be 4 digits</span>}
                </div> */}

                <div className="p-2">
                  <button
                    type="submit"
                    className="w-full bg-red-950 text-white py-2 px-4 rounded-md hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
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

export default DirectFrom;
