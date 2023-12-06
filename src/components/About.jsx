import React from "react";
import about from "../assets/about1.jpg";
import { FaSearch } from "react-icons/fa";
import { RiNotificationOffFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";

const About = () => {
  return (
    <div className="container">
      <div>
        <h1 className="img-text flex justify-end text-[25px] xl:text-[40px] lg:text-[38px] md:text-[35px] sm:text-[30px] font-bold uppercase mt-[50px]">
          STAY UPDATED 🔔!!!
        </h1>
        <div className="flex flex-col mt-[20px]">
          <div>
            <img src={about} alt="" className="rounded opacity-50" />
          </div>
          <div>
            <p className="text-[16px] px-[20px] py-[20px] mt-[20px] bg-gray-700/20">
              your personal seat-finder, ensures you never miss a vacant seat in
              hospitals, restaurants, or colleges, providing instant alerts for
              an effortlessly smooth experience.
            </p>
            <p className="text-[18px] mt-[30px]">
              Follow the steps below:
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-[40px] mt-4">
            <div className="rounded box cursor-pointer p-3 shadow-[inset_0px_20px_20px_10px_#00000024]">
              <div className="flex justify-between items-center">
                <div className="flex justify-between font-semibold items-center gap-4 ">
                  <p className=" h-[30px] w-[30px] flex items-center justify-center rounded-full bg-slate-600">
                    1
                  </p>
                  <p className="font-semibold text-[17px]">Find your place</p>
                </div>
                <p>
                  <FaSearch />
                </p>
              </div>
              <p className="mt-3 text-[13px]">
                Find your desired place and visit to their dashboard.
              </p>
            </div>
            <div className="rounded box cursor-pointer p-3 shadow-[inset_0px_20px_20px_10px_#00000024]">
              <div className="flex justify-between items-center">
                <div className="flex justify-between gap-3">
                  <p className="font-semibold h-[30px] w-[30px] flex items-center justify-center rounded-full bg-slate-600">
                    2
                  </p>
                  <p className="font-semibold text-[17px]">
                    Enable the alert box
                  </p>
                </div>
                <p>
                  <RiNotificationOffFill />
                </p>
              </div>
              <p className="mt-3 text-[13px]">
                On the top corner, find the enable notification button and
                enable it.
              </p>
            </div>
            <div className="box rounded cursor-pointer p-3 shadow-[inset_0px_20px_20px_10px_#00000024]">
              <div className="flex justify-between items-center">
                <div className="flex justify-between gap-3">
                  <p className="font-semibold h-[30px] w-[30px] flex items-center justify-center rounded-full bg-slate-600">
                    3
                  </p>
                  <p className="font-semibold text-[17px]">Get Notified</p>
                </div>
                <p>
                  <IoNotifications />
                </p>
              </div>
              <p className="mt-3 text-[13px]">
                You'll get notified when their is any vacancy in that particular
                place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
