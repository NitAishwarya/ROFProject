import React, { useState, useEffect } from "react";
import img from "../assets/img.png";
import Logo from "../assets/Logo.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Frame from "../assets/Frame.png";
import "../home.css";
import axios from "axios";

const projectLocations = {
  project1: "123 Main St, City A",
  project2: "456 Oak Ave, City B",
  project3: "789 Pine Rd, City C",
};

function LoactionService() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState("");
  const [projectLocation, setProjectLocation] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // localStorage se data fetch karne k liye
    const data = JSON.parse(localStorage.getItem("serviceRequestData"));
    if (data) {
      setUserData(data);
      console.log(data); // Data console pe dikhane k liye
    }
  }, []);

  const handleProjectChange = (event) => {
    const projectValue = event.target.value;
    setSelectedProject(projectValue);
    setProjectLocation(projectLocations[projectValue] || "");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      ...userData,
      ProjectName: data.projectName,
      ProjectLocation: projectLocation,
    };
    console.log(userInfo); // user ki puri information console pe render krne k liye

    try {
      // Backend ko data send karne k liye
      const response = await axios.post("/api/submit", userInfo);
      console.log("Your message has been sent", response.data);
    } catch (error) {
      console.error("Something went wrong", error);
    }

    navigate("/ScheduledCard1");
  };

  return (
    <>
      <div>
        <div className="opacity-[50%]">
          <img className="h-[1000px] fixed w-full" src={img} alt="Background" />
        </div>

        <Link to='/ServiceRequestForm'>
          <div className="fixed arrowss bottom-4 left-4">
            <img className="lg:mt-[500px] lg:ml-12  cursor-pointer" src={Frame} />
          </div>
        </Link>
        <div className="opacity-100 min-h-screen flex items-center justify-center font-['Roboto'] bg-[#DACBBB]">
          <div className="bg-[#FFFFFF99] bg-opacity-90 rounded-lg shadow-lg z-[1] p-8 w-full max-w-md">
            <div className="flex flex-col items-center">
              <img src={Logo} alt="Logo" className="logo" />
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="projectName"
                  className="block text-sm font-medium text-brown-700 font-Manrope"
                >
                  Type of Service
                </label>
                <select
                  {...register("projectName", { required: true })}
                  id="projectName"
                  name="projectName"
                  value={selectedProject}
                  onChange={handleProjectChange}
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-brown-500 focus:ring focus:ring-brown-500 focus:ring-opacity-50"
                >
                  <option value="">Choose Project</option>
                  <option value="project1">Service 1</option>
                  <option value="project2">Service 2</option>
                  <option value="project3">Service 3</option>
                </select>
                {errors.projectName && <span>This field is required</span>}
              </div>

              <div>
                <label
                  htmlFor="projectLocation"
                  className="block text-sm font-medium text-brown-700 font-Manrope"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectLocation"
                  name="projectLocation"
                  value={projectLocation}
                  readOnly
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm p-2 focus:border-brown-500 focus:ring focus:ring-brown-500 focus:ring-opacity-50"
                />
              </div>

              <div className="p-5">
                <button
                  type="submit"
                  className="font-Manrope w-full bg-[#632E04] text-white py-2 px-4 rounded-md hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                >
                  Assign Executives
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoactionService;
