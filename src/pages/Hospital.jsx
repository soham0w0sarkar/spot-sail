import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsPinFill } from "react-icons/bs";
import { VscStarFull } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hospital = () => {
  // const [tab, setTab] = useState("btech");

  return (
    <div className="container mt-[100px]">
      <div>
        <div>


          <div className="hospital-cover">
            <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8">
              <div>
                <h1 className="text-[25px] xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[28px] font-semibold leading-10">
                  Phoenix Hospital
                </h1>
              </div>
              <div className="flex flex-wrap text-[9px] xl:text-[11px] lg:text-[10px] md:text-[9.5px] sm:text-[9px] gap-4 leading-3 mt-[15px]">
                <p className="flex items-center gap-1">
                  <FaLocationDot /> Noida, Uttar Pradesh
                </p>
                <p className="flex items-center gap-1">
                  <BsPinFill /> Estd 2005
                </p>
                <p className="flex items-center gap-1">
                  <BsPinFill /> AKTU, Lucknow
                </p>
                <p className="flex items-center gap-1">
                  <BsPinFill /> Private
                </p>
                <p className="flex items-center gap-1">
                  <BsPinFill /> NAAC
                </p>
                <p className="flex items-center gap-1">
                  <BsPinFill /> AICTE
                </p>
                <p className="flex items-center gap-1">
                  <BsPinFill /> UGC
                </p>
              </div>
              <div className="flex items-center text-[12px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[14px] mt-[15px] gap-11">
                <p className="flex items-center gap-2">
                  <VscStarFull />
                  4.3 (157)
                </p>
                <p>
                  <FaHeart />
                </p>
              </div>
              <div className="mt-[15px] sm:mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[35px] flex justify-between">
                <Link to="/contact/1">
                  <button className="py-[8px] w-[150px] sm:w-[160px] md:w-[170px] px-[10px] bg-gray-700/80 shadow-2xl text-[11.5px] sm:text-[12px] md:text-[12px] lg:text-[12.5px] xl:text-[13px] rounded font-semibold">
                    Get The Contact Details
                  </button>
                </Link>
                <Link to="/confirm/1">
                  <button className="py-[8px] w-[150px] sm:w-[160px] md:w-[170px] lg:w-[180px] xl:w-[200px] px-[10px] bg-gray-700/80 shadow-2xl text-[11.5px] sm:text-[12px] md:text-[12px] lg:text-[12.5px] xl:text-[13px] rounded font-semibold">
                    Book Your Spot
                  </button>
                </Link>
              </div>
            </div>
          </div>


          <div className="mt-[30px]">
            <h1 className="mb-[20px] text-[20px] font-semibold">
              Available Option's:
            </h1>
            <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 justify-between gap-5">
              <div className="p-3 mr-5 bg-gray-700/30 shadow-2xl rounded hover:bg-gray-700/90 ">
                <h2 className="text-[16px] font-semibold">
                  Emergency Department
                </h2>
                <p>Available Beds: 9</p>
              </div>
              <div className="p-3 mr-5 bg-gray-700/30 rounded shadow-2xl hover:bg-gray-700/90 ">
                <h2 className="text-[16px] font-semibold">
                  Surgery Department
                </h2>
                <p>Available Beds: 18</p>
              </div>
              <div className="p-3 mr-5 bg-gray-700/30 rounded shadow-2xl hover:bg-gray-700/90 ">
                <h2 className="text-[16px] font-semibold">
                  Intensive Care Unit (ICU)
                </h2>
                <p>Available Beds: 5</p>
              </div>
              <div className="p-3 mr-5 bg-gray-700/30 rounded shadow-2xl hover:bg-gray-700/90 ">
                <h2 className="text-[16px] font-semibold">
                  Neurology Department
                </h2>
                <p>Available Beds: 11</p>
              </div>
              <div className="p-3 mr-5 bg-gray-700/30 rounded shadow-2xl hover:bg-gray-700/90 ">
                <h2 className="text-[16px] font-semibold">
                  Rehabilitation Department
                </h2>
                <p>Available Beds: 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
