import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import rest from "../assets/col3.jpg";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopColleges = () => {
  return (
    <div className="container mb-[50px]">
      <div className="flex">
        <h2 className="text-[17px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[18px] font-semibold mb-[12px]">
          Top Colleges Near You :
        </h2>
      </div>

      <div>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            435: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            650: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            840: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1124: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <Link to="/college/1">
              <div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
                <div>
                  <img src={rest} alt="" className="rounded-t-[10px]" />
                </div>
                <div className="p-3">
                  <div className="border-b-[1px] border-dashed border-gray-600">
                    <h4 className="text-[16px] flex items-center justify-between leading-[20px] mb-[15px] font-semibold">
                      JSS Academy Of Technical Education
                      <FaHeart className="text-[15px] text-red-500" />
                    </h4>
                    <div className="flex items-center justify-between mb-[10px]">
                      <p className="text-[10px]">Noida • Uttar Pradesh</p>
                      <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                        UGC
                        {/* <FaStar className="text-[9px]" /> */}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] mt-[8px]">
                    <p>Vacant Seats :</p>
                    <p className="bg-indigo-700 p-[5px] rounded">153</p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TopColleges;
