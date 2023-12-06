import React from 'react'
import rest from "../assets/rest.jpg";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const RestaurantsList = () => {
  return (
    <div className='mt-[100px]'>
      <div className="container flex justify-center gap-1 mb-[100px]">
        <input type="search" placeholder="Search Hospitals" className=" bg-gray-400/30 outline-none w-[500px] px-[20px] py-[8px] rounded-l-[40px]"/>
        <button className="px-[25px] text-[18px] font-semibold py-[8px] rounded-r-[40px] bg-black/50">Search</button>
      </div>
      <div className="container">
        <div>
          <div className="grid container grid-cols-1 gap-11 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          <div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div><div className="rounded-t-[10px] shadow-[inset_0px_0px_20px_10px_#00000024] cursor-pointer">
              <div>
                <img src={rest} alt="" className="rounded-t-[10px]" />
              </div>
              <div className="p-3">
                <div className="border-b-[1px] border-dashed border-gray-600">
                  <h4 className="text-[16px] flex items-center justify-between leading-[30px] font-semibold">
                    Nine to Eleven
                    <FaHeart className="text-[11px] text-red-500" />
                  </h4>
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[10px]">North Indian • Chinese</p>
                    <p className="flex items-center text-[9px] gap-1 bg-green-700 px-[5px] py-[2px] rounded">
                      4.3
                      <FaStar className="text-[9px]" />
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] mt-[8px]">
                  <p>Available Tables :</p>
                  <p className="bg-indigo-700 p-[5px] rounded">23</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantsList