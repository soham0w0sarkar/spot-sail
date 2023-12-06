import React from 'react'
import logo from "../assets/logo.png"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-data shadow-[inset_0px_20px_20px_10px_#00000024]'>
      <div className='container mt-[50px]'>
        <div className='grid py-[50px] justify-center gap-10 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3'>
          <div className='grid justify-center'>
            <img src={logo} alt="" className='h-[30px]'/>
          </div>
          <div className='grid gap-3 justify-center'>
            <h2 className='text-[17px] font-bold'>Find: </h2>
            <div className='text-[14px] leading-7 text-gray-400'>
              <p className='cursor-pointer'>Explore</p>
              <p className='cursor-pointer'>Team</p>
              <p className='cursor-pointer'>Privacy & Policy</p>
              <p className='cursor-pointer'>Terms</p>
              <p className='cursor-pointer'>Support</p>
            </div>
          </div>
          <div className='grid justify-center'>
            <h2 className='text-[17px] font-bold'>Stay Connected: </h2>
            <div className='text-[14px] leading-7 text-gray-400'>
              <p className='flex gap-2 items-center cursor-pointer'><FaLinkedinIn />LinkedIn</p>
              <p className='flex gap-2 items-center cursor-pointer'><FaTwitter/>Twitter</p>
              <p className='flex gap-2 items-center cursor-pointer'><FaFacebook/>Facebook</p>
              <p className='flex gap-2 items-center cursor-pointer'><FaInstagram/>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer