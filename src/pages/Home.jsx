import React from "react";
import restaurant from "../assets/restaurant.png";
import college from "../assets/college.jpg";
import hospital from "../assets/hospital.jpg";
import About from "../components/About";
import Goto from "../components/Goto";
import TopRestaurants from "../components/TopRestaurants";
import TopColleges from "../components/TopColleges";
import TopHospitals from "../components/TopHospitals";
import Spotsail from "../components/Spotsail";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home container mt-[60px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] justify-between">
            <div>
              <div className="lg:w-[570px]">
                <p className="italic">#findyourspotwithSpotSail</p>
                <h1 className=" text-[35px] mb-[10px] leading-[40px] text-gray-100 font-[700] md:text-[50px] md:leading-[55px]">
                  <span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Find</span> open seats effortlessly
                </h1>
                <p className="text--para mt-[20px]">
                  Discover available spaces effortlessly with SpotSail,
                  offering real-time updates on vacant seats in restaurants,
                  colleges, and hospitals, ensuring you always find the perfect
                  spot.
                </p>
                <div className="flex gap-4 mt-[30px]">
                  <button className="border py-2 rounded w-[170px]">GitHub</button>
                  <Link to='/list-your-industry'><button className="border py-2 rounded w-[170px]">List your industry</button></Link>
                </div>
              </div>

              <div className="mt-[30px] lg:mt-[120px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
                    1000+
                  </h2>
                  <span className="w-[100px] h-2 bg-purple-600 rounded-full block mt-[-14px]"></span>
                  <p className="text--para">Satisfied Users</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-blue-600 rounded-full block mt-[-14px]"></span>
                  <p className="text--para">Accurate Data</p>
                </div>
              </div>
            </div>

            <div className="flex relative justify-end gap-[15px]">
              <span className="absolute bottom-[225px] opacity-30 left-[140px] blur rounded-full z-[-1]  shadow-[20px_20px_100px_200px_#c6f6d5]"></span>
              <div className="mb-[1px]">
                <img className="w-full rounded mb-[15px]" src={restaurant} alt="" />
                <img className="w-full rounded" src={hospital} alt="" />
              </div>
              <div>
                <img className="w-[680px] rounded" src={college} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Spotsail/>
      </section>

      <section className="container">
        <Goto/>
      </section>

      <div className="container">
        <TopRestaurants/>
      </div>

      <div className="container">
        <TopColleges/>
      </div>

      <div className="container">
        <TopHospitals/>
      </div>

      <section className="container">
        <About/>
      </section>

    </>
  );
};

export default Home;
