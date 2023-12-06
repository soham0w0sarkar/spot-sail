import React from "react";
import { Link } from "react-router-dom";

const Goto = () => {
  return (
    <div className="container mt-[30px]">
      <div>
        <div>
          <div>
            <h1 className="flex justify-end text-[25px] xl:text-[40px] lg:text-[38px] md:text-[35px] sm:text-[30px] font-bold uppercase">
              What are you looking for?
            </h1>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 h-[450px] mt-[30px]">
            
            <Link
              to="/hospitals-list"
              className="box1 cursor-pointer col-span-2 ease-in-out duration-300"
            >
              <div>
                <button className="w-[120px] shadow-[inset_0px_1px_48px_0px_#1a202c] py-2 font-bold">
                  Hospitals
                </button>
              </div>
            </Link>

            <Link
              to="/hotels-list"
              className="box2 cursor-pointer ease-in-out duration-300"
            >
              <div>
                <button className="w-[120px] shadow-[inset_0px_1px_48px_0px_#1a202c] py-2 font-bold">
                  Hostels
                </button>
              </div>
            </Link>

            <Link
              to="/restaurants-list"
              className="box3 cursor-pointer ease-in-out duration-300"
            >
              <div>
                <button className="w-[120px] shadow-[inset_0px_1px_48px_0px_#1a202c] py-2 font-bold">
                  Restaurants
                </button>
              </div>
            </Link>

            <Link
              to="/colleges-list"
              className="box4 cursor-pointer col-span-2 ease-in-out duration-300"
            >
              <div>
                <button className="w-[120px] shadow-[inset_0px_1px_48px_0px_#1a202c] py-2 font-bold">
                  Colleges
                </button>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Goto;
